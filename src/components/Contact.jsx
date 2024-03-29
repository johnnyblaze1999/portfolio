import React, { useEffect, useRef } from 'react'
import { Slide } from 'react-awesome-reveal'

const Contact = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIframeMessage = (e) => {
    };

    window.addEventListener('message', handleIframeMessage, false);

    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      const src = iframeRef.current.src;
      const iframeParams = [];
      iframeRef.current.src = src + "?" + iframeParams.join('&');
    }
  }, []);

  useEffect(() => {
    const updateMarginBottom = () => {
      if (window.innerHeight >= 2160){
        iframeRef.current.style.marginBottom = '-1200px';
      }
      else if (window.innerHeight >= 1240) {
        iframeRef.current.style.marginBottom = '-300px';
      } 
      else {
        iframeRef.current.style.marginBottom = '-100px';
      }
    };

    window.addEventListener('resize', updateMarginBottom);
    updateMarginBottom();

    return () => {
      window.removeEventListener('resize', updateMarginBottom);
    };
  }, []);

  return (
    <div id='contact'>
        <Slide triggerOnce className='m-auto md:pl-20 pt-16 bg-[#FFAF99]'>
            <h1 className='pt-4 text-4xl font-bold text-center text-[#001b5e]'>Contact Me</h1>
        </Slide>
        
        <div className='bg-[#FFAF99] relative flex items-center justify-center h-auto w-full overflow-hidden'>
            <iframe
                ref={iframeRef}
                id="JotFormIFrame-240828238793063"
                src="https://form.jotform.com/240828238793063"
                className='w-full h-screen'
                scrolling="yes"
            />
        </div>

    </div>
  );
};

export default Contact;
