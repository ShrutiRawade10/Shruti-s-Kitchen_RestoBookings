'use client';

import { useState } from 'react';
import { Star, MapPin, Share2, Navigation2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function RestaurantHeader() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative min-h-[500px] lg:min-h-[600px] -mt-16">
      {/* Hero Image Section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
          alt="Flavors of India Restaurant"
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white max-w-3xl"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              Authentic Indian
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              Fine Dining
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              Pure Vegetarian
            </span>
          </div>

          {/* Title & Rating */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Flavors of India
          </h1>
          
          <div className="flex items-center gap-4 text-lg mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.8</span>
              <span className="text-white/70">(1.2k+ reviews)</span>
            </div>
            <span className="text-white/70">•</span>
            <span className="text-white/70">₹₹₹</span>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white/70" />
              <span>FC Road, Deccan Gymkhana, Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-white/70" />
              <span>Open until 11:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Navigation2 className="w-5 h-5 text-white/70" />
              <span>1.5 km away</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Status Bar */}
      <div className="relative z-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/90 text-sm">Open Now</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5 text-white/90" />
              </button>
              <button className="px-6 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-medium">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 