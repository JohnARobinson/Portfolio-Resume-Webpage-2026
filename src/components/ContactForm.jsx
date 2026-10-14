import { useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        e.target.reset(); // clear the form after success
      })
      .catch(() => {
        setStatus("error");
      });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label>Name</label>
          <input
            type="text"
            name="from_name" /* must match {{from_name}} in EmailJS template */
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="reply_to" /* must match {{reply_to}} in EmailJS template */
            placeholder="you@email.com"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label>Message</label>
        <textarea
          name="message" /* must match {{message}} in EmailJS template */
          rows="5"
          placeholder="Tell me about your project..."
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "sending" || status === "sent"}
      >
        {status === "idle" && "Send message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent ✓"}
        {status === "error" && "Something went wrong — try again"}
      </button>
    </form>
  );
}

export default ContactForm;
