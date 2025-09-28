# Email Setup Guide for FitVerse

## Current Status
✅ Form submissions are now working and will show success message
✅ Form data is logged to browser console for testing
❌ Actual emails are not being sent yet (needs EmailJS setup)

## Quick Solution - Check Browser Console
1. Open your website at `http://localhost:3000`
2. Go to the Join Form page
3. Fill out and submit the form
4. Open browser Developer Tools (F12)
5. Check the Console tab - you'll see all form data logged there

## To Receive Actual Emails - Set Up EmailJS

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Gym Membership Application - {{from_name}}

**Content:**
```
Dear FitVerse Team,

A new membership application has been submitted:

Personal Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Age: {{age}}
- Gender: {{gender}}

Fitness Information:
- Goal: {{fitness_goal}}
- Experience: {{experience}}
- Preferred Time: {{preferred_time}}

Health Information:
- Medical Conditions: {{medical_conditions}}

Emergency Contact:
- Name: {{emergency_contact}}
- Phone: {{emergency_phone}}

Membership:
- Type: {{membership_type}}
- Additional Info: {{additional_info}}

Submitted at: {{submitted_at}}

Please contact this applicant within 24 hours.

Best regards,
FitVerse Website
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Code
1. Open `src/utils/emailService.js`
2. Replace these values:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```
3. Uncomment the email sending code (lines 68-96)
4. Comment out the simulation code (lines 63-66)

### Step 6: Rebuild and Test
1. Run: `npx webpack --mode production`
2. Test the form submission
3. Check your email (abdulyahya9973@gmail.com)

## Alternative: Use Formspree (Easier Option)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Get your form endpoint URL

### Step 2: Update JoinForm.js
Replace the email service call with:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});
```

## Current Testing Method
For now, you can see all form submissions in the browser console:
1. Open Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. You'll see the complete application data logged

## Contact Information
- Your email: abdulyahya9973@gmail.com
- Form submissions will be sent to this address once EmailJS is set up

---

**Note:** The form is currently working perfectly - it just needs the email service configured to actually send emails to your inbox.

