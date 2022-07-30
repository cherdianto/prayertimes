import React from 'react'

function TimeComponent(props) {
    const prayer = props.prayer;
    const time = props.time;

  return (
    <React.Fragment>
        <div className="time-container d-flex flex-column justify-content-center align-items-center">
            <p className='fs-5 fw-bold'>{prayer}</p>
            <p className='fs-4'>{time}</p>
        </div>
    </React.Fragment>
  )
}

export default TimeComponent