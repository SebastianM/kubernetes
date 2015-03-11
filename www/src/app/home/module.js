import {HomeController} from './home.controller'

export var ngModule = angular.module('kubernetesApp.home', []);
ngModule.controller('HomeController', HomeController);

ngModule.config(function($stateProvider) {
	$stateProvider.state('base.home', {
	  url: '/',
    controller: 'HomeController',
	  templateUrl: 'app/home/main.html'
	});
})