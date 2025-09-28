import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  FitnessCenter as GymIcon,
  Restaurant as DietIcon,
  DirectionsRun as ExerciseIcon,
  TrendingUp as TrendingIcon,
  CalendarToday as CalendarIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Workouts Completed',
      value: '12',
      change: '+3 this week',
      icon: <GymIcon />,
      color: '#00d4ff'
    },
    {
      title: 'Calories Burned',
      value: '2,450',
      change: '+150 today',
      icon: <TrendingIcon />,
      color: '#ff6b35'
    },
    {
      title: 'Meals Tracked',
      value: '28',
      change: 'This week',
      icon: <DietIcon />,
      color: '#4caf50'
    },
    {
      title: 'Streak Days',
      value: '7',
      change: 'Keep it up!',
      icon: <CheckIcon />,
      color: '#9c27b0'
    }
  ];

  const recentActivities = [
    {
      type: 'workout',
      title: 'Upper Body Strength',
      time: '2 hours ago',
      duration: '45 minutes',
      icon: <GymIcon />
    },
    {
      type: 'meal',
      title: 'Breakfast logged',
      time: '4 hours ago',
      duration: '350 calories',
      icon: <DietIcon />
    },
    {
      type: 'exercise',
      title: 'Cardio Session',
      time: 'Yesterday',
      duration: '30 minutes',
      icon: <ExerciseIcon />
    },
    {
      type: 'goal',
      title: 'Weekly goal achieved',
      time: '2 days ago',
      duration: '5 workouts',
      icon: <CheckIcon />
    }
  ];

  const upcomingWorkouts = [
    {
      day: 'Today',
      workout: 'Lower Body Power',
      time: '6:00 PM',
      duration: '60 minutes',
      difficulty: 'Intermediate'
    },
    {
      day: 'Tomorrow',
      workout: 'Cardio & Core',
      time: '7:00 AM',
      duration: '45 minutes',
      difficulty: 'Beginner'
    },
    {
      day: 'Wednesday',
      workout: 'Back & Biceps',
      time: '6:30 PM',
      duration: '50 minutes',
      difficulty: 'Intermediate'
    }
  ];

  return (
    <BackgroundVideo videoSrc={videoUrls.dashboard}>
      <div className="dashboard-page">
        <div className="container">
          <motion.div
            className="dashboard-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <DashboardIcon className="header-icon" />
          <div className="welcome-section">
            <h1>Welcome back, {user?.name || 'Fitness Enthusiast'}!</h1>
            <p>Track your progress and stay motivated on your fitness journey</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p className="stat-title">{stat.title}</p>
                <span className="stat-change">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="dashboard-content">
          {/* Recent Activities */}
          <motion.div
            className="activities-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Recent Activities</h2>
            <div className="activities-list">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="activity-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>{activity.duration}</p>
                  </div>
                  <div className="activity-time">
                    {activity.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Workouts */}
          <motion.div
            className="workouts-section"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Upcoming Workouts</h2>
            <div className="workouts-list">
              {upcomingWorkouts.map((workout, index) => (
                <motion.div
                  key={index}
                  className="workout-item"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="workout-day">
                    <CalendarIcon />
                    <span>{workout.day}</span>
                  </div>
                  <div className="workout-details">
                    <h4>{workout.workout}</h4>
                    <p>{workout.time} • {workout.duration}</p>
                    <span className="difficulty">{workout.difficulty}</span>
                  </div>
                  <button
                    className="start-workout-btn"
                    onClick={() => navigate(`/exercises?day=${workout.day.toLowerCase()}`)}
                  >
                    Start
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          className="quick-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/exercises')}
            >
              <GymIcon />
              <span>Start Workout</span>
            </motion.button>
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/diet')}
            >
              <DietIcon />
              <span>Log Meal</span>
            </motion.button>
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/exercises')}
            >
              <ExerciseIcon />
              <span>View Exercises</span>
            </motion.button>
            <motion.button
              className="action-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard#progress')}
            >
              <TrendingIcon />
              <span>View Progress</span>
            </motion.button>
          </div>
        </motion.div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default Dashboard;
