'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('OpenWeatherCtrl',
    ['$scope','exampleLocations','weatherService',
      function($scope,exampleLocations,weatherService) {

    $scope.message = '';
    $scope.hasState = '';
    $scope.kelvin = 273.15;
    $scope.chartData = [];
    $scope.exampleLocations = exampleLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';


    // On initialization
    weatherService.getWeatherByLocation(exampleLocations[0],function(data){
        $scope.weather = data.data;
    });

    $scope.setLocation = function(loc) {
        weatherService.getWeatherByLocation(loc,function(data){
            $scope.weather = data.data;
        });

        weatherService.getWeatherForecast(loc,function(data){
            $scope.forecastWeather = data.data.list;
        });
    };

    $scope.getForecast = function (loc) {
        $scope.onForecast = true;
        $scope.forecastWeather = [];
        weatherService.getWeatherForecast(loc,function(data){
            $scope.forecastWeather = data.data.list;
            console.log(data);

        });
    };

    $scope.parseDate = function (time) {
        return new Date(time * 1000);
    };

    $scope.getIconImageUrl = function(iconName) {
        return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
