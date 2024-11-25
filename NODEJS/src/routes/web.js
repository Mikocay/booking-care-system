import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
  // HOME
  router.get('/', (req, res) => {
    return homeController.getHomePage(req, res);
  });

  // CRUD
  router.get('/crud', (req, res) => {
    return homeController.getCrud(req, res);
  });
  // POST CRUD
  router.post('/post-crud', (req, res) => {
    return homeController.postCrud(req, res);
  });
  // GET CRUD
  router.get('/get-crud', (req, res) => {
    return homeController.displayCrud(req, res);
  });
  // EDIT CRUD
  router.get('/edit-crud', (req, res) => {
    return homeController.getEditPage(req, res);
  });
  router.post('/put-crud', (req, res) => {
    return homeController.putCrud(req, res);
  });
  // TEST
  router.get('/test', (req, res) => {
    return homeController.getTestPage(req, res);
  });
  return app.use('/', router);
};

module.exports = initWebRoutes;
