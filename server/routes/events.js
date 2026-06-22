import express from 'express'
import {
  getEvents,
  getEventById,
  getEventsByLocationId
} from '../controllers/events.js'

const router = express.Router()

router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/locations/:locationId/events', getEventsByLocationId)

export default router