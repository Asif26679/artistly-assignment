"use client";
import { useState } from "react";
import PageWrapper from "../components/pageWrapper";

const mockArtists = [
  {
    name: "Sunidhi Chauhan",
    category: "Singer",
    location: "Delhi",
    fee: "₹50,000+",
    onboarded: true,
    leads: 3,
    responded: 2,
  },
  {
    name: "DJ Shadow",
    category: "DJ",
    location: "Mumbai",
    fee: "₹15,000 – ₹25,000",
    onboarded: true,
    leads: 5,
    responded: 5,
  },
  {
    name: "Raghav Juyal",
    category: "Dancer",
    location: "Delhi",
    fee: "₹20,000 – ₹40,000",
    onboarded: false,
    leads: 1,
    responded: 0,
  },
  
];

export default function ManagerDashboard() {
  const [artists, setArtists] = useState(mockArtists);

  return (
    <PageWrapper>
      <main className="max-w-6xl mx-auto px-6 py-16 text-white">
        <h1 className="text-3xl font-bold mb-8 text-purple-400">Manager Dashboard</h1>

        <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-xl shadow-md">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-white/10">
              <tr className="text-left text-gray-300 uppercase tracking-wide text-xs">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4">Fee</th>
                <th className="px-6 py-4">Onboarded</th>
                <th className="px-6 py-4">Leads</th>
                <th className="px-6 py-4">Responded</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist, idx) => (
                <tr
                  key={idx}
                  className="border-t border-white/10 hover:bg-white/10 transition"
                >
                  <td className="px-6 py-4 font-medium">{artist.name}</td>
                  <td className="px-6 py-4">{artist.category}</td>
                  <td className="px-6 py-4">{artist.location}</td>
                  <td className="px-6 py-4">{artist.fee}</td>
                  <td className="px-6 py-4">
                    {artist.onboarded ? (
                      <span className="text-green-400 font-medium">Yes</span>
                    ) : (
                      <span className="text-yellow-400 font-medium">Pending</span>
                    )}
                  </td>
                  <td className="px-6 py-4">{artist.leads}</td>
                  <td className="px-6 py-4">
                    <span className={`${artist.responded === artist.leads ? "text-green-400" : "text-red-400"} font-medium`}>
                      {artist.responded}/{artist.leads}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-xs font-semibold">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </PageWrapper>
  );
}

