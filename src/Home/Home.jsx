// Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import humanwig3 from '../Human-wig/stockimg3-removebg-preview.png';
function Home() {

  //for changing the content in the stationary box

  const [changeWord, setChangeword] = useState(
    {
      First: "Best",
      Second: "Seller!"
    }
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the state based on the current state
      setChangeword(prevState => ({
        First: prevState.First === "Best" ? "Quality" : "Best",
        Second: prevState.Second === "Seller!" ? "Hairs!" : "Seller!"
      }));
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='Home'>
      <div className="Homesubcontainer">
            
        {/* Content Section */}
        <section className="content-section">
          <div className='content-container'>
            <div>
            
            <h2>Affordable Wigs <br /> and Human Hairs</h2>
            </div>
            <div className='description-para'>
              <p>
                Discover luxury lace front wigs and bundles at affordable prices. Elevate your style with our high-quality, budget-friendly options. 
                Redefine sophistication effortlessly. Your journey to flawless beauty begins here.
              </p>    
            </div>
            <div className="talk-to-sale">
              <button><a href="">Talk to Sales</a></button>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <div className="container">
      <div className="image-container">
        <img src={humanwig3} alt="Human hair" />
        <div className="overlay-text">
          <span>ladies beautified</span>
        </div>
        <div className="bestseller-container">
      <div className="stationary-control">
        <div className="stationary-bg">
           <span className="stationary-text">{changeWord.First}</span>
         <span className='stationary-text'>{changeWord.Second}</span>
        </div>
        </div>
    </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home