/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';
export const Job = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Async Await
    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://api.way2employee.com/jobs/");
            setMyData(res.data);
            date: formatISODate(job.date)
        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
    }, []);

    function formatISODate(isoDateString) {
        const date = new Date(isoDateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    }
    return (
        <>


            {isError !== "" && <h2>{isError}</h2>}

            <div className="grid">
                {myData.map((job) => {



                    return (
                        <div key={job.jobtittle} className="card">
                            <img src={job.companylogo} alt="API Image" />
                            <h2>{job.jobtitle}</h2>
                            <time>{job.date}</time>

                            <Link to={`/jobs/${job._id}`} ><button>
                                apply now
                            </button> </Link>
                        </div>
                    );
                })}
            </div>

        </>
    )

    /*
   const [myData, setMyData] = useState([]);
   const [isError, setIsError] = useState("");

   // using Promises
   useEffect(() => {
       axios
           .get("https://jsonplaceholder.typicode.com/posts")
           .then((response) => setMyData(response.data))
           .catch((error) => setIsError(error.message));
   }, []);

   //plz subscribe to thapa technical
   return (
       <>
           <h1>Axios Tutorial</h1>
           {isError !== "" && <h2>{isError}</h2>}

           <div className="grid">
               {myData.slice(0, 9).map((post) => {
                   const { body, id, title } = post;
                   return (
                       <div key={id} className="card">
                           <h2>{title.slice(0, 15).toUpperCase()}</h2>
                           <p>{body.slice(0, 100)}</p>
                           <Link to={`/jobs/${ id}`}>apply</Link>
                       </div>
                   );
               })}
           </div>
       </>
   ) */


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

export const Job = () => {
    const [myData, setMyData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [loading, setLoading] = useState(true);

    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://api.way2employee.com/jobs");
            const formattedData = res.data.map(job => ({
                ...job,
                date: formatISODate(job.date)
            }));
            setMyData(formattedData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching job details:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getMyPostData();
    }, []);

    const formatISODate = (isoDateString) => {
        const date = new Date(isoDateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <div className="loading-spinner"></div>;
    }

    // Calculate the indexes for the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = myData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <div className="grid">
                {currentItems.map((job) => (
                    <div key={job.jobtitle} className="card">
                        <img src={job.companylogo} alt="API Image" />
                        <h3>{job.jobtitle}</h3>
                        <h4>{job.date}</h4>
                        <Link to={`/jobs/${job.jobname}`}>
                            <button>apply now</button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination buttons */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(myData.length / itemsPerPage) }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};
