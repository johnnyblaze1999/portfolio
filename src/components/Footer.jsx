import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-center text-base-content">
        <aside>
          <p>Copyright © 2024 - Made with{" "}
             <TypeAnimation
                        sequence={[
                            'love',
                            5000, 
                            'passion',
                            5000,
                            'sweat and tears',
                            5000
                        ]}
                        wrapper="span"
                        speed={25}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
            />
            by {" "}<b>Kevin Nguyen</b> &#x1F49A;
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer