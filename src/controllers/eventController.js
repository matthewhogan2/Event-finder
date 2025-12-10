const Event = require('../models/Event');
const User = require('../models/User');


// Get all events (public)
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Save event to user's savedEvents
exports.saveEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    req.user.savedEvents.push(event._id);
    await req.user.save();

    res.json({ message: 'Event saved', savedEvents: req.user.savedEvents });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Remove saved event
exports.removeEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    req.user.savedEvents = req.user.savedEvents.filter(
      id => id.toString() !== eventId
    );
    await req.user.save();

    res.json({ message: 'Event removed', savedEvents: req.user.savedEvents });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// List saved events
exports.getSavedEvents = async (req, res) => {
  try {
    const userWithEvents = await User.findById(req.user._id)
      .populate('savedEvents');

    res.json(userWithEvents.savedEvents);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Search events by keyword, category, date
exports.searchEvents = async (req, res) => {
  try {
    const { keyword, category, date } = req.query;

    let query = {};

    // Keyword match (non-exact match)
    if (keyword) {
      query.title = { $regex: keyword, $options: 'i' };
    }

    // Category match
    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }

    // Date match
    if (date) {
      query.date = date;
    }

    const results = await Event.find(query);

    res.json(results);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

