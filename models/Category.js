const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
	{
		// define columns
		name: {
			type: DataTypes.STRING,
			unique: false,
		},
		id: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'category',
	}
);

module.exports = Category;
