import { sequelize } from '../database/dbConnection.js';
import { DataTypes } from 'sequelize';

const Tracks = sequelize.define('tracks', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  album: {
    type: DataTypes.STRING,
  },
  cover: {
    type: DataTypes.STRING,
  },
  artist_name: {
    type: DataTypes.STRING,
  },
  artist_nickname: {
    type: DataTypes.STRING,
  },
  artisk_nationality: {
    type: DataTypes.STRING,
  },
  duration_start: {
    type: DataTypes.INTEGER,
  },
  duration_end: {
    type: DataTypes.INTEGER,
  },
  mediaId: {
    type: DataTypes.STRING,
  },
});


export { Tracks };
