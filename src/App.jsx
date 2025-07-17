import React, { useEffect, useRef, useState } from 'react'

import mercury from "/MercuryImage.webp"
import venus from "/VenusImage.webp"
import earth from "/EarthImage.webp"
import mars from "/MarsImage.webp"
import jupiter from "/JupiterImage.webp"
import saturn from "/SaturnImage.webp"
import uranus from "/UranusImage.webp"
import neptune from "/NeptuneImage.webp"
import video from "/four.mp4"
import "./app.css"
import { motion } from "framer-motion"

const App = () => {
  const data = [
    { id: 1, heading: "Mercury", description: "Mercury is the closest planet to the Sun, and the smallest planet in our solar system. It's only slightly larger than Earth's Moon.", name: "Mercury", image: mercury },
    { id: 2, heading: "Venus", description: "Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.", name: "Venus", image: venus },
    { id: 3, heading: "Earth", description: "Earth – our home planet – is the third planet from the Sun, and the fifth largest planet. It's the only place we know of inhabited by living things.", name: "Earth", image: earth },
    { id: 4, heading: "Mars", description: "Mars is the fourth planet from the Sun, and the seventh largest. It’s the only planet we know of inhabited entirely by robots.", name: "Mars", image: mars },
    { id: 5, heading: "Jupiter", description: "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice as massive as the other planets combined.", name: "Jupiter", image: jupiter },
    { id: 6, heading: "Saturn", description: "Saturn is the sixth planet from the Sun, and the second largest in the solar system. It’s surrounded by beautiful rings.", name: "Saturn", image: saturn },
    { id: 7, heading: "Uranus", description: "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system. It appears to spin sideways.", name: "Uranus", image: uranus },
    { id: 8, heading: "Neptune", description: "Neptune is the eighth, and most distant planet from the Sun. It’s the fourth-largest, and the first planet discovered with math.", name: "Neptune", image: neptune },
  ]

  const [currentMenu, setCurrentMenu] = useState(0);
  const itemRefs = useRef([]);
  const handleClick = (index) => {
    itemRefs.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    setCurrentMenu(index)
  }


  return (
    <div className="container">
      <div className="video">
        <video autoPlay muted loop id="bgVideo">
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <motion.div initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} >
        <div className="sidemenu-container">
          {data.map((d, index) => (
            <div className="sidemenu" key={d.id}>
              <button
                className={`menu ${currentMenu === index ? 'active-menu' : ''}`}
                onClick={() => handleClick(index)}
              >
                <img src={d.image} alt={d.name} />
                <p>{d.name}</p>
              </button>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: +100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
      >
        <div className="carousal-container">
          {data.map((d, index) => (
            <div
              key={d.id}
              className={`carousal ${currentMenu === index ? 'active' : ''}`}
              ref={el => itemRefs.current[index] = el}
              onClick={() => handleClick(index)}
            >
              <img src={d.image} alt={d.name} />
              <div className="image-content">
                <h2>{d.heading}</h2>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

  )
}

export default App
