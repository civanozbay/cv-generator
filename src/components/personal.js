import { useState } from "react";
function Personal({
  setName,
  setlastName,
  setAddress,
  setTitle,
  setEmail,
  setNumber,
  setDescription,
}) {
  return (
    <>
      <h1>General Information</h1>
      <form>
        <div className="personal-info">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="contact">
          <input
            type="text"
            name="title"
            placeholder="Position Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            name="address"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            style={{ resize: "none" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="PhoneNumber"
            onChange={(e) => setNumber(e.target.value)}
          />

          <textarea
            type="text"
            name="description"
            placeholder="Description"
            style={{ resize: "none" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}

export default Personal;
