"use client";
import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { SocialLinks } from "./SocialLinks";
import { Mail, MessageCircle, Send, Heart } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-6 relative">
      {/* Background effects */}
      {/* <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-96 left-80 w-96 h-96 bg-[#00D1FF] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-96 right-80 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div> */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 animate-fade-in">
            Let's <span className="text-[#00D1FF]">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Drop me a message and let's create something amazing together.
          </p>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1  max-w-2xl mx-auto mb-12">
            <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 animate-fade-in delay-300">
              <Mail className="w-8 h-8 text-[#00D1FF] mx-auto mb-3" />
              <h3 className="text-white mb-2">Email Me</h3>
              <p className="text-gray-400 text-sm">maaztalha33@gmail.com</p>
            </div>
            {/* <div className="p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00D1FF]/30 transition-all duration-300 animate-fade-in delay-400">
              <MessageCircle className="w-8 h-8 text-[#00D1FF] mx-auto mb-3" />
              <h3 className="text-white mb-2">Let's Chat</h3>
              <p className="text-gray-400 text-sm">Available for freelance work</p>
            </div> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-fade-in delay-500">
            <ContactForm />
          </div>

          {/* Social Links & Info */}
          <div className="animate-fade-in delay-600">
            <SocialLinks />
            
            {/* Additional Info */}
            {/* <div className="mt-8 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#00D1FF]" />
                Quick Response
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                I typically respond within 24 hours. For urgent matters, feel free to reach out 
                on LinkedIn for a faster response.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-[#00D1FF]">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-green-400">Open to projects</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Zone</span>
                  <span className="text-gray-400">EST (UTC-5)</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Call-to-Action Footer */}
        {/* <div className="mt-20 text-center animate-fade-in delay-700">
          <div className="p-8 rounded-2xl backdrop-blur-md bg-gradient-to-r from-[#00D1FF]/10 via-purple-500/10 to-[#00D1FF]/10 border border-[#00D1FF]/20">
            <h3 className="text-2xl text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you need a new website, web application, or want to collaborate on something exciting, 
              I'm here to help bring your ideas to life with modern technologies and clean design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-[#00D1FF] text-black rounded-full hover:bg-[#00B8E6] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Send className="w-4 h-4" />
                Start a Project
              </button>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400" /> and lots of coffee
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}