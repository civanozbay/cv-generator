function CvTemplate({
  name,
  lastName,
  title,
  address,
  email,
  number,
  description,
  school,
  department,
  startDate,
  endDate,
  company,
  position,
  responsibility,
}) {
  return (
    <div id="cvPaper">
      <div className="personal-cv">
        <h2>{name}</h2>
        <h2>{lastName}</h2>
      </div>
      <hr></hr>
      <div className="title">
        <h4>{title}</h4>
      </div>
      <hr></hr>
      <div className="profile-work">
        <div className="profile">
          <div>
            <h4>Profile</h4>
            <span>{description}</span>
          </div>
          <div>
            <h4>Education</h4>

            <span>{school}</span>
            <span>{department}</span>
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
          <div className="contact-cv">
            <h4>Contact</h4>
            <span>{address}</span>
            <span>{email}</span>
            <span>{number}</span>
          </div>
        </div>

        <div className="work">
          <h4>Work Experience</h4>
          <span>{company}</span>
          <span>{position}</span>
          <span>{responsibility}</span>
        </div>
      </div>
    </div>
  );
}

export default CvTemplate;
