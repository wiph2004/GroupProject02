const Category = require("./category");
const Music = require("./music");
const Concert = require("./concert");

Category.hasMany(Music, {
  foreignKey: "category_id",
});

Category.hasMany(Concert, {
  foreignKey: "category_id",
});

module.exports = { Category, Music, Concert };
