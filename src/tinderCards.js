import React, {useState} from 'react'
import TinderCard from "react-tinder-card";
import "./tinderCards.css"

function Cards() {
    const [people, setPeople] = useState ([
        {
            name: "Elon Musk",
            url:
             "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },

        {
            name: "Jeff Bezos",
            url:
            "https://ichef.bbci.co.uk/news/800/cpsprodpb/1E3D/production/_110514770_mediaitem110514768.jpg"
        },
        // {
        //     name: "abhishek",
        //     url:"https://instagram.fdel46-1.fna.fbcdn.net/v/t51.2885-15/80672908_161951835076362_7492825789127935446_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fdel46-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=U954HPjK7asAX_olCva&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjIxNjk1NzE4MDY1MTgwMDkwNg%3D%3D.2-ccb7-5&oh=00_AT_KVa_abBFPKCiBpfXVzNYWjsRkRj8R4SIdGFzB9qRqtw&oe=62BD4A34&_nc_sid=30a2ef"

        // },
    ]);
    const swiped =(direction,nameToDelete)=>{
        console.log("removing:"+nameToDelete);
    };
    const outOfFrame =(name)=>{
        console.log(name+"left the screen!");
    };

    return (
    <div className='Cards'>
    <div className="Cards_Load">
        {
            people.map((person) => (
            <TinderCard 
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={()=> outOfFrame(person.name)}
            >
                        <div style={{backgroundImage:`url(${person.url})`}} className="card">
                            <h3 >{person.name}</h3>
                        </div>
            </TinderCard>
        ))}

    </div>
    </div>
  );
}

export default Cards;