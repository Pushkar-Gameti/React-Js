// React aur useState hook import kar rahe hain
import React, { useState } from 'react';

// Questions data import ho raha hai (array of objects)
import { questions } from './Data/questions.jsx';

// Main FAQs component
export default function Faqs() {

    // currentId me hum currently open question ka id store kar rahe hain
    // default me pehle question ka id set kiya hai
    let [currentId, setCurrenId] = useState(questions[0].id);

    // questions array par loop laga kar har question ka FaqItem bana rahe hain
    let items = questions.map((itemsData, i) => {

        // Ye object FaqItem component ko data bhejne ke liye hai
        let itemDetails = {
            itemsData,     // single question + answer
            currentId,     // currently active question id
            setCurrenId    // state change karne ka function
        }

        return (
            // Har question ke liye FaqItem component
            <FaqItem itemDetails={itemDetails} key={i} />
        )
    })

    return (
        <div>
            {/* Heading */}
            <h1>Frequently Asked Questions (FAQs)</h1>

            {/* All FAQ items ka container */}
            <div className='faqouter'>
                {items}
            </div>
        </div>
    )
}

// Single FAQ item component
function FaqItem({ itemDetails }) {

    // Object destructuring for easy use
    let { itemsData, currentId, setCurrenId } = itemDetails;

    return (
        <div className='faqItems'>

            {/* Question par click karne se currentId change hoga */}
            <h2 onClick={() => setCurrenId(itemsData.id)}>
                {itemsData.question}
            </h2>

            {/* 
               Agar currentId aur question id same hai 
               to 'activeAns' class add hogi 
            */}
            <p className={currentId === itemsData.id ? 'activeAns' : ''}>
                {itemsData.answer}
            </p>
        </div>
    )
}
