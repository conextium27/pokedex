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

           $scope.pokemonType = '';
  	       $scope.isSearching = false;
           $scope.evolution_chain = '';
           //$scope.speciesUrl = '';

           $scope.search = function() {
  		     $http.get(Constants.api + 'pokemon/' + $scope.searchPokemon )
  			      .then(function successCallback(res) {
  				          $scope.pokemon = res.data;
  				          $scope.isSearching = true;
                    //$scope.pokemonType = typeLookup[res.data.types[0].type.name];
                    //$scope.pokemonType2 = typeLookup2[res.data.types[1].type.name];
                    //if($scope.pokemonType = typeLookup[res.data.types[1].type.name]){
                        //$scope.pokemonType = typeLookup[res.data.types[1].type.name];
                    //    console.log($scope.pokemonType2 = typeLookup2[res.data.types[1].type.name]);
                  //  }


                    $scope.makeUrl();
                    //$scope.evo();

                    //$scope.speciesUrl =  Constants.api + 'pokemon-species/' + $scope.searchPokemon;
                    //console.log($scope.speciesUrl =  Constants.api + 'pokemon-species/' + $scope.searchPokemon);

                    //$scope.pokemon.sprite = 'http://pokeapi.co/media/img/' + $scope.searchPokemon + '.png';
  			      }).catch(function(err){
                console.log(err);
              });

              if($scope.evolution_chain != ''){
                  $scope.nextEvolution();
                  //console.log("adaskdjahksdhkj");
              }
  	      };

            $scope.makeUrl = function() {
              $http.get(Constants.api + 'pokemon-species/' + $scope.searchPokemon)
                .then(function successCallback(red){
                  $scope.special_data = red.data;
                  $scope.evolution_chain = $scope.special_data.evolution_chain.url;

                });
            };

            $scope.nextEvolution = function() {
              $http.get($scope.evolution_chain)
                .then(function successCallback(nextEvolu){
                  $scope.nextEvo = nextEvolu.data;
                    console.log($scope.nextEvo);
                    console.log(nextEvolu.data);

                }).catch(function(err){
                  console.log(err);
                });
            };

/*


            $scope.evo = function() {
              var evu = parseInt($scope.searchPokemon) + 1 ;
              $http.get(Constants.api + 'pokemon/' + evu)
                .then(function successCallback(evo){

                  $scope.evoluciona = evo.data;
                  //console.log(pokemon2);
                });
            };
*/












        }


})();
