import About from "../About/About";
import Banner from "../Banner/Banner";
import MeetUs from "../MeetUs/MeetUs";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MeetUs></MeetUs>
        </div>
    );
};

export default Home;