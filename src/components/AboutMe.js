import { Tech } from './Technologies'
import { useState, useEffect } from 'react'

export const AboutMe = () => {
   const BIRTHDATE = new Date('2002-07-10')
   const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365
   const [ageInPoints, setAgeInPoints] = useState(
      (new Date() - BIRTHDATE) / MS_PER_YEAR
   )

   useEffect(() => {
      const intervalId = setInterval(() => {
         setAgeInPoints((new Date() - BIRTHDATE) / MS_PER_YEAR)
      }, 10)
      return () => clearInterval(intervalId)
   })
   const ageInYearsFormatted = ageInPoints.toFixed(9)

   return (
      <div className="about-me" id="about-me">
         <h2>Hi! I'm Naveen Khuntey ✌️</h2>
         <p>
            I'm a {ageInYearsFormatted} y/o B.Tech pre-final and developer based in {}
            <a
               href="https://hi.wikipedia.org/wiki/India"
               aria-label="india"
               target="_blank"
               rel="noopener noreferrer"
            >
               Bharat
            </a>
            . I started coding when I joined college and have
            gained expertise in creating web application using{' '}
            <a
               href="https://react.dev/"
               aria-label="react.js"
               target="_blank"
               rel="noopener noreferrer"
            >
               React.js
            </a>{' '}
            . Along the way, I've learned various programming languages.
         </p>
         <br />
         <h2>What Do I Do 💭</h2>
         <p>
            I am passionate about everything related to technology, including
            designing and developing software, understanding the various
            components of the internet and how they work together, 
            programming, and more. I am constantly
            striving to expand my knowledge in these areas and apply it to gain
            a deeper understanding of the technology that surrounds us.
         </p>
         <br />
         <Tech />
         <br />
      </div>
   )
}
