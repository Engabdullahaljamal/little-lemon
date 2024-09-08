import { useRef } from 'react';
import './Reservation.css'

function Reservation() {


    return (
        <div className='reservation'>

            <h3 className='title-text-center' >TABLE RESERVATION</h3>
            <form>
                <div className='inputs_container'>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" id="full_name" />
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                </div>
                <div className='inputs_container'>
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" />
                    <label htmlFor="number">Number of guests</label>
                    <input type="number" id="number" />

                </div>

            </form>
            <div className='button_con'><button> Reserve Now  </button></div>
        </div>
    )
}

export default Reservation