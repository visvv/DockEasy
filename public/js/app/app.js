/**
 * @author Vishnu Vasudevan
 * @
 */
var app = angular.module('DockEasy',[]);
app.config(function($sceProvider) {
	// Completely disable SCE. For demonstration purposes only!
	// Do not use in new projects.
	$sceProvider.enabled(false);
});
app.factory('ImageService',['$http', ImageService]);
app.controller('ImageController', ['$scope','ImageService','$sce',ImageController]);

//app.filter('stringZipFilter', function(){
//	return stringZipFilter;
//});
//
//window.onpopstate = function(e){
//    	window.location.reload();
//};

