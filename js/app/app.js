var lastfmApp = angular.module('lastfmApp', [
	'lastfmControllers',
	'ngRoute'
]);

lastfmApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/artist_details/:mbid', {
			templateUrl: 'partials/artist_details.html',
			controller: 'ArtistDetailsController'
		})
		.when('/artist_search', {
				templateUrl: 'partials/artist_search.html',
				controller: 'ArtistSearchController'
		})
		.otherwise({
			redirectTo: '/artist_search'
		})
}]);