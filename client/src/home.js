import React, {useState,useEffect} from 'react'
import './home.css'
import pic from './logo.png'

function Home(){

    return(
        <div className='header'>
            
            <div className='left-side' style={{
                minHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
                }}>
                <h1>One more friend</h1>
                <h2>Thousands more fun</h2>
                <p id='suc'
                style={{
                    width: "75%",
                    fontWeight: 500
                }}
                >Having a pet means you will always have more joy, a new friend, a happy person who will always be with you to have fun.We have over 100+ pets who can always meet you needs.</p>
            </div>
            <div className='right-side'>
                <img src={pic} alt="Card" className="pic" height={300} width={300}/>
            </div>
        </div>
    );
}

export default Home;