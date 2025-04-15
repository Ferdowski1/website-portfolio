import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET(_req: NextRequest) {
  const client = new Client({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  });

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM whale_activity LIMIT 50');
    await client.end();

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
