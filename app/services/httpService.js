(function (window, angular, undefined) {
  'use strict';

  angular.module('clusterMgmtApp').factory('httpSvc', httpSvc);

  httpSvc.$inject = ['$http', '$q', 'appConfig'];

  function httpSvc($http, $q, appConfig) {
    
    var Models = {
        'clusterServices'    : {}
    };
  }
})(window, window.angular);
