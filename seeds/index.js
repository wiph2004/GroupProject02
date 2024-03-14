const sequelize = require("../config/connections");
const { Category, Music, Concert } = require("../models");

const musicData = require("./music-seeds.json");
const concertData = require("./concert-seeds.json");
const categoryData = require("./category-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  await Music.bulkCreate(musicData, {
    individualHooks: true,
    returning: true,
  });

  await Concert.bulkCreate(concertData, {
    individualHooks: true,
    returning: true,
  });

};

seedDatabase();
