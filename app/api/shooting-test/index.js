const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const allowedOrigins = [
  'https://nathanferdowski.dev',
  'https://www.nathanferdowski.dev',
  'https://nathan-ferdowski.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));

//my local postgres db, just for testing
const pool = new Pool({
  user: 'nathan',
  host: 'localhost',
  database: 'cavaliers',
  port: 5432,
});
// const pool = new Pool({
//   host: process.env.DB_HOST || 'localhost',
//     port: Number(process.env.DB_PORT) || 5432,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

app.post('/session', async (req, res) => {
  const {
    player_name,
    session_datetime,
    score,
    made_percent,
    lc_made, lc_miss,
    lw_made, lw_miss,
    tk_made, tk_miss,
    rw_made, rw_miss,
    rc_made, rc_miss
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO sessions (
        player_name, session_datetime, score, made_percent,
        lc_made, lc_miss, lw_made, lw_miss,
        tk_made, tk_miss, rw_made, rw_miss, rc_made, rc_miss
      ) VALUES (
        $1, $2, $3, $4,
        $5, $6, $7, $8,
        $9, $10, $11, $12, $13, $14
      )`,
      [
        player_name,
        session_datetime,
        score,
        made_percent,
        lc_made, lc_miss,
        lw_made, lw_miss,
        tk_made, tk_miss,
        rw_made, rw_miss,
        rc_made, rc_miss
      ]
    );
    res.status(200).send('Session saved');
  } catch (err) {
    console.error('Error inserting session:', err);
    res.status(500).send('Error saving session');
  }
});

app.get('/sessions', async (req, res) => {
  const { player_name, date, score, start_date, end_date } = req.query;
  const conditions = [];
  const values = [];

  if (player_name) {
    conditions.push(`LOWER(player_name) = LOWER($${values.length + 1})`);
    values.push(player_name);
  }

  if (score) {
    conditions.push(`score = $${values.length + 1}`);
    values.push(Number(score));
  }

  if (date) {
    conditions.push(`DATE(session_datetime) = $${values.length + 1}`);
    values.push(date);
  }

  if (start_date) {
    conditions.push(`DATE(session_datetime) >= $${values.length + 1}`);
    values.push(start_date);
  }

  if (end_date) {
    conditions.push(`DATE(session_datetime) <= $${values.length + 1}`);
    values.push(end_date);
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  try {
    const result = await pool.query(
      `SELECT * FROM sessions ${whereClause} ORDER BY session_datetime DESC`,
      values
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching sessions:', err);
    res.status(500).send('Error fetching sessions');
  }
});

app.get('/', (req, res) => {
  res.send('Cavaliers API is running');
});

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});