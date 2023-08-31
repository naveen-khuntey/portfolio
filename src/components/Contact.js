import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export function Contact() {
   return (
      <div>
         <p className="go-back-home">
            &larr; <Link to="/">home.</Link>
         </p>
         <h1>Get in touch 📨</h1>
         <p style={{ fontSize: 'larger', color: '#808080' }}>
            Fill out this form and I'll get back to you ASAP!
         </p>
         <ContactForm />
      </div>
   )
}
