import React from 'react';
import heart from "./heart.jpeg";
import heart2 from "./heart2.png";
import heart3 from "./heart3.jpeg";
import heart4 from "./heart4.png";
import heart5 from "./heart5.jpeg";
import heart12 from "./heart12.png";
import heart13 from "./heart13.png";
import heart14 from "./heart14.jpeg";
import heart15 from "./heart15.png";
import heart16 from "./heart16.jpeg";
import heart17 from "./heart17.jpeg";
import heart18 from "./heart18.jpeg";
import heart19 from "./heart19.jpeg";
import heart20 from "./heart20.jpeg";
import heart21 from "./heart21.jpeg";

const Hearts = () => {

    const images = [heart , heart2, heart3, heart4, heart5, heart12, heart13, heart14,
    heart15, heart16, heart17, heart18, heart19, heart20, heart21]    

    const getRandomInt= (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const generator = (img, letter, num) => {
        let heartList = happyGenerator(img, num)
        return heartList.map((obj, i) => {
            console.log(obj)
            return <img className="heart" id={letter + i+1} style={{ gridArea: letter + (i+1), animationDelay: (Math.random() * Math.floor(3)) + "s"}}  src={obj} alt="heart" key={i} />
        })

    }
    
    const happyGenerator = (arr, length) => {
        const newArr = [];
        
        for(let i = 0; i < length; i++){
            newArr.push(arr[getRandomInt(arr.length)])
        }
        return newArr
    }


    return (
        <>
            <div className="happy-container">
                {generator(images, 'a', 60)}                
            </div>
            <div className="valentine-container">
                {generator(images, 'v', 129)} 
            </div>
            <div className="day-container">
                {generator(images, 'd', 31)}
            </div>
        </>
    )
}

export default Hearts;