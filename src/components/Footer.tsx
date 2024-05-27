import React from 'react';

const Footer = () => {
  return (
    <footer className="text-green-800 py-8 px-16">
      <div className="container mx-auto px-72">
        <div className="flex flex-col md:flex-row justify-evenly">
          {/* Contact Information Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-xs">VIETNAM</h4>
            <p className="text-xs">Head Office & Bike shop - <a href="https://example.com" className="text-black">map & Connect</a></p>
            <p className="text-xs">Tel/Zalo/WhatsApp (+84) 855075999</p>
            <p className="text-xs">Email: <a href="mailto:info@vietnambiketours.com" className="text-black">info@vietnambiketours.com</a></p>
            <p className="text-xs">Add: 165 Nguyen Thi Nhung str., Thu Duc Dist., Ho Chi Minh city, Vietnam</p>
          </div>
          <div>
            <h4 className="text-xs">UNITED STATES</h4>
            <p className="text-xs">Tel/WhatsApp: (+1) 214 769 7663</p>
            <p className="text-xs">Email: <a href="mailto:robert.USA@vietnambiketours.com" className="text-black text-xs ">robert.USA@vietnambiketours.com</a></p>
            <p className="text-xs">Add: 1200 Main, No.1712, Dallas TX 75202, USA</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4">
          {/* Links Section */}
          <div className="flex flex-wrap justify-center space-x-2 text-xs">
            <a href="#" className="hover:text-black">About us</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Biking guides</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Bikes/Helmets</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Terms/Payment</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Before touring</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Advices</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">FAQs</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">What to expect</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Featured clients</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Extra values</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Sunday Bike Ride</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Why us</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Privacy</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Press</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Why cycle</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Responsibility</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Facebook</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">Youtube</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">X</a>
            <span className="text-black">|</span>
            <a href="#" className="hover:text-black">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;