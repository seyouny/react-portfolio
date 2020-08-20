import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Footer from "../components/footer"

// import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Main extends React.Component {
    render(){
        return (
            <div>
                <Navb/>
        
                <Footer/>
            </div>
            
        );
    }
    
}

export default Main;
