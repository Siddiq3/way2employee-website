import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Internship, Walkdrives, Job, Gjob, InternshipsDetails, WalkDetails, GjobDetails } from "./Components/pages"
import { JobDetails } from "./Components/pages/jobDetails";
import { Footer } from "./Components/Footer";
import AboutUs from "./Components/pages/Aboutus";
import Disclimer from "./Components/pages/Disclimer";
import PrivacyPolicy from "./Components/pages/Privacy";
import ContactUs from "./Components/pages/Contact";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Job />} />
        <Route path="/internships" element={<Internship />} />
        <Route path="/govtjobs" element={<Gjob />} />
        <Route path="/walkindrives" element={<Walkdrives />} />


        <Route path="/jobs/:jobname" element={<JobDetails />} />

        <Route path="/internships/:jobname" element={<InternshipsDetails />} />

        <Route path="/walk-in-drives/:jobname" element={<WalkDetails />} />

        <Route path="/govt-jobs/:jobname" element={<GjobDetails />} />



        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/disclimer" element={<Disclimer />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>

      < Footer />
    </div>
  );
}

export default App;
// 
// <Route path="/user/:id"> <User /> </Route>

/*<Routes>
        <Route path="/" element={<Job />} />
        <Route path="/internships" element={<Internship />} />
        <Route path="/govtjobs" element={<Gjob />} />
        <Route path="/walkindrives" element={<Walkdrives />} />


        <Route path="/jobs/:_id" element={<JobDetails />} />

        <Route path="/internships/:_id" element={<InternshipsDetails />} />

        <Route path="/walk-in-drives/:_id" element={<WalkDetails />} />

        <Route path="/govt-jobs/:_id" element={<GjobDetails />} />

      </Routes>*/