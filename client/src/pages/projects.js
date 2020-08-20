import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Row from 'react-bootstrap/Row'

// import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Projects extends React.Component {
    projects = [
        {
            title: "Middle Ground",
            image: "./assets/img/middle.png",
            description: " Middle|Ground aims to shine a light on the imbalanced and sometimes inaccurate news we receive through social media which inform our opinions, to promote greater perspective and dialogue about issues of social importance.",
            link: "https://github.com/seyouny/Middleground"
        },
        {
            title: "Work&Balance",
            image: "./assets/img/workbalance.png",
            description: " Work&Balance was a collaborative project that featured the use of GitHub Jobs API and Google Places API. The purpose of this website is to provide a job search engine that also provides a glimpse of what your everyday workday breaks might look like. Recruiters and networkers alike may use this website to identify appropriate places to have meetings.",
            link: "https://github.com/seyouny/JobSearchEateries"
        },
        {
            title: "Book Search",
            image: "./assets/img/middle.png",
            description: "Using React, NodeJS, and Google Book Search API, this is a webpage that searches for and populates specific books. Users are given the option of saving each book. ",
            link: "https://github.com/seyouny/booksearch"
        },
        {
            title: "COD: Stats Dashboard",
            image: "./assets/img/middle.png",
            description: "Emphasizing the competitive nature of multiplayer video games, this dashboard allows Call of Duty users to connect and compare their stats with their friends.",
            link: "https://github.com/seyouny/statsdash"
        },
        {
            title: "Middle Ground",
            image: "./assets/img/middle.png",
            description: " Middle|Ground aims to shine a light on the imbalanced and sometimes inaccurate news we receive through social media which inform our opinions, to promote greater perspective and dialogue about issues of social importance.",
            link: "https://github.com/seyouny/Middleground"
        },
        {
            title: "Middle Ground",
            image: "./assets/img/middle.png",
            description: " Middle|Ground aims to shine a light on the imbalanced and sometimes inaccurate news we receive through social media which inform our opinions, to promote greater perspective and dialogue about issues of social importance.",
            link: "https://github.com/seyouny/Middleground"
        }
    ]
    render(){
        return (
            <div>
                <Navb/>
                <Row>
                {this.projects.map((proj)=>{
                    return <Project
                    title = {proj.title}
                    image = {proj.image}
                    description = {proj.description}
                    link = {proj.link}
                    />
                })}
                </Row>
            </div>
            
        );
    }
    
}

export default Projects;
