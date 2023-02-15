const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// model // 
class Comment extends Model {}

// model fields // 
Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,

    },
   blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'blog',
          key: 'blog_id',
      }
  },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id',
        }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;