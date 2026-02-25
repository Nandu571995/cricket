import React, { useState } from 'react';
const Commentary = () => {
  const [commentaries] = useState([
    { id: 1, bowler: 'J Overton', batsman: 'F Zaman', runs: 0, text: 'Short ball outside off stump' },
    { id: 2, bowler: 'J Overton', batsman: 'F Zaman', runs: 2, text: 'Two runs! Zaman plays it to mid-wicket' },
    { id: 3, bowler: 'J Overton', batsman: 'S Farhan', runs: 4, text: 'FOUR! Brilliant timing by Farhan' },
  ]);
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-white">
      <h3 className="text-2xl font-bold mb-4">Live Commentary</h3>
      <div className="space-y-4">
        {commentaries.map((comment) => (
          <div key={comment.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-sm font-semibold text-gray-400">
              {comment.bowler} → {comment.batsman}
            </p>
            <p className="text-lg">{comment.text}</p>
            <p className="text-yellow-400 font-bold">Runs: {comment.runs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Commentary;