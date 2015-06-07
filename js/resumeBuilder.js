var bio = {
	"name" : "Ivan Sumano-Vargas",
	"role": "Web Developer",
	"contacts": {
		"mobile": "831-531-8478",
		"email": "ivansumano@gmail.com",
		"github": "ivansumano",
		"location": "Santa Cruz"
	},
	"welcomeMessage": "Welcome to my online resume",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/bioPic.jpg"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	$("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);
}

var work = {
	"jobs": [
		{
			"employer": "Toys R Us",
			"title": "Store Associate",
			"location" : "Santa Cruz, CA",
			"dates": "2010 - 2011",
			"description": "Short seasonal postion. Worked on cashier during the busiest time of the year. Cleaned up aisles of any messes. While working the floor would help any customers with questions."
		},
		{
			"employer": "City of Santa Cruz",
			"title": "Library Aide/Tech Aide",
			"location" : "Santa Cruz, CA",
			"dates": "2010 - Present",
			"description": "Shelving books back ino their proper place. Pulling books to be held for requests. Shelf reading. Checking in returned books. As tech aide assiting the public with any questions they may have while using our public internet computers."
		}
	]
}

work.display = function() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedDatesDescription = formattedDates + formattedDescription;

	$(".work-entry:last").append(formattedDatesDescription);

	}
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "Something about this project.",
			"images": ["images/197x148.gif"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			console.log(formattedImage);
			$(".project-entry:last").append(formattedImage);	
		}		
	}
}

var education = {
	"schools": [
	 	{
			"name": "Cabrillo College",
			"city": "Aptos, CS",
			"degree": "Associates",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://www.cabrillo.edu/"
		},
	],
	"onlineCourses": [
	 	{
		 	"title": "Front-End Web Developer Nanodegree",
		 	"school" : "Udacity",
		 	"dates": 2015,
		 	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolTotalName = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(schoolTotalName);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedCity);
		

		for(major in education.schools[school].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	if(education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (online in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			$(".education-entry:last").append(formattedOnlineTitle);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			$(".education-entry:last").append(formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

function inName(oldName) {
	var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);
