const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Deep:deep123@cluster0.meak69q.mongodb.net/deliverymern?retryWrites=true&w=majority"
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI , {
            serverSelectionTimeoutMS: 10000, // Default is 30000 (30 seconds)
            socketTimeoutMS: 45000, // Default is 30000 (30 seconds)
        }) ;
        console.log("connected");

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();

        // console.log(data);
    }
    catch (err) {
        console.error(err);
    }
};


module.exports = mongoDB;