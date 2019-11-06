const Router = require('express').Router();
const PlatformController = require('../controllers/platform.controller');

// Router.get('/', PlatformController.sendPlatformtoGateway);

Router.get('/getdata', PlatformController.senduserData);

module.exports = Router;
