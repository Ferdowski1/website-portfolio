'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { WhaleActivity } from './page'; 

export default function BuySellStackedBar({ whales }: { whales: WhaleActivity[] }) {
  const buyCount = whales.filter(w => w.direction === 'buy').length;
  const sellCount = whales.filter(w => w.direction === 'sell').length;
  const total = buyCount + sellCount || 1;

  const data = [
    {
      name: 'Whale Activity (Last 50)',
      Buy: (buyCount / total) * 100,
      Sell: (sellCount / total) * 100,
    },
  ];

  return (
    <div className="bg-white rounded p-4 mb-6 text-black">
      <h2 className="text-lg font-semibold mb-2 text-center">Buy vs Sell %</h2>
      <ResponsiveContainer width="100%" height={80}>
        <BarChart data={data} layout="vertical" >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip formatter={(value: any) => {
            const num = Number(value);
            return isNaN(num) ? 'N/A' : `${num.toFixed(1)}%`;
          }} />
          <Bar dataKey="Buy" stackId="a" fill="#22c55e" />
          <Bar dataKey="Sell" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
