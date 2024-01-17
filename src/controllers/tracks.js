import { matchedData } from 'express-validator';
import { handleHttpError } from '../util/handleError.js';
import { Tracks } from '../models/tracks.js';

/**
 * Obetener un registro de Tracks
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await Tracks.findOne({ where: { id } });
    res.send(data);
  } catch (err) {
    handleHttpError(res, 'ERROR_GET_ITEM');
  }
};

/**
 *  Obtener todos los registros de Tracks
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await Tracks.findAll();

    res.send(data);
  } catch (err) {
    handleHttpError(err, 'ERROR_GET_ALL_ITEM');
  }
};

/**
 *  crear o registrar un registro de Tracks
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await Tracks.create(body);
    res.send(data);
  } catch (err) {
    handleHttpError(err, 'ERROR_CREATE_ITEM');
  }
};

/**
 * actualizar un registro de Tracks
 * @param {*} req
 * @param {*} res
 */

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;
    const data = await Tracks.update(body, { where: { id } });

    res.send(data);
  } catch (err) {
    handleHttpError(err, 'ERROR_UPDATE_ITEM');
  }
};
/**
 * eliminar un registro de Tracks
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await Tracks.destroy({ where: { id } });
    res.send(data);
  } catch (err) {
    handleHttpError(err, 'ERROR_DELETE_ITEM', code);
  }
};

export { getItem, getItems, createItem, updateItem, deleteItem };
