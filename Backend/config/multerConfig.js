const multer = require('multer');
const path = require('path')
const fs = require('fs')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Create a file filter function to prevent duplicate uploads
const fileFilter = function (req, file, cb) {
  // Check if the file already exists in the upload directory
  const filePath = path.join('./public/images/', `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File does not exist, allow upload
      cb(null, true);
    } else {
      // File already exists, reject upload
      cb(new Error('File with the same name already exists'));
    }
  });
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
