// global requires // 
const sequelize = require('../config/connection');


// global models //
const User= require('../models/User');
const Blog= require('../models/Blog');
const Comment= require('../models/Comment');

// seed JSON Files // 
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./comments.json');

// seed function // 
const seedDatabase = async() => {
    // rebuild the full tables //   
        await sequelize.sync({ force: true}); 
        
        // bulk create the user table and data //
        await User.bulkCreate(userData, {
         individualHooks: true,
          returning: true,
          });
    
          await Blog.bulkCreate(blogData, {
          });
    
          await Comment.bulkCreate(commentData, {
        });
        // exit the function process // 
        process.exit(0);

    };

    seedDatabase();