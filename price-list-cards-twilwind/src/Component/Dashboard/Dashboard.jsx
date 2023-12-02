import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const studentData = [
    { id: 1,
         name: "John", 
         english: 85, 
         math: 90, bangla:
          78 },
    { id: 2,
         name: "Alice",
          english: 92,
           math: 88,
           bangla: 95 },
    { id: 3,
         name: "Bob", 
          english: 78,
           math: 85,
            bangla: 90 },
    { id: 4,
         name: "Emma",
          english: 95,
           math: 93,
            bangla: 88 },
    { id: 5,
         name: "David",
          english: 87,
           math: 89,
            bangla: 92 },
    { id: 6,
         name: "Olivia",
          english: 91,
           math: 94,
            bangla: 82 },
    { id: 7,
         name: "Michael",
          english: 79,
           math: 87,
            bangla: 96 },
    { id: 8, 
         name: "Sophia",
          english: 88,
           math: 91, 
            bangla: 85 },
    { id: 9, 
        name: "James", 
         english: 94,
          math: 92,
           bangla: 89 },
    { id: 10,
         name: "Ella",
          english: 90,
           math: 86,
            bangla: 94 },
    { id: 11,
         name: "William",
          english: 83,
           math: 78,
            bangla: 91 },
    { id: 12,
         name: "Ava", 
         english: 89,
          math: 95,
           bangla: 83 }
  ];
  
 
  

const Dashboard = () => {
    return (
        <div>
           <LineChart 
           width={1000}
           height={300}
           data={studentData}
         
            >
                <Line stroke="#82ca9d" dataKey={"english"}></Line>
                <Line dataKey={"math"}></Line>
                <Line stroke="#8884d8" dataKey={"bangla"}></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart> 
        </div>
    );
};

export default Dashboard;