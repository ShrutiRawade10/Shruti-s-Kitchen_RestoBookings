'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '../hooks/use-toast';

export function HeroSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', 
    '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.date || !formData.time) {
      toast({
        title: 'Error',
        description: 'Please select date and time',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
      toast({
        title: 'Error',
        description: 'Please enter a valid 10-digit phone number',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast({
        title: 'Success!',
        description: 'Your table has been reserved successfully.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
      });

    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to make reservation',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center -mt-15">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Experience the Art of 
              <span className="block font-bold mt-2">Indian Cuisine</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              Immerse yourself in an unforgettable dining experience with our 
              authentic flavors and modern ambiance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/menu"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
              >
                <span>View Menu</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/20 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10"
          >
            <h2 className="text-white text-2xl font-medium mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Details */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 text-white border-0 rounded-xl p-4 placeholder:text-white/60 focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 text-white border-0 rounded-xl p-4 placeholder:text-white/60 focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 text-white border-0 rounded-xl p-4 placeholder:text-white/60 focus:ring-2 focus:ring-white/20"
                />
              </div>

              {/* Booking Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-transparent text-white border-0 p-0 focus:ring-0"
                  />
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-transparent text-white border-0 p-0 focus:ring-0"
                  >
                    <option value="" disabled className="text-black">Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="text-black">
                        {new Date(`2024-01-01T${time}`).toLocaleTimeString('en-US', {
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-transparent text-white border-0 p-0 focus:ring-0"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num} className="text-black">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>      
              </div>
            

               
              

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Confirming...' : 'Reserve Table'}
              </button>
            </form>

            <p className="text-white/60 text-sm text-center mt-6">
              Or call us at +91 5698745632
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

