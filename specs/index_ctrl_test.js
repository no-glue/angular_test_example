describe("IndexCtrl", function() {
  var scope = {};
  beforeEach(module("app"));
  beforeEach(
    inject(function($controller) {
      $controller("IndexCtrl", {$scope: scope});
    }));
  it("should say a greeting", function() {
    expect(scope.say).toBe("Welcome!");
  });
});
