# Setting Up the Investor Contact Form

This document explains how to set up the investor contact form on your PitchDeck-Valctrl website to collect leads and inquiries.

## Option 1: Formspree (Simple Setup)

[Formspree](https://formspree.io) is a form backend service that allows you to easily set up form submissions without a backend.

### Setup Steps:

1. Go to [Formspree.io](https://formspree.io) and create an account
2. Create a new form in your Formspree dashboard
3. Get your form ID (it will look like `xgelpkae`)
4. Open `src/components/Hero.tsx` and replace `YOUR_FORM_ID` with your actual form ID:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

That's it! Your form will now send submissions to your email address connected with Formspree.

### Benefits:
- Quick setup (less than 5 minutes)
- No server-side code or database needed
- Email notifications for each submission
- Free tier available (up to 50 submissions/month)

## Option 2: Firebase (Advanced Setup)

For a more robust solution with database storage, you can use Firebase Firestore.

### Setup Steps:

1. Install Firebase packages:
```bash
npm install firebase
```

2. Create a new Firebase project at [firebase.google.com](https://firebase.google.com)

3. Enable Firestore database in your Firebase project

4. Create a new file `src/lib/firebase.ts` with your Firebase configuration:

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

5. Modify the `handleSubmit` function in `src/components/Hero.tsx`:

```typescript
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

// In the component:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Add to Firestore
    await addDoc(collection(db, "investor_inquiries"), {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      createdAt: serverTimestamp(),
    });
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "" });
    }, 5000);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Benefits:
- Store submissions in a database
- Create an admin dashboard to view submissions
- More control over data processing
- More secure and scalable

## Option 3: Email.js (Alternative Simple Setup)

[EmailJS](https://www.emailjs.com/) is another easy-to-use service that can send emails directly from client-side code.

### Setup Steps:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install the EmailJS package:
```bash
npm install @emailjs/browser
```

3. Create an email template in your EmailJS dashboard
4. Modify the `handleSubmit` function in `src/components/Hero.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// In the component:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',  // Email.js service ID
      'YOUR_TEMPLATE_ID', // Email.js template ID
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
      },
      'YOUR_PUBLIC_KEY'   // Email.js public key
    );
    
    if (result.text === 'OK') {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "" });
      }, 5000);
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Form Data Security Considerations

Regardless of which method you choose, consider the following:

1. Add CSRF protection if implementing your own backend
2. Use reCAPTCHA to prevent spam (available as an add-on in Formspree)
3. Ensure compliance with privacy regulations (GDPR, CCPA)
4. Add a privacy policy explaining how form data will be used
5. Set up proper validation for all form fields

## Need Help?

If you need assistance with form setup or have questions, please contact our development team. 