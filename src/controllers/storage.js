import fs from 'fs/promises'; // Importa fs.promises directamente
import { matchedData } from 'express-validator';
import { Storage } from '../models/storage.js';
import { handleHttpError } from '../util/';

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
  try {
    const data = await Storage.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_LIST_ITEMS');
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await Storage.findById(id);
    res.send({ data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, 'ERROR_DETAIL_ITEMS');
  }
};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await Storage.create(fileData);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_DETAIL_ITEMS');
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await Storage.findById(id);
    const deleteResponse = await Storage.deleteOne({ _id: id });
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;

    // await fs.unlink(filePath); // Cambiado a await fs.unlink
    const data = {
      filePath,
      deleted: deleteResponse.deletedCount,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, 'ERROR_DETAIL_ITEMS');
  }
};

export { getItems, getItem, createItem, deleteItem };
