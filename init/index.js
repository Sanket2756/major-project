require("dotenv").config({path:"../.env"});  // ← नवीन line
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("Database Connected Sucessfully");
})
async function main() {
    await mongoose.connect(process.env.ATLASDB_URL); // ← हे बदललं
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) =>({...obj,owner : "696f263a955db51d03d2888e"}));
    await Listing.insertMany(initData.data);
    console.log("Data was Initialised");
}

initDB();