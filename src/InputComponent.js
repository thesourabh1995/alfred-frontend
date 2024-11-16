import React, { useState } from 'react';
import VoiceSearch from './VoiceSearch/VoiceSearch';
import { PlusOutlined } from '@ant-design/icons';

const InputComponent = ({ onSubmit, onChange, openCreateForm }) => {
  const [inputValue, setInputValue] = useState('');
  const [transcription, setTranscription] = useState(''); // State to hold the transcription result

  const handleTranscription = (transcriptionText) => {
    setTranscription(transcriptionText); // Set the transcription result
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue); // Call the parent's handler
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-2 px-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="What's in your mind..."
          className="flex-grow p-3 border border-[#E4C087] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e7bb74] bg-white text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-[#BC7C7C] text-white rounded-lg hover:bg-[#c79393] focus:outline-none focus:ring-2 focus:ring-[#c79393] focus:ring-opacity-50 transition duration-200 ease-in-out"
        >
          Search
        </button>

        <button
          type="button"
          title="Create Ticket"
          onClick={openCreateForm}
          className="p-3 bg-[#BC7C7C] text-white rounded-full hover:bg-[#e7bb74] transition duration-200 ease-in-out flex items-center justify-center"
        >
          <PlusOutlined />
        </button>

        {/* <VoiceSearch onTranscription={handleTranscription} /> */}

        {/* <button
          type="button"
          title="Voice Search"
          className="p-3 text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="24"
            width="24"
            fill="#000000"
          >
            <g>
              <g>
                <path d="M439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9c-78.7,0-142.7-56.9-142.7-126.9
                  c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2,71.5,157.4,163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4
                  c0,11.3,9.1,20.4,20.4,20.4h88c11.3,0,20.4-9.1,20.4-20.4c0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5
                  c91.6-9.3,163.1-80.5,163.1-166.7z"/>
                <path d="M256,323.5c51,0,92.3-41.3,92.3-92.3V103.3c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9
                  C163.7,282.2,205,323.5,256,323.5z M203.7,103.3c0-28.8,23.5-52.3,52.3-52.3s52.3,23.5,52.3,52.3v127.9
                  c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3V103.3z"/>
              </g>
            </g>
          </svg>
        </button> */}

        {/* <button
          type="button"
          className="p-3 text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.67541V3C3 2.44772 2.55228 2 2 2C1.44772 2 1 2.44772 1 3V7C1 8.10457 1.89543 9 3 9H7C7.55229 9 8 8.55229 8 8C8 7.44772 7.55229 7 7 7H4.52186C4.54218 6.97505 4.56157 6.94914 4.57995 6.92229C5.621 5.40094 7.11009 4.22911 8.85191 3.57803C10.9074 2.80968 13.173 2.8196 15.2217 3.6059C17.2704 4.3922 18.9608 5.90061 19.9745 7.8469C20.9881 9.79319 21.2549 12.043 20.7247 14.1724C20.1945 16.3018 18.9039 18.1638 17.0959 19.4075C15.288 20.6513 13.0876 21.1909 10.9094 20.9247C8.73119 20.6586 6.72551 19.605 5.27028 17.9625C4.03713 16.5706 3.27139 14.8374 3.06527 13.0055C3.00352 12.4566 2.55674 12.0079 2.00446 12.0084C1.45217 12.0088 0.995668 12.4579 1.04626 13.0078C1.25994 15.3309 2.2082 17.5356 3.76666 19.2946C5.54703 21.3041 8.00084 22.5931 10.6657 22.9188C13.3306 23.2444 16.0226 22.5842 18.2345 21.0626C20.4464 19.541 22.0254 17.263 22.6741 14.6578C23.3228 12.0526 22.9963 9.30013 21.7562 6.91897C20.5161 4.53782 18.448 2.69239 15.9415 1.73041C13.4351 0.768419 10.6633 0.756291 8.14853 1.69631C6.06062 2.47676 4.26953 3.86881 3 5.67541Z"
              fill="#0F0F0F"
            />
            <path
              d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2344 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.546 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
              fill="#0F0F0F"
            />
          </svg>
        </button> */}
      </form>
    </div>
  );
};

export default InputComponent;
