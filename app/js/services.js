'use strict';

/* Services */

angular.module('openWeatherApp.services', [])


  .value('exampleLocations',['Amsterdam','Oslo','Berlin','Athens','London'])

  .factory('weatherService',function($http){

      var apiKey = '1c79c7a5bb99d2267dfc7aaf7eba3010';
      var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

      return {
          getWeatherByLocation : function (loc,cb) {
              $http({
                 method:'GET',
                 url:apiBaseUrl+'/weather?q='+loc+'&appid='+apiKey
              }).then(function success(response){
                  cb(response);
              },function error(response){
                  cb(response);
              });
          },
          getWeatherForecast : function (loc,cb) {
              $http({
                  method:'GET',
                  url:apiBaseUrl+'/forecast?q='+loc+'&cnt=5&appid='+apiKey
              }).then(function (response) {
                  cb(response);
              },function (response) {
                  cb(response);
              });
          }
      };
  })
