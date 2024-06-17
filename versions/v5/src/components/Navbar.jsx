import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
    const productsDropdownRef = useRef(null);
    const mobileProductsDropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
                setProductsDropdownOpen(false);
            }
            if (mobileProductsDropdownRef.current && !mobileProductsDropdownRef.current.contains(event.target)) {
                setMobileProductsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleProductsDropdown = () => {
        setProductsDropdownOpen(!productsDropdownOpen);
    };

    const toggleMobileProductsDropdown = () => {
        setMobileProductsDropdownOpen(!mobileProductsDropdownOpen);
    };

    const handleDropdownItemClick = () => {
        setProductsDropdownOpen(false); // Close the dropdown when an item is clicked
    };

    return (
        <header className="w-full bg-transparent bg-white text-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center px-4 md:px-0">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block h-8 w-auto lg:hidden ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden h-8 w-auto lg:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                        </svg>
{/* 
                            <img className="block h-8 w-auto lg:hidden" src="/src/photos/cpu (1).png" alt="Logo" /> 
                             <img className="hidden h-8 w-auto lg:block" src="/src/photos/cpu (1).png" alt="Logo" /> */}
                        </Link>
                    </div>

                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/" className="font-medium text-gray-900 hover:text-gray-700">Home</Link>
                        <Link to="/builder" className="font-medium text-gray-900 hover:text-gray-700">Build</Link>
                        <div className="relative" ref={productsDropdownRef}>
                            <button type="button" className="flex items-center font-medium text-gray-900 hover:text-gray-700" onClick={toggleProductsDropdown}>
                                Products
                                <svg className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className={`absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${productsDropdownOpen ? '' : 'hidden'}`}>
                                <div className="py-1">
                                    <Link to="/components/cpu" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>CPU</Link>
                                 
                                    <Link to="/components/video-card" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Video Card</Link>
                                    <Link to="/components/motherboard" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Motherboard</Link>
                                    <Link to="/components/memory" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>RAM</Link>
                                    <Link to="/components/storage" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Storage</Link>
                                    <Link to="/components/power-supply" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Power Supply</Link>
                                    {/* <a href="/components/power-supply" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300">Power Supply</a> */}
                                    {/* <a href="/components/case" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300">Case</a> */}
                                    <Link to="/components/case" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Case</Link>
                                    <Link to="/components/cooler" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Cooler</Link>
                                    <Link to="/components/monitor" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Monitor</Link>
                                    <Link to="/components/os" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-300" onClick={handleDropdownItemClick}>Operating System</Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/guides" className="font-medium text-gray-900 hover:text-gray-700">Guides</Link>
                        
                    </nav>
                    
                    <div className="flex items-center">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden" id="mobile-menu-toggle" onClick={toggleMobileMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        
            {/* Mobile Menu */}
            <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu-container">
                <div className="space-y-1 px-2 pb-3 pt-2 z-auto">
                    <Link to="/" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Home</Link>
                    <Link to="/builder" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Build</Link>
                    <button type="button" className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" id="mobile-products-dropdown" onClick={toggleMobileProductsDropdown}>
                        Products
                        <svg className="float-right h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className={`space-y-1 pl-6 ${mobileProductsDropdownOpen ? '' : 'hidden'}`} id="mobile-products-dropdown-menu" ref={mobileProductsDropdownRef}>
                        <a href="/components/cpu" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">CPU</a>
                        <a href="/components/gpu" className="block text-left  rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">GPU</a>
                        <a href="/components/motherboard" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Motherboard</a>
                        <a href="/components/ram" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">RAM</a>
                        <a href="/components/storage" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Storage</a>
                        <a href="/components/power-supply" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Power Supply</a>
                        <a href="/components/case" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Case</a>
                        <a href="/components/cooler" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cooling</a>
                        <a href="/components/monitor" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Monitor</a>
                        <a href="/components/os" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Operating system</a>
                    </div>
                    <Link to="/guides" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Guides</Link>
                    
                </div>
            </div>
        </header>
    );
};

export default Navbar;