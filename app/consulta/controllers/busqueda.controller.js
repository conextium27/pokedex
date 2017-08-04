(function () {
    'use strict';

    angular
        .module('app.pokedex')
        .controller('BusquedaController',BusquedaController);

        function BusquedaController ($scope, $http, Constants) {
           $scope.tipo = "/ shiny"
           $scope.base_exp = "Base de Experencia"
           $scope.altura = "m"
           $scope.peso = "kg"
           $scope.parentesis1 = "("
           $scope.parentesis2 = ")"
           var vm = this;

           var typeLookup = {
             "normal": "normal",
             "fire": "fire",
             "water": "water",
             "electric": "electric",
             "grass": "grass",
             "fighting": "fighting",
             "poison": "poison",
             "ground": "ground",
             "flying": "flying",
             "bug": "bug",
             "rock": "rock",
             "ghost": "ghost",
             "dragon": "dragon",
             "dark": "dark",
             "steel": "steel",
             "fairy": "fairy",
             "psychic": "psychic",
             "ice": "ice"
           };
           var typeLookup2 = {
              "normal": "normal",
              "fire": "fire",
              "water": "water",
              "electric": "electric",
              "grass": "grass",
              "fighting": "fighting",
              "poison": "poison",
              "ground": "ground",
              "flying": "flying",
              "bug": "bug",
              "rock": "rock",
              "ghost": "ghost",
              "dragon": "dragon",
              "dark": "dark",
              "steel": "steel",
              "fairy": "fairy",
              "psychic": "psychic",
              "ice": "ice"
            };

           $scope.pokemonType = '';
           $scope.pokemonType2 = '';
  	       $scope.isSearching = false;
           $scope.speciesUrl = '';

           $scope.search = function() {
  		     $http.get(Constants.api + 'pokemon/' + $scope.searchPokemon )
  			      .then(function successCallback(res) {
  				          $scope.pokemon = res.data;
  				          $scope.isSearching = true;
  				          $scope.pokemonType = typeLookup[res.data.types[0].type.name];
                    $scope.pokemonType2 = typeLookup2[res.data.types[1].type.name];
                    //$scope.speciesUrl =  Constants.api + 'pokemon-species/' + $scope.searchPokemon;
                    //console.log($scope.speciesUrl =  Constants.api + 'pokemon-species/' + $scope.searchPokemon);

                    //$scope.pokemon.sprite = 'http://pokeapi.co/media/img/' + $scope.searchPokemon + '.png';
  			            });
  	        };

            $scope.makeUrl = function() {
              $http.get(Constants.api + 'pokemon-species/' + $scope.searchPokemon)
                .then(function (){
                  console.log($scope.speciesUrl =  Constants.api + 'pokemon-species/' + $scope.searchPokemon);
                });
            };









        }


})();
