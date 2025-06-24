import ArtistCard from "./components/ArtistCard";

export default function HomePage() {
  const artists = [
    {
      name: "Arjit",
      category: "DJ",
      location: "Mumbai",
      price: "₹15,000 - ₹25,000",
      image: "/arjit.jpg",
    },
    {
      name: "Sunidhi Chauhan",
      category: "Singer",
      location: "Delhi",
      price: "₹50,000+",
      image: "/sunidhi.jpg",
    },
    {
      name: "Sunidhi Chauhan",
      category: "Singer",
      location: "Delhi",
      price: "₹50,000+",
      image: "/sunidhi.jpg",
    },
    {
      name: "Sunidhi Chauhan",
      category: "Singer",
      location: "Delhi",
      price: "₹50,000+",
      image: "/sunidhi.jpg",
    },
    {
      name: "Sunidhi Chauhan",
      category: "Singer",
      location: "Delhi",
      price: "₹50,000+",
      image: "/sunidhi.jpg",
    },
    {
      name: "Sunidhi Chauhan",
      category: "Singer",
      location: "Delhi",
      price: "₹50,000+",
      image: "/sunidhi.jpg",
    },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Top Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </main>
  );
}
