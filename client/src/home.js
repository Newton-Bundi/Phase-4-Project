import React, {useState,useEffect} from 'react'
import './home.css'

function Home(){

    return(
        <div className='header'>
            
            <div style={{
                minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
                }}>
                <h1>Nisaidie</h1>
                <p id='suc'
                style={{
                    width: "50%",
                    fontWeight: 500
                }}
                >Nisaidie is suicide prevention app designed to provide a supportive and accessible platform for individuals in crisis. It aims to promote mental health awareness, offer resources, and foster a sense of community and hope.</p>
            </div>


            <div >
             <h3>Tell us what you are going through</h3>
                        
        </div>
        </div>
    );
}

export default Home;