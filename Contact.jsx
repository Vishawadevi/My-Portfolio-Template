import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br/>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br/>

        <textarea name="message" placeholder="Message" onChange={handleChange} required /><br/>
        
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
