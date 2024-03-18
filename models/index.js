const Category = require("./category");
const Music = require("./music");
const Concert = require("./concert");
const Artist = require("./artist");
const ArtistCategory = require("./artistCategory");

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
  foreignKey: "artist_id"
});
Artist.belongsToMany(Category, {
  through: ArtistCategory
});

module.exports = { Category, Music, Concert, Artist };
