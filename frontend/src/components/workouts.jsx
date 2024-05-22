"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios"
const Workouts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/workouts/');
                if (response.status === 200) {
                    
                }
                setData(response.data)
                // const jsonData = await response.json();
                // setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data ? (
                <div className='bg-red-500'>
                    <h2>Workouts</h2>
                    <ul>
                        {data.map((workout, index) => (
                            <li key={index}>{workout.title}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Workouts;
