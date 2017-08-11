(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal

  //var pokemonFilters = angular.module('app.filters', []);
  angular
    .module('app.pokedex')
    .filter('colortype', colortype);
/*
    function colortype () {
		    return function (input) {
			//input = input.toLowerCase();


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
	};
*/
      function colortype () {
        return function (input) {
        switch (input) {
        case 'water' || 'ice':
              return 'info';
            break;
        case 'flying':
              return 'primary';
              break;
        case 'fire' || 'dragon':
              return 'danger';
            break;
        case 'psychic' || 'poison' || 'ghost':
              return 'primary';
            break;
        case 'electric':
              return 'warning';
            break;
        case 'bug' || 'grass' || 'poi':
              return 'success';
            break;
        default:
            return 'default';
        }

        return 'default';
      };
    };

})();
