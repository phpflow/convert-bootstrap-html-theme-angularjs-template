(function(){
	
	angular.module('clusterMgmtApp', [
		'app.localdev.config',
		'ui.router'
	])
	
	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
		
		$urlRouterProvider
	    .when('', '/app')
		
    $stateProvider
        .state('app', {
			url: '/app',
            views: {
              '@': {
		            templateUrl: 'app/layout/layout.html'
	          	},
	          	'header@app' : { 
	          		templateUrl: 'app/layout/header.html'
	          	},
	          	'siderbar@app' : { 
	          		templateUrl: 'app/layout/sidebar.html'
	          	},
	          	'footer@app' : { 
	          		templateUrl: 'app/layout/footer.html'
	          	}
            },
          })
		 ;
	})
	.run(function ($rootScope, $state, $location) {
		//console.log($location);
		
		$rootScope.$on('$viewContentLoaded', function(event){
	        
	    });
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		
      	});
	});
})();

