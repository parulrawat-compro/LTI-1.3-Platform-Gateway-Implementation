const Router = require('express').Router();
const appConfig = require('config').get('app');

const HomeRoutes = require('./home.routes');
const PlatformRoutes = require('./platform.routes');
const ResourcesRoutes = require('./resources.routes');

Router.use('/home', HomeRoutes);
Router.use('/platform', PlatformRoutes);
Router.use('/resources', ResourcesRoutes);


Router.get('/', (req, res) => res.render('index', {
  title: appConfig.title
}));

module.exports = Router;
