import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

export const Job = () => {
    const [myData, setMyData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6); // Set the number of items per page
    const [loading, setLoading] = useState(true);

    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://api.way2employee.com/jobs");
            const formattedData = res.data.map(job => ({
                ...job,
                date: formatISODate(job.date) // Format the date
            }));
            setMyData(formattedData);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    useEffect(() => {
        getMyPostData();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulate a 3-second loading delay
    }, []);

    // Function to format ISO date to human-readable format
    function formatISODate(isoDateString) {
        const date = new Date(isoDateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate current items to display based on currentPage and itemsPerPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = myData.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) {
        return <div className="loading-spinner"></div>;
    }

    return (
        <>
            <div className="grid">
                {currentItems.map((job) => (
                    <div key={job.jobtitle} className="card">
                        <img src={job.companylogo} alt="API Image" />
                        <h3>{job.jobtitle}</h3>
                        <h4>{job.date}</h4>
                        <Link to={`/jobs/${job.jobname}`}>
                            <button>Apply Now</button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(myData.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>

                ))}
            </div>
        </>
    );
};
