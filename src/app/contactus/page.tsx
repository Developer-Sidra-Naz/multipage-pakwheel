import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-red-50 py-10">
      <h1 className="text-5xl font-bold text-center text-red-600">Contact Us</h1>
      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              className="border rounded w-full py-2 px-3"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              className="border rounded w-full py-2 px-3"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              className="border rounded w-full py-2 px-3"
              id="message"
              placeholder="Your Message"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            className="bg-red-600 text-white py-2 px-4 rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
