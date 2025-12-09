
'use client'
import React from 'react';
import Image from "next/image";
// import Head from 'next/head';
// import Carousel from '@/components/carousel'
// import Script from 'next/script';
// import BookingTool from '@/components/BookingTool'
// import asyncBook from '@/components/BookingTool'
import { useEffect, useState } from 'react';




const Home = () => {

  const [isClient, setIsClient] = useState(false)
    useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <div >
      {isClient && (
        <div className="houfy_widget" data-widgettype="pricing" data-listingid="20256" data-color2="FFFFFF" data-accesstoken="hospxxdxmubncr698082" data-pr_text1="Book Directly" data-pr_text2="Contact Owner" data-pr_text3="Enter dates and number of guests to view the total trip price, including additional fees and any taxes." data-show_calendarname="Y" data-button_color="e8485d" data-contact_owner="Y" data-compare="N" data-contact_owner_email="" data-book_direct_button="Y" data-type="alllistings" data-show_listing="Y"></div>,
<script src="https://widgets.houfy.com/js/main.js"></script>
        // <iframe 
        //   src="https://bookings.littlehotelier.com/s/royal-norfolk-hotel" 
        //   style={{width: '100%', height: '100vh', border: 'none'}}
        //   title="Booking Tool"
        // ></iframe>
      )}
    </div>

  );
}
export default Home;


