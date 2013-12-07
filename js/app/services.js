'use strict';

/* Services */

var lastfmServices = angular.module('lastfmServices', ['ngResource']);

lastfmServices.factory('Artist', ['$resource',
  function($resource) {
    return $resource('http://ws.audioscrobbler.com/2.0/?', {
    	method: 'artist.getinfo',
    	artist: 'Police',
    	api_key: '9cef1044431cd99f7af6db2051d36ba2',
    	format: 'json'
    }, { 'query':  { method:'GET', isArray:false } });
  }]);