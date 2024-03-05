const multer = require('multer');


// Define storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix= Date.now() + "-"+Math.round(Math.random()*1e9);
        const filename = file.originalname.split(".")[0];
      cb(null, filename + '-' + uniqueSuffix + ".png"); // Set a unique filename
    }
  });
  
  // Create multer instance with custom storage options
  exports.upload = multer({ storage: storage });