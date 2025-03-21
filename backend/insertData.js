const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shoesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Card = mongoose.model(
  "Card",
  new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
  })
);

const cards = [
  {
    title: "Sneakers : Nike Air Jordan",
    description: "A pair of Nike Air Jordan 1 sneakers",
    price: 1000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Air_Jordan_1_Banned.jpg/330px-Air_Jordan_1_Banned.jpg",
  },
  {
    title: "Casual shoes for men",
    description: "A daily wear shoes for men",
    price: 500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyHQZfWH3J4yYMH_KOBru85ZpyoyIiOvOqw&s",
  },
  {
    title: "Andune Womens footwear",
    description: "",
    price: 1000,
    image:
      "https://andune.in/cdn/shop/products/Pic2_9afdf77f-6595-48a6-bb97-a7a57f312699.jpg?v=1670673935",
  },
  {
    title: "Skechers shoes",
    description: "Skechers shoes for men",
    price: 1000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_0ZYox3wkO5ukI9xxIm-Or1hUYmIdXbGxg&s",
  },
  {
    title: "Redchief shoes",
    description: "Redchief shoes for men",
    price: 1000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XlM4_D-BHK5M5rJyihNHKrRPoT-qdNCs7g&s",
  },
];

Card.insertMany(cards)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
