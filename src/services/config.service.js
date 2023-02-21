angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapilkp-env.eba-hqqb9fdf.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);