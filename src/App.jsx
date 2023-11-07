import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Internship, Walkdrives, Job, Gjob, InternshipsDetails, WalkDetails, GjobDetails } from "./Components/pages"
import { JobDetails } from "./Components/pages/jobDetails";
import { Footer } from "./Components/Footer";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Job />} />
        <Route path="/internships" element={<Internship />} />
        <Route path="/govtjobs" element={<Gjob />} />
        <Route path="/walkindrives" element={<Walkdrives />} />


        <Route path="/jobs/:_id" element={<JobDetails />} />

        <Route path="/internships/:_id" element={<InternshipsDetails />} />

        <Route path="/walk-in-drives/:_id" element={<WalkDetails />} />

        <Route path="/govt-jobs/:_id" element={<GjobDetails />} />

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