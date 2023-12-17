
import Banner from '../Component/Banner/Banner';
import AwesomeFeatures from '../Component/AwesomeFeatures/AwesomeFeatures';
import Course from '../Component/Courese/Course';
import Register from '../Component/Register/Register';
import Serive from '../Component/Service/Serive';
import ExpertTrainer from '../Component/ExpertTrainer/ExpertTrainer';
import UpcommingEvent from '../Component/UpcommingEvent/UpcommingEvent';
import Client from '../Component/Client/Client';

const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <AwesomeFeatures/>
            <Course/>
            <Register></Register>
            <ExpertTrainer></ExpertTrainer>
            <UpcommingEvent></UpcommingEvent>
            <Client></Client>
        
            
        </div>
    );
};

export default Home;