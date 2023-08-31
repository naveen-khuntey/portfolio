import { Weather } from '../APIs/WeatherAPI'
import { TimeStatus } from '../APIs/TimeStatusAPI'

export const Home = () => {
   return (
      <div className="home">
         <h1>Hey, I'm Naveen!</h1>
         <p>
            B.Tech CSE Pre-Final year {''}
            <a
               href="https://www.nitrkl.ac.in/"
               aria-label="nitrkl"
               target="_blank"
               rel="noopener noreferrer"
            >
               @NIT Rourkela
            </a>
            , He/Him 
         </p>
         <br />
         <div>
            <TimeStatus /> | <Weather /> 
         </div>
      </div>
   )
}
