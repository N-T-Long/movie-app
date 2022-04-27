import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import SlideShow from "./component/SlideShow"
import MovieList from "../../components/Movie/MovieList"
Home.propTypes = {
    
};

function Home(props) {
    return (
        <div className='home-page'>
            <SlideShow/>
            <div className="container">
            <MovieList/>

            </div>
            HomePage
        </div>
    );
}

export default Home;