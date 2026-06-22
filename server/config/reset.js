import dotenv from 'dotenv'
import { pool } from './database.js'

dotenv.config()

const dropTables = async () => {
  await pool.query(`
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;
  `)
}

const createTables = async () => {
  await pool.query(`
    CREATE TABLE locations (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      address TEXT,
      city TEXT,
      state TEXT,
      zip TEXT,
      image TEXT
    );
  `)

  await pool.query(`
    CREATE TABLE events (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      date DATE NOT NULL,
      time TIME NOT NULL,
      location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
    );
  `)
}

const seedTables = async () => {
  await pool.query(`
    INSERT INTO locations (name, address, city, state, zip, image)
    VALUES
    ('Echo Lounge', '120 Music Ave', 'Dallas', 'TX', '75201', '/echolounge.jpg'),
    ('House of Blues', '220 Blues St', 'Dallas', 'TX', '75202', '/houseofblues.jpg'),
    ('Open Air Pavilion', '330 Park Lane', 'Dallas', 'TX', '75203', '/pavilion.jpg'),
    ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75219', '/americanairlines.jpg');
  `)

  await pool.query(`
    INSERT INTO events (title, description, date, time, location_id)
    VALUES
    ('Indie Night Market', 'Local artists, food trucks, and live indie music.', '2026-08-15', '18:30', 1),
    ('Jazz & Coffee Session', 'A relaxed evening with jazz performers and coffee vendors.', '2026-08-20', '19:00', 1),

    ('Blues Revival', 'A night of classic and modern blues performances.', '2026-09-01', '20:00', 2),
    ('Open Mic Showcase', 'Community performers share music, poetry, and comedy.', '2026-07-10', '18:00', 2),

    ('Outdoor Movie Night', 'A community movie screening under the stars.', '2026-08-05', '20:30', 3),
    ('Food Truck Festival', 'Try food from local vendors across the city.', '2026-09-12', '12:00', 3),

    ('Esports Watch Party', 'Watch a major tournament with other gaming fans.', '2026-08-25', '17:00', 4),
    ('Community Basketball Night', 'Pickup games and skills contests for all levels.', '2026-07-22', '18:00', 4);
  `)
}

const resetDatabase = async () => {
  try {
    await dropTables()
    await createTables()
    await seedTables()
    console.log('Database reset successfully.')
  } catch (error) {
    console.error(error)
  } finally {
    await pool.end()
  }
}

resetDatabase()