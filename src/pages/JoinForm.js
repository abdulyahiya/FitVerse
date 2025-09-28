import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  FitnessCenter as GymIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  CheckCircle as CheckIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { sendJoinFormEmail } from '../utils/emailService';
import BackgroundVideo from '../components/BackgroundVideo';
import { videoUrls } from '../assets/videos/videoUrls';
import './JoinForm.css';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    fitnessGoal: '',
    experience: '',
    preferredTime: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    membershipType: '',
    additionalInfo: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using the email service
      const result = await sendJoinFormEmail(formData);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <BackgroundVideo videoSrc={videoUrls.join}>
        <div className="join-form-page">
          <div className="container">
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
            <CheckIcon className="success-icon" />
            <h2>Application Submitted Successfully!</h2>
            <p>
              Thank you for your interest in joining FitVerse. We have received your application 
              and will contact you within 24 hours to discuss the next steps.
            </p>
            <div className="success-details">
              <h3>What happens next?</h3>
              <ul>
                <li>Our team will review your application</li>
                <li>We'll contact you to schedule a consultation</li>
                <li>You'll receive a personalized fitness assessment</li>
                <li>We'll create your custom workout and diet plan</li>
              </ul>
            </div>
            <motion.button
              className="btn-primary"
              onClick={() => window.location.href = '/'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Home
            </motion.button>
          </motion.div>
          </div>
        </div>
      </BackgroundVideo>
    );
  }

  return (
    <BackgroundVideo videoSrc={videoUrls.join}>
      <div className="join-form-page">
        <div className="container">
          <motion.div
            className="join-form-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <GymIcon className="header-icon" />
          <h1>Join the FitVerse Family</h1>
          <p>
            Take the first step towards a healthier, stronger you. Fill out the form below 
            and our team will get back to you with a personalized fitness plan.
          </p>
        </motion.div>

        <motion.div
          className="join-form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="join-form">
            {error && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            {/* Personal Information */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor=" firstName">First Name *</label>
                  <div className="input-container">
                    <PersonIcon className=" input-icon" />
                    <input
                      type=" text"
                      id="firstName"
                      name="firstName"
                      value={ formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <div className="input-container">
                    <PersonIcon className="input-icon" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-container">
                    <EmailIcon className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="input-container">
                    <PhoneIcon className="input-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    min="16"
                    max="100"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fitness Information */}
            <div className="form-section">
              <h3>Fitness Information</h3>
              <div className="form-group">
                <label htmlFor="fitnessGoal">Fitness Goal *</label>
                <select
                  id="fitnessGoal"
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your primary goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="general-fitness">General Fitness</option>
                  <option value="strength-training">Strength Training</option>
                  <option value="endurance">Endurance</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="sports-specific">Sports Specific</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Fitness Experience *</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-6 months)</option>
                  <option value="intermediate">Intermediate (6 months - 2 years)</option>
                  <option value="advanced">Advanced (2+ years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Workout Time</label>
                <div className="input-container">
                  {/* <TimeIcon className="input-icon" /> */}
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select preferred time</option>
                    <option value="early-morning">Early Morning (5:00 AM - 7:00 AM)</option>
                    <option value="morning">Morning (7:00 AM - 10:00 AM)</option>
                    <option value="midday">Midday (10:00 AM - 2:00 PM)</option>
                    <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                    <option value="late-evening">Late Evening (8:00 PM - 10:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Health Information */}
            <div className="form-section">
              <h3>Health Information</h3>
              <div className="form-group">
                <label htmlFor="medicalConditions">Medical Conditions or Injuries</label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  placeholder="Please list any medical conditions, injuries, or limitations that we should be aware of..."
                  rows="4"
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="form-section">
              <h3>Emergency Contact</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emergencyContact">Emergency Contact Name *</label>
                  
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    placeholder="Enter emergency contact name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emergencyPhone">Emergency Contact Phone *</label>
                  <div className="input-container">
                    <PhoneIcon className="input-icon" />
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      placeholder="     Enter emergency contact phone"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Information */}
            <div className="form-section">
              <h3>Membership Information</h3>
              <div className="form-group">
                <label htmlFor="membershipType">Preferred Membership Type *</label>
                <select
                  id="membershipType"
                  name="membershipType"
                  value={formData.membershipType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select membership type</option>
                  <option value="basic">Basic (Gym Access Only)</option>
                  <option value="premium">Premium (Gym + Classes)</option>
                  <option value="vip">VIP (All Access + Personal Training)</option>
                  <option value="student">Student (Discounted Rate)</option>
                  <option value="senior">Senior (55+ Discounted Rate)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share..."
                  rows="3"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <div className="loading-spinner"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  <SendIcon />
                  Submit Application
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
        </div>
      </div>
    </BackgroundVideo>
  );
};

export default JoinForm;
