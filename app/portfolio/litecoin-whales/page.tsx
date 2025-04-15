"use client"
import { useEffect, useState } from 'react';

type WhaleActivity = {
  id: number;
  rank: number;
  address: string;
  amount: number;
  direction: 'buy' | 'sell';
  txid: string;
  blockno: number;
  time: string; // or Date if you're parsing it
};


export default function LitecoinWhales() {
  const [whales, setWhales] = useState<WhaleActivity[]>([]);
  const [sortBy, setSortBy] = useState<'time' | 'amount'>('time');
  const [directionFilter, setDirectionFilter] = useState<'Both' | 'Buy' | 'Sell'>('Both');
  const [minAmountInput, setMinAmountInput] = useState('');
  const [minAmount, setMinAmount] = useState(0);


  const api = 'http://3.22.68.141:3001/api/whales';

  useEffect(() => {
    const fetchWhales = async () => {
      const res = await fetch(api);
      const data = await res.json();
      setWhales(data);
    };

    fetchWhales();
  }, []);

  return (
    <div className="bg-[#1e293b] min-h-screen">
      <div className="bg-[#1a1c2c] p-6 text-black max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Latest Litecoin Whale Transactions</h1>
        <div className="flex flex-wrap gap-4 mb-6 items-center justify-center text-white">
          {/* Sort By Dropdown */}
          <label className="flex items-center gap-2">
            Sort by:
            <select
              className="border border-gray rounded px-2 py-1 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'time' | 'amount')}
            >
              <option value="time">Time</option>
              <option value="amount">Amount</option>
            </select>
          </label>

          {/* Direction Filter */}
          <label className="flex items-center gap-2">
            Direction:
            <select
              className="border border-gray rounded px-2 py-1 cursor-pointer"
              value={directionFilter}
              onChange={(e) => setDirectionFilter(e.target.value as 'Both' | 'Buy' | 'Sell')}
            >
              <option value="all">Both</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </label>

          {/* Minimum Amount Filter */}
          <label className="flex items-center gap-2">
            Min Amount:
            <input
              type="number"
              value={minAmountInput}
              onChange={(e) => {
                const value = e.target.value;
                setMinAmountInput(value);
                setMinAmount(value === '' ? 0 : parseFloat(value));
              }}
              className="border border-gray rounded px-2 py-1 w-24 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0.0"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {whales.filter((w) => {
            if (directionFilter === 'Buy') return w.direction === 'buy';
            if (directionFilter === 'Sell') return w.direction === 'sell';
            return true; 
          })
          .filter((w) => w.amount >= minAmount)
          .sort((a, b) => {
            if (sortBy === 'time') {
              return new Date(b.time).getTime() - new Date(a.time).getTime();
            } else {
              return b.amount - a.amount;
            }
          })
          .map((w) => (
            <div
              key={w.id}
              className={`relative rounded-lg p-4 shadow-md transition-transform duration-300 hover:scale-105 border
                ${w.direction === 'buy' ? 'bg-green-200 border-green-400' : 'bg-red-200 border-red-400'}`}
            >
              <div className="absolute top-2 left-2 flex flex-col items-start gap-1">
              {/* Direction Badge */}
              <div
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  w.direction === 'buy' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}
              >
                {w.direction.toUpperCase()}
              </div>

              {/* Address Rank below */}
              <div className="text-xs font-bold text-black">
                Rank {w.rank}
              </div>
            </div>

              {/* Card content */}
              <div className="mb-2"><strong>Address:</strong> {w.address}</div>
              <div className="mb-2"><strong>Amount:</strong> {w.amount.toFixed(8)} LTC</div>
              <div className="mb-2"><strong>Block #:</strong> {w.blockno}</div>
              <div className="mb-2"><strong>Time:</strong> {new Date(w.time).toLocaleString()} UTC</div>
              <div>
                <strong>TxID:</strong>{' '}
                <a
                  href={`https://litecoinspace.org/tx/${w.txid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {w.txid}
                </a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
