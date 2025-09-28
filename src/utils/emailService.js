// Email service configuration for FitVerse
// This file contains the email service setup using EmailJS

import emailjs from '@emailjs/browser';

// EmailJS configuration
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_4pbbryh'; // Replace with your actual Service ID
const EMAILJS_TEMPLATE_ID = 'template_13lhbzr'; // Replace with your actual Template ID  
const EMAILJS_PUBLIC_KEY = 'ZHNaZnkkzk6v1uJK9'; // Replace with your actual Public Key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendJoinFormEmail = async (formData) => {
  try {
    // Log the form data to console for debugging
    console.log('Form submission received:', formData);
    
    // For now, we'll simulate successful email sending
    // In production, you would set up EmailJS with your actual credentials
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the email content that would be sent
    const emailContent = `
      NEW GYM MEMBERSHIP APPLICATION
      ================================
      
      Personal Information:
      - Name: ${formData.firstName} ${formData.lastName}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Age: ${formData.age}
      - Gender: ${formData.gender}
      
      Fitness Information:
      - Goal: ${formData.fitnessGoal}
      - Experience: ${formData.experience}
      - Preferred Time: ${formData.preferredTime}
      
      Health Information:
      - Medical Conditions: ${formData.medicalConditions || 'None'}
      
      Emergency Contact:
      - Name: ${formData.emergencyContact}
      - Phone: ${formData.emergencyPhone}
      
      Membership:
      - Type: ${formData.membershipType}
      - Additional Info: ${formData.additionalInfo || 'None'}
      
      Submitted at: ${new Date().toLocaleString()}
      
      Please contact this applicant within 24 hours.
    `;
    
    console.log('Email content that would be sent to abdulyahya9973@gmail.com:');
    console.log(emailContent);
    
    // Real email sending with EmailJS
    const templateParams = {
      to_email: 'abdulyahya9973@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      age: formData.age,
      gender: formData.gender,
      fitness_goal: formData.fitnessGoal,
      experience: formData.experience,
      preferred_time: formData.preferredTime,
      medical_conditions: formData.medicalConditions,
      emergency_contact: formData.emergencyContact,
      emergency_phone: formData.emergencyPhone,
      membership_type: formData.membershipType,
      additional_info: formData.additionalInfo,
      message: emailContent
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return { success: true, message: 'Application submitted successfully! We will contact you within 24 hours.' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send application. Please try again or contact us directly.' 
    };
  }
};

export const sendContactEmail = async (contactData) => {
  try {
    console.log('Tour / contact message:', contactData);
    console.log('Using EmailJS Service ID:', EMAILJS_SERVICE_ID);
    console.log('Using Template ID: template_contact_form');
    
    // Real email sending with EmailJS
    const templateParams = {
      to_email: 'abdulyahya9973@gmail.com',
      from_name: contactData.name,
      from_email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
      phone: contactData.phone || 'Not provided'
    };
    
    console.log('Template params:', templateParams);
    
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID, // Use the same template as join form
      templateParams
    );
    
    console.log('Contact email sent successfully:', result);
    return { success: true, message: 'Message sent successfully! We will contact you shortly.' };
  } catch (error) {
    console.error('Error sending contact email:', error);
    console.error('Error details:', error.text || error.message);
    return { 
      success: false, 
      message: `Failed to send message: ${error.text || error.message}. Please check your EmailJS setup.` 
    };
  }
};

// Setup instructions for EmailJS:
/*
1. Go to https://www.emailjs.com/
2. Create an account and verify your email
3. Create a new service (Gmail, Outlook, etc.)
4. Create email templates for:
   - Gym membership applications
   - Contact form submissions
5. Get your Service ID, Template ID, and Public Key
6. Replace the placeholder values above with your actual credentials
7. Update the template IDs in the functions above

Email Template Example for Gym Applications:
Subject: New Gym Membership Application - {{from_name}}

Dear FitVerse Team,

A new membership application has been submitted:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Age: {{age}}
Gender: {{gender}}
Fitness Goal: {{fitness_goal}}
Experience Level: {{experience}}
Preferred Time: {{preferred_time}}
Medical Conditions: {{medical_conditions}}
Emergency Contact: {{emergency_contact}} ({{emergency_phone}})
Membership Type: {{membership_type}}
Additional Information: {{additional_info}}

Please contact this applicant within 24 hours.

Best regards,
FitVerse Website
*/
