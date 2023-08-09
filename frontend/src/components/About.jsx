import React, { useEffect, useState } from 'react';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection && window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2) {
        setFadeIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-section ${fadeIn ? 'fade-in' : ''}`} id="about">
      <h2>About Page</h2>
      <p>This is the about page content...</p>
    </div>
  );
};

export default About;
