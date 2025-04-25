"use client";
import PlayerCard from '@/app/components/playerCard';
import { useEffect, useState } from 'react';

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

export default function PremierFantasyTeam() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState<'name' | 'team' | 'nation'>('name');
  const [selectedPlayers, setSelectedPlayers] = useState<Record<string, Player | null>>({});
  const [selectedFormation, setSelectedFormation] = useState("3-5-2");

  const formations: Record<string, { [key: string]: string[] }> = {
    "3-5-2": {
      row1: ["ST1", "ST2"],
      row2: ["LM", "CAM2", "RM"],
      row3: ["CDM1", "CDM2"],
      row4: ["CB1", "CB2", "CB3"],
      row5: ["GK"]
    },
    "4-4-2": {
      row1: ["ST1", "ST2"],
      row2: ["LM", "CM1", "CM2", "RM"],
      row3: ["LB", "CB1", "CB2", "RB"],
      row4: ["GK"]
    },
    "4-3-3": {
      row1: ["LW", "ST", "RW"],
      row2: ["LM", "CAM", "RM"],
      row3: ["LB", "CB2", "CB3", "RB"],
      row4: ["GK"]
    }
  };

  const formation = formations[selectedFormation];

  const openModal = (position: string) => {
    setSelectedPosition(position);
  };

  const closeModal = () => {
    setSelectedPosition(null);
    setPlayers([]);
    setSearchQuery('');
  };

  const api = "https://premier-fantasy-backend.onrender.com/api/v1/player";

  useEffect(() => {
    if (selectedPosition) {
      setIsLoading(true);
      fetch(api)
        .then(res => res.json())
        .then(data => {
          setPlayers(data);
        })
        .catch(err => console.error("Error fetching players:", err))
        .finally(() => setIsLoading(false));
    }
  }, [selectedPosition]);

  const filteredPlayers = players.filter((player) => {
    const value = player[searchField]?.toLowerCase() || '';
    return value.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full bg-[url('/fifa18.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="absolute top-24 right-16 z-10">
          <select
            value={selectedFormation}
            onChange={(e) => setSelectedFormation(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="3-5-2">3-5-2</option>
            <option value="4-4-2">4-4-2</option>
            <option value="4-3-3">4-3-3</option>
          </select>
        </div>
        
        <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
          {Object.values(formation).map((row, i) => (
            <div key={i} className="flex justify-evenly w-full">
              {row.map((pos) => (
                <div
                  key={pos}
                  onClick={() => openModal(pos)}
                  className="w-[12vh] h-[16vh] border border-white rounded-xl relative cursor-pointer"
                >
                  {selectedPlayers[pos] ? (
                    <div className="w-full h-full  flex items-center justify-center">
                      <div className="w-[150%] h-[150%] flex items-center justify-center">
                        <div className="scale-[0.65] origin-center">
                          <PlayerCard
                            player={selectedPlayers[pos]!}
                            onSelect={() => openModal(pos)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-sm backdrop-blur-sm hover:bg-white/20 transition bg-white/10 rounded-xl">
                      {pos}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPosition && (
          <div className="fixed inset-0 text-black bg-black/60 flex items-center justify-center z-[999]">
            <div className="bg-white w-[100%] max-w-6xl p-8 rounded-xl shadow-xl relative max-h-[85vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black hover:text-red-600 text-xl"
              >
                ✕
              </button>
              <h2 className="text-xl text-black font-bold mb-4 text-center w-full">
                Select a player for {selectedPosition}
              </h2>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6 w-full">
                <select
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value as 'name' | 'team' | 'nation')}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option value="name">Name</option>
                  <option value="team">Club</option>
                  <option value="nation">Nation</option>
                </select>

                <input
                  type="text"
                  placeholder={`Search by ${searchField}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm w-full md:w-64"
                />
              </div>

              {isLoading ? (
                <p className='text-center'>Loading players...</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {filteredPlayers.map((player) => (
                    <PlayerCard
                      key={`player-${player.id}-${player.name}`}
                      player={player}
                      onSelect={() => {
                        if (!selectedPosition) return;
                        setSelectedPlayers(prev => ({
                          ...prev,
                          [selectedPosition]: player
                        }));
                        closeModal();
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}