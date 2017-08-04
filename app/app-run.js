(function() { //closure tiene que ir en todos, factories, contraller, directivas. todo lo ologico
  'use strict'; // mas estricto de lo normal
  angular.module('app').run(correr);
  function correr($rootScope){
    console.log('app-run.js');
  }
})();
