
var lastfmControllers = angular.module('lastfmControllers', []);

lastfmControllers.factory('ArtistFactory', ['Artist', function(Artist){
	var data = Artist.query();

	var factory = {};
	factory.getArtists = function() {
		return data;
	}
	return factory;
}]);

lastfmControllers.controller('ArtistController', 
	function($scope, $http) {
	// $scope.artists = ArtistFactory.getArtists();

	$scope.searchArtist = function() {
		$http({
			url: 'http://ws.audioscrobbler.com/2.0/?',
			method: 'GET',
			params: {
					artist: $scope.search_string,
					method: 'artist.search',
					api_key: '9cef1044431cd99f7af6db2051d36ba2',
	    			format: 'json'
				}
			})
			.success(function(data, status, headers, config) {
				$scope.artistmatches = data.results.artistmatches.artist;
			})
			.error(function(data, status, headers, config) {

			});
	};
	
});