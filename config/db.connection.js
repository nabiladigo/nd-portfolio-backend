require('dotenv').config();
const connectionStr= process.env.MONGODB_URL

const mongoose = require('mongoose');

mongoose.connect(
    connectionStr)
    // 'mongodb://localhost:27017/Portfolio')
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log(err);
    });

    mongoose.connection
    .on('open', () => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`))
    .on('close', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'))
    .on('error', (error) => console.log('MongoDB connection error 😥', error));







// const mongoose = require('mongoose');
// const Project= require('./models/product_model')


// mongoose.connect(
//     // connectionStr
//     'mongodb://localhost:27017/Portfolio',{useNewUrlParse: true})
//     .then(()=>{
//         console.log('Connected to MongoDB');
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//     mongoose.connection
//     .on('open', () => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`))
//     .on('close', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'))
//     .on('error', (error) => console.log('MongoDB connection error 😥', error));


