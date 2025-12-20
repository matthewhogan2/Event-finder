--Web Development & Deployment Project--


Author: Matthew Hogan
Student Number: C23433226
Name: EventFinder 


Overview:
EventFinder is a full-stack web application developed as part of the Web Development and Deployment (TU857) module.  
The application allows users to browse, search, save, and create local events, with authentication and persistent data storage.

The platform supports both public users (who can browse and search events) and logged in users(who can save events and create their own).

--Features--

- Browse all upcoming events
- Search events by keyword
- Filter events by category
- View event details (date, time, location, description, image)
- Mobile-first responsive design
- Register and log in (JWT authentication via HTTP-only cookies)
- Save events to a personal list (“My Events”)
- Remove saved events
- Create new events with:
  - Title
  - Category
  - Date & time
  - Location
  - Description
  - Image upload
- View how many users have saved an event
- Logout securely


--Event Management--

- Events created by users are linked to their account
- Only the creator can delete their own events
- Seeded events are pre-populated for demonstration purposes

--Technology stack--


- HTML
- CSS
- Bootstrap 5 (mobile-first responsive design)
- Vanilla JavaScript (Fetch API)
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer (image uploads)
- CORS

-- Development Tools--

- Docker (MongoDB)
- Live Server (VS Code)
- Git & GitHub


--Project Structure--

eventfinder/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── seed.js
│ │ └── server.js
│ ├── package.json
│ └── .gitignore
│
├── frontend/
│ ├── index.html
│ ├── login.html
│ ├── register.html
│ ├── my-events.html
│ ├── create-event.html
│ ├── script.js
│ └── styles.css
│
└── README.md

<<<< SET UP INSTRUCTIONS >>>

-- Backend setup--

1. Clone repo: https://github.com/matthewhogan2/Web-Development-Project.git

2. Open terminal and cd backend then enter command npm install

3. Create .env in the backend directory
   Should be like this:
                        PORT=3000
                        MONGO_URI=mongodb://localhost:27017/eventfinder
                        JWT_SECRET=supersecretchangeme
                        COOKIE_NAME=jwt

4. Start MongoDB via Docker Enter: docker run -d -p 27017:27017 --name mongo-local mongo

5. Seed the Database Enter: node src/seed.js

6. Run the backend server by entering this command: npm run dev

--Frontend Setup--

1. Open the frontend from index using live server on vs Code

2. Frontend runs on: http://localhost:5500
   Backend runs on: http://localhost:3000



--Authentication and Security--

-Passwords are hashed using bcrypt
-JWT stored in HTTP-only cookies
-Protected routes require authentication
-Input sanitisation and secure API design
-CORS configured to allow frontend-backend communication





