import React from 'react';
import ContactForm from '../Components/form/form';
import Details from '../Components/Sevieces/Details';
import MiddleSection from '../Components/Sevieces/MiddleSection';
import "./Services.css"
const contactFields = [
  {
    label: "Your full name",
    id: "fullname",
    placeholder: "John Hancock",
    type: "text",
    options: {
      required: true,
    },
  },
  {
    label: "Your email",
    id: "email",
    placeholder: "john.hancock@example.com",
    type: "email",
    options: {
      required: true,
      email: true,
    },
  },
  {
    label: "Subject",
    id: "subject",
    placeholder: "I am enquiring about...",
    type: "text",
    options: {
      required: true,
    },
  },
  {
    label: "Enquiry",
    id: "content",
    placeholder: "Tell us more about your enquiry, feedback or issues.",
    type: "textarea",
    options: {
      required: true,
    },
  },
];



export const Services = () => {
    return (
      <main id="sevmain">
        <div className="heading">
          <h1>Commercial Hydroponic Farming System in India</h1>
        </div>

        <MiddleSection />
        <Details />
        <ContactForm fields={contactFields} submitText="contact" />
      </main>
    );
};

