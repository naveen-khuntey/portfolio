import { GoLinkExternal } from 'react-icons/go'
import  cointracker  from '../images/cointracker.png'
import metaverses from '../images/metaverses.ico'
import sparsh from '../images/sparsh.png'
const ProjectCard = ({
   imgSrc,
   projectName,
   projectLangs,
   projectDescription,
   projectLink,
}) => {
   return (
      <div className="project-card">
         <div className="project-card-img">
            <img src={imgSrc} alt={projectName} width="" height="" />
         </div>
         <div className="project-card-text">
            <h2>
               <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="project link"
               >
                  {projectName} <GoLinkExternal />
               </a>
            </h2>
            <div className="project-lang">
               <p>{projectLangs}</p>
            </div>
            <p>{projectDescription}</p>
         </div>
      </div>
   )
}

export const Projects = () => {
   return (
      <div className="projects" id="projects">
         <h2>Projects 🛠️</h2>
         <p>I've listed some of my projects below 👇</p>
         <div className="project-cards-container">
            <ProjectCard
               imgSrc={metaverses}
               projectName="Metaverses"
               projectLangs="NextJs, TailwindCSS"
               projectDescription="Metaverse is a new thing in the future,where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality."
               projectLink="https://metaversus-dtn1.onrender.com/"
            />
            <ProjectCard
               imgSrc={cointracker}
               projectName="Cointracker"
               projectLangs="Reactjs, TailwindCSS"
               projectDescription="Coin Tracker is a web application that allows you to track the prices of cryptocurrencies in real-time. It also allows you to explore news about bitcoin and other cryptocurrencies."
               projectLink="https://coin-tracker-v1.vercel.app/"
            />
            <ProjectCard
               imgSrc={sparsh}
               projectName="Sparsh"
               projectLangs="Node, ReactJs, MongoDB"
               projectDescription="Sparsh is healthcare website where you can book appointment with doctors, get your reports, and many more."
               projectLink="https://sparsh-frontend.vercel.app/"
            />
         </div>
      </div>
   )
}
