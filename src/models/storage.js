import { sequelize } from '../database/dbConnection.js';
import { DataTypes } from 'sequelize';

const Storage = sequelize.define('storages', {
  url: { type: DataTypes.STRING, allowNull: true },
  filename: { type: DataTypes.STRING },
  timestamps: true,
});
Storage.find = Storage.findAll;
Storage.findByPk = Storage.findByPk;
export { Storage };
