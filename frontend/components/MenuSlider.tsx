'use client';

import { motion } from 'framer-motion';
import { Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const menuItems = [
  {
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese grilled to perfection with Indian spices',
    price: '₹395',
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc'
  },
  {
    name: 'Dal Makhani',
    description: 'Black lentils slow-cooked overnight with mild spices and cream',
    price: '₹445',
    isSpicy: false,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
  },
  {
    name: 'Palak Paneer',
    description: 'Fresh spinach curry with cottage cheese and aromatic spices',
    price: '₹425',
    isSpicy: false,
    image: 'https://images.unsplash.com/photo-1618449840665-9ed506d73a34'
  },
  {
    name: 'Veg Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables and royal spices',
    price: '₹495',
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8'
  },
  {
    name: 'Mushroom Masala',
    description: 'Fresh mushrooms in rich tomato and cashew gravy with Indian spices',
    price: '₹475',
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252'
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in creamy tomato butter gravy',
    price: '₹495',
    isSpicy: false,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7'
  }
];

export function MenuSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Popular Dishes</h2>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 bg-orange-500 text-white rounded-full p-2 shadow-lg hover:bg-orange-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-40 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Menu Items */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex-shrink-0 w-[300px]"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.isSpicy && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs px-2 py-1 bg-red-500 text-white rounded-full">
                    <Flame className="w-3 h-3" /> Spicy
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-medium text-orange-500">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 