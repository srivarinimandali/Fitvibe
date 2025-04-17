
# 🏋️‍♀️ FitVibe — Your Personalized Fitness & Wellness Tracker

![React](https://img.shields.io/badge/Frontend-ReactJS-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Middleware-ExpressJS-lightgrey?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%20%7C%20HTML%20%7C%20CSS-orange?style=for-the-badge&logo=bootstrap)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)
![API](https://img.shields.io/badge/APIs-Weather%2C%20Ticketmaster%2C%20Gmail-blueviolet?style=for-the-badge)

**FitVibe** is a web-based fitness tracking platform designed for students to monitor and manage their day-to-day health and wellness routines. It combines intuitive design, personalized dashboards, and powerful integrations to encourage active and organized lifestyles.

---

## 🚀 Features

### 🔒 User Features
- **Log In / Sign Up**: Secure authentication flow.
- **Dashboard**: Personalized daily activity overview.
- **Fitness Journal**: Record workouts, meals, sleep, and study sessions.
- **Health Tracker**: Analyze activity and habits over time.
- **Weather Tracker**: See local weather using OpenWeather API.
- **Event Discovery**: Browse and search events via Ticketmaster API.
- **Email Services**: Notifications and reminders via Google Mail API.

### 🛠 Admin Features
- **Admin Dashboard**: Central control panel for administrative tasks.
- **User Management**: View, update, or remove user accounts.
- **Create Events**: Organize health or fitness-related events.
- **Event Analytics**: Monitor participation and feedback.

---

## ⚙️ Tech Stack

- **Frontend**: React.js, Bootstrap, HTML5, CSS3
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **APIs Used**:
  - OpenWeather API for weather updates
  - Ticketmaster API for events
  - Google Email API for email services

---

## 📂 Folder Structure

```
/client       → React frontend
/server       → NodeJS backend with Express
/models       → MongoDB schemas
/routes       → Express routes
/config       → API keys and DB config
```

---

## 💻 Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or via Atlas
- APIs: Obtain API keys for OpenWeather, Ticketmaster, Gmail API

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/FitVibe.git
   cd FitVibe
   ```

2. Install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   - Create `.env` file in `/server` with keys for DB, weather, events, Gmail, etc.

4. Start the application:
   ```bash
   cd server && npm start
   cd client && npm start
   ```

---

## 🎯 Goals & Outcomes

- Help students track and balance their health, fitness, and academic priorities.
- Promote holistic wellness by combining physical activity, rest, and learning metrics.
- Enable event-based engagement for community fitness.
- 
---
## 👨‍💻 Developer

**Srivarini Mandali**  
🔗 [GitHub](https://github.com/srivarinimandali)
