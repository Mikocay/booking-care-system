import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', (req, res) => {
    return homeController.getHomePage(req, res);
  });
  router.get('/test', (req, res) => {
    return homeController.getTestPage(req, res);
  });
  return app.use('/', router);
};

module.exports = initWebRoutes;
