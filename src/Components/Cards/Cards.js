import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import database from './Firebase'
import './Cards.css'



function Cards(){
    
    const [people,setPeople] = useState([]);
    //piece of code which runs based on a condition
    useEffect(()=> {
    // this is where the coderuns..
        const unsubscribe = database.collection("people").onSnapshot((snapshot)=>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));
        //This is the clean up
        return () =>{
            unsubscribe(); //It is displaying 
        }
    //this will run ONCE when the component loads, and never again 
    },[people]);

    
    return(
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                >
                    <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default Cards;