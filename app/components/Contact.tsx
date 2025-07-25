'use client';

import { AnimatedTitle } from './AnimatedTitle';
import { ContactForm } from './ContactForm';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedTitle>
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Plan Your <span className="text-orange-400">Event</span>
            </h2>
          </div>
        </AnimatedTitle>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tell us about your event and we'll create a customized catering experience that your guests will never forget
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-900 font-semibold">(323) 561-2750</p>
                  <p className="text-gray-600 text-sm">Mon-Sat: 9AM - 7PM PST</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-900 font-semibold">catering@crustandflamepizza.com</p>
                  <p className="text-gray-600 text-sm">Response within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Service Area</h4>
                  <p className="text-gray-900 font-semibold">Greater Los Angeles Area</p>
                  <p className="text-gray-600 text-sm">Los Angeles, Orange County, Ventura County & surrounding areas</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Booking Notice</h4>
                  <p className="text-gray-900 font-semibold">Minimum 2 weeks advance</p>
                  <p className="text-gray-600 text-sm">Peak season: 4-6 weeks recommended</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}