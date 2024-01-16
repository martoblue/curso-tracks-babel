import { sequelize } from '../database/dbConnection';
import { DataTypes } from 'sequelize';

const Users = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  activo: {
    type: DataTypes.BOOLEAN,
  },
  role: {
    type: DataTypes.ENUM(['user', 'admin']),
  },
});

exports = Users;
