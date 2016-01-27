
bio = {
  
  "name"          :  "Abiy Ayalew",
  "role"          :  "Web Developer",
  "contacts"      :  
  {
    "mobile"      :  "702-785-8968",
    "email"       :  "abiynayalew@gmail.com",
    "github"      :  "abiyayalew",
    "linkedin"    :  "www.linkedin.com/in/abiyayalew",
    "location"    :  " Las Vegas NV "
  },
  "welcomeMessage" :  "Front-End developer with experience on developing responsive web application",
  "skills"         :  ["Languages : C#, ASP.NET, HTML5, CSS3, JavaScripts",
                      "Framework/Liberary:  jQuery, Ajax, Bootstrap, Foundation, Knockout.js,Gulp",
                      "Databases:  SQL Server, MS Access",
                      "Tools :      Chrome Dev tools, Jasmine, MS Visual Studio 2010" ,
                      "Software :   Word, Excel, PowerPoint, Access, Outlook, publisher ",
                      "Platforms :  Windows Server 2008; Windows XP, 7, 8  "], 
  "pic"            :  "images/myimage.jpg",
     
  display: function ()
  {
    var formattedName = HTMLheaderName.replace(
        "%data%", bio.name);
    $("#namerole")
        .append(formattedName);
    var formattedRole = HTMLheaderRole.replace(
        "%data%", bio.role);
    $("#namerole")
        .append(formattedRole);
    var formattedMobile = HTMLmobile.replace(
        "%data%", bio.contacts.mobile);
    $(".flex-box")
        .append(formattedMobile);
    var formattedEmail = HTMLemail.replace(
        "%data%", bio.contacts.email);
    $(".flex-box")
        .append(formattedEmail);
    var formattedGithub = HTMLgithub.replace(
        "%data%", bio.contacts.github);
    $(".flex-box")
        .append(formattedGithub);
    var formattedlinkedin= HTMLlinkedin.replace(
        "%data%", bio.contacts.linkedin);
    $(".flex-box")
        .append(formattedlinkedin);
        
    var formattedLocation = HTMLlocation.replace(
        "%data%", bio.contacts.location);
    $(".flex-box")
        .append(formattedLocation);
    var formattedPic = HTMLbioPic.replace(
        "%data%", bio.pic);
    $("#photo")
        .append(formattedPic);
    var formattedWelcomemsg = HTMLwelcomeMsg.replace(
        "%data%", bio.welcomeMessage);
    $("#skillwelcomemsg")
        .append(formattedWelcomemsg);
    for( i=0;i<2; i++) {
        $("#skillwelcomemsg")
            .append(Newline);
    }
    if (bio.skills.length > 0)
    {
        for (skill in this.skills)
        {
            var formattedSkill = HTMLskills.replace(
            "%data%", this.skills[skill]);
           $("#skillwelcomemsg")
            .append(formattedSkill);
        }
    }
  }
};
 
work = {

  "jobs" : [
    {
    "title"          : "Programmer analyst",
    "employer"       : "vivacell", 
    "dates"          : "April-2013 - Augest-2014",
    "city"           : "South Sudan",
    "Description"    : [" Modified and maintained billing report system used for generating reports, allowing managers to make well-informed and timely decisions.",
                        " Developed and deployed voucher and subscriber dump system to increase efficiency and reduce process time by 40%.",
                        " Developed and deployed SIM registration system, enabling more accurate estimates of dealer performance and reduce theft."," Managed 10-15 user requests weekly  by creating SQL scripts, index and complex queries to extract different reports."
                       ]                  
    },

    {
    "title"          : "Software officer",
    "employer"       : "Pharmcutical Fund and Supply Agency", 
    "dates"          : "July-2009 - Feburay-2013",
    "city"           : "Ethiopia",
    "Description"    : [" Supported, maintained, and added new functionality to existing inventory management system, payroll and human resource system.",
                        " Developed and implemented transit-follow up system used to manage short expiry of pharmaceutical items resulting in the 10% decrease in cost.",
                        "Provided training and user support on developed systems for +40 employees."]
    },

    {
    "title"          : "Hardware Techincian",
    "employer"       : "Pharmcutical Fund and Supply Agency", 
    "dates"          : "Feburay-2007 - July-2009",
    "city"           : "Ethiopia",
    "Description"    : ["Installed,maintained or repaired hardware and software system troubleshooting.",
                        "Configured and troubleshot computer network.",
                        "Offering technical support on site or via phone or email",
                        "Performed system, unit, functional and performance testing and reported defects of functionality and output."
                       ]
    }
  ], 
    display: function ()
    {
        for (job in this.jobs)
        {
            $("#workExperience")
            .append(HTMLworkStart);
        var formattedEmployer =HTMLworkEmployer.replace(
            "%data%", this.jobs[job].title);
            
        var formattedTitle = HTMLworkTitle.replace(
            "%data%", this.jobs[job].employer);
            
        var formattedDate = HTMLworkDates.replace(
            "%data%", this.jobs[job].dates);
            
        var formattedCity = HTMLworkLocation.replace(
            "%data%", this.jobs[job].city);
            
            var formattedJobs =
            formattedEmployer + formattedTitle +
            formattedDate + formattedCity + Newline 
            $(".work-entry:last")
            .append(formattedJobs);
            if (this.jobs[job].Description.length > 0)
            {
                for (desc in this.jobs[job].Description)
                    {
                        var formattedDescription = HTMLworkDescription.replace(
                        "%data%", this.jobs[job].Description[desc]);
                        $(".work-entry:last")
                        .append(formattedDescription);   
                    }
            }
            
        }
    }
  

};

education = {
  "schools" : [     
    {
    "name"           : "Addis Ababa University",
    "degree"         : "B.A.",
    "dates"          :  "2007",
    "location"       : "Ethiopia",
    "major"          : "Information system"
    }
  ],

  "onlinecourse" : 
    {
	"title"      : "Front-End web developer",
	"school"     :  "Udacity",
	"dates"      :  "2015",
	"url"        : "http://www.udacity.com/course/ud804"
    },

  display: function ()
  {
    for (education in this.schools)
    {
        $("#education")
            .append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(
            "%data%", this.schools[education].name);
        var formattedDegree = HTMLschoolDegree.replace(
            "%data%", this.schools[education].degree);
        var formattedDates = HTMLschoolDates.replace(
            "%data%", this.schools[education].dates);
        var formattedLocation =HTMLschoolLocation.replace(
            "%data%", this.schools[education].location);
        var formattedMajor = HTMLschoolMajor
            .replace("%data%", this.schools[education].major);
        var formattedSchools = formattedName +
            formattedDegree + formattedDates +
            formattedLocation + formattedMajor;
        $(".education-entry")
           .append(formattedSchools);
    }
    $(".education-entry")
        .append(HTMLonlineClasses);
    var formattedonlineTitle = HTMLonlineTitle.replace(
      "%data%", this.onlinecourse.title);
    var  formattedonlineSchool= HTMLonlineSchool.replace(
      "%data%", this.onlinecourse.school);
    var formattedonlineDates = HTMLonlineDates.replace(
      "%data%", this.onlinecourse.dates);
    var formattedonlineUrl = HTMLonlineURL.replace(
      "%data%", this.onlinecourse.url);
    var formattedonline =
        formattedonlineTitle +
        formattedonlineSchool +
        formattedonlineDates +
        formattedonlineUrl;
    $(".education-entry")
        .append(formattedonline);
  }

};
                 
projects = {

  "projects" : [
    {
	"title"          : "Neighborhood Map ", 
	"dates"          : "Dec-2015 - Dec-2015",
	"Description"    : [" Coded to add a full-screen map to page using the Google Maps-API.",
                        " Coded to add map markers that contain location you are interested in within this neighborhood.",
                        " Implemented the search bar functionality to search and filter your map markers and list view.",
                        " Used: HTML5, CSS, JavaScript’s, jQuery, Ajax, Knockout.js, Google Map Api, Bootstrap "
                       ],
	"images"         :  ["images/Neighborhoodmap.png"]
    },
    {
	"title"          : "Arcade Game Clone", 
	"dates"          : "Nov-2015 - Nov-2015",
	"Description"    : ["Clone of the classic game, Frogger.  Udacity provided the art assets and game engine.",
                        "Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style.",
                        "Added different features  to game to make it more interactive to the user.",
                        "Used: Object-Oriented JavaScript’s, HTML5 Canvas, CSS, jQuery. "
                        ],
	"images"         :  ["images/game.png"]
    },
    {
	"title"          : "Web Optimization", 
	"dates"          : "Nov-2015 - Dec-2015",
	"Description"    : ["Performed optimization to achived PageSpeed score around 95 for mobile and 97 for desktop of on index.html", 
                        "performed optimization insuring consistant frame rate at 60fps when scrolling pizza.html",
                        ],
    "images"         :  ["images/WebsiteOptimization.png"]                    
    }
  ],
  display: function ()
  {
    for (project in this.projects)
    {
        $("#projects")
            .append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(
            "%data%", this.projects[project].title);
            $(".project-entry:last")
            .append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace(
            "%data%", this.projects[project].dates);
            $(".project-entry:last")
           .append(formattedDate);
           $(".project-entry:last")
           .append(Newline);
        
        if (this.projects[project].Description.length > 0)
        {
            for (desc in this.projects[project].Description)
            {
                var formattedDescription = HTMLprojectDescription.replace(
                "%data%", this.projects[project].Description[desc]);
                $(".project-entry:last")
                .append(formattedDescription);
            }
        }

        if (this.projects[project].images.length >0)
        {
            for (images in this.projects[project].images)
            {
                var formattedImages = HTMLprojectImage.replace(
                    "%data%", this.projects[project].images[images]);
                    $(".project-entry:last")
                    .append(formattedImages);
            }
        }
    }
    $("#projects").append(HTMLProjectSpace);
  }

};
 
bio.display();
work.display();
projects.display();
education.display();

$(document)
    .click(function (loc)
    {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x, y);
    });

function inName(name)
{
    name = name.split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1)
        .toUpperCase() + name[0].slice(1)
        .toLowerCase();
    return name[0] + " " + name[1];
}
$("#main")
    .append(internationalizeButton);
$("#mapDiv")
    .append(googleMap);

    
