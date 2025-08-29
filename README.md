# 💪 FitByte - Fitness Tracking Application

A comprehensive **fitness tracking web application** built with Flask, SQLAlchemy, and modern web technologies. Track your workouts, meals, goals, and progress with an intuitive interface designed for fitness enthusiasts.

![FitByte Banner](https://via.placeholder.com/800x400/3498db/ffffff?text=FitByte+Fitness+Tracker)

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-ORM-orange.svg)](https://sqlalchemy.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 User Management
- **Secure Authentication** — Registration and login with Flask-Login
- **User Profiles** — Comprehensive profile with personal fitness metrics
- **Password Security** — Werkzeug password hashing

### 📊 Dashboard & Analytics
- **Interactive Dashboard** — Real-time overview of fitness statistics
- **Progress Visualization** — Charts and graphs using Chart.js
- **Recent Activity** — Quick access to latest workouts and meals

### 🏋️‍♀️ Workout Tracking
- **Exercise Logging** — Track various workout types (cardio, strength, flexibility)
- **Duration & Calories** — Record workout length and calories burned
- **Workout History** — Complete log of all exercise sessions
- **Performance Metrics** — Track improvements over time

### 🍎 Nutrition Management
- **Meal Logging** — Detailed food intake recording
- **Calorie Counting** — Daily calorie intake monitoring
- **Macronutrient Tracking** — Monitor proteins, carbs, and fats
- **Nutrition Analysis** — Detailed breakdown of nutritional content

### 🎯 Goal Setting
- **SMART Goals** — Create specific, measurable fitness objectives
- **Progress Monitoring** — Visual tracking of goal completion
- **Achievement System** — Milestone celebrations and recognition

### 📏 Health Metrics
- **BMI Calculator** — Body Mass Index calculation and tracking
- **Health Categories** — BMI classification with recommendations
- **Weight Tracking** — Historical weight change visualization

### 🥗 Diet Planning
- **Personalized Plans** — Custom diet plans based on goals
- **Recipe Suggestions** — Healthy meal ideas and preparation guides
- **Nutritional Balance** — Ensure proper macro and micronutrient intake

### 👥 Community Features
- **Fitness Communities** — Join groups based on interests and goals
- **User Connections** — Connect with workout partners
- **Achievement Sharing** — Celebrate milestones with the community

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- pip package installer
- Git

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/your-username/fitbyte.git
cd fitbyte

# Navigate to application directory
cd FitBy/FitByte1/FitByte1

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Initialize database and start server
python run.py
```

Open your browser and navigate to `http://localhost:5000`

### Dependencies

```txt
Flask==2.3.2
Flask-SQLAlchemy==3.0.5
Flask-Login==0.6.2
Werkzeug==2.3.6
WTForms==3.0.1
```

## 🎯 Usage

### Getting Started

1. **Register Account** — Create your profile with basic information
2. **Set Up Profile** — Add height, weight, and fitness goals
3. **Log First Workout** — Record your exercise session
4. **Track Nutrition** — Log meals and monitor calories
5. **Monitor Progress** — View charts and analytics

### Core Workflows

#### Logging a Workout
```python
# Example workout entry
{
  "workout_type": "cardio",
  "duration": 45,  # minutes
  "calories_burned": 350,
  "notes": "Morning run in the park"
}
```

#### Recording Meals
```python
# Example meal entry
{
  "meal_type": "breakfast",
  "food_name": "Oatmeal with berries",
  "calories": 250,
  "protein": 8,    # grams
  "carbs": 45,     # grams
  "fat": 5         # grams
}
```

#### Setting Goals
```python
# Example fitness goal
{
  "goal_type": "weight_loss",
  "target_value": 65.0,  # kg
  "current_value": 70.0, # kg
  "target_date": "2025-12-31",
  "description": "Lose 5kg for better health"
}
```

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/signup` | Register new user |
| `POST` | `/login` | User authentication |
| `GET` | `/logout` | End user session |

### Core Features
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/dashboard` | Main dashboard with stats |
| `GET/POST` | `/api/workouts` | Manage workout records |
| `GET/POST` | `/api/meals` | Manage meal records |
| `GET/POST` | `/api/goals` | Manage fitness goals |
| `POST` | `/api/bmi` | Calculate and save BMI |
| `POST` | `/api/diet-plan` | Generate diet plans |
`
#### Workout Model
- **Meal** — Food intake and nutrition tracking
- **Goal** — Fitness goals with progress monitoring  
- **BMIRecord** — BMI calculations and historical data
- **DietPlan** — Personalized nutrition plans

## 📸 Screenshots

### Main Dashboard
![Dashboard](https://via.placeholder.com/600x400/2ecc71/ffffff?text=Dashboard+Overview)
*Central hub showing daily stats, recent workouts, and goal progress*

### Workout Tracking
![Workouts](https://via.placeholder.com/600x400/3498db/ffffff?text=Workout+Tracking)
*Comprehensive workout logging with exercise selection and metrics*

### Progress Analytics
![Analytics](https://via.placeholder.com/600x400/9b59b6/ffffff?text=Progress+Charts)
*Interactive charts showing workout trends and goal progress*

### Nutrition Tracking
![Nutrition](https://via.placeholder.com/600x400/e67e22/ffffff?text=Meal+Logging)
*Detailed meal logging with calorie and macronutrient breakdown*

## 🛠️ Tech Stack

**Backend:**
- Flask (Python web framework)
- SQLAlchemy (Database ORM)
- Flask-Login (Authentication)
- SQLite/PostgreSQL (Database)

**Frontend:**
- HTML5, CSS3, JavaScript
- Chart.js (Data visualization)
- Font Awesome (Icons)
- Particles.js (Background effects)

## 📁 Project Structure

```
FitByte1/
├── app.py                 # Main Flask application
├── config.py             # Configuration settings  
├── models.py             # Database models
├── database.py           # Database utilities
├── run.py               # Application entry point
├── requirements.txt     # Dependencies
├── static/              # CSS, JS, images, videos
│   ├── css/styles.css
│   ├── js/particles.js
│   └── images/
├── templates/           # HTML templates
│   ├── base.html
│   ├── dashboard.html
│   ├── login.html
│   └── signup.html
└── instance/            # Database files
    └── fitbyte.db
```
### Development Guidelines
- Follow PEP 8 for Python code
- Add tests for new features
- Update documentation as needed
- Use meaningful commit messages

### Version 2.0
- [ ] 📱 Mobile app development
- [ ] 🔗 Fitness device integration (Fitbit, Apple Watch)
- [ ] 🤖 AI-powered workout recommendations
- [ ] 🏆 Social challenges and leaderboards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Flask](https://flask.palletsprojects.com/) for the excellent web framework
- [SQLAlchemy](https://sqlalchemy.org/) for powerful ORM capabilities
- [Chart.js](https://chartjs.org/) for beautiful data visualizations
- [Font Awesome](https://fontawesome.com/) for comprehensive icons
- All contributors who help improve FitByte

