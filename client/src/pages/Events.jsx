import React, { useEffect, useState } from 'react'

import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'

import '../css/Events.css'

const Events = () => {
  const [events, setEvents] = useState([])
  const [locations, setLocations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await EventsAPI.getAllEvents()
        const locationsData = await LocationsAPI.getAllLocations()

        setEvents(eventsData)
        setLocations(locationsData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const filteredEvents =
    selectedLocation === 'all'
      ? events
      : events.filter((event) => event.location_id === parseInt(selectedLocation))

  return (
    <section className='events-page'>
      <div className='event-filter'>
        <select
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
        >
          <option value='all'>See events at...</option>

          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>

        <button onClick={() => setSelectedLocation('all')}>
          Show All Events
        </button>
      </div>

      <div className='events-container'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Event key={event.id} event={event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </section>
  )
}

export default Events