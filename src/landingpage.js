import React from 'react'
import './landingpage.css'
import Signup from './components/signup'
import Sliders from './components/slider'



export default function Landingpage() {
    

    return (
        <>
            <div
                className='landing-page'>
                <div
                    className='slide'>
                    <Sliders/>
                </div>

                <div
                    className='form-section'>
                    <Signup/>
                    <img src='./appLink.png' alt='' />
                </div>
            </div>
        </>
    )
}