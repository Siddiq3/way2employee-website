/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';
export const Internship = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    // using Async Await
    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://api.way2employee.com/internships/");
            const formattedData = res.data.map(job => ({
                ...job,
                date: formatISODate(job.date) // Format the date
            }));
            setMyData(formattedData);

        } catch (error) {
            setIsError(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {
        getMyPostData();
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
    return (
        <>


            {isError !== "" && <h2>{isError}</h2>}

            <div className="grid">
                {myData.map((job) => {
                    //  const { body, id, title } = job;
                    return (
                        <div key={job.jobtittle} className="card">
                            <img src={job.companylogo} alt="API Image" />
                            <h2>{job.jobtitle}</h2>
                            <h4 >{job.date}</h4>
                            <Link to={`/internships/${job._id}`} ><button>
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
   ) 
};
*/



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';

export const Internship = () => {
    const [myData, setMyData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6); // Set the number of items per page
    const [isError, setIsError] = useState("");

    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://api.way2employee.com/internships/");
            const formattedData = res.data.map(job => ({
                ...job,
                date: formatISODate(job.date)
            }));
            setMyData(formattedData);

        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getMyPostData();
    }, []);

    function formatISODate(isoDateString) {
        // Function remains unchanged
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = myData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {isError !== "" && <h2>{isError}</h2>}

            <div className="grid">
                {currentItems.map((job) => (
                    <div key={job.jobtittle} className="card">
                        <img src={job.companylogo} alt="API Image" />
                        <h2>{job.jobtitle}</h2>
                        <h4>{job.date}</h4>
                        <Link to={`/internships/${job.jobname}`}>
                            <button>Apply now</button>
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

