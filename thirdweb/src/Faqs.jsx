import React from 'react'

export default function Faqs() {
  return (
    <div>
        <h1>Freauently Asked Questions (FAQs)</h1>
        <div className='faqouter'>
            <FaqItem />
        </div>
    </div>
  )
}

function FaqItem(){
    return(
        <div className='faqItems'>
            <h2>What is React?</h2>
            <p>React is a JavaScript library for building user interfaces.</p>
        </div>
    )
}