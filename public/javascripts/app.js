var app = angular.module("app", ["ngResource", "ngRoute"]).config(router);

function router($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "html/index.html",
    controller: "IndexCtrl"
  });
};
