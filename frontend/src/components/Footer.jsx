import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">SUPPORT</h4>
          <ul className="space-y-2">
            <li>Contact us</li>
            <li>Promotions & Sale</li>
            <li>Track Order</li>
            <li>Shoe Care</li>
            <li>Tech Glossary</li>
            <li>Initiate Return / Exchange</li>
            <li>Sneakers</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">ABOUT</h4>
          <ul className="space-y-2">
            <li>GO WILD</li>
            <li>Company</li>
            <li>Corporate News</li>
            <li>Press Center</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Store Locator</li>
            <li>PUMA Articles</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">STAY UP TO DATE</h4>
          <div className="flex space-x-4">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-snapchat"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <h4 className="font-bold mt-6 mb-4">EXPLORE</h4>
          <div className="flex space-x-4">
            <button className="border rounded-lg px-4 py-2">APP</button>
            <button className="border rounded-lg px-4 py-2">TRAC</button>
          </div>
        </div>

        <div className="text-center md:text-right">
          <div className="mb-4">
            <img src="/payment-icons.png" alt="Payment Methods" className="mx-auto md:mx-0" />
          </div>
          <button className="border rounded-lg px-4 py-2 inline-flex items-center mx-auto md:mx-0">
            <span className="mr-2">\ud83c\uddee\ud83c\uddf3</span> INDIA
          </button>
          <p className="text-sm mt-4">&copy; PUMA INDIA LTD, 2025. ALL RIGHTS RESERVED.</p>
          <a href="#" className="text-sm underline">IMPRINT AND LEGAL DATA</a>
        </div>
      </div>
        <div className=''>
          <div className='mb-10 m-5 '>
            <h2 className='font-bold'>LaceUp Hub</h2>


          </div>
          <div className='flex justify-center items-center px-4 py-6 text-xl font-bold '>All right reserved @2025 : LaceUp Hub</div>
        </div>
    </footer>
  );
};

export default Footer;