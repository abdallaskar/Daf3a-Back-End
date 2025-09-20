# 🎓 Daf3a Backend

> **Daf3a** is a full-featured web platform that connects students with mentors to foster growth through workshops,
>  1:1 sessions, real-time communication, and AI-assisted career guidance.  
> It integrates modern technologies including video meetings, secure payments, and smart recommendations.

🖥️ **Frontend Repo:** [daf3a-frontend](https://github.com/abdallaskar/Daf3a)  
🚀 **Live Demo:** [daf3a.vercel.app](https://daf3a-back-end.onrender.com)  

---

## 👨‍💻 Prepared By (Graduation Project - ITI)

As part of the **Intensive Training Program (ITP)**  
**MERN Stack Web Development Track**  
**Information Technology Institute (ITI), Mansoura Branch**  
📅 March 2025 - July 2025

- Abdallah Mahmoud Ibrahem  
- Abdelrahman Mohamed Rabie  
- Ali Tharwat Hassan  
- Hisham Ahmed Hassan Halhol  
- Momen Mohamed Elganagy  

---

## ⚙️ Tech Stack

- **Node.js** / **Express.js**
- **MongoDB** + **Mongoose**
- **Socket.IO** for real-time chat
- **Stripe** for payments (Connect & Webhooks)
- **Cloudinary** + **Multer** for file/image uploads
- **JWT Auth** + **Google OAuth** + **Passport.js**
- **OpenAI & Gemini** for AI recommendations
- **LiveKit** for video meetings (mentor-student sessions)
- **Nodemailer** for email notifications

---

## 🧩 Key Features

- **User Auth**: JWT, Google Login, Password reset
- **Roles**: Admin, Mentor, Student
- **Mentors**: Availability, profile, Stripe onboarding
- **Students**: Profiles, CV uploads, registered sessions
- **Workshops**: CRUD, paid/free, registration, ratings
- **Bookings**: Create, cancel, Stripe integration
- **Chat**: Group & private chat, real-time messages
- **Reviews**: On mentors and workshops
- **Reports**: Flag users, content, and resolve by admins
- **Admin Dashboard**: Analytics, stats, mentor verification
- **AI**: Smart recommendations using Gemini API
- **Video Meetings**: Powered by LiveKit with tokenized access

---

## 📁 Project Structure

```
backend/
├── app.js                 # Express setup
├── server.js              # HTTP + Socket.IO
├── config/                # DB, Stripe, Cloudinary, OAuth configs
├── controllers/           # All business logic
├── models/                # Mongoose schemas
├── routes/                # Express API routes
├── middlewares/           # Auth, error, file upload, roles
├── services/              # Logic separated from routes/controllers
├── socket/                # Socket.IO events
├── utils/                 # Helpers: AI, email, etc.
├── dev-data/              # Scripts to populate MongoDB
├── uploads/               # Temporary upload directory
├── .vercel/               # Deployment config
└── .env                   # Environment variables
```


---

## 🧪 Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server with nodemon

# Dev Data
node dev-data/import-dev-data.js --import    # Import sample data
node dev-data/import-dev-data.js --delete    # Delete sample data
```

---
