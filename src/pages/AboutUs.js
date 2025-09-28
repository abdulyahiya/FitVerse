import React from 'react';
import { motion } from 'framer-motion';
import { 
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  FitnessCenter as GymIcon,
  People as PeopleIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Directions as DirectionsIcon
} from '@mui/icons-material';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './AboutUs.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendContactEmail } from '../utils/emailService';

const AboutUs = () => {
  const whyJoinUs = [
    {
      icon: <PeopleIcon />,
      title: 'Expert Trainers',
      description: 'Our certified trainers have years of experience and are passionate about helping you achieve your goals.'
    },
    {
      icon: <TrendingIcon />,
      title: 'Proven Results',
      description: 'Join thousands of members who have transformed their lives and achieved their fitness goals with us.'
    },
    {
      icon: <SecurityIcon />,
      title: 'Safe Environment',
      description: 'State-of-the-art equipment and safety protocols ensure you can work out with confidence and peace of mind.'
    },
    {
      icon: <SupportIcon />,
      title: '24/7 Support',
      description: 'Our dedicated support team is always here to help you with any questions or concerns you may have.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Founder',
      experience: '15+ years',
      specialty: 'Strength Training & Nutrition',
      image: 'https://images.unsplash.com/photo-1594824388852-8a7b4b4b4b4b?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Mike Chen',
      role: 'Fitness Director',
      experience: '12+ years',
      specialty: 'Cardio & Weight Loss',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Nutrition Specialist',
      experience: '10+ years',
      specialty: 'Diet Planning & Wellness',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const [tourOpen, setTourOpen] = React.useState(false);
  const [tourLoading, setTourLoading] = React.useState(false);
  const [tourSuccess, setTourSuccess] = React.useState('');
  const [tourError, setTourError] = React.useState('');
  const [tourForm, setTourForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Schedule a gym tour',
    message: 'Hi FitVerse team, I would like to schedule a tour of your facility. Please contact me with available times. Thank you!'
  });

  const submitTour = async (e) => {
    e.preventDefault();
    setTourLoading(true);
    setTourError('');
    setTourSuccess('');
    const res = await sendContactEmail(tourForm);
    if (res.success) {
      setTourSuccess('Request sent! We will contact you shortly.');
      setTourForm({ ...tourForm, message: tourForm.message });
      setTimeout(() => setTourOpen(false), 1000);
    } else {
      setTourError(res.message || 'Failed to send request.');
    }
    setTourLoading(false);
  };

  // Smooth-scroll to sections when hash is present
  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <BackgroundVideo videoSrc={videoUrls.about}>
      <div className="about-us-page">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            className="about-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GymIcon className="hero-icon" />
            <h1>About FitVerse</h1>
            <p className="hero-subtitle">
              Your Ultimate Destination for Fitness Excellence
            </p>
          </motion.div>

          {/* Company Description */}
          <motion.section
            className="company-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="description-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2025, FitVerse has been at the forefront of the fitness revolution, 
                helping thousands of people transform their lives through personalized training, 
                expert guidance, and cutting-edge facilities. What started as a small gym with 
                a big dream has grown into a comprehensive fitness ecosystem that serves our 
                community with passion and dedication.
              </p>
              <p>
                At FitVerse, we believe that fitness is not just about physical transformation—it's 
                about building confidence, improving mental health, and creating lasting lifestyle 
                changes. Our holistic approach combines state-of-the-art equipment, expert trainers, 
                personalized nutrition plans, and a supportive community to help you achieve your 
                goals and maintain them for life.
              </p>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="stats-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Our Impact</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Join Us */}
          <motion.section
            className="why-join-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Why Choose FitVerse?</h2>
            <div className="why-join-grid">
              {whyJoinUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="why-join-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="team-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>Meet Our Expert Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-member-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-experience">{member.experience}</p>
                    <p className="member-specialty">{member.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact & Location */}
          <motion.section
            className="contact-section"
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2>Visit Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <LocationIcon className="contact-icon" />
                  <div>
                    <h3>Address</h3>
                    <p>Green Valley, Near Lovely Professional University<br />Kapurthala<br />Punjab, 14411</p>
                  </div>
                </div>
                <div className="contact-item">
                  <PhoneIcon className="contact-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+91-9973914185<br />+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <EmailIcon className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>info@fitverse.com<br />support@fitverse.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <ScheduleIcon className="contact-icon" />
                  <div>
                    <h3>Hours</h3>
                    <p>Monday - Friday: 5:00 AM - 11:00 PM<br />
                       Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="contact-item">
                  <DirectionsIcon className="contact-icon" />
                  <div>
                    <h3>Get Directions</h3>
                    <a 
                      href="https://maps.google.com/?q=123+Fitness+Avenue+New+York+NY+10001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="directions-link"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FitVerse Location Map"
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="cta-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2>Ready to Start Your Fitness Journey?</h2>
            <p>Join the FitVerse family today and transform your life with expert guidance, 
               state-of-the-art facilities, and a supportive community.</p>
            <div className="cta-buttons">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/join')}
              >
                Join Now
              </motion.button>
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTourOpen(true)}
              >
                Schedule Tour
              </motion.button>
            </div>
          </motion.section>

          {/* Schedule Tour Modal */}
          {tourOpen && (
            <div className="exercise-modal" style={{ display: 'flex' }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Schedule a Tour</h2>
                  <button className="close-btn" onClick={() => setTourOpen(false)}>×</button>
                </div>
                {tourError && (
                  <div className="error-message" style={{ marginBottom: 16 }}>{tourError}</div>
                )}
                {tourSuccess && (
                  <div className="success-message" style={{ marginBottom: 16 }}>{tourSuccess}</div>
                )}
                <form onSubmit={submitTour} className="join-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="tname">Full Name</label>
                      <input id="tname" type="text" required value={tourForm.name} onChange={(e)=>setTourForm({...tourForm,name:e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="temail">Email</label>
                      <input id="temail" type="email" required value={tourForm.email} onChange={(e)=>setTourForm({...tourForm,email:e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tphone">Phone</label>
                    <input id="tphone" type="tel" value={tourForm.phone} onChange={(e)=>setTourForm({...tourForm,phone:e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tmessage">Message</label>
                    <textarea id="tmessage" rows="4" value={tourForm.message} onChange={(e)=>setTourForm({...tourForm,message:e.target.value})} />
                  </div>
                  <button type="submit" className="submit-button" disabled={tourLoading}>
                    {tourLoading ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default AboutUs;
