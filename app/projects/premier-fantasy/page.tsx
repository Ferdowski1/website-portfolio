"use client";
import { useEffect, useState } from "react";
import supabase from "../../../utils/supabaseClient"
import Link from "next/link";

type Player = {
  id: number;
  name: string;
  team: string;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  number: number;
  big_chances_created: number;
  player_image: string;
  nation: string;
  nation_flag: string;
  appearances: number;
  goals: number;
  assists: number;
  saves: number;
  clean_sheets: number;
  goals_conceded: number;
  shots: number;
};

export default function PremierFantasy() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("name"); 

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from('all_players_data')
        .select('*');
  
      if (error) {
        console.error('Error fetching players:', error);
      } else {
        setPlayers(data);
      }
    };
  
    fetchPlayers();
  }, []);

  // Filter players based on search text (case-insensitive)
  const filteredPlayers = players.filter((player) => {
    const lowerSearch = search.toLowerCase();
  
    if (!lowerSearch) return true;
  
    switch (filterType) {
      case "name":
        return player.name.toLowerCase().includes(lowerSearch);
      case "club": 
        return player.team.toLowerCase().includes(lowerSearch);
      case "nation":
        return player.nation.toLowerCase().includes(lowerSearch);
      case "name-nation":
        return (
          player.name.toLowerCase().includes(lowerSearch) &&
          player.nation.toLowerCase().includes(lowerSearch)
        );
      case "club-nation":
        return (
          player.team.toLowerCase().includes(lowerSearch) &&
          player.nation.toLowerCase().includes(lowerSearch)
        );
      default:
        return true;
    }
  });
  

  return (
    <section className="max-w-6xl mx-auto px-6 py-12" style={{ backgroundColor: "#2596be" }}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 text-center">
          <h1 className="text-3xl text-black font-bold">Premier Fantasy App</h1>
        </div>
        <div>
        <a href="/projects/premier-fantasy/my-team">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
              Your Team
            </button>
          </a>
        </div>
      </div>
      <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <select
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setSearch("");
          }}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Name</option>
          <option value="club">Club</option>
          <option value="nation">Nation</option>
          <option value="name-nation">Name & Nation</option>
          <option value="club-nation">Club & Nation</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${filterType.replace("-", " & ")}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-black">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player, index) => (
            <div
              key={player.id ?? `${player.name}-${index}`}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden text-sm"
            >
              {/* Left: Player Info */}
              <div className="w-full sm:w-1/2 p-4 space-y-1" >
                <h2 className="text-base font-semibold">{player.name}</h2>
                <p className="text-gray-600">Team: {player.team}</p>
                <p className="text-gray-600">Position: {player.position}</p>
                <p className="text-gray-600">Number: {player.number}</p>

                {player.position === "Goalkeeper" && (
                  <>
                    <p className="text-gray-600">Appearances: {player.appearances}</p>
                    <p className="text-gray-600">Clean Sheets: {player.clean_sheets}</p>
                    <p className="text-gray-600">Saves: {player.saves}</p>
                    <p className="text-gray-600">Goals Conceded: {player.goals_conceded}</p>
                  </>
                )}

                {player.position === "Defender" && (
                  <>
                    <p className="text-gray-600">Appearances: {player.appearances}</p>
                    <p className="text-gray-600">Goals: {player.goals}</p>
                    <p className="text-gray-600">Assists: {player.assists}</p>
                    <p className="text-gray-600">Clean Sheets: {player.clean_sheets}</p>
                  </>
                )}

                {player.position === "Midfielder" && (
                  <>
                    <p className="text-gray-600">Appearances: {player.appearances}</p>
                    <p className="text-gray-600">Goals: {player.goals}</p>
                    <p className="text-gray-600">Assists: {player.assists}</p>
                    <p className="text-gray-600">Big Chances Created: {player.big_chances_created}</p>
                  </>
                )}

                {player.position === "Forward" && (
                  <>
                    <p className="text-gray-600">Appearances: {player.appearances}</p>
                    <p className="text-gray-600">Goals: {player.goals}</p>
                    <p className="text-gray-600">Assists: {player.assists}</p>
                    <p className="text-gray-600">Shots: {player.shots}</p>
                  </>
                )}
              </div>

              {/* Right: Player Image and Nation */}
              <div className={`w-full sm:w-1/2 flex flex-col items-center justify-center p-4 gap-2 ${
                    player.team === "Arsenal" ? "bg-[#db0208]" : "bg-gray-50" 
                  }`}
              >

                <img
                  src={player.player_image}
                  alt={`${player.name} image`}
                  className="w-[120px] h-auto object-contain rounded-md"
                />
                <div className="flex flex-col items-center mt-2">
                  <img
                    src={player.nation_flag}
                    alt={player.nation}
                    className="w-6 h-4 object-cover rounded-sm mb-1"
                  />
                  <span className="text-black font-extrabold text-xs">{player.nation}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No players found.</p>
        )}
      </div>
    </section>
  );
}
