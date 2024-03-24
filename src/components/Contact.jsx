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

  return (
    <div id='contact'>
        <Slide triggerOnce className='m-auto md:pl-20 pt-16 bg-[#FFAF99]'>
            <h1 className='pt-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        </Slide>
        
        <div className='bg-[#FFAF99]' style={{ overflow: 'hidden', height: 'calc(100vh - 300px)' }}>
            <iframe
                id="JotFormIFrame-240828238793063"
                src="https://form.jotform.com/240828238793063"
                style={{ 
                minWidth: '100%', 
                maxWidth: '100%', 
                height: 'calc(100vh + 300px)', 
                border: 'none',
                marginBottom: '-300px',
                marginLeft: '30px'
                }}
                scrolling="no"
            />
        </div>

    </div>
  );
};

export default Contact;
