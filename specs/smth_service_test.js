describe("SmthService", function() {
  var smthService, httpBackend;
  beforeEach(module("app"));
  beforeEach(inject(function(SmthService, $httpBackend) {
    smthService = SmthService;
    httpBackend = $httpBackend;
  }));
  it("should respond", function() {
    httpBackend.when("GET", "/smth").respond([{
      "msg": "smth"
    }]);
    msg = smthService.query();
    httpBackend.flush();
    console.log(msg);
    expect(msg[0].msg).toEqual("smth")
  });
});
