import multer from './multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../../storage`;
    cb(null, pathStorage);
  },

  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const name = `file-${date.now()}.${ext}`;
    cb(null, name);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
