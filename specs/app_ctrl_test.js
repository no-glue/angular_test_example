describe("AppCtrl", function() {
  var scope = {};
  beforeEach(module("app"));
  beforeEach(
    inject(function($controller) {
      $controller("AppCtrl", {$scope: scope});
    }));
  it("should define a list", function() {
    expect(scope.list).toBeDefined();
  });
  it("should contain test", function() {
    expect(scope.list[0]).toEqual("test");
  });
  it("should contain execute", function() {
    expect(scope.list[1]).toEqual("execute");
  });
  it("should contain refactor", function() {
    expect(scope.list[2]).toEqual("refactor");
  });
});
