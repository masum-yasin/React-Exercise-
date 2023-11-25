import React from 'react';
// import Player from '../Player/Player';
import './Playerlist.css'


const Playerlist = () => {
    const players = [
        {id:1,name:"Lionel Messi",position:"Forward", club:'Barcelona', country:'Argentina',transferredvalue:"$1200000", imageUrl:'image/messi.jpg' },
        {id:2,name:"Cristiano Ronaldo",position:"Forward", club:'Real Madrid', country:'Portugal',transferredvalue:"$850000", imageUrl:"image/rolando.jpg" },
        {id:3,name:"Edinson Cavani",position:"Midfielder", club:'PSG', country:'Colombia',transferredvalue:"$6300000", imageUrl:"image/images (4).jpg" },
        {id:4,name:"Neymar",position:"Forward", club:'Santos', country:'Brazil',transferredvalue:"$600000", imageUrl:"image/naymar.jpg" },
        {id:5,name:"Landon Donovan",position:"Forward", club:'Barcelona', country:'Netherland',transferredvalue:"$1200000", imageUrl:"image/images (5).jpg" },
        {id:6,name:"Willian",position:"midfilers", club:'Barcelona', country:'England',transferredvalue:"$600000", imageUrl:"image/images (2).jpg" },
        {id:7,name:"Javier Zanetti",position:"Defender/midfielder", club:'Internazionale', country:'Argintina',transferredvalue:"$500000", imageUrl:"image/images (5).jpg" },
        {id:8,name:"AMBPPA",position:"Forward", club:'Ivory Coast', country:'Argentina',transferredvalue:"$800000", imageUrl:"image/ambappa.jpg" },
        {id:9,name:"sadio mane",position:"Forward", club:'Bayern Munich', country:'Germany',transferredvalue:"$4200000", imageUrl:"image/sadimane.jpg" },
        {id:10,name:"Christian Eriksen",position:"Forward", club:'PSG', country:'Argentina',transferredvalue:"$1200000", imageUrl:"image/images (1).jpg" },
        {id:11,name:"Arjen Robben",position:"Forward", club:'Barcelona', country:'Portugal',transferredvalue:"$1200000", imageUrl:"image/images (2).jpg" },
        {id:12,name:"Diego Forlan",position:"Forward", club:'Internacional', country:'Argentina',transferredvalue:"$1200000", imageUrl:"image/images (3).jpg" },
    ]
    return (
        <div  className='footballer'>
                        {
                    players.map(player => (
                   
                    <div key={player.id} className='footballer2'>
                         <img src={player.imageUrl} alt=""  />
                         <h4>Name:{player.name}</h4>
                       <p>position:{player.position}</p>
                        <p>Club:{player.club}</p>
                        <p>transferredvalue:{player.transferredvalue}</p>
                       
                    </div>
                ))
            }
          
        </div>
    );
};

export default Playerlist;