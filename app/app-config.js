(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal

  angular
      .module('app')
      .config(config);

  function config($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/otro');

    $stateProvider.state('app', {
        abstract: true,
        views: {
            'header': { // arma la template por modulos
                templateUrl: 'app/general/views/header.tpl.html'
            },
            'sidebar': {
                templateUrl: 'app/general/views/sidebar.tpl.html'
            }
        }

            }).state('app.index', { // listado de proyectos ***
		            url: '/index',
                views:{
                    'main@':{
                        templateUrl: 'app/general/views/main.tpl.html'
                    }
                },
                //controller: 'PokedexController',
                //controllerAs:'ctrlPoke'
            }).state('app.pokedex', { // listado de proyectos ***
		            url: '/pokedex',
                views:{
                    'main@':{
                        templateUrl: 'app/consulta/views/pokedex.tpl.html'

                    }
                },
                controller: 'BusquedaController'
                //controllerAs: 'ctrlBusqueda'
            });




  }

})();
