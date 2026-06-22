import React, { useState, useEffect } from 'react'
import getPublicImagePath from '../utils/getPublicImagePath'
import '../css/Event.css'

const Event = ({ event }) => {
  const [imageError, setImageError] = useState(false)
  const eventDateTime = new Date(`${event.date}T${event.time}`)
  const now = new Date()
  const hasPassed = eventDateTime < now
  const eventImagePath = getPublicImagePath(event.image)
  const showEventImage = eventImagePath && !imageError

  useEffect(() => {
    setImageError(false)
  }, [event.image])

  return (
    <article className={hasPassed ? 'event-information past-event' : 'event-information'}>
      {showEventImage ? (
        <img
          src={eventImagePath}
          alt={event.title}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className='event-placeholder'>
          <h3>{event.title}</h3>
        </div>
      )}

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{event.title}</h3>

          {event.description && (
            <p>{event.description}</p>
          )}

          <p>
            <i className='fa-regular fa-calendar fa-bounce'></i>{' '}
            {new Date(event.date).toLocaleDateString()}
            <br />
            {event.time}
          </p>

          {event.location_name && (
            <p>
              <strong>Location:</strong> {event.location_name}
            </p>
          )}

          {hasPassed && (
            <p>This event has passed.</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default Event
