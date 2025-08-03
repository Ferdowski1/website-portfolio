"use client"
import "./shooting-test.css"
import { useState } from "react"

type Location = 
  | 'leftCorner'
  | 'leftWing'
  | 'topKey'
  | 'rightWing'
  | 'rightCorner';

const LOCATIONS: Location[] = [
  'leftCorner', 'leftWing', 'topKey', 'rightWing', 'rightCorner'
];

const LOCATION_LABELS: Record<Location, string> = {
  leftCorner: "Left Corner",
  leftWing: "Left Wing",
  topKey: "Top Key",
  rightWing: "Right Wing",
  rightCorner: "Right Corner",
};

type ShotStats = {
  made: number;
  missed: number;
  total: number;
};

export default function ShootingTest() {
  const [playerName, setPlayerName] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<Location>('leftCorner');
  const [totalShots, setTotalShots] = useState<number>(0);
  const [shots, setShots] = useState<Record<Location, ShotStats>>({
    leftCorner: {made: 0, missed: 0, total: 0},
    leftWing: {made: 0, missed: 0, total: 0},
    topKey: {made: 0, missed: 0, total: 0},
    rightWing: {made: 0, missed: 0, total: 0},
    rightCorner: {made: 0, missed: 0, total: 0}
  });
  const [searchName, setSearchName] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchScore, setSearchScore] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const totalMade = Object.values(shots).reduce((sum, location) => sum + location.made, 0);
  const totalMissed = Object.values(shots).reduce((sum, location) => sum + location.missed, 0);
  //const postApi = 'http://localhost:3002/session';
  const postApi = 'https://api.nathanferdowski.dev/cavaliers/session';
  //const getApi = 'http://localhost:3002/sessions?';
  const getApi = 'https://api.nathanferdowski.dev/cavaliers/sessions';

  const handleSubmit = async () => {
    setSubmitAttempted(true);
    setSubmitSuccess(false);
    if(totalShots < 100) return;

    const totalMade =
      shots.leftCorner.made +
      shots.leftWing.made +
      shots.topKey.made +
      shots.rightWing.made +
      shots.rightCorner.made;

    const madePercent = ((totalMade / totalShots) * 100).toFixed(1);
    const session_datetime = new Date().toISOString();
  
    const payload = {
      player_name: playerName,
      session_datetime,
      score: totalMade,
      made_percent: Number(madePercent),
      lc_made: shots.leftCorner.made,
      lc_miss: shots.leftCorner.missed,
      lw_made: shots.leftWing.made,
      lw_miss: shots.leftWing.missed,
      tk_made: shots.topKey.made,
      tk_miss: shots.topKey.missed,
      rw_made: shots.rightWing.made,
      rw_miss: shots.rightWing.missed,
      rc_made: shots.rightCorner.made,
      rc_miss: shots.rightCorner.missed,
    };
  
    try {
      const res = await fetch(postApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (res.ok) {
        setSubmitSuccess(true);
        console.log('Session saved successfully');
      } else {
        console.error('Failed to save session');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const recordShot = (made: boolean) => {
    const position = shots[selectedLocation];
    if(position.total >= 20 || totalShots >= 100) 
      return;
    
    setShots(prev => ({
      ...prev,
      [selectedLocation]: {
        made: made ? prev[selectedLocation].made + 1 : prev[selectedLocation].made,
        missed: !made ? prev[selectedLocation].missed + 1 : prev[selectedLocation].missed,
        total: prev[selectedLocation].total + 1
      }
    }));

    setTotalShots(prev => prev + 1);
  }

  const handleRestart = () => {
    setTotalShots(0);
    setPlayerName('');
    setShots({
      leftCorner: { made: 0, missed: 0, total: 0 },
      leftWing: { made: 0, missed: 0, total: 0 },
      topKey: { made: 0, missed: 0, total: 0 },
      rightWing: { made: 0, missed: 0, total: 0 },
      rightCorner: { made: 0, missed: 0, total: 0 },
    });
    setSubmitAttempted(false);
    setSubmitSuccess(false);
    setSelectedLocation('leftCorner');
  }

  const handleSearch = async () => {
    const params = new URLSearchParams();
    if (searchName) params.append('player_name', searchName);
    if (searchDate) params.append('date', searchDate);
    if (searchScore) params.append('score', searchScore);
  
    const res = await fetch(`${getApi}${params.toString()}`);
    const data = await res.json();
    setSearchResults(data);
    console.log(data);
  };  

  return (
    <>
      <div className="main">
        <div className="court-background">
          <img src="/cavs.png" className="background-image" />
          <div className="location-selector">
            {LOCATIONS.map((location: Location) => (
              <button key={location} onClick={() => setSelectedLocation(location)} 
              className={`location-button ${location} ${selectedLocation === location ? 'active' : ''}`}>
                {LOCATION_LABELS[location]}
              </button>
            ))}
          </div>
        </div>
        <div className="bottom-half">
          <div className="player">
          <input type="text" value={playerName} 
                   onChange={(e) => setPlayerName(e.target.value)}
                   placeholder="Enter Player Name" className="player-input"/>
          </div>
          <div className="totals">
            <p>Total Shots: {totalShots}/100</p>
          </div>
          <div className="shots-button">
            <button className="made-button" onClick={() => recordShot(true)}>✅</button>
            <button className="missed-button" onClick={() => recordShot(false)}>❌</button>
          </div>
          <div className="end-section">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            <button className="restart-button" onClick={handleRestart}>Restart</button>
          </div>
          {submitAttempted && (totalShots < 100 || !playerName.trim()) && (
            <p className="error-message">
              {totalShots < 100 && "Take more shots"}{totalShots < 100 && !playerName.trim() && " and "} 
              {!playerName.trim() && "Enter player name"}
            </p>
          )}
          {submitSuccess && (
            <p className="success-message">Session saved successfully!</p>
          )}
        </div>
        <div className="stats-table">
          <table>
            <thead>
              <tr>
                <th></th>
                {LOCATIONS.map((location: Location) => (
                  <th key={location}>{LOCATION_LABELS[location]}</th>
                ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Made</td>
                {LOCATIONS.map((location: Location) => (
                  <td key={location}>{shots[location].made}</td>
                ))}
                <td>{totalMade}</td>
              </tr>
              <tr>
                <td>Missed</td>
                {LOCATIONS.map((location: Location) => (
                  <td key={location}>{shots[location].missed}</td>
                ))}
                <td>{totalMissed}</td>
              </tr>
              <tr>
                <td>%</td>
                {LOCATIONS.map((location: Location) => {
                  const {made, total} = shots[location];
                  const percent = total > 0 ? ((made / total) * 100).toFixed(2) : 0;
                  return <td key={location}>{percent}</td>
                })}
                <td>{totalShots > 0 ? (totalMade / totalShots * 100).toFixed(2) : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="search-section">
          <input type="text" placeholder="Player Name" className="search-input"
                 value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
          
          <input type="date" value={searchDate} className="search-input"
                 onChange={(e) => setSearchDate(e.target.value)} />

          <input type="number" placeholder="Score" className="search-input"
                 value={searchScore} onChange={(e) => setSearchScore(e.target.value)} />

          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

          {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Search Results</h3>
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Date</th>
                  <th>Score</th>
                  <th>%</th>
                  <th>LC</th>
                  <th>LW</th>
                  <th>TK</th>
                  <th>RW</th>
                  <th>RC</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.player_name}</td>
                    <td>{new Date(row.session_datetime).toLocaleString()}</td>
                    <td>{row.score}</td>
                    <td>{row.made_percent}%</td>
                    <td>{`${row.lc_made}/${row.lc_made + row.lc_miss}`}</td>
                    <td>{`${row.lw_made}/${row.lw_made + row.lw_miss}`}</td>
                    <td>{`${row.tk_made}/${row.tk_made + row.tk_miss}`}</td>
                    <td>{`${row.rw_made}/${row.rw_made + row.rw_miss}`}</td>
                    <td>{`${row.rc_made}/${row.rc_made + row.rc_miss}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}