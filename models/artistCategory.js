const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class ArtistCategory extends Model {}

ArtistCategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "artist",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "artist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "artist_category",
  }
);

module.exports = ArtistCategory;
