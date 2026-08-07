import './FAQ.css'
import AccordionItem from '../AccordionItem/AccordionItem'

function FAQ({ faq }) {

    return (
        <section className="faq">

            <div className="faq-container">

                <div className="faq-image">

                    <img
                        src={faq.imageUrl}
                        alt="Frequently Asked Questions"
                    />

                </div>

                <div className="faq-content">

                    <h6 className="faq-subtitle">
                        {faq.subtitle}
                    </h6>

                    <h2 className="faq-title">
                        {faq.title}
                    </h2>

                    <div className="faq-list">

                        {faq.qas.map(item => (
                            <AccordionItem
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default FAQ