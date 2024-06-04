import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';


export default function BookingTool() {
  return (
    <>
      <div id="apartmentIframeAll">
      <Script
        strategy = "beforeInteractive"
        src="https://login.smoobu.com/js/Settings/BookingToolIframe.js"
        onLoad={() =>
          console.log(`Hey we're STILL here in the console`)
        }
      />
      </div>
    </>
  );
}


export async function asyncBook(){
    const result = await BookingTool();
      console.log('finally');
      <Script>{BookingToolIframe.initialize({"url": "https://login.smoobu.com/en/booking-tool/iframe/335356", "baseUrl": "https://login.smoobu.com", "target": "#apartmentIframeAll"})}</Script>

}

// export default function Page() {
//   return (
//     <>
//       <Script
//         src="https://example.com/script.js"
//         id="example-script"
//         nonce="XUENAJFW"
//         data-test="script"
//       />
//     </>
//   )
// }