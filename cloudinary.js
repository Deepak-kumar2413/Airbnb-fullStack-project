//configure.js ka kaam Cloudinary ko
//  tumhare account ke saath 
// connect/configure karna hai.


const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary-v2");

//to connect our account to cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

//store file in wanderlust_dev folder 
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_dev",
        allowed_formats: ["jpg", "jpeg", "png"]
    }
});


module.exports ={cloudinary,storage};


//uploading files(HTML Form  →  multipart/form-data  →  Multer  →  Cloudinary Connection  →  CloudinaryStorage  →  Cloudinary  →  Image URL  →  MongoDB)
 

// implement file uploading in my Node.js and 
// Express application, I first use enctype="multipart/form-data" in the HTML
//  form because a file cannot be sent as normal URL-encoded form data.
//  When the form is submitted, the HTTP request containing the file reaches the server,
//  and I use Multer middleware to parse the multipart/form-data request and extract the uploaded file.
//  Then, instead of storing the file locally, I use CloudinaryStorage with Cloudinary,
//  which uploads the file to Cloudinary and gives me a URL for that image. 
// Finally, I store that Cloudinary URL in MongoDB along with the listing data.