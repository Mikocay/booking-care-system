import db from '../models/index';

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

let getTestPage = (req, res) => {
  return res.render('test/testPage.ejs');
};

module.exports = {
  getHomePage: getHomePage,
  getTestPage: getTestPage,
};
