import React, {useState,useEffect} from 'react'
import './home.css'
import pic from './logo.png'

function Home(){

    return(
        <div className='header' style={{
            display:'grid',
            gridTemplateColumns:"1fr 1fr"

        }}>
            
            <div className='left-side' style={{
                minHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
                }}>
                <h1>One more friend</h1>
                <h2>Lots more fun</h2>
                <p id='suc'
                style={{
                    width: "75%",
                    fontWeight: 500
                }}
                >Having a pet means you will always have more joy, a new friend, a happy person who will always be with you to have fun.We have over 100+ pets who can always meet you needs.</p>
            </div>
            <div className='right-side'>
                <img src={"https://images.unsplash.com/photo-1583511666372-62fc211f8377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWVsbG93JTIwZG9nfGVufDB8fDB8fHww"} alt="Card" className="pic"/>
            </div>
        </div>
    );
}

export default Home;