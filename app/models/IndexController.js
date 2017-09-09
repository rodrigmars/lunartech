(function() {

  angular.module('app').component('appHome', {
    templateUrl: "/app/views/home.html",
    controller: "HomeCtrl as vm"
  }, 'HomeCtrl', HomeCtrl);

  HomeCtrl.$injex = [];

  function HomeCtrl() {
    var vm = this;

    vm.title = "Pagina HOME";

  }

}())
