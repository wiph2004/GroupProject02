const Category = require("./category");
const Music = require("./music");
const Concert = require("./concert");
const Artist = require("./artist");

Category.hasMany(Music, {
  foreignKey: "category_id",
});

Category.hasMany(Concert, {
  foreignKey: "category_id",
});

Category.hasMany(Artist, {
  foreignKey: "category_id",
});
Artist.hasMany(Music, {
  foreignKey: 'artist_name'
});
Artist.belongsToMany(Category, {
  foreignKey: 'category_id'
});

module.exports = { Category, Music, Concert, Artist };
