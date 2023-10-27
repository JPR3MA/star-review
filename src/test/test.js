import './App.css';
import React from "react";
import { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

function App() {
  return <StarRating />;
}

const StarRating = () => {
  // CODE HERE

  const starIds = [1, 2, 3, 4, 5];
  const [hovered, setHovered] = useState(0);
  const [click, setClick] = useState(0);
  const [clicked, setClicked] = useState(0)

  const getImg = (id) => {
    return hovered >= id || click >= id ? FULL_STAR : EMPTY_STAR
  }

  /*
  const [isFullStar, setIsFullStar] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  })
  
  const [isClicked, setIsClicked] = useState({
    1: isFullStar[1],
    2: isFullStar[2],
    3: isFullStar[3],
    4: isFullStar[4],
    5: isFullStar[5],
    6: isFullStar[6]
  })

  function star(number) {
    setInterval(() => {
      if (document.readyState === 'complete') {
        document.getElementById(`star${number}`).addEventListener(
          'mouseover',
          function () {
            if (number === 1) {
              setIsFullStar({
                1: true,
                2: false,
                3: false,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 2) {
              setIsFullStar({
                1: true,
                2: true,
                3: false,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 3) {
              setIsFullStar({
                1: true,
                2: true,
                3: true,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 4) {
              setIsFullStar({
                1: true,
                2: true,
                3: true,
                4: true,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 5) {
              setIsFullStar({
                1: true,
                2: true,
                3: true,
                4: true,
                5: true,
                6: isClicked[6]
              })
            }
          }
        )
        document.getElementById(`star${number}`).addEventListener(
          'click',
          function () {
            setIsClicked({
              1: isFullStar[1],
              2: isFullStar[2],
              3: isFullStar[3],
              4: isFullStar[4],
              5: isFullStar[5],
              6: true
            })
            if (number === 1) {
              setIsFullStar({
                1: true,
                2: false,
                3: false,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 2) {
              setIsFullStar({
                1: true,
                2: true,
                3: false,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 3) {
              setIsFullStar({
                1: true,
                2: true,
                3: true,
                4: false,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 4) {
              setIsFullStar({
                1: true,
                2: true,
                3: true,
                4: true,
                5: false,
                6: isClicked[6]
              })
            } else if (number === 5) {
              setIsFullStar({
                1: isClicked[1],
                2: isClicked[2],
                3: isClicked[3],
                4: isClicked[4],
                5: isClicked[5],
                6: isClicked[6]
              })
            }
          }
        )
        document.getElementById(`star${number}`).addEventListener(
          'mouseout',
          function () {
            if (
              document.getElementById(`star1`).matches(':hover') ||
              document.getElementById(`star2`).matches(':hover') ||
              document.getElementById(`star3`).matches(':hover') ||
              document.getElementById(`star4`).matches(':hover') ||
              document.getElementById(`star5`).matches(':hover')
            ) {} else {
              setIsFullStar({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: isClicked[6]
              })
            }
          }
        )
      }
    }, 10);
    
    return (EMPTY_STAR)
  }
  
  if (document.readyState === 'complete') {
    if (isFullStar[1]) {
      document.getElementById(`star1`).src = FULL_STAR
    } else {
      document.getElementById(`star1`).src = EMPTY_STAR
    }
    if (isFullStar[2]) {
      document.getElementById(`star2`).src = FULL_STAR
    } else {
      document.getElementById(`star2`).src = EMPTY_STAR
    }
    if (isFullStar[3]) {
      document.getElementById(`star3`).src = FULL_STAR
    } else {
      document.getElementById(`star3`).src = EMPTY_STAR
    }
    if (isFullStar[4]) {
      document.getElementById(`star4`).src = FULL_STAR
    } else {
      document.getElementById(`star4`).src = EMPTY_STAR
    }
    if (isFullStar[5]) {
      document.getElementById(`star5`).src = FULL_STAR
    } else {
      document.getElementById(`star5`).src = EMPTY_STAR
    }
  }

  */
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      {starIds.map((id) => (
        <img
          id={id}
          src={getImg(id)}
          onMouseEnter={() => {
            setHovered(id);
            if (id < click) setClick(0);
          }}
          alt='Img not found'
          onClick={() => {
            setClick(id);
            setClicked(id);
          }}
          onMouseOut={() => {
            setHovered(0);
            setClick(clicked);
          }}
          width={60}
          height={60}
        />
      ))}
    </div>
    /*
    <div className='star_container'>
      <img
        className='star'
        id='star1'
        src={star(1)}
        alt='Img not found'
      ></img>
      <img
        className='star'
        id='star2'
        src={star(2)}
        alt='Img not found'
      ></img>
      <img
        className='star'
        id='star3'
        src={star(3)}
        alt='Img not found'
      ></img>
      <img
        className='star'
        id='star4'
        src={star(4)}
        alt='Img not found'
      ></img>
      <img
        className='star'
        id='star5'
        src={star(5)}
        alt='Img not found'
      ></img>
    </div>
    */
  )
};

export default App;