app.factory("SmthService", ["$resource", function($resource) {
  return $resource("/smth");
}]);
