// JavaScript Document


//initialise the angular module - 
var mainApp = angular.module("mainApp", []);


//A controller is a JavaScript object containing attributes/properties and functions. Each controller accepts $scope as a parameter which refers to the application/module that controller is to control - here it's mainApp.controller

mainApp.controller("voucherController", function($scope){
	
	"use strict";
	
	$scope.purchase = { //purchase object with values passed in through voucherController
	
		name: "",
		email: "",		
		telephone: "",
		five: "",
		ten: "",
		fifteen: "",

		cost: function(){
			var purchaseObject;//create a variable called purchaseObject
			purchaseObject = $scope.purchase;//pass the values from purchase object into purchaseObject
			return (5 * this.five)+(10 * this.ten)+(15 * this.fifteen);//call the values of this object. Can also use purchaseObject.five etc
			}
		
	};
	
		$scope.gift = {

			name: "",
			email: "",		
			message: "",

		};
	
	
});




