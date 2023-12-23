const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Deep:deep123@cluster0.meak69q.mongodb.net/deliverymern?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        console.log("connected");

        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

        const data = await foodItemsCollection.find({}).toArray();
        const catData = await foodCategoryCollection.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;

        console.log("Data fetched successfully");
    } catch (err) {
        console.error(err);
    }
};

module.exports = mongoDB;
