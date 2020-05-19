var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wiki');
module.exports=db
class Users extends S.Model {}
//-- Page Model
class Page extends Sequelize.Model {}
Page.init({
  title: {
    type: Sequelize.STRING
  },
  urlTitle: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
}, { sequelize, modelName: 'page' });
//-- User Model
class User extends Sequelize.Model {}
User.init({
  name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
}, { sequelize, modelName: 'user' });
//--
module.exports = {
  Page: Page,
  User: User
};


