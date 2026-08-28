import { useState } from 'react'
import './ContactModal.css'

function ContactModal({ isOpen, onClose }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessPopup, setShowSuccessPopup] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    if (!isOpen) {
        return null
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setIsSubmitting(true)
        setErrorMessage(null)

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
                        Accept: 'application/json'
                    },
                    body: formData
                }
            )

            const data = await response.json()

            if (data.success) {
                form.reset()
                setShowSuccessPopup(true)
            } else {
                setErrorMessage(
                    data.message ||
                    'Something went wrong. Please try again.'
                )
            }
        } catch (error) {
            setErrorMessage(
                'Unable to send your message. Please try again later.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleSuccessOk = () => {
        setShowSuccessPopup(false)
        setErrorMessage(null)
        onClose()
    }

    return (
        <>
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

                        {errorMessage && (
                            <p className="contact-result error">
                                {errorMessage}
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

            {showSuccessPopup && (
                <div className="success-popup-backdrop">
                    <div
                        className="success-popup"
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="success-popup-title"
                    >
                        <div className="success-popup-icon">
                            ✓
                        </div>

                        <h3 id="success-popup-title">
                            Message Sent
                        </h3>

                        <p>
                            Thank you! Your message has been sent
                            successfully. We will get back to you as soon as possible.
                        </p>

                        <button
                            type="button"
                            className="btn-theme success-popup-ok"
                            onClick={handleSuccessOk}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactModal