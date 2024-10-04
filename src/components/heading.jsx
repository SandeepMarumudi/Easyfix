import React from 'react';

const StyledHeading = ({ text }) => {
  const headingStyle = {
    fontSize: '2.5rem',          // Adjust font size for prominence
    fontWeight: 'bold',          // Make the text bold
    color: '#333',               // Dark gray color for readability
    textAlign: 'center',         // Center the text
    lineHeight: '1.2',           // Adjust line height for spacing
    letterSpacing: '0.05em',     // Slightly increase letter spacing
    margin: '20px 0',            // Add top and bottom margins
    textTransform: 'capitalize', // Capitalize the text
    fontFamily: 'Arial, sans-serif' // Use a clean, professional font
  };

  return (
    <h1 style={headingStyle}>
      {text}  {/* Display the passed text prop */}
    </h1>
  );
};

export default StyledHeading;
