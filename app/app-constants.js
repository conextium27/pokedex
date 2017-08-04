// app-comstants.js carga las apis qie se van a utilizar
// en este caso la api de pokemon
(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal
  angular.module('app').constant('Constants',{
    api: 'https://pokeapi.co/api/v2/',
    //species: 'http://pokeapi.co/api/v2/pokemon-species/'

  });
})();
