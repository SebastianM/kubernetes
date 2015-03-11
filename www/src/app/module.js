'use strict';
/*jshint esnext: true */

import * as home from './home/module';
import * as navbar from '../components/navbar/module';

let vendorModules = ['ngAnimate', 'restangular', 'ui.router', 'ui.bootstrap'];
let appModules = [
  home.ngModule.name,
  navbar.ngModule.name
];

export var appModule = angular.module('kubernetesApp', vendorModules.concat(appModules))
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('base', {
      abstract: true,
      templateUrl: 'app/base.html'
    });

    $urlRouterProvider.otherwise('/');
  });

