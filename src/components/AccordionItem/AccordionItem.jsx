import { useState } from 'react'
import './AccordionItem.css'

function AccordionItem({ question, answer }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="accordion-item">

            <button
                className={`accordion-button ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
            >
                <h5>{question}</h5>

                <span className="accordion-icon">
                    {open ? '−' : '+'}
                </span>
            </button>

            {open && (
                <div className="accordion-content">
                    <p>{answer}</p>
                </div>
            )}

        </div>
    )
}

export default AccordionItem