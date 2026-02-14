"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe, Home, MapPin } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Package data
  const packages = {
    international: [
      { name: "Europe Dream Tour", path: "/Packages?package=1" },
      // { name: "Dubai Luxury Escape", path: "/Packages?package=2" },
      { name: "Turkey Adventure", path: "/Packages?package=4" },
      { name: "Thailand Paradise", path: "/Packages?package=6" },
    ],
    domestic: {
      north: [
        { name: "Varanasi & Ayodhya", path: "/Packages?package=3" },
        { name: "Ladakh Adventure", path: "/Packages?package=8" },
      ],
      south: [
        { name: "Karnataka Temple Tour", path: "/Packages?package=7" },
        { name: "Mantralaya Day Trip", path: "/Packages?package=5" },
        { name: "Goa Beach Vacation", path: "/Packages?package=9" },
      ]
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
      show ? "translate-y-0" : "-translate-y-full"
    } bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg border-b border-yellow-500/20`}>
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/nav-logo.jpg"
              alt="Ambaari"
              width={500}
              height={70}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/About" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
              Gallery
            </Link>
            
            {/* Packages Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-200 hover:text-yellow-400 transition-colors font-medium">
                Packages
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-gradient-to-b from-gray-900 to-black border border-yellow-500/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4">
                  {/* International */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm mb-2">
                      <Globe className="w-4 h-4" />
                      International
                    </div>
                    <div className="space-y-1 ml-6">
                      {packages.international.map((pkg) => (
                        <Link
                          key={pkg.name}
                          href={pkg.path}
                          className="block px-3 py-2 text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 rounded-lg transition-all text-sm"
                        >
                          {pkg.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Domestic */}
                  <div>
                    <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm mb-2">
                      <Home className="w-4 h-4" />
                      Domestic
                    </div>
                    
                    {/* North */}
                    <div className="mb-3 ml-6">
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-1">
                        <MapPin className="w-3 h-3" />
                        North India
                      </div>
                      <div className="space-y-1 ml-4">
                        {packages.domestic.north.map((pkg) => (
                          <Link
                            key={pkg.name}
                            href={pkg.path}
                            className="block px-3 py-1 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded-lg transition-all text-sm"
                          >
                            {pkg.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* South */}
                    <div className="ml-6">
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-1">
                        <MapPin className="w-3 h-3" />
                        South India
                      </div>
                      <div className="space-y-1 ml-4">
                        {packages.domestic.south.map((pkg) => (
                          <Link
                            key={pkg.name}
                            href={pkg.path}
                            className="block px-3 py-1 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded-lg transition-all text-sm"
                          >
                            {pkg.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* View All */}
                  <div className="mt-4 pt-3 border-t border-yellow-500/20">
                    <Link
                      href="/Packages"
                      className="block text-center text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
                    >
                      View All Packages →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/Contact" className="text-gray-200 hover:text-yellow-400 transition-colors font-medium">
              Contact
            </Link>
            
            <Link
              href="/Booking"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-500 transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-yellow-400" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-yellow-500/20">
            <div className="space-y-2 mb-4">
              <Link href="/" className="block px-4 py-3 text-gray-200 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link href="/About" className="block px-4 py-3 text-gray-200 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all" onClick={() => setOpen(false)}>
                About
              </Link>
              
              {/* Packages Accordion */}
              <div>
                <button
                  onClick={() => setPackageOpen(!packageOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-200 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all"
                >
                  <span>Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${packageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {packageOpen && (
                  <div className="ml-6 mt-2 space-y-3">
                    <div>
                      <div className="text-yellow-400 text-sm font-semibold px-4 py-2">🌍 International</div>
                      <div className="space-y-1">
                        {packages.international.map((pkg) => (
                          <Link
                            key={pkg.name}
                            href={pkg.path}
                            className="block px-6 py-2 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all text-sm"
                            onClick={() => setOpen(false)}
                          >
                            {pkg.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-yellow-400 text-sm font-semibold px-4 py-2">🇮🇳 Domestic</div>
                      <div className="ml-4">
                        <div className="text-gray-500 text-xs font-medium px-4 py-1">North India</div>
                        <div className="space-y-1">
                          {packages.domestic.north.map((pkg) => (
                            <Link
                              key={pkg.name}
                              href={pkg.path}
                              className="block px-6 py-1 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all text-sm"
                              onClick={() => setOpen(false)}
                            >
                              {pkg.name}
                            </Link>
                          ))}
                        </div>
                        
                        <div className="text-gray-500 text-xs font-medium px-4 py-1 mt-2">South India</div>
                        <div className="space-y-1">
                          {packages.domestic.south.map((pkg) => (
                            <Link
                              key={pkg.name}
                              href={pkg.path}
                              className="block px-6 py-1 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all text-sm"
                              onClick={() => setOpen(false)}
                            >
                              {pkg.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/Contact" className="block px-4 py-3 text-gray-200 hover:bg-yellow-500/10 hover:text-yellow-400 rounded transition-all" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
            
            <div className="px-4">
              <Link
                href="/Booking"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-500 transition-all"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}