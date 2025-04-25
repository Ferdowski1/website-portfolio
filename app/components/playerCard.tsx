import React from "react";

interface PlayerCardProps {
  player: {
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
  onSelect?: () => void;
}

export default function PlayerCard({ player, onSelect }: PlayerCardProps) {
  const { position } = player;

  const getStatList = () => {
    if (position === "Goalkeeper") {
      return [
        { label: "App", value: player.appearances },
        { label: "CS", value: player.clean_sheets },
        { label: "Saves", value: player.saves },
        { label: "GC", value: player.goals_conceded }
      ];
    } else if (position === "Defender") {
      return [
        { label: "App", value: player.appearances },
        { label: "Goals", value: player.goals },
        { label: "Assists", value: player.assists },
        { label: "CS", value: player.clean_sheets }
      ];
    } else if (position === "Midfielder") {
      return [
        { label: "App", value: player.appearances },
        { label: "Goals", value: player.goals },
        { label: "Assists", value: player.assists },
        { label: "BCC", value: player.big_chances_created }
      ];
    } else {
      return [
        { label: "App", value: player.appearances },
        { label: "Goals", value: player.goals },
        { label: "Assists", value: player.assists },
        { label: "Shots", value: player.shots }
      ];
    }
  };

  const stats = getStatList();

  return (
    <div
      onClick={onSelect}
      className="w-[165px] h-full bg-blue-950 text-white p-2 rounded-xl shadow-md cursor-pointer transition-transform relative"
    >
      <div className="flex justify-center text-xs sm:text-sm md:text-base font-bold mb-2 line-clamp-2 truncate">
        <span>{player.name}</span>
      </div>

      <div className="w-full h-20 sm:h-24 md:h-28 bg-black rounded-md overflow-hidden mb-1">
        <img
          src={player.player_image}
          alt={player.name}
          className="w-full h-full object-contain scale-[0.9] origin-top"
        />
      </div>

      <div className="flex items-center justify-center gap-2 text-sm font-semibold my-1">
  <span>{player.position}</span>
  <img
    src={player.nation_flag}
    alt="nation"
    className="w-6 h-4 rounded-sm object-cover"
  />
</div>


      <div className="text-xs grid grid-cols-2 gap-1 mt-2 text-center line-clamp-2 truncate">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <strong>{stat.label}</strong> {stat.value}
          </div>
        ))}
      </div>
    </div>
  );
}