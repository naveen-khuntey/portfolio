import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa'

export const Footer = () => {
   return (
      <footer>
         <div className="left">
            <p>
               <a
                  href="https://github.com/naveen-khuntey"
                  aria-label="github"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Naveen Khuntey
               </a>{' '}
               | &copy; {new Date().getFullYear()}
            </p>
         </div>
         <div className="right">
            <a
               href="https://github.com/naveen-khuntey"
               aria-label="github"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaGithub />
            </a>
            <a
               href="https://www.instagram.com/_xan__425/"
               aria-label="instagram"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaInstagram />
            </a>
            <a
               href="https://www.linkedin.com/in/naveen-khuntey/"
               aria-label="linkedin"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedin />
            </a>
            <a
               href="https://discord.gg/GBFy2sP2"
               aria-label="discord"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaDiscord />
            </a>
         </div>
      </footer>
   )
}
