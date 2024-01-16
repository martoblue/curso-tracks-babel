//const express = require("express");
import express from 'express';
//const fs = require("fs")
import fs from 'fs';
const router = express.Router();
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  //TODO tracks.js [tracks, js]
  return fileName.split('.').shift();
};

fs.readdirSync(PATH_ROUTES).forEach(async (file) => {
  const name = removeExtension(file); //TODO users, storage, tracks

  if (name !== 'index') {
    console.log(`Cargando ruta ${name}`);
    console.log(`Cargando ruta ./${file}`);

    //router.use(`/${name}`,require(`./${file}`)) //TODO http://localhost:3000/api/tracks
    router.use(`/${name}`, (await import(`./${file}`)).default);
  }
});

//module.exports = router

export default router;
