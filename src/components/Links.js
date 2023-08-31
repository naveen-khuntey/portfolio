import {
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaSpotify,
} from 'react-icons/fa'

export const Links = () => {
   const links = [
      {
         text: 'GitHub',
         username: ' // @naveen-khuntey',
         icon: <FaGithub />,
         href: 'https://github.com/naveen-khuntey',
      },
      {
         text: 'Instagram',
         username: ' // @_xan__425',
         icon: <FaInstagram />,
         href: 'https://www.instagram.com/_xan__425/',
      },
      {
         text: 'LinkedIn',
         username: ' // @naveen-khuntey',
         icon: <FaLinkedin />,
         href: 'https://www.linkedin.com/in/naveen-khuntey/',
      },
      // {
      //    text: 'Twitter',
      //    username: ' // @pranshu_05',
      //    icon: <FaTwitter />,
      //    href: 'https://twitter.com/pranshu_05',
      // },
      {
         text: 'Spotify',
         username: ' // @Naveen',
         icon: <FaSpotify />,
         href: 'https://open.spotify.com/user/31ybqlm7uxnwvp3rxnggupa5lnhm',
      }
   ]

   return (
      <div className="Links">
         <h1>My Socials</h1>
         <div className="links-cont">
            {links.map((link) => (
               <a
                  className="links-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.text}
                  aria-label={link.text}
               >
                  <div className="links-link-text">
                     {link.text}
                     <span className="username">{link.username}</span>
                  </div>
                  <div className="links-link-icon">{link.icon}</div>
               </a>
            ))}
         </div>
      </div>
   )
}
