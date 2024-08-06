import React from 'react'
import './Getstarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="innerWidth paddings g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive price quotes from us. <br />
                Find your residence soon</span>
                <button className='button'>
                    <a href="mailto:shivamchauhanrajput02@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
