const express = require('express');
const router = express.Router();
const { searchEvents } = require('../controllers/eventController');
const auth = require('../middleware/authMiddleware');
const {
  getAllEvents,
  saveEvent,
  removeEvent,
  getSavedEvents
} = require('../controllers/eventController');

// Public routes
router.get('/', getAllEvents);

// Public search
router.get('/search', searchEvents);


// Protected routes
router.post('/save', auth, saveEvent);
router.delete('/remove/:eventId', auth, removeEvent);
router.get('/saved', auth, getSavedEvents);

module.exports = router;
