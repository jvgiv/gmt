'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID_NEWSLETTER;
const publicKeyEnv = process.env.EMAILJS_PUBLIC_KEY;

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(-1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(0);
        emailjs.send(serviceId, templateId, { email }, publicKeyEnv)
            .then((result) => {
                console.log(result);
                setSuccess(1);
                setEmail("");
            }, (error) => {
                console.error(error);
                setSuccess(-1);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter-inner">
        <div className="newsletter-copy reveal">
          <div className="section-label">Newsletter</div>
          <h2 id="newsletter-title" className="newsletter-title">Sign up for our newsletter</h2>
          <p className="newsletter-text">Get event announcements, new coverage drops, and GMT merch updates straight from the course.</p>
        </div>
        <form className="newsletter-form reveal" onSubmit={handleSubmit}>
          <label className="newsletter-label" htmlFor="newsletter-email">Email address</label>
          <div className="newsletter-field">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Subscribe"}
            </button>
          </div>
          <div className="newsletter-status" aria-live="polite">
            {success === 1 && (
              <p className="newsletter-message newsletter-message-success">Subscription successful!</p>
            )}
            {success === -1 && (
              <p className="newsletter-message newsletter-message-error">Subscription failed. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
