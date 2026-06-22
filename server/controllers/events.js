import { pool } from '../config/database.js'

export const getEvents = async (req, res) => {
  try {
    const results = await pool.query(`
      SELECT events.*, locations.name AS location_name
      FROM events
      JOIN locations ON events.location_id = locations.id
      ORDER BY events.date ASC, events.time ASC
    `)

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const getEventById = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const results = await pool.query(`
      SELECT events.*, locations.name AS location_name
      FROM events
      JOIN locations ON events.location_id = locations.id
      WHERE events.id = $1
    `, [id])

    if (results.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const getEventsByLocationId = async (req, res) => {
  try {
    const locationId = parseInt(req.params.locationId)

    const results = await pool.query(`
      SELECT *
      FROM events
      WHERE location_id = $1
      ORDER BY date ASC, time ASC
    `, [locationId])

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}