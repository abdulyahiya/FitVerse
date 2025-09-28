import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FitnessCenter as GymIcon,
  Restaurant as DietIcon,
  DirectionsRun as ExerciseIcon,
  GroupAdd as JoinIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Support as SupportIcon
} from '@mui/icons-material';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <DietIcon />,
      title: 'Personalized Diet Plans',
      description: 'Get customized nutrition plans based on your goals and preferences',
      link: '/diet'
    },
    {
      icon: <ExerciseIcon />,
      title: 'Animated Exercise Guides',
      description: 'Follow step-by-step animated workouts for every day of the week',
      link: '/exercises'
    },
    {
      icon: <JoinIcon />,
      title: 'Join Our Community',
      description: 'Become part of the FitVerse family and start your fitness journey',
      link: '/join'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100+', label: 'Workout Plans' },
    { number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      content: 'FitVerse transformed my fitness journey. The animated exercises make it so easy to follow along!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Bodybuilder',
      content: 'The personalized diet plans helped me achieve my goals faster than I ever imagined.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'Yoga Instructor',
      content: 'The community support and expert guidance at FitVerse is unmatched. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section with Background Video */}
      <BackgroundVideo videoSrc={videoUrls.home}>
        <section className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Transform Your Body,
                <span className="gradient-text"> Transform Your Life</span>
              </h1>
              <p className="hero-description">
                Join FitVerse and embark on a journey to achieve your fitness goals with our 
                personalized diet plans, animated exercise guides, and expert community support.
              </p>
              <div className="hero-buttons">
                <Link to="/join" className="btn-primary">
                  Start Your Journey
                </Link>
                <Link to="/exercises" className="btn-outline">
                  View Workouts
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </BackgroundVideo>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose FitVerse?</h2>
            <p>Discover the features that make us the ultimate fitness destination</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Members Say</h2>
            <p>Real stories from real people who transformed their lives with FitVerse</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Start Your Fitness Journey?</h2>
            <p>Join thousands of people who have already transformed their lives with FitVerse</p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">
                Join Now
              </Link>
              <Link to="/login" className="btn-outline">
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
