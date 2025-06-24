// components/ArtistCard.js

export default function ArtistCard({ artist }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md backdrop-blur transition-transform hover:scale-[1.03] duration-300 text-white">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-48 object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
  
        {/* Info */}
        <div className="p-4 space-y-1">
          <h2 className="text-xl font-semibold">{artist.name}</h2>
          <p className="text-purple-300 font-medium">{artist.category}</p>
          <p className="text-sm text-gray-300">📍 {artist.location}</p>
          <p className="text-sm text-gray-400">💰 {artist.price}</p>
  
          <button className="mt-4 w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-sm font-semibold transition duration-200">
            Ask for Quote
          </button>
        </div>
      </div>
    );
  }
  