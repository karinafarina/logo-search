var logos = {
	aciFade: {
		url: "/logo-search/img/aci.png",
		program: 'scholarship',
		education: 'K-8',
	},
	aciColor: {
	 	url: "/logo-search/img/aciColor.png",
	},
	acmFade: {
	 	url: "/logo-search/img/amcFade.png",
	 	program: 'loan',
	 	education: 'Highschool',
	 },
	 acmColor: {
	 	url: "/logo-search/img/acmColor.png",
	 },
	afeFade: {
	 	url: "/logo-search/img/afeFade.png",
	 	program: 'scholarship',
	 	education: 'Highschool',
	 },
	afeColor: {
	 	url: "/logo-search/img/afeColor.png",
	 }
}
function checkSelections(logos, src) {
	var i;
	for(i in logos) {
		if(logos.hasOwnProperty(i)) {
			console.log(logos[i]);
		}
	}
}

$(document).ready(function() {
	$(".search-button").on('click', function(event) {
		event.preventDefault();
		if($("#program-type").val() == null && $("#education-level").val() == null) {
			$(".aci").attr("src", logos.aciColor.url);
			console.log($(".aci"))
			$(".acm").attr("src", logos.acmColor.url);
			$(".afe").attr("src", logos.afeColor.url);
		}
		checkSelections(logos, $(".acm").attr("src", logos.acmColor.url))
	})
});