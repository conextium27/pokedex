(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal

  var pokemonFilters = angular.module('Pokedex.filters', []);

  pokemonFilters.filter('colortype', ['$filter', function ($filter) {
		return function (input) {
			input = input.toLowerCase();

			if (input == 'water' || input == 'ice') {
				return 'info';
			};


			if (input == 'fire') {
				return 'danger';
			};

			if (input == 'psychic' || input == 'poison' || input == 'ghost') {
				return 'primary';
			};

			if (input == 'electric') {
				return 'warning';
			};

			if (input == 'bug' || input == 'grass' || input == 'poi') {
				return 'success';
			};

			return 'default';
		};
	}]);


})();
