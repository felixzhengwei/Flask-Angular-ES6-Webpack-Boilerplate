import angular from 'angular';
import angularRoute from 'angular-route';
import uiBootstrap from 'angular-ui-bootstrap';
import config from './config';
import homeController from './controllers/homeController';
import 'babel-polyfill';
//configuration could be updated and seperated into different files if needed

var moduleName = "app";
var app = angular.module(moduleName, [
 'ngRoute', 'ui.bootstrap',
]).config(config)
  .controller('homeController', homeController);

export default moduleName;
