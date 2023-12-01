const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('cycleview.db');

db.run('create table if not exists pedaladas (pedal integer primary key, cd_ciclista integer, distance_history text, elevation_google text, heartrate_history text, latitudes text, longitudes text, speed_history text, time_history text, path text, coordinateInicial text, coodinateFinal text, creator text, country text, locality text, centroid text, bbox text, datetime text, duration text, distance text, elevation_gps text, total_elevation_google text, elevation_bing text, speed_avg text, heartratew_avg text, temperature_avg text, trackpoints text)');

module.exports = db;