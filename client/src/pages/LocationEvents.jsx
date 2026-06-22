import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import getPublicImagePath from '../utils/getPublicImagePath'
import '../css/LocationEvents.css'

const LocationEvents = ({ id }) => {
  const [location, setLocation] = useState(null)
  const [events, setEvents] = useState([])
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationData = await LocationsAPI.getLocationById(id)
        const eventsData = await EventsAPI.getEventsByLocationId(id)

        setLocation(locationData)
        setEvents(eventsData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [id])

  useEffect(() => {
    setImageError(false)
  }, [location?.image])

  if (!location) {
    return <p>Loading...</p>
  }

  const locationImagePath = getPublicImagePath(location.image)
  const showLocationImage = locationImagePath && !imageError

  return (
    <div className='location-events'>
      <header>
        {showLocationImage ? (
          <div className='location-image'>
            <img
              src={locationImagePath}
              alt={location.name}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className='location-image-placeholder'>
            <span>{location.name}</span>
          </div>
        )}

        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              event={event}
            />
          ))
        ) : (
          <h2>
            <i className='fa-regular fa-calendar-xmark fa-shake'></i>{' '}
            No events scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  )
}

export default LocationEvents
