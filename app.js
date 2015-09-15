var app = angular.module('PresApp', []);

app.controller('MainController', ['$scope', function($scope)]) {

$scope.topics = [
{
	budget: "Which solution do you feel would help balance out nation's budget?",
	taxPolicy: "Which tax solution do you agree with?",
	education: "Does the common core improve or hurt our education system?",
	obamacare: "Good, bad, or good but needs changes?",
	immigration: "Which solution do you think would solve our illegal immigration issues?",
	abortion: "Pro-life or Free Choice?",
	foreignPolicies: "Solution to ISIS, China, etc..?",
	unemployment: "Solutions?",
	gay/women rights: "Where do you stand?",
	government/people power: "Do you prefer the government or people to have more power?",

}];

//jumbotron with parallax function
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


}]);

