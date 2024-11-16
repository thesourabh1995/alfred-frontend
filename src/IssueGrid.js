// Main component that renders the grid of issue cards
import React from 'react';
import IssueCard from './IssueCard';

const IssueCardGrid = ({issues}) => {
    return (
        <div className="min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-700 mb-6"></h1>
                {issues && issues.length > 0 ? (
                    <div className="flex flex-wrap justify-center">
                        {issues.map((issue) => (
                            <IssueCard key={issue.id} issue={issue} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        No Data
                    </div>
                )}
            </div>
        </div>
    );
};
  
  export default IssueCardGrid;