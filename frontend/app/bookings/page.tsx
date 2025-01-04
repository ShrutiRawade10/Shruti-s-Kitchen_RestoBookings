'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../../hooks/use-toast';
import { CalendarDays, Clock, Users, Mail, Phone, Trash2, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch bookings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id: string) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBookings(bookings.filter(booking => booking._id !== id));
        toast({
          title: "Success",
          description: "Booking cancelled successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel booking",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-light text-white mb-8">My <span className="font-bold">Reservations</span></h1>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-white" />
            </div>
          ) : bookings.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <p className="text-white/80">No reservations found</p>
            </div>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <motion.div
                  key={booking._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white border border-white/10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Name</p>
                          <p className="font-medium">{booking.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Date</p>
                          <p className="font-medium">{format(new Date(booking.date), "MMMM d, yyyy")}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Time</p>
                          <p className="font-medium">{booking.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Guests</p>
                          <p className="font-medium">{booking.guests} People</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Email</p>
                          <p className="font-medium">{booking.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-white/60" />
                        <div>
                          <p className="text-sm text-white/60">Phone</p>
                          <p className="font-medium">{booking.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-sm text-white/60">
                      Booking ID: {booking._id}
                    </div>
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Cancel Reservation
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 