describe("FavoriteTester", function() {
  var realShortName;
  var fakeShortName;
  var $controller;
  var signupController;
  var $httpbackend;
  beforeEach(function() {
    realShortName = "D1" ;
    fakeShortName = "TTT1";
    module(function ($provide) {
        $provide.service('MenuServiceErrorMock', function () {
          var service = this;

          service.getShortNames = function (menuNumber) {
            var basePath = "https://pure-cove-56216.herokuapp.com";
            var testData = {data:{"id":2,"short_name":"D1","name":"Duck Rice","description":" duck sauteed with onions, carrots, and broccoli, served on a bed of white rice","price_small":13.50,"price_large":17.50,"small_portion_name":"pint","large_portion_name":"large","created_at":"2020-11-2T00:35:47.270Z","updated_at":"2020-11-2T00:35:47.270Z","category_short_name":"D","image_present":true}};
            var url = basePath + '/menu_items/'+menuNumber+'.json';
            $httpBackend.whenGET(url).respond([200, testData]);
            $httpBackend.flush();
          };
      });
      $provide.service('InfoServiceErrorMock', function () {
          var service = this;
          service.user = {};
          service.getUser = function(){
          return service.user;
          };     
      });
    });
    beforeEach(module('public'));

  });


  beforeEach(inject(function (_$controller_, _$httpBackend_, MenuServiceErrorMock, InfoServiceErrorMock) {
    $controller = _$controller_;
    $httpbackend=_$httpBackend_;


    signupController = $controller('SignupController',
                  {MenuService: MenuServiceErrorMock, InfoService: InfoServiceErrorMock});

  }));

  it("should be able to determine shortname is invalid", function() {
    var result = signupController.checkFavorite(fakeShortName);

    expect(signupController.message).toEqual("No such menu number exists");
  });

  it("should be able to determine shortname is valid", function() {
    var result = signupController.checkFavorite(realShortName);
    expect(signupController.message).toEqual("");
  });
});