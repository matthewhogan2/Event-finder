require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./models/Event');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to MongoDB. Seeding events...");

  // Sample events
  const events = [
    {
      title: "Local Jazz Night",
      category: "Music",
      date: "2025-12-12",
      location: "Dublin City Centre",
      description: "A relaxing night of live jazz at The Blue Note.",
      image: "https://via.placeholder.com/300x200?text=Jazz+Night"
    },
    {
      title: "Tech Meetup",
      category: "Technology",
      date: "2025-12-15",
      location: "Trinity College Dublin",
      description: "Networking event for software developers and tech enthusiasts.",
      image: "https://via.placeholder.com/300x200?text=Tech+Meetup"
    },
    {
      title: "Outdoor Yoga Session",
      category: "Fitness",
      date: "2025-12-20",
      location: "Phoenix Park",
      description: "Morning yoga session in nature. All skill levels welcome.",
      image: "https://via.placeholder.com/300x200?text=Yoga+Session"
    },
    {
      title: "Art Exhibition",
      category: "Art",
      date: "2025-12-18",
      location: "National Gallery of Ireland",
      description: "Showcasing contemporary artists from across Ireland.",
      image: "https://via.placeholder.com/300x200?text=Art+Exhibition"
    },
    {
      title: "Stand-up Comedy Night",
      category: "Comedy",
      date: "2025-12-22",
      location: "The Laughter Lounge",
      description: "An evening of laughs featuring up-and-coming comedians.",
      image: "https://via.placeholder.com/300x200?text=Comedy+Night"
    }
  ];

  // Wipe existing events (optional)
  await Event.deleteMany({});
  console.log("Old events removed.");

  // Insert new events
  await Event.insertMany(events);
  console.log("New events added!");

  await mongoose.disconnect();
  console.log("Database connection closed.");
}

seed();
