(function (window, angular, undefined) {
  'use strict';
  angular.module('jenkinsApp').controller('jenkinsServicesCtrl', jenkinsServicesCtrl);

  jenkinsServicesCtrl.$inject = ['$scope', 'httpSvc', 'appConfig'];

	function jenkinsServicesCtrl($scope, httpSvc, appConfig) {
		alert('ddd');
		$scope.getAllServiesView = function(){
			var request = httpSvc.JenkinsServices.getAll();
			request.success(function(response){
				$scope.services = response.results;
				
			}).error(function(){
				
			});
		}


	function init(){

		$scope.getAllServiesView();

	}

	init();
   }
   
})(window, window.angular);