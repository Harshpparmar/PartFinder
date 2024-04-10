import React, { useState, useRef, useEffect } from 'react';

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

    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 ">
            
                <div className="mx-0 w-full flex h-16 justify-between">
                    <div className="flex items-center">
                        <a href="/">
                            <img className="block h-8 w-auto lg:hidden" src="photos/cpu (1).png" alt="Logo" />
                            <img className="hidden h-8 w-auto lg:block" src="photos/cpu (1).png" alt="Logo" />
                        </a>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <a href="/" className="font-medium text-gray-900 hover:text-gray-700">Home</a>
                        <a href="/build" className="font-medium text-gray-900 hover:text-gray-700">Build</a>
                        <div className="relative" ref={productsDropdownRef}>
                            <button type="button" className="flex items-center font-medium text-gray-900 hover:text-gray-700" onClick={toggleProductsDropdown}>
                                Products
                                <svg className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className={`absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${productsDropdownOpen ? '' : 'hidden'}`}>
                                <div className="py-1">
                                    <a href="/components/cpu" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">CPU</a>
                                    <a href="/components/gpu" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">GPU</a>
                                    <a href="/components/motherboard" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Motherboard</a>
                                    <a href="/components/ram" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">RAM</a>
                                    <a href="/components/storage" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Storage</a>
                                    <a href="/components/power-supply" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Power Supply</a>
                                    <a href="/components/case" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Case</a>
                                    <a href="/components/cooling" className="block px-4 py-2 text-left text-gray-700 hover:bg-gray-100">Cooling</a>
                                </div>
                            </div>
                        </div>
                        <a href="/complete-builds" className="font-medium text-gray-900 hover:text-gray-700">Complete Builds</a>
                        <a href="/guides" className="font-medium text-gray-900 hover:text-gray-700">Guides</a>
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
            
        
            {/* Mobile Menu */}
            <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu-container">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="/" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Home</a>
                    <a href="/build" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Build</a>
                    <button type="button" className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900" id="mobile-products-dropdown" onClick={toggleMobileProductsDropdown}>
                        Products
                        <svg className="float-right h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                        <a href="/components/cooling" className="block text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cooling</a>
                    </div>
                    <a href="/" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Complete Builds</a>
                    <a href="/build" className="block rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Build Guide</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;