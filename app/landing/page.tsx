'use client'
import React from 'react';
import { useEffect } from 'React';
import Head from 'next/head';


const home = () => {
  useEffect(() => {
    // Load the script for the BookingToolIframe
    const script = document.createElement('script');
    script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the BookingToolIframe after the script loads
      if (window.BookingToolIframe) {
        window.BookingToolIframe.initialize({
          url: 'https://login.smoobu.com/en/booking-tool/iframe/335356',
          baseUrl: 'https://login.smoobu.com',
          target: '#apartmentIframeAll',
        });
      }
    };

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
      </div>
      <Head>
        <title>Chalet Booking</title>
        <meta name="description" content="Booking tool iframe" />
      </Head>
      <div id="apartmentIframeAll" style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};

export default home;
