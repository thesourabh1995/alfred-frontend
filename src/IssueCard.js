import React from 'react';

// IssueCard component
const IssueCard = ({ issue }) => {
    return (
        <div className="w-64 m-2 bg-[#d2e9f0] shadow-md transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden border-gray-600">
          <div className="p-4 flex flex-col h-full">
            <div className="mb-2 flex justify-between items-center">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs">{issue.key}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${issue.status === 'Done' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                {issue.status}
              </span>
            </div>
            <h3 className="text-sm font-medium mb-2 flex-grow">{issue.summary}</h3>
            <div className="text-xs text-gray-600 mb-2">
              <p>Assignee: {issue.assignee}</p>
              <p>Priority: {issue.priority}</p>
            </div>
            <div className="text-xs text-gray-500 flex justify-between">
              <span>Created: {new Date(issue.created).toLocaleDateString()}</span>
              <span>Updated: {new Date(issue.updated).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
  );
};

export default IssueCard;