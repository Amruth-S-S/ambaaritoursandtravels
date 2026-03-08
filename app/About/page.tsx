"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import {
  Users,
  Map,
  Mountain,
  Trophy,
  Sparkles,
=======
import { 
  Users, 
  Map, 
  Mountain, 
  Trophy, 
  Sparkles, 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
  ChevronRight,
  Building2,
  GraduationCap,
  Heart,
  Globe,
  Plane,
  Cloud,
  Bird,
  Flag,
  Castle,
  MapPin,
  Copyright,
  Award,
  Star
} from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import AnimatedImage from "../components/AnimatedImage";
import BackToTop from "../components/BackToTop";
<<<<<<< HEAD
import router, { useRouter } from "next/navigation";
=======
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const [visibleStats, setVisibleStats] = useState(Array(8).fill(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleStats(prev => prev.map((_, i) => true));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Properly typed animations
  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const
    }
  };

  const bounceAnimation = (index: number) => ({
    y: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: index * 0.2,
      ease: "easeInOut" as const
    }
  });

<<<<<<< HEAD
  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "mission", label: "Mission" },
    { id: "values", label: "Values" },
    { id: "team", label: "Team" }
  ];

  // Updated teamMembers without photos and social links
  const teamMembers = [
=======
    const tabs = [
      { id: "story", label: "Our Story" },
      { id: "mission", label: "Mission" },
      { id: "values", label: "Values" },
      { id: "team", label: "Team" }
    ];
  
    const teamMembers = [
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
    {
      id: 1,
      name: "Sharath Naik H O",
      role: "Founder & CEO",
<<<<<<< HEAD
      // experience: "10+ years",
      bio: "Passionate traveler with expertise in crafting unique experiences across India."
    },
    {
      id: 2,
      name: "Bhanushree",
      // role: "Senior Travel Consultant",
      // experience: "8+ years",
      bio: "Specializes in North India tours and pilgrimage packages."
    },
    {
      id: 3,
      name: "Arun Krishna",
      role: "Adventure Guide",
      // experience: "6+ years",
      bio: "Expert trekker and adventure sports specialist for Himalayan expeditions."
    },
    {
      id: 4,
      name: "Sonvi ",
      role: "Domestic Destination Expert",
      // experience: "5+ years",
      bio: "Ensures every traveler gets personalized attention and support."
    },
    {
      id: 5,
      name: "Hanumath ",
      role: "Content Creator , Video Editor",
      // experience: "12+ years",
      bio: "Expert in editing and content creation of all travel itineraries."
    },
    // {
    //   id: 6,
    //   name: "Meera Krishnan",
    //   role: "South India Specialist",
    //   experience: "7+ years",
    //   bio: "Deep knowledge of South Indian temples, culture, and heritage sites."
    // }
  ];

  const tabContent = {
    story: (
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 leading-relaxed mb-6">
          Ambaari Tours and Travels organizes expertly guided treks, domestic travel packages,
          and custom group trips across India. We specialize in bringing people together through
          travel, offering specialized services for corporate team-building events and energetic
          college excursions. At Ambaari, we don't just plan trips; we create stories. Join us
          for a customized travel experience designed just for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🏔️</div>
            <div className="font-bold text-white">100+ Treks</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🚌</div>
            <div className="font-bold text-white">50+ Destinations</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <div className="font-bold text-white">5000+ Travelers</div>
          </div>
        </div>
      </div>
    ),

    mission: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed italic">
            "To transform travel into transformative experiences that connect people, cultures,
            and landscapes through expertly curated journeys across India's most breathtaking destinations."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Our Vision</h4>
            <p className="text-gray-300">
              To become India's most trusted travel partner, known for creating unique,
              personalized experiences that exceed expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Our Promise</h4>
            <p className="text-gray-300">
              Every journey with us is crafted with care, safety, and attention to detail,
              ensuring memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    ),

    values: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Integrity",
              desc: "Honesty and transparency in every journey we plan and every interaction we have.",
              icon: "🤝",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Passion",
              desc: "Enthusiasm for exploration and creating unforgettable travel experiences.",
              icon: "❤️",
              color: "from-red-500 to-pink-500"
            },
            {
              title: "Excellence",
              desc: "Commitment to the highest quality service and attention to detail.",
              icon: "⭐",
              color: "from-yellow-500 to-amber-500"
            },
            {
              title: "Sustainability",
              desc: "Responsible travel practices that protect and preserve our destinations.",
              icon: "🌱",
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Community",
              desc: "Building lasting connections through shared travel experiences.",
              icon: "👥",
              color: "from-purple-500 to-indigo-500"
            }
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center text-2xl`}>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    team: (
      <div className="space-y-8">
        {/* Team Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">Our Expert Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the passionate individuals who make your travel dreams come true
          </p>
        </div>

        {/* Team Grid - Without Photos and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Decorative Header without image */}
              <div className="h-24 bg-gradient-to-r from-amber-500/20 to-orange-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl font-bold text-black">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Experience Badge - moved to top */}
              {/* <div className="absolute mt-2 ml-2">
                <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {member.experience}
                </span>
              </div> */}

              {/* Content */}
              <div className="p-5 pt-8">
                <h4 className="text-xl font-bold text-white mb-1 text-center">{member.name}</h4>
                <p className="text-amber-400 text-sm font-medium mb-3 text-center">{member.role}</p>
                <p className="text-gray-400 text-sm text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Team Members", value: teamMembers.length },
            { label: "Years Combined Experience", value: "48+" },
            { label: "Guided Tours", value: "500+" },
            { label: "Happy Travelers", value: "5000+" },
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        {/* <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 rounded-2xl">
          <h4 className="text-lg font-bold text-white mb-2">Join Our Team</h4>
          <p className="text-gray-300 mb-4">Passionate about travel? We're always looking for talented individuals.</p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-400 hover:to-orange-500 transition-all">
            View Careers
          </button>
        </div> */}
      </div>
    )
  };

  const stats = [
    { number: "100+", label: "Trips Organized", icon: <Map className="w-5 h-5" /> },
    { number: "10K+", label: "Happy Travelers", icon: <Users className="w-5 h-5" /> },
=======
      experience: "10+ years",
      // image: "/Images/team/sharath.jpg", 
      bio: "Passionate traveler with expertise in crafting unique experiences across India.",
      social: {
        // linkedin: "https://linkedin.com/in/sharath",
        instagram: "https://instagram.com/sharath",
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Senior Travel Consultant",
      experience: "8+ years",
      // image: "/Images/team/priya.jpg",
      bio: "Specializes in North India tours and pilgrimage packages.",
      social: {
        // linkedin: "https://linkedin.com/in/priya",
        instagram: "https://instagram.com/sharath",
      }
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Adventure Guide",
      experience: "6+ years",
      // image: "/Images/team/rahul.jpg",
      bio: "Expert trekker and adventure sports specialist for Himalayan expeditions.",
      social: {
        instagram: "https://instagram.com/rahul",
      }
    },
    {
      id: 4,
      name: "Anjali Desai",
      role: "Customer Experience Manager",
      experience: "5+ years",
      // image: "/Images/team/anjali.jpg",
      bio: "Ensures every traveler gets personalized attention and support.",
      social: {
        // linkedin: "https://linkedin.com/in/anjali",
        instagram: "https://instagram.com/anjali",
      }
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Tour Operations Head",
      experience: "12+ years",
      // image: "/Images/team/vikram.jpg",
      bio: "Expert in logistics and smooth execution of all travel itineraries.",
      social: {
        // linkedin: "https://linkedin.com/in/vikram",
        instagram: "https://instagram.com/vikram",
      }
    },
    {
      id: 6,
      name: "Meera Krishnan",
      role: "South India Specialist",
      experience: "7+ years",
      // image: "/Images/team/meera.jpg",
      bio: "Deep knowledge of South Indian temples, culture, and heritage sites.",
      social: {
        instagram: "https://instagram.com/meera",
      }
    }
  ];
  
    const tabContent = {
  story: (
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 leading-relaxed mb-6">
        Ambaari Tours and Travels organizes expertly guided treks, domestic travel packages, 
        and custom group trips across India. We specialize in bringing people together through 
        travel, offering specialized services for corporate team-building events and energetic 
        college excursions. At Ambaari, we don't just plan trips; we create stories. Join us 
        for a customized travel experience designed just for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">🏔️</div>
          <div className="font-bold text-white">100+ Treks</div>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">🚌</div>
          <div className="font-bold text-white">50+ Destinations</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
          <div className="text-3xl mb-2">🤝</div>
          <div className="font-bold text-white">5000+ Travelers</div>
        </div>
      </div>
    </div>
  ),
  
  mission: (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <p className="text-xl text-gray-200 leading-relaxed italic">
          "To transform travel into transformative experiences that connect people, cultures, 
          and landscapes through expertly curated journeys across India's most breathtaking destinations."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-3">Our Vision</h4>
          <p className="text-gray-300">
            To become India's most trusted travel partner, known for creating unique, 
            personalized experiences that exceed expectations.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-3">Our Promise</h4>
          <p className="text-gray-300">
            Every journey with us is crafted with care, safety, and attention to detail, 
            ensuring memories that last a lifetime.
          </p>
        </div>
      </div>
    </div>
  ),
  
  values: (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Integrity",
            desc: "Honesty and transparency in every journey we plan and every interaction we have.",
            icon: "🤝",
            color: "from-blue-500 to-cyan-500"
          },
          {
            title: "Passion",
            desc: "Enthusiasm for exploration and creating unforgettable travel experiences.",
            icon: "❤️",
            color: "from-red-500 to-pink-500"
          },
          {
            title: "Excellence",
            desc: "Commitment to the highest quality service and attention to detail.",
            icon: "⭐",
            color: "from-yellow-500 to-amber-500"
          },
          {
            title: "Sustainability",
            desc: "Responsible travel practices that protect and preserve our destinations.",
            icon: "🌱",
            color: "from-green-500 to-emerald-500"
          },
          {
            title: "Community",
            desc: "Building lasting connections through shared travel experiences.",
            icon: "👥",
            color: "from-purple-500 to-indigo-500"
          }
        ].map((value, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:scale-105 transition-all duration-300"
          >
            <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center text-2xl`}>
              {value.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
            <p className="text-gray-300">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
  
  team: (
    <div className="space-y-8">
      {/* Team Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-3">Our Expert Team</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meet the passionate individuals who make your travel dreams come true
        </p>
      </div>
      
      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              {/* <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              /> */}
              {/* Overlay with social links */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                {member.experience}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-amber-400 text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm line-clamp-2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Team Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: "Team Members", value: teamMembers.length },
          { label: "Years Combined Experience", value: "48+" },
          { label: "Guided Tours", value: "500+" },
          { label: "Happy Travelers", value: "5000+" },
        ].map((stat, index) => (
          <div key={index} className="text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4">
            <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Join Team CTA */}
      <div className="text-center mt-8 p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/20 rounded-2xl">
        <h4 className="text-lg font-bold text-white mb-2">Join Our Team</h4>
        <p className="text-gray-300 mb-4">Passionate about travel? We're always looking for talented individuals.</p>
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-400 hover:to-orange-500 transition-all">
          View Careers
        </button>
      </div>
    </div>
  )
};

  const stats = [
    { number: "100+", label: "Trips Organized", icon: <Map className="w-5 h-5" /> },
    // { number: "30+", label: "Destinations", icon: <Globe className="w-5 h-5" /> },
    { number: "10K+", label: "Happy Travelers", icon: <Users className="w-5 h-5" /> },
    // { number: "100+", label: "Corporate Events", icon: <Building2 className="w-5 h-5" /> },
    // { number: "200+", label: "College Groups", icon: <GraduationCap className="w-5 h-5" /> },
    // { number: "15", label: "Expert Guides", icon: <Mountain className="w-5 h-5" /> },
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
    { number: "98%", label: "Satisfaction Rate", icon: <Heart className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Trophy className="w-5 h-5" /> }
  ];

<<<<<<< HEAD
=======



>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
  const features = [
    { icon: <Sparkles />, title: "Expert Guided Treks", desc: "Professional guides for safe and memorable mountain adventures" },
    { icon: <Map />, title: "Domestic Packages", desc: "Curated itineraries across India's most beautiful destinations" },
    { icon: <Users />, title: "Custom Group Trips", desc: "Tailored experiences for families, friends, and organizations" },
    { icon: <Building2 />, title: "Corporate Events", desc: "Team-building retreats and corporate getaways" },
    { icon: <GraduationCap />, title: "College Excursions", desc: "Energetic and educational trips for students" },
    { icon: <Heart />, title: "Personalized Service", desc: "Customized travel experiences designed just for you" }
  ];

<<<<<<< HEAD
const router = useRouter();

  const handleViewPackages = () => {
    // You can add tracking or analytics here
    console.log("Navigating to packages page");
    router.push('/Packages');
  };

  const handleStartJourney = () => {
    // You can add logic here
    router.push('/Booking');
  };
=======
  const imageCategories = [
    { 
      name: "Air Adventures", 
      count: 2,
      icon: <Plane className="w-6 h-6" />,
      color: "from-blue-400/20 to-cyan-400/20",
    },
    { 
      name: "Sky Explorations", 
      count: 3,
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-400/20 to-red-500/20",
    },
    { 
      name: "Natural Wonders", 
      count: 4,
      icon: <Bird className="w-6 h-6" />,
      color: "from-green-400/20 to-emerald-500/20",
    },
    { 
      name: "Global Icons", 
      count: 3,
      icon: <Castle className="w-6 h-6" />,
      color: "from-purple-400/20 to-violet-500/20",
    }
  ];
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769

  return (
    <>
      <Navbar />
<<<<<<< HEAD

=======
      
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-24 pb-16 px-4">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"
            animate={rotateAnimation}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear" as const
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
<<<<<<< HEAD
          {/* Hero Section */}
=======
          {/* Hero Section with about3.jpeg */}
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
          <motion.div
            className="relative mb-16 rounded-3xl overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
<<<<<<< HEAD
            <div className="relative h-64 md:h-80 lg:h-96">
              <AnimatedImage
                src="/Images/img21.jpg"
=======
            {/* Main about3.jpeg image with overlay */}
            <div className="relative h-64 md:h-80 lg:h-96">
              {/* Background image */}
              <AnimatedImage
                src="/Images/img3.jpg"
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                alt="Ambaari Tours and Travels"
                className="h-full w-full"
                hoverScale={1.02}
                borderRadius="rounded-3xl"
              />
<<<<<<< HEAD

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <motion.div
=======
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
<<<<<<< HEAD
                  <motion.div
=======
                  <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                    className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400/20 backdrop-blur-sm border border-yellow-500/30 rounded-full mb-6"
                    animate={floatAnimation}
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="text-yellow-400 font-bold text-lg tracking-wider">AMBAARI TOURS AND TRAVELS</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  </motion.div>
<<<<<<< HEAD

                  <motion.h1
=======
                  
                  <motion.h1 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Global Inspirations
                  </motion.h1>
<<<<<<< HEAD

                  <motion.p
=======
                  
                  <motion.p 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                    className="text-xl text-gray-300 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Bringing world-class travel experiences to India
                  </motion.p>
                </motion.div>
              </div>
<<<<<<< HEAD

              {/* <motion.div
=======
              
              {/* Floating elements */}
              <motion.div
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                className="absolute top-8 left-8 w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-500/30 flex items-center justify-center"
                animate={floatAnimation}
              >
                <Award className="w-6 h-6 text-yellow-400" />
<<<<<<< HEAD
              </motion.div> */}
              {/* <motion.div
=======
              </motion.div>
              <motion.div
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-blue-400/10 border border-blue-500/30 flex items-center justify-center"
                animate={{
                  ...floatAnimation,
                  transition: { ...floatAnimation.transition, delay: 1 }
                }}
              >
                <Star className="w-6 h-6 text-blue-400" />
<<<<<<< HEAD
              </motion.div> */}
=======
              </motion.div>
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
            </div>
          </motion.div>

          {/* Stats Section */}
<<<<<<< HEAD
          <motion.div
=======
          <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20"
                variants={itemVariants}
<<<<<<< HEAD
                whileHover={{
=======
                whileHover={{ 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                  y: -5,
                  borderColor: "rgba(251, 191, 36, 0.5)",
                }}
                onViewportEnter={() => {
                  const newVisible = [...visibleStats];
                  newVisible[index] = true;
                  setVisibleStats(newVisible);
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-yellow-400/10 rounded-lg">
                    {stat.icon}
                  </div>
<<<<<<< HEAD
                  <motion.span
=======
                  <motion.span 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                    className="text-2xl font-bold text-yellow-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: visibleStats[index] ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.span>
                </div>
                <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
          {/* Image Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedImage
                src="/Images/logo.jpeg"
                alt="Ambaari Travel Experiences"
                className="h-full"
                hoverScale={1.1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl font-bold text-white">Our Journey</h3>
                <p className="text-gray-300 text-sm">Since 2025</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedImage
                src="/Images/img20.jpg"
                alt="Our Mission"
                className="h-full"
                hoverScale={1.1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-300 text-sm">Creating memories since 2025</p>
              </div>
            </motion.div>
          </div>

          {/* About Content Section */}
          <div className="mb-20">
            <motion.div
=======
          {/* Image Categories Section */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
              Our Travel Universe
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {imageCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl p-6 border border-white/10`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.name}</h3>
                      <p className="text-gray-300 text-sm">{category.count} unique experiences</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}

            {/* Image Grid with about3.jpeg and img1.jpg */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Left: about3.jpeg with parallax effect */}
              <motion.div
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatedImage
                  src="/Images/logo.jpeg"
                  alt="Ambaari Travel Experiences"
                  className="h-full"
                  hoverScale={1.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-xl font-bold text-white">Our Journey</h3>
                  <p className="text-gray-300 text-sm">Since 2025</p>
                </div>
              </motion.div>

              {/* Right: img1.jpg with bounce animation */}
              {/* <motion.div
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatedImage
                  src="/Images/img1.jpg"
                  alt="All Rights Reserved"
                  className="h-full"
                  hoverScale={1.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="bg-black/60 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/30"
                    animate={floatAnimation}
                  >
                    <div className="flex items-center gap-3">
                      <Copyright className="w-8 h-8 text-yellow-400" />
                      <div>
                        <h3 className="text-xl font-bold text-white">© 2024</h3>
                        <p className="text-gray-300 text-sm">All rights reserved</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div> */}
            </div>

            {/* Floating image preview */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Air Adventures", icon: <Plane />, color: "border-blue-500/40" },
                { label: "Sky Explorations", icon: <Cloud />, color: "border-orange-500/40" },
                { label: "Natural Flight", icon: <Bird />, color: "border-green-500/40" },
                { label: "Global Icons", icon: <Castle />, color: "border-purple-500/40" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`aspect-square rounded-xl border-2 ${item.color} bg-gray-900/30 backdrop-blur-sm overflow-hidden relative group`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  animate={index % 2 === 0 ? floatAnimation : {
                    ...floatAnimation,
                    transition: { ...floatAnimation.transition, delay: 0.5 }
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <motion.div 
                      className="mb-3 text-gray-400"
                      whileHover={{ scale: 1.2, color: "#fbbf24" }}
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-white font-bold text-center text-sm">{item.label}</h4>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* About Content Section */}
          <div className="mb-20">
            <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Journey</h2>
<<<<<<< HEAD

=======
              
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
<<<<<<< HEAD
                    className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${activeTab === tab.id
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                      }`}
=======
                    className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                    }`}
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-semibold">{tab.label}</span>
                    {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 max-w-4xl mx-auto"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden md:block flex-shrink-0">
<<<<<<< HEAD
                    <motion.div
=======
                    <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center border border-yellow-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {activeTab === "story" && <Map className="w-12 h-12 text-yellow-400" />}
                      {activeTab === "mission" && <Flag className="w-12 h-12 text-yellow-400" />}
                      {activeTab === "values" && <Heart className="w-12 h-12 text-yellow-400" />}
                      {activeTab === "team" && <Users className="w-12 h-12 text-yellow-400" />}
                    </motion.div>
                  </div>
<<<<<<< HEAD

=======
                  
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {tabs.find(t => t.id === activeTab)?.label}
                    </h3>
<<<<<<< HEAD
                    {tabContent[activeTab as keyof typeof tabContent]}

                    {activeTab === "story" && (
                      <motion.div
=======
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {tabContent[activeTab as keyof typeof tabContent]}
                    </p>
                    
                    {activeTab === "story" && (
                      <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                        className="mt-6 p-6 bg-gradient-to-r from-yellow-400/10 to-orange-400/5 rounded-2xl border border-yellow-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4">
                          <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-yellow-400 mb-2">Our Philosophy</h4>
                            <p className="text-gray-300">
                              We believe travel should be transformative. Every journey with Ambaari is carefully crafted
                              to create lasting memories, build connections, and inspire personal growth through exploration.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Features Grid */}
<<<<<<< HEAD
            <motion.div
=======
            <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
                What We Specialize In
              </h2>
<<<<<<< HEAD

=======
              
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 group"
                    variants={itemVariants}
<<<<<<< HEAD
                    whileHover={{
=======
                    whileHover={{ 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                      y: -8,
                      borderColor: "rgba(251, 191, 36, 0.4)",
                    }}
                    animate={bounceAnimation(index)}
                  >
<<<<<<< HEAD
                    <motion.div
=======
                    <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-black">
                        {feature.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

<<<<<<< HEAD
          {/* Footer Section */}
          <motion.div
=======
          {/* Footer Section with img1.jpg */}
          <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
            className="text-center relative rounded-3xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-48 md:h-64">
              <AnimatedImage
<<<<<<< HEAD
                src="/Images/img10.jpg"
                alt="Ambaari Tours"
=======
                src="/Images/img1.jpg"
                alt="All Rights Reserved 2024"
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                className="h-full w-full"
                hoverScale={1.03}
                borderRadius="rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
<<<<<<< HEAD
=======
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <motion.div
                  className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-yellow-500/30"
                  animate={floatAnimation}
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Copyright className="w-8 h-8 text-yellow-400" />
                    <h3 className="text-3xl font-bold text-white">2024</h3>
                  </div>
                  <p className="text-xl text-gray-300">All rights reserved</p>
                  <p className="text-yellow-400 font-bold mt-2">Ambaari Tours and Travels</p>
                </motion.div> */}
              </div>
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
            </div>
          </motion.div>

          {/* CTA Section */}
<<<<<<< HEAD
          <motion.div
=======
          <motion.div 
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-yellow-400/10 via-black to-yellow-400/10 rounded-3xl p-12 border border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
<<<<<<< HEAD

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Story?
              </h3>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of travelers who have experienced India like never before.
                Let's craft your perfect journey together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleStartJourney}
=======
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Story?
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of travelers who have experienced India like never before. 
                Let's craft your perfect journey together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all shadow-2xl shadow-yellow-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
<<<<<<< HEAD

                <motion.button
                  onClick={handleViewPackages}
=======
                <motion.button
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
                  className="bg-gray-800/50 border border-yellow-500/30 text-yellow-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Packages
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
<<<<<<< HEAD
      <BackToTop />
=======
      <BackToTop/>
>>>>>>> e6f0efaa306a7d430cdede445e1abb0706b7e769
    </>
  );
}