import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-3 mt-8">
  <p className="mb-2 text-sm">Subscribe to our newsletter:</p>
  <form className="flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      required
    />
    <button
      type="submit"
      className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium transition"
    >
      Subscribe
    </button>
  </form>
</div>
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500">Artistly</h2>
          <p className="text-gray-400 text-sm mt-2">
            Discover & book the best artists for your next event.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2 text-sm">
          <Link href="/artist" className="hover:text-purple-400 transition">Browse Artists</Link>
          <Link href="/onboarding" className="hover:text-purple-400 transition">Onboard Artist</Link>
          <Link href="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
        </div>

        {/* Social */}
        <div>
          <p className="mb-2 text-sm">Follow us:</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-purple-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}
