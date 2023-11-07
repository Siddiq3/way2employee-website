import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Contact.css";
export const GjobDetails = () => {
    const { _id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch job details based on the job ID
        axios.get(`https://api.way2employee.com/govt-jobs/${_id}`) // Replace with your API endpoint

            .then((response) => {
                setJob(response.data);

            })

            .catch((error) => {
                console.error('Error fetching job details:', error);

            });
    }, [_id]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Simulate a 3-second loading delay
    }, []);


    if (!job) {
        return <div className="loading-spinner"></div>;
    }
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        /* <div>
            <h2>Item Details</h2>
            <p>Name: {job.title}</p>
            <p>Description: {job.body}</p>
        </div>
    
    ) */


        <div>
            <h1>Axios Tutorial</h1>



            <div className="container"  >
                <h1 >{job.jobtitle}</h1>
                <h1 >{job.name}</h1>
                <p><strong>{formatDate(job.date)}</strong></p>
                <div>

                    <div style={{
                        margin: '8px 2px',
                        textAlign: 'center',
                        clear: "both",
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}>
                        <a href="https://telegram.me/fresheroffcampu" target="_blank"
                            style={{
                                fontSize: '18px',
                                width: '325px',
                                backgroundColor: "blue",
                                boxShadow: "1px 1px 1px #27A5E7",
                                color: "#FFFFFF",
                                borderRadius: "50px"


                            }}
                        > Join Our Offical  Whatsapp Group</a>
                    </div>
                    <p><strong>{job.jobname}:</strong> {job.jobdetails}</p>
                    <img src={job.companylogo} alt="API Image" />
                    <h5>{job.aboutcompanyH}</h5>
                    <p>
                        {job.aboutcompany}
                    </p>
                    <h5>{job.jobdescH}</h5>
                    <p>
                        {job.jobdesc}
                    </p>

                    <p><strong>{job.jobprofileH}: {job.jobprofile}</strong></p>
                    <p><strong>{job.jobtypeH}: {job.jobtype}</strong></p>
                    <p><strong>{job.jobdegreeH}: {job.jobdegree}</strong></p>
                    <p><strong>{job.jobexpH}: {job.jobexp}</strong></p>
                    <p><strong>{job.joblocH}: {job.jobloc}</strong></p>



                    <h5>{job.educandskillH}:</h5>
                    <ul>
                        {job.educandskill.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    <h5>{job.rolesandresH}:</h5>


                    <p><strong>apply link:   <a href={job.apply} target="_blank"

                    > Click here</a></strong></p>
                </div>
            </div >

        </div>
    );
}
/* <h5>{job.educandskillH}:</h5>
                   <ul>
                       {job.educandskill.map((skill, index) => (
                           <li key={index}>{skill}</li>
                       ))}
                   </ul>

                   <h5>{job.rolesandadresH}:</h5>

                   <ul>
                       {job.rolesandres.map((adres1, index1) => (
                           <li key={index1}>{adres1}</li>
                       ))}
                   </ul> */











