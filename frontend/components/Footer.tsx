'use client';

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Shruti's Kitchen</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience authentic Indian cuisine in an elegant setting. 
              We take pride in serving the finest vegetarian dishes made with fresh, 
              hand-picked ingredients and traditional recipes passed down through generations.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Shop No. 7, Crystal Plaza,
                  <br />Dhole Patil Road,
                  <br />Pune, Maharashtra 411001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <div className="text-gray-400">
                  <p>Reservations: +91 20 2612 1234</p>
                  <p>Take Away: +91 95959 12345</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:contact@shrutiskitchen.com" className="text-gray-400 hover:text-orange-300 transition-colors">
                  contact@shrutiskitchen.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div className="mb-3">
                    <p className="font-medium text-orange-400">Lunch Service</p>
                    <p>Monday - Sunday</p>
                    <p>11:30 AM - 3:30 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-orange-400">Dinner Service</p>
                    <p>Monday - Sunday</p>
                    <p>6:30 PM - 11:00 PM</p>
                  </div>
                  <p className="mt-3 text-sm">
                    <span className="text-orange-400">*</span> Last order 30 minutes before closing
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shruti's Kitchen. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 