import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
  // home
  router.get('/', (req, res) => {
    return homeController.getHomePage(req, res);
  });
  // crud
  router.get('/crud', (req, res) => {
    return homeController.getCrud(req, res);
  });
  // post crud
  router.post('/post-crud', (req, res) => {
    return homeController.postCrud(req, res);
  });
  // test
  router.get('/test', (req, res) => {
    return homeController.getTestPage(req, res);
  });
  return app.use('/', router);
};

module.exports = initWebRoutes;
