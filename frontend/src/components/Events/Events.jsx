import React from 'react'
import styles from '../../styles/styles.js'
import EventCard from "./EventCard.jsx"

const Events = () => {
  return (
    <div className='mt-[30px]'>
        <div className={`${styles.section}`}>
            <div className={`${styles.heading} `}>
                <h1>Popular Events</h1>
                <div className="w-full grid">
                    <EventCard/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Events