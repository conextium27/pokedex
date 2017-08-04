// app.js carga todos los modulos/componentes que tiene
// la app.. consulta y usuarios
(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal
  angular.module('app', [
    'ui.router',
    'app.consulta',
    'app.usuarios',
    'app.pokedex'
  ]);
    angular.module('app.consulta', []);
        angular.module('app.pokedex', []);
    angular.module('app.usuarios', []);

})();
