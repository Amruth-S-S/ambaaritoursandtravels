"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, Users, MapPin, Clock, CheckCircle, Plane, Hotel, Utensils, Ticket, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import BackToTop from "../components/BackToTop";
import { useSearchParams } from "next/navigation";

const packages = [
  {
    id: 1,
    title: "Europe Dream Tour",
    description: "Experience the magic of Europe with our exclusive 10-day tour covering Paris, Rome, Amsterdam, and Switzerland",
    price: "₹3,70,999",
    duration: "10 Days 9 Nights",
    group: "Max 20 People",
    highlight: "Bestseller",
    image: "/Images/europe.png",
    color: "from-blue-500 to-purple-600",
    places: ["Paris", "Rome", "Amsterdam", "Swiss Alps", "Venice"],
    inclusions: [
      { icon: Plane, text: "Return Flights" },
      { icon: Hotel, text: "5-Star Hotels" },
      { icon: Utensils, text: "All Meals" },
      { icon: Ticket, text: "Entry Tickets" },
    ],
    details: [
      "Eiffel Tower visit with dinner",
      "Roman Colosseum guided tour",
      "Amsterdam canal cruise",
      "Swiss mountain train ride",
      "Venice gondola experience"
    ],
    region: "international",
    country: "Multiple",
    category: "luxury",
    tags: ["europe", "multi-country", "luxury"]
  },
  {
    id: 3,
    title: "Varanasi & Ayodhya Pilgrimage",
    description: "Spiritual journey through India's most sacred cities with complete temple darshan arrangements",
    price: "₹38,899",
    duration: "4 Days 3 Nights",
    group: "All Age Groups",
    highlight: "Spiritual",
    image: "/Images/varanasi.png",
    color: "from-yellow-500 to-red-600",
    places: ["Kashi Vishwanath", "Ayodhya Ram Mandir", "Sarnath", "Hanuman Garhi"],
    inclusions: [
      { icon: Hotel, text: "Comfort Stay" },
      { icon: Utensils, text: "Satvik Meals" },
      { icon: Ticket, text: "Pooja Arrangements" },
      { icon: Users, text: "Tour Guide" },
    ],
    details: [
      "Special darshan at Kashi Vishwanath",
      "Ayodhya Ram Mandir visit",
      "Ganga Aarti experience",
      "Sarnath Buddhist tour",
      "All transportation included"
    ],
    region: "domestic",
    zone: "north",
    subType: "pilgrimage",
    category: "spiritual",
    tags: ["north-india", "temples", "spiritual"]
  },
  {
    id: 4,
    title: "Turkey Adventure",
    description: "Discover the cultural blend of Europe and Asia with hot air balloon rides and ancient wonders",
    price: "₹2,13,175",
    duration: "7 Days 6 Nights",
    group: "Max 18 People",
    highlight: "Adventure",
    image: "/Images/turkey.png",
    color: "from-red-500 to-pink-600",
    places: ["Cappadocia", "Istanbul", "Pamukkale", "Ephesus"],
    inclusions: [
      { icon: Plane, text: "International Flights" },
      { icon: Hotel, text: "4-Star Hotels" },
      { icon: Utensils, text: "Most Meals" },
      { icon: Ticket, text: "Activities Included" },
    ],
    details: [
      "Cappadocia hot air balloon ride",
      "Hagia Sophia & Blue Mosque",
      "Pamukkale thermal pools",
      "Ephesus ancient city tour",
      "Bosphorus cruise"
    ],
    region: "international",
    country: "Turkey",
    category: "adventure",
    tags: ["hot-air-balloon", "historical", "cultural"]
  },
  {
    id: 5,
    title: "Mantralaya Day Trip",
    description: "Quick spiritual getaway from Bangalore to Mantralaya with hassle-free arrangements",
    price: "₹2,799",
    duration: "1 Day",
    group: "Flexible",
    highlight: "Budget",
    image: "/Images/Mantralaya 1D Package From Bamgalore.png",
    color: "from-green-500 to-teal-600",
    places: ["Mantralaya Temple", "Tungabhadra River"],
    inclusions: [
      { icon: Users, text: "AC Transport" },
      { icon: Utensils, text: "Meals Included" },
      { icon: Ticket, text: "Temple Entry" },
      { icon: Clock, text: "Same Day Return" },
    ],
    details: [
      "Early morning departure from Bangalore",
      "Breakfast & lunch included",
      "Temple darshan arrangements",
      "AC vehicle transportation",
      "Evening return to Bangalore"
    ],
    region: "domestic",
    zone: "south",
    subType: "budget",
    category: "spiritual",
    tags: ["south-india", "day-trip", "budget"]
  },
  {
    id: 6,
    title: "Thailand Paradise",
    description: "Complete Thailand experience with island hopping, cultural shows, and adventure activities",
    price: "₹45,999",
    duration: "6 Days 5 Nights",
    group: "Max 25 People",
    highlight: "All Inclusive",
    image: "/Images/Thailand 4N5D (4).png",
    color: "from-pink-500 to-rose-600",
    places: ["Bangkok", "Pattaya", "Coral Island", "Safari World"],
    inclusions: [
      { icon: Plane, text: "Return Flights" },
      { icon: Hotel, text: "Beach Resorts" },
      { icon: Utensils, text: "All Meals" },
      { icon: Users, text: "Tour Manager" },
    ],
    details: [
      "Tiger Park visit",
      "Coral Island snorkeling",
      "Floating market tour",
      "Dinner cruise with show",
      "Alcazar performance",
      "Safari World & Marine Park"
    ],
    region: "international",
    country: "Thailand",
    category: "beach",
    tags: ["beach", "island", "cultural-show"]
  },
  {
    id: 7,
    title: "South Karnataka Temple Tour",
    description: "Explore the architectural marvels and spiritual centers of South Karnataka",
    price: "₹2,999",
    duration: "5 Days 4 Nights",
    group: "All Age Groups",
    highlight: "Cultural",
    image: "/Images/SOUTH KARNATAKA TEMPLE TOUR.png",
    color: "from-indigo-500 to-blue-600",
    places: ["Mysore", "Hassan", "Belur", "Halebid", "Shravanabelagola"],
    inclusions: [
      { icon: Hotel, text: "Hotel Stay" },
      { icon: Users, text: "AC Transport" },
      { icon: Utensils, text: "Breakfast & Dinner" },
      { icon: Ticket, text: "All Entry Fees" },
    ],
    details: [
      "Mysore Palace visit",
      "Hassan temples tour",
      "Belur & Halebid heritage sites",
      "Shravanabelagola monolith",
      "Expert guide throughout"
    ],
    region: "domestic",
    zone: "south",
    subType: "cultural",
    category: "heritage",
    tags: ["south-india", "temples", "heritage", "cultural"]
  },
];

export default function PackagesContent() {
  const [activePackage, setActivePackage] = useState(packages[0]);
  const searchParams = useSearchParams();
  
  // Hierarchical filter states
  const [selectedRegion, setSelectedRegion] = useState("all"); // "all", "domestic", "international"
  const [selectedZone, setSelectedZone] = useState("all"); // "all", "north", "south" (only for domestic)
  const [selectedSubType, setSelectedSubType] = useState("all"); // "all", "pilgrimage", "trekking", "adventure", "budget", "cultural"
  
  const packageId = searchParams.get("package");

  // Advanced filtering logic
  const filteredPackages = packages.filter((pkg) => {
    // Region filter
    if (selectedRegion !== "all" && pkg.region !== selectedRegion) {
      return false;
    }

    // Zone filter (only applies to domestic packages)
    if (selectedRegion === "domestic" && selectedZone !== "all") {
      if (pkg.zone !== selectedZone) {
        return false;
      }
    }

    // SubType filter (only applies when zone is selected for domestic)
    if (selectedRegion === "domestic" && selectedZone !== "all" && selectedSubType !== "all") {
      if (pkg.subType !== selectedSubType) {
        return false;
      }
    }

    return true;
  });

  // Reset dependent filters when parent filter changes
  useEffect(() => {
    if (selectedRegion === "international") {
      setSelectedZone("all");
      setSelectedSubType("all");
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedZone === "all") {
      setSelectedSubType("all");
    }
  }, [selectedZone]);

  // Handle query parameter when page loads
  useEffect(() => {
    if (packageId) {
      const selectedPkg = packages.find(p => p.id === parseInt(packageId));
      if (selectedPkg) {
        setActivePackage(selectedPkg);

        setTimeout(() => {
          const element = document.getElementById(`package-${packageId}`);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            element.classList.add("ring-4", "ring-amber-500/50", "scale-[1.02]");
            setTimeout(() => {
              element.classList.remove("ring-4", "ring-amber-500/50", "scale-[1.02]");
            }, 3000);
          }
        }, 500);
      }
    }
  }, [packageId]);

  // Get filter summary text
  const getFilterSummary = () => {
    if (selectedRegion === "all") return "All Packages";
    
    let summary = selectedRegion === "domestic" ? "Domestic" : "International";
    
    if (selectedRegion === "domestic" && selectedZone !== "all") {
      summary += ` > ${selectedZone === "north" ? "North India" : "South India"}`;
      
      if (selectedSubType !== "all") {
        const subTypeLabels = {
          pilgrimage: "Pilgrimage",
          trekking: "Trekking",
          adventure: "Adventure",
          budget: "Budget Friendly",
          cultural: "Cultural"
        };
        summary += ` > ${subTypeLabels[selectedSubType]}`;
      }
    }
    
    return summary;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Images/imp2.jpg"
              alt="World Destinations"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">World</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Curated travel packages designed for unforgettable experiences
            </p>

            {/* Hierarchical Filter System */}
            <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
              {/* Level 1: Region Selection */}
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-amber-500/20">
                <h3 className="text-amber-400 font-semibold mb-4 text-left">Select Region</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setSelectedRegion("all")}
                    className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                      selectedRegion === "all"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold shadow-lg shadow-amber-500/50"
                        : "bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 hover:from-amber-500/30 hover:to-orange-500/30"
                    }`}
                  >
                    All Packages
                  </button>
                  <button
                    onClick={() => setSelectedRegion("domestic")}
                    className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                      selectedRegion === "domestic"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg shadow-green-500/50"
                        : "bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-300 hover:from-green-500/30 hover:to-emerald-600/30"
                    }`}
                  >
                    🇮🇳 Domestic Packages
                  </button>
                  <button
                    onClick={() => setSelectedRegion("international")}
                    className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                      selectedRegion === "international"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/50"
                        : "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-600/30"
                    }`}
                  >
                    ✈️ International Packages
                  </button>
                </div>
              </div>

              {/* Level 2: Zone Selection (Only for Domestic) */}
              {selectedRegion === "domestic" && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 animate-fade-in">
                  <h3 className="text-green-400 font-semibold mb-4 text-left flex items-center gap-2">
                    <ChevronDown className="w-5 h-5" />
                    Select Zone
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => setSelectedZone("all")}
                      className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                        selectedZone === "all"
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-green-300 hover:from-green-500/30 hover:to-emerald-600/30"
                      }`}
                    >
                      All Zones
                    </button>
                    <button
                      onClick={() => setSelectedZone("north")}
                      className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                        selectedZone === "north"
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-orange-300 hover:from-orange-500/30 hover:to-red-600/30"
                      }`}
                    >
                      🕉️ North India
                    </button>
                    <button
                      onClick={() => setSelectedZone("south")}
                      className={`px-8 py-3 rounded-full transition-all cursor-pointer hover:scale-105 ${
                        selectedZone === "south"
                          ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-teal-500/20 to-cyan-600/20 border border-teal-500/30 text-teal-300 hover:from-teal-500/30 hover:to-cyan-600/30"
                      }`}
                    >
                      🌴 South India
                    </button>
                  </div>
                </div>
              )}

              {/* Level 3: SubType Selection (Only when Zone is selected) */}
              {selectedRegion === "domestic" && selectedZone !== "all" && (
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20 animate-fade-in">
                  <h3 className="text-cyan-400 font-semibold mb-4 text-left flex items-center gap-2">
                    <ChevronDown className="w-5 h-5" />
                    Select Package Type
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={() => setSelectedSubType("all")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "all"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-600/30"
                      }`}
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => setSelectedSubType("pilgrimage")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "pilgrimage"
                          ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold shadow-lg"
                          : "bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-orange-600/30"
                      }`}
                    >
                      🙏 Pilgrimage
                    </button>
                    <button
                      onClick={() => setSelectedSubType("trekking")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "trekking"
                          ? "bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-green-500/20 to-teal-600/20 border border-green-500/30 text-green-300 hover:from-green-500/30 hover:to-teal-600/30"
                      }`}
                    >
                      ⛰️ Trekking
                    </button>
                    <button
                      onClick={() => setSelectedSubType("adventure")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "adventure"
                          ? "bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-red-500/20 to-pink-600/20 border border-red-500/30 text-red-300 hover:from-red-500/30 hover:to-pink-600/30"
                      }`}
                    >
                      🎢 Adventure
                    </button>
                    <button
                      onClick={() => setSelectedSubType("budget")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "budget"
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-emerald-500/20 to-green-600/20 border border-emerald-500/30 text-emerald-300 hover:from-emerald-500/30 hover:to-green-600/30"
                      }`}
                    >
                      💰 Budget Friendly
                    </button>
                    <button
                      onClick={() => setSelectedSubType("cultural")}
                      className={`px-6 py-2 rounded-full transition-all cursor-pointer hover:scale-105 text-sm ${
                        selectedSubType === "cultural"
                          ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-lg"
                          : "bg-gradient-to-r from-purple-500/20 to-indigo-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-500/30 hover:to-indigo-600/30"
                      }`}
                    >
                      🎭 Cultural
                    </button>
                  </div>
                </div>
              )}

              {/* Filter Summary */}
              <div className="mt-6 text-amber-400 animate-fade-in bg-black/30 backdrop-blur-sm rounded-xl py-3 px-6 border border-amber-500/20">
                <span className="font-semibold">Showing: </span>
                <span className="text-white">{getFilterSummary()}</span>
                <span className="text-gray-400 ml-2">({filteredPackages.length} packages found)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Package Cards */}
            <div className="lg:col-span-2 space-y-8">
              {filteredPackages.length > 0 ? (
                filteredPackages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    id={`package-${pkg.id}`}
                    className={`bg-gradient-to-br ${pkg.color}/10 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up cursor-pointer ${
                      activePackage.id === pkg.id ? "ring-2 ring-amber-500" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setActivePackage(pkg)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                            {pkg.highlight}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-xl">
                          <div className="text-2xl font-bold text-white">{pkg.price}</div>
                          <div className="text-xs text-gray-300">per person</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-3/5 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                        <p className="text-gray-300 mb-4">{pkg.description}</p>

                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4 text-amber-400" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Users className="w-4 h-4 text-amber-400" />
                            <span>{pkg.group}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4 text-amber-400" />
                            <span>{pkg.places.length} Places</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {pkg.places.map((place, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm"
                            >
                              {place}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <Link
                            href={`/Booking?package=${pkg.id}`}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-6 py-2 rounded-lg font-semibold hover:from-amber-400 hover:to-orange-500 transition-all"
                          >
                            Book Now
                          </Link>
                          <Link
                            href={`/Packages/${pkg.id}`}
                            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl">
                  <div className="text-amber-500 text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No packages found</h3>
                  <p className="text-gray-300 mb-6">No packages match your current filter selection</p>
                  <button
                    onClick={() => {
                      setSelectedRegion("all");
                      setSelectedZone("all");
                      setSelectedSubType("all");
                    }}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-black px-8 py-3 rounded-full font-bold hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-105 shadow-lg"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Right Column - Package Details */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-gradient-to-b from-gray-900 to-black border border-amber-500/20 rounded-3xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activePackage.title}
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    {activePackage.price}
                  </div>
                  <div className="text-gray-400 text-sm">per person</div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                    Package Inclusions
                  </h4>
                  <div className="space-y-3">
                    {activePackage.inclusions.map((inc, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <inc.icon className="w-5 h-5 text-amber-400" />
                        <span>{inc.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tour Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Tour Highlights</h4>
                  <ul className="space-y-2">
                    {activePackage.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white">
                    <span>Total Package:</span>
                    <span className="text-2xl font-bold">{activePackage.price}</span>
                  </div>
                  <Link
                    href={`/Booking?package=${activePackage.id}`}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-105 shadow-lg shadow-green-500/30 block text-center"
                  >
                    Book Package
                  </Link>
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black py-4 rounded-xl font-bold text-lg hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-105 shadow-lg shadow-amber-500/30">
                    Download Brochure
                  </button>
                  <div className="text-center text-gray-400 text-sm">
                    <span className="text-amber-400">✦</span> Free cancellation up to 30 days
                    <span className="text-amber-400 mx-2">✦</span>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "5000+", label: "Happy Travelers" },
              { number: "150+", label: "Destinations" },
              { number: "24/7", label: "Support" },
              { number: "₹50L+", label: "Saved by Customers" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
}