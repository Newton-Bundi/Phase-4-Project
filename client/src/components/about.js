import React from 'react';
import '../css/about.css';

function About(){
    
    return(
        <div>
            <h1>Meet the developers behind PET SHOP APP</h1>
            <h3>Who Are We?</h3>
            <p>Pet Shop App is brought to you by a group of aspiring software developers with a desire to offer help to those who want to love something fluffy.</p>
            <div className='about-cards'>
            <div className='individual-card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1vuzW6wb2nju6RlKd2jLZkzihEdySc_qeg&usqp=CAU'
                className='about-img'
                alt='Developer 3'></img>
                <h3>Peris Kingori</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfxl6vkDx7ETp2HN5W_3SJs-fD_33rMFxgA&usqp=CAU'
                className='about-img'
                alt='Developer 4'></img>
                <h3>Newton Bundi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoB9MI5iNDtogDQXCYFNijLtKtWCyz4q97DQ&usqp=CAU'
                className='about-img'
                alt='Developer 1'></img>
                <h3>John Makateto</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div className='individual-card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuZVkfmNVYUG9apjwQ30yxuMXL83usa_Jxg&usqp=CAU'
                className='about-img'
                alt='Developer 2'></img>
                <h3>Eunice</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            </div>
        </div>
    );
}

export default About;