var logos = [
	{
		name: "aci",
		fadeUrl: "/logo-search/img/aci.png",
		colorUrl: "/logo-search/img/aciColor.png",
		program: 'Scholarship Program',
		education: 'K-8',
	},
	{
		name: "acm",
	 	fadeUrl: "/logo-search/img/amcFade.png",
	 	colorUrl: "/logo-search/img/acmColor.png",
	 	program: 'Loan Program',
	 	education: 'Highschool',
	},
	{
	 	name: "afe",
	 	fadeUrl: "/logo-search/img/afeFade.png",
	 	colorUrl: "/logo-search/img/AFEcolor.png",
	 	program: 'Scholarship Program',
	 	education: 'Highschool',
	},
	
]


$(document).ready(function() {
	$(".search-button").on('click', function(event) {
		event.preventDefault();
		for(var i = 0;i< logos.length; i++) {
			var currentLogo = logos[i];
			var currentProgram = currentLogo.program;
			var currentEducation = currentLogo.education;
			console.log($("#program-type").val(), $("#education-level").val(), currentEducation );
			if($("#program-type").val() == currentProgram || $("#education-level").val() == currentEducation) {
				console.log("matched");
				$("." + currentLogo.name).attr("src", currentLogo.colorUrl);
				console.log(currentLogo.colorUrl);
			}
			if($("#program-type").val() == null && $("#education-level").val() == null) {
				$('.' + currentLogo.name).attr('src', currentLogo.colorUrl);
			}
		}
				
	})
});