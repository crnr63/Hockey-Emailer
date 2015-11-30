(function() {

  var teams = [{
    name: "Anaheim Mighty Ducks",
    id: "ANA"
  }, {
    name: " Arizona Coyotes",
    id: "ARI"
  }, {
    name: "Boston Bruins",
    id: "BOS"
  }, {
    name: "Buffalo Sabres",
    id: "BUF"
  }, {
    name: "Calgary Flames",
    id: "CGY"
  }, {
    name: "Carolina Hurricanes",
    id: "CAR"
  }, {
    name: "Chicago Blackhawks",
    id: "CHI"
  }, {
    name: "Colorado Avalanche",
    id: "COL"
  }, {
    name: "Columbus Blue Jackets",
    id: "CBJ"
  }, {
    name: "Dallas Stars",
    id: "DAL"
  }, {
    name: "Detroit Red Wings",
    id: "DET"
  }, {
    name: "Edmonton Oilers",
    id: "EDM"
  }, {
    name: "Florida Panthers",
    id: "FLA"
  }, {
    name: "Los Angeles Kings",
    id: "LAK"
  }, {
    name: "Minnesota Wild",
    id: "MIN"
  }, {
    name: "Montreal Canadians",
    id: "MTL"
  }, {
    name: "Nashville Predators",
    id: "NSH"
  }, {
    name: "New Jersey Devils",
    id: "NJD"
  }, {
    name: "New York Islanders",
    id: "NYI"
  }, {
    name: "New York Rangers",
    id: "NYR"
  }, {
    name: "Ottawa Senators",
    id: "OTT"
  }, {
    name: "Philadelphia Flyers",
    id: "PHI"
  }, {
    name: "Pittsburgh Penguins",
    id: "PIT"
  }, {
    name: "San Jose Sharks",
    id: "SJS"
  }, {
    name: "St Louis Blues",
    id: "STL"
  }, {
    name: "Tampa Bay Lightning",
    id: "TBL"
  }, {
    name: "Toronto Maple Leafs",
    id: "TOR"
  }, {
    name: "Vancouver Canucks",
    id: "VAN"
  }, {
    name: "Washington Capitals",
    id: "WSH"
  }, {
    name: "Winnipeg Jets",
    id: "WPG"
  }];
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function($scope) {

    $scope.options = {
      availableOptions: teams,
      selectedOption: teams[0] //This sets the default value of the select in the ui

    };
    $scope.email = {
      text: 'me@example.com'
    };
    $scope.list = [];

    $scope.submit = function() {
//making sure that a team has been selected and that an email has been entered
      if ($scope.options.selectedOption != null && $scope.email.text != "me@example.com") {

        $scope.list.push([$scope.email.text, $scope.options.selectedOption.id]);
        $scope.text = '';
        var data = $scope.list;
        //post the form data to express/node then switch to seperate page to let user know their request has complteted 
        $http.post('/post', data, config).then(function(){ window.location="/scomplete";});
      }
    };

  });

})();
