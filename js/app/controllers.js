
var lastfmControllers = angular.module('lastfmControllers', [])
	
	.controller('ArtistSearchController',['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.artistmatches = [];
			
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
						var artistMatches = data.results.artistmatches.artist;
						for (index in artistMatches) {
							if (artistMatches[index].mbid !== '') {
								$scope.artistmatches.push(artistMatches[index]); 
							}
						}
					})
					.error(function(data, status, headers, config) {

					});
			};

		$scope.artistDetails = function(mbid) {
			$location.path('/artist_details/' + mbid).replace();
		}
	}])

	.controller('ArtistDetailsController', ['$scope', '$http', '$routeParams', '$sce', 
		function($scope, $http, $routeParams, $sce) {

		$http({
			url: 'http://ws.audioscrobbler.com/2.0/?',
			method: 'GET',
			params: {
					mbid: $routeParams.mbid,
					method: 'artist.getinfo',
					api_key: '9cef1044431cd99f7af6db2051d36ba2',
	    			format: 'json'
				}
			})
			.success(function(data, status, headers, config) {
				data.artist.summary = $sce.trustAsHtml(JSON.stringify(data.artist.summary));
				$scope.artist = data.artist;
			})
			.error(function(data, status, headers, config) {

			})

	}]);