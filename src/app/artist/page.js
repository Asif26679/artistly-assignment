"use client";
import { useState, useEffect } from "react";
import ArtistCard from "../components/ArtistCard";
import PageWrapper from "../components/pageWrapper";
const artistData = [
  {
    name: "Arjit",
    category: "DJ",
    location: "Mumbai",
    price: "₹15000 - ₹25000",
    image: "/arjit.jpg",
  },
  {
    name: "Sunidhi Chauhan",
    category: "Singer",
    location: "Delhi",
    price: "₹50000+",
    image: "/sunidhi.jpg",
  },
  {
    name: "Raghav Juyal",
    category: "Dancer",
    location: "Delhi",
    price: "₹20000 - ₹40000",
    image: "/jubin.jpg",
  },
  {
    name: "Raghav Juyal",
    category: "Dancer",
    location: "Kolkata",
    price: "₹20000 - ₹40000",
    image: "/jubin.jpg",
  },
  {
    name: "Raghav Juyal",
    category: "Dancer",
    location: "Kolkata",
    price: "₹20000 - ₹40000",
    image: "/jubin.jpg",
  },
  {
    name: "Raghav Juyal",
    category: "Dancer",
    location: "Kolkata",
    price: "₹20000 - ₹40000",
    image: "/jubin.jpg",
  },
];

export default function ArtistListingPage() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filteredArtists = artistData.filter((artist) => {
    return (
      (categoryFilter === "" || artist.category === categoryFilter) &&
      (locationFilter === "" || artist.location === locationFilter) &&
      (priceFilter === "" || artist.price === priceFilter)
    );
  });

  const images = ["/HeroImage.jpg", "/HeroImage2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-black text-white">
        <img
          src={images[currentImage]}
          alt="Hero Artist"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        {/* Top Nav */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-20 py-4 flex justify-between items-center bg-black/40 backdrop-blur-sm">
          <div className="text-white font-extrabold text-xl tracking-widest">
            Artistly
          </div>
          <div className="hidden md:flex gap-6 text-white text-sm font-medium uppercase">
            <a href="#" className="hover:text-indigo-400 transition">Explore</a>
            <a href="#" className="hover:text-indigo-400 transition">Onboard</a>
            <a href="#" className="hover:text-indigo-400 transition">Dashboard</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artistly</h1>
          <h2 className="text-2xl text-gray-300 mb-2">Find All Events Here!!!</h2>
         
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium transition">
              Browse
            </button>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black rounded transition">
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-white/20 pb-2">
          Browse <span className="text-purple-400">Artists</span>
        </h1>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-white/20 text-white px-4 py-2 rounded-lg shadow-inner backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition bg-black"
          >
            <option value=""> All Categories</option>
            <option value="Singer"> Singer</option>
            <option value="DJ"> DJ</option>
            <option value="Dancer"> Dancer</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="bg-black border border-white/20 text-white px-4 py-2 rounded-lg shadow-inner backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          >
            <option value=""> All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="bg-black border border-white/20 text-white px-4 py-2 rounded-lg shadow-inner backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          >
            <option value=""> All Price Ranges</option>
            <option value="₹15000 - ₹25000">₹15K–25K</option>
            <option value="₹20000 - ₹40000">₹20K–40K</option>
            <option value="₹50000+">₹50K+</option>
          </select>
        </div>
        {/* Reset Filters Button */}
        <div className="mb-12 text-right">
          <button
            onClick={() => {
              setCategoryFilter("");
              setLocationFilter("");
              setPriceFilter("");
            }}
            className="px-4 py-2 text-sm font-medium rounded bg-white text-black hover:bg-gray-200 transition"
          >
            Reset Filters
          </button>
        </div>

        {/* Artist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist, idx) => (
              <div
                key={idx}
                className="transition transform hover:scale-[1.03] hover:shadow-xl hover:border-purple-400 border border-white/10 bg-white/5 rounded-xl overflow-hidden backdrop-blur p-2 duration-300"
              >
                <ArtistCard artist={artist} />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-lg col-span-full">
              No artists found for selected filters.
            </p>
          )}
        </div>
      </main>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 mt-10">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Artistly?</h2>
          <p className="text-lg mb-3">
            Artistly is your one-stop platform to discover, connect, and book top-tier performing artists for any event.
          </p>
          <p className="text-lg">
            We simplify the process of finding verified DJs, singers, dancers, and speakers, ensuring your audience has an unforgettable experience.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}

