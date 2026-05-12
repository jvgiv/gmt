'use client'
import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKeyEnv = process.env.EMAILJS_PUBLIC_KEY;


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [success, setSuccess] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.message === "") {
      Swal.fire({
        title: "GMT Form Incomplete",
        text: "Please fill out all fields",
        icon: 'warning',
        confirmButtonText: "OK"
      })
      return
    }

    emailjs.send(
      serviceId,
      templateId,
      formData,
      { publicKey: publicKeyEnv }
    )
      .then(() => {
        setSuccess(1)
      })
      .catch(() => {
        setSuccess(2)
      });
  }

  return (
    <section className="contact-page">
      <div className="contact-shell reveal">
        <div className="contact-copy">
          <div className="section-label">Contact GMT</div>
          <h1 className="contact-title">
            Let&apos;s build the next <span>great moment</span>.
          </h1>
          <p className="contact-body">
            Reach out about coverage, partnerships, events, or anything else on
            your mind. We&apos;ll get your message and follow up as soon as we can.
          </p>
          <div className="contact-detail-card">
            <div className="contact-detail-label">What to send</div>
            <p>
              Share your name, best email, and a few details about what you need
              from the team.
            </p>
          </div>
        </div>

{success === 0 ? (
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label className="contact-field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" onChange={handleChange} />
          </label>

          <label className="contact-field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" onChange={handleChange} />
          </label>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your event, project, or question."
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn-primary contact-submit">
            Send Message
          </button>
        </form>
    ) : null }

    {success === 1 ? (
        <div className="contact-status contact-status-success">
            <div>
              <span className="contact-status-label">Message Sent</span>
              <h2 className="contact-status-title">Thank you. We&apos;ll be in touch shortly.</h2>
              <p className="contact-status-copy">
                Your note is in. We&apos;ll review it and follow up with you as soon as possible.
              </p>
            </div>
          </div>
    ) : null}

    {success === 2 ? (
        <div className="contact-status contact-status-error">
            <div>
              <span className="contact-status-label">Something Broke</span>
              <h2 className="contact-status-title">There was an error submitting the form.</h2>
              <p className="contact-status-copy">
                Please refresh the page and try again, or email us directly at
                {" "}greatestmediateam@gmail.com.
              </p>
            </div>
          </div>
    ) : null}
      </div>
    </section>
  )
}
