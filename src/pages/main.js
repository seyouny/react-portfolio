import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Footer from "../components/footer"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'



// import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Main extends React.Component {
    render() {
        return (
            <div>
                <Navb />
                <Jumbotron fluid>
                    <Container>
                        <h1>Hey Stacey here.</h1>
                        <p>
                            Images are currently broken, but all the links are working. Feel free to browse.
    </p>
                    </Container>
                </Jumbotron>
                <Footer />
            </div>

        );
    }

}

export default Main;
