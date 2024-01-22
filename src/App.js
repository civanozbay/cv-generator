import Personal from "./components/personal";
import Education from "./components/education";
import CvTemplate from "./components/cvTemplate";
import WorkExperience from "./components/workExperience";
import "./style.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("FIRST");
  const [lastName, setlastName] = useState("LAST");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibility, setResponsibility] = useState("");

  return (
    <div>
      <Personal
        setName={setName}
        setlastName={setlastName}
        setTitle={setTitle}
        setAddress={setAddress}
        setEmail={setEmail}
        setNumber={setNumber}
        setDescription={setDescription}
      />
      <Education
        setSchool={setSchool}
        setDepartment={setDepartment}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <WorkExperience
        setCompany={setCompany}
        setPosition={setPosition}
        setResponsibility={setResponsibility}
      />
      <CvTemplate
        name={name}
        lastName={lastName}
        title={title}
        address={address}
        email={email}
        number={number}
        description={description}
        school={school}
        department={department}
        startDate={startDate}
        endDate={endDate}
        company={company}
        position={position}
        responsibility={responsibility}
      />
    </div>
  );
}

export default App;
