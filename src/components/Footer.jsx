import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>

            <footer className="bg-gray-900 text-gray-300 py-10">

                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">TodoApp</h3>
                    <p className="mt-4 md:mt-0">
                        © 2026 TodoApp. All rights reserved.
                    </p>
                    <ul className='grid lg:grid-cols-4 text-center gap-3 cursor-pointer'>
                        <li><Link to="/desclaimer">Desclaimer</Link></li>
                        <li><Link to="/faqs">Faqs</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
