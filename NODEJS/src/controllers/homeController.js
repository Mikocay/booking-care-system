import db from '../models/index';
import CRUDService from '../services/CRUDService';

// home page
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log('data', data);
    return res.render('homePage.ejs', {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

// crud page
let getCrud = (req, res) => {
  return res.render('crud.ejs');
};

// post crud
let postCrud = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post crud success');
  } catch (error) {
    console.log(error);
  }
};

// test page
let getTestPage = (req, res) => {
  return res.render('test/testPage.ejs');
};

module.exports = {
  // GET
  getHomePage: getHomePage,
  getTestPage: getTestPage,
  getCrud: getCrud,
  // POST
  postCrud: postCrud,
};
