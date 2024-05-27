import './index.css'
import React, { useState, useEffect } from 'react'
import PinkCard from '../PinkCard'
import BlueCard from '../BlueCard'
import cardData from '../../data/cardData.json'
import cardLetters from '../../data/cardLetters.json'

const Activity = (props) => {
    const { handlegameover } = props;

    const [imagecards, setimagecards] = useState([]);
    const [lettercards, setlettercards] = useState([]);
    const [flippedcard, setflippedcard] = useState([]);
    const [matchedcards, setmatchedcard] = useState([]);
    const [bananacount, setbananacount] = useState(0);

    useEffect(() => {
        setimagecards(shuffleCards([...cardData]));
        setlettercards(shuffleCards([...cardLetters]));
    }, []);

    useEffect(() => {
        if (flippedcard.length === 2) {
            const [imageid, letterid] = flippedcard;
            if (imagecards[imageid].id === lettercards[letterid].id) {
                setmatchedcard([...matchedcards, imageid, letterid]);
                setbananacount(bananacount + 1);
            }
            setTimeout(() => setflippedcard([]), 1000);
        }
    }, [flippedcard]);

    useEffect(() => {
        if (matchedcards.length === cardData.length) {
            handlegameover(bananacount);
        }
    }, [matchedcards]);

    const handleflippedcard = (index) => {
        if (!flippedcard.includes(index) && flippedcard.length < 2 && !matchedcards.includes(index)) {
            setflippedcard([...flippedcard, index]);
        }
    };

    const shuffleCards = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[newIndex]] = [arr[newIndex], arr[i]];
        }
        return arr;
    };

    const filteredimagecard = imagecards.filter((each) => !matchedcards.includes(each.id));
    const filteredlettercard = lettercards.filter((each) => !matchedcards.includes(each.id));

    return (
        <div className="activitymain">
            <img className="image3" src="C:/Users/Admin/Downloads/Group 156.png" alt="back" />
            <div className="allcards">
                <div className="imagecards">
                    {filteredimagecard.map((card, index) => (
                        <PinkCard
                            key={index}
                            index={index}
                            card={card}
                            isflipped={flippedcard.includes(index)}
                            handlecard={handleflippedcard}
                        />
                    ))}
                </div>
                <div className="lettercards">
                    {filteredlettercard.map((card, index) => (
                        <BlueCard
                            key={index}
                            index={index}
                            card={card}
                            isflipped={flippedcard.includes(index)}
                            handlecard={handleflippedcard}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;