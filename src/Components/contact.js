import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or perform some action)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="container">
      <div className="contact_card">
        <div className="singup" id="contact">
          Let's Connect
        </div>
        <div className="inputBox1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="user">Name</span>
        </div>

        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>Email</span>
        </div>

        <div className="inputBox">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <span>Message</span>
        </div>

        <button className="enter" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
