import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.css'
import Womenplayer from '../Womenplayer/Womenplayer';

const Home = () => {
    const womenplayers = [
        {id:1,name:"Aitana Bonmati",position:"Forward", club:'Barcelona', country:'Argentina',transferredvalue:"$1200000", imageUrl:'image/pexels-laura-rincón-15350183.jpg' },
        {id:2,name:"Lena Oberdorf",position:"Forward", club:'Real Madrid', country:'Portugal',transferredvalue:"$850000", imageUrl:"image/pexels-lucía-montenegro-11914916.jpg" },
        {id:3,name:"Vivianne",position:"Midfielder", club:'PSG', country:'Colombia',transferredvalue:"$6300000", imageUrl:"image/pexels-laura-rincón-15370873.jpg" },
        {id:4,name:"Alexandra Popp",position:"Forward", club:'Santos', country:'Brazil',transferredvalue:"$600000", imageUrl:"image/pexels-tuấn-kiệt-jr-14580033.jpg" },
        {id:5,name:"Caroline Graham",position:"Forward", club:'Barcelona', country:'Netherland',transferredvalue:"$1200000", imageUrl:"image/pexels-vika-glitter-6974849.jpg" },
        {id:6,name:"Keira Walsh",position:"midfilers", club:'Barcelona', country:'England',transferredvalue:"$600000", imageUrl:"image/pexels-lucía-montenegro-11914916.jpg" },
        {id:7,name:"Lucy Bronze",position:"Defender/midfielder", club:'Internazionale', country:'Argintina',transferredvalue:"$500000", imageUrl:"image/pexels-laura-rincón-16477377.jpg" },
        {id:8,name:"Wendie Renard",position:"Forward", club:'Ivory Coast', country:'Argentina',transferredvalue:"$800000", imageUrl:"image/pexels-laura-rincón-15370883.jpg" },
        {id:9,name:"Pernille Harder",position:"Forward", club:'Bayern Munich', country:'Germany',transferredvalue:"$4200000", imageUrl:"image/pexels-laura-rincón-15942428.jpg" },
        {id:10,name:"Catarina Macario",position:"Forward", club:'PSG', country:'Argentina',transferredvalue:"$1200000", imageUrl:"image/pexels-laura-rincón-15838469.jpg" },
        {id:11,name:"Alex Morgan",position:"Forward", club:'Barcelona', country:'Portugal',transferredvalue:"$1200000", imageUrl:"image/pexels-laura-rincón-16038660 (1).jpg" },
        {id:12,name:"Fridolina Rolfo",position:"Forward", club:'Internacional', country:'Argentina',transferredvalue:"$1200000", imageUrl:"image/pexels-césar-pérez-13331926.jpg" },
 ]
    return (
        <div>
    <Header></Header>
    <Outlet></Outlet>
   <div className='femaleplayer'>
    {
 womenplayers.map(female=><div key={female.id}>
    <img src={female.imageUrl} alt="" />
    <h4>Name:{female.name}</h4>
    <p>Position:{female.position}</p>
    <p>Club:{female.club}</p>
    <p>transferredvalue:{female.transferredvalue}</p>
    </div>)
    }
   </div>
   {/* another component data pass use of props */}
   {/* <div>
   {
    womenplayers.map(womenplayer => <Womenplayer key={womenplayer.id} womenplayer={womenplayer}></Womenplayer>)
   }
   </div> */}
      <Footer></Footer>
      
        </div>

    );
};

export default Home;