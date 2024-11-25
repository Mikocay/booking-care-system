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

let getEditPage = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    try {
      let userData = await CRUDService.getUserInfoById(userId); // Dùng await
      if (userData) {
        return res.render('editCrud.ejs', {
          user: userData,
        });
      } else {
        return res.status(404).send('User not found');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return res.status(500).send('Internal Server Error');
    }
  } else {
    return res.status(400).send('User ID is not provided');
  }
};

// PUT CRUD
let putCrud = async (req, res) => {
  console.log(req.body);

  try {
    let userUpdated = await CRUDService.updateUserData(req.body);
    console.log(userUpdated);
    // i need to navigate to displayCrud here
    return res.redirect('/get-crud');
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
  getEditPage: getEditPage,
  displayCrud: displayCrud,
  // POST
  postCrud: postCrud,
  // PUT
  putCrud: putCrud,
};
