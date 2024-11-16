import React, { useState } from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const users = [
    { name: "Developer1", id: "712020:95306d42-dd24-439a-a3f3-0a224924b63f" },
    { name: "Developer2", id: "712020:1cd815db-3377-4c71-9e5f-481a2977a5a1" },
    { name: "karthikkr324", id: "712020:5242023d-f521-4ca2-b499-04aa61dc1ab4" },
  ];

const CreateTicket = ({ onSubmit, onClose }) => {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState(null);
  const [priority, setPriority] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (summary && description && assignee && priority) {
      // Jira issue structure
      const issueData = {
          project:"PROJ",
          summary: summary,
          description: description,
          issuetype:"Task",
          assignee:assignee,
          priority:priority
      };

      onSubmit(issueData);  // Call the onSubmit function with the formatted Jira issue data
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-[#f8f7ed] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Create Ticket</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Summary Field */}
        <div className="mb-4">
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task summary"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task description"
            rows={4}
          />
        </div>

        {/* Assignee Dropdown */}
        <div className="mb-4">
          <label htmlFor="assignee" className="block text-sm font-medium text-gray-700 mb-2">Assignee</label>
          <Select
            id="assignee"
            value={assignee}
            onChange={(value) => setAssignee(value)}
            className="w-full"
            placeholder="Select assignee"
          >
            {/* In a real application, replace these with actual user IDs or fetch them dynamically */}
            {users.map((user) => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </div>

        {/* Priority Dropdown */}
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
          <Select
            id="priority"
            value={priority}
            onChange={(value) => setPriority(value)}
            className="w-full"
            placeholder="Select priority"
          >
            <Option value="Low">Low</Option>
            <Option value="Medium">Medium</Option>
            <Option value="High">High</Option>
          </Select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" className="px-6 py-2">
            Submit
          </Button>
          <Button onClick={onClose} className="mr-4 px-6 py-2 ml-5">Close</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
