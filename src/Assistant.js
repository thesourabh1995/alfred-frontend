import './App.css';
import IssueCardGrid from './IssueGrid';
import InputComponent from './InputComponent';
import { Avatar, Spin } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import MarkdownDisplay from './Markdown';
import CreateTicket from './CreateTicket';

const Assistant = () => {
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);
    const url = "http://localhost:9004/assistant/assistant";
    const create_ticket_url = "http://localhost:9004/assistant/create-ticket";

    const handleInputChange = (value) => {
        console.log("On change event");
        setUserInput(value);
    };

    const handleSubmit = () => {
        console.log("On Submit :: ", userInput)
        postData();
    }

    const postData = async () => {
        setLoading(true);
        const requestBody = { user_input: userInput };    
        axios.post(url, requestBody)
            .then((response) => {
                console.log("Response from API:", response.data);
                setResponseData(response.data);
            })
            .catch((error) => {
                console.error("Error posting data:", error);
            }).finally(()=>{
                setLoading(false); 
            }) 
    };

    const Logo = () => (
        <svg className="w-8 h-8 text-[#BC7C7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
    );

    const onSubmitCreateRequest = (formData) => {
        console.log("Create ticket form data :: ", formData);
        setLoading(true); 
        axios.post(create_ticket_url, formData)
            .then((response) => {
                console.log("Response from create ticket API:", response.data);
                setResponseData(response.data);
            })
            .catch((error) => {
                console.error("Error posting data:", error);
            }).finally(()=>{
                setLoading(false); 
            }) 
    }

    const openCreateForm = () => {
        setResponseData({response : {intent:"create", data:[]}})
    }

    const formOnClose = () => {
        setResponseData({response : {intent:"", data:[]}})
    }

    const renderResponseContent = () => {
        if (loading) {
            return (
                <div className="flex justify-center items-center h-full">
                    <Spin size="large" />
                </div>
            );
        }

        console.log("responseData :: ", responseData);
        if (responseData) {
            switch (responseData.response.intent) {
                case 'query':
                    return <IssueCardGrid issues={responseData.response.data}/>;
                case 'analytics':
                    return <MarkdownDisplay content={responseData.response.data} />; // Assuming responseData.content has the markdown text
                case 'update':
                    return <p>{responseData.response.data.message}</p>
                case 'create':
                    return <CreateTicket onSubmit={onSubmitCreateRequest} onClose={formOnClose}/>
                default:
                    return  <div className="text-center text-gray-500">Hello! Alfred is here to assist you. How can I help you today?</div>; // Handle unexpected cases
            }
        }

        return <div className="text-center text-gray-500">Hello! Alfred is here to assist you. How can I help you today?</div>;// Default case when no response is available
    };

    return (
        <div className="h-full">
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Logo />
                <h1 className="text-2xl font-bold text-gray-900">Alfred</h1>
            </div>

            <div className="flex items-center space-x-4">
                <Avatar className="bg-[#BC7C7C] text-white" size="large">
                SM
                </Avatar>
            </div>
            </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col  space-y-5 md:space-y-0 md:space-x-0">
            <div className="md:w-full">
                <div className="bg-white p-6 rounded-lg shadow-md">
                <InputComponent onSubmit={handleSubmit} onChange={handleInputChange} openCreateForm={openCreateForm} />
                </div>
            </div>
            <div className="md:w-full">
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    {renderResponseContent()}
                </div>
            </div>
            </div>
        </main>
        </div>
    );
    }

    export default Assistant;
