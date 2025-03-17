import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          onChange={handleChange}
        />
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
