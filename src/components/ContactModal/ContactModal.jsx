import { useState } from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState(null)

    if (!isOpen) {
        return null
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setIsSubmitting(true)
        setResult(null)

        const form = event.target
        const formData = new FormData(form)

        formData.append(
            'access_key',
            '934e9d68-a976-4f1d-9593-b00ff17c2de7'
        )

        formData.append(
            'subject',
            'New Contact Message - AllMoto'
        )

        try {
            const response = await fetch(
                'https://api.web3forms.com/submit',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: formData
                }
            )

            const data = await response.json()

            if (data.success) {
                setResult({
                    success: true,
                    message: 'Thank you! Your message has been sent.'
                })

                form.reset()
            } else {
                setResult({
                    success: false,
                    message: data.message || 'Something went wrong. Please try again.'
                })
            }
        } catch (error) {
            setResult({
                success: false,
                message: 'Unable to send your message. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div
            className="contact-modal-backdrop"
            onMouseDown={onClose}
        >
            <div
                className="contact-modal"
                onMouseDown={(event) => event.stopPropagation()}
            >

                <button
                    type="button"
                    className="contact-modal-close"
                    onClick={onClose}
                    aria-label="Close contact form"
                >
                    ×
                </button>

                <div className="contact-modal-header">
                    <h2>Contact Us</h2>
                    <p>
                        Tell us a little about your project and
                        we'll get back to you.
                    </p>
                </div>

                <div className="contact-email-option">
                    <span>Email us</span>

                    <a href="mailto:amdigitool@gmail.com">
                        amdigitool@gmail.com
                    </a>
                </div>

                <div className="contact-divider">
                    <span>OR SEND A MESSAGE</span>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="contact-form-group">
                        <label htmlFor="contact-name">
                            Name
                        </label>

                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="contact-email">
                            Email
                        </label>

                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="contact-message">
                            Message
                        </label>

                        <textarea
                            id="contact-message"
                            name="message"
                            rows="5"
                            placeholder="Tell us about your project..."
                            required
                        />
                    </div>

                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        tabIndex="-1"
                        autoComplete="off"
                    />

                    {result && (
                        <p
                            className={
                                result.success
                                    ? 'contact-result success'
                                    : 'contact-result error'
                            }
                        >
                            {result.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn-theme contact-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? 'Sending...'
                            : 'Send Message'}
                    </button>

                </form>

            </div>
        </div>
    )
}

export default ContactModal