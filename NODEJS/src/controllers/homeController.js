import db from '../models/index';
import CRUDService from '../services/CRUDService';

// HOME PAGE
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

// CRUD PAGE
let getCrud = (req, res) => {
  return res.render('crud.ejs');
};

// POST CRUD
let postCrud = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post crud success');
  } catch (error) {
    console.log(error);
  }
};

// GET CRUD
let displayCrud = async (req, res) => {
  try {
    let data = await CRUDService.getAllUsers();
    console.log('data', data);
    return res.render('displayCrud.ejs', {
      dataTable: data,
    });
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
  displayCrud: displayCrud,
  // POST
  postCrud: postCrud,
};
