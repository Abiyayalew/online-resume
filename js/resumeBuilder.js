
bio = {
  
  "name"          :  "Abiy Ayalew",
  "role"          :  "Web Developer",
  "contacts"      :  
  {
    "mobile"      :  "702-000-8900",
    "email"       :  "abiynayaaaa@gmail.com",
    "github"      :  "abiyayaaaa",
    "location"    :  "las vegas NV"
  },
  "welcomeMessage" :  "Developer with experience on developing client–server and web-based applications",
  "skills"         :  ["Languages : C#, VB.NET, ASP.NET, HTML, CSS","Databases:  SQL Server, MS Access",
                      "Tools :      MS Visual Studio 2010,UML" ,"Reporting Designer:  SSRS, Crystal Report",
                      "Software :   Word, Excel, PowerPoint, Access, Outlook, publisher ",
                      "Platforms :  Windows Server 2008; Windows XP, 7, 8  "], 
  "pic"            :  "images/fry.jpg",
     
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
    if (bio.skills.length > 0)
    {
        $("#skillwelcomemsg")
            .append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[0]);
        $("#skillwelcomemsg")
            .append(formattedSkill);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[1]);
        $("#skillwelcomemsg")
            .append(formattedSkill);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[2]);
        $("#skillwelcomemsg")
            .append(formattedSkill);
        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[3]);
        $("#skillwelcomemsg")
            .append(formattedSkill);
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
    "Description"    : "Correct errors by making appropriate changes and then rechecking the program to ensure that the desired results are produced. Conduct trial runs of programs and software applications to be sure they will produce the desired information and that the instructions are correct. Compile and write documentation of program development and subsequent revisions, inserting comments in the coded instructions so others can understand the program. Write, update, and maintain computer programs or software packages to handle specific jobs, such as tracking billing data, storing or retrieving data, or controlling other equipment."
    },

    {
    "title"          : "Software officer",
    "employer"       : "Pharmcutical Fund and Supply Agency", 
    "dates"          : "July-2009 - Feburay-2013",
    "city"           : "Ethiopia",
    "Description"    : " Supporting end user and maintaining the existing system by conducting deep analysis . Conduct trial runs of programs and software applications to be sure they will produce the desired information and that the instructions are correct. Compile and write documentation of program development and subsequent revisions, inserting comments in the coded instructions so others can understand the program. Write, update, and maintain computer programs or software packages to handle specific jobs, such as tracking billing data, storing or retrieving data, or controlling other equipment"
    },
    {
    "title"          : "Hardware Techincian",
    "employer"       : "Pharmcutical Fund and Supply Agency", 
    "dates"          : "Feburay-2007 - July-2009",
    "city"           : "Ethiopia",
    "Description"    : "Installing hardware and software system .maintaining or repairing equipment .troubleshooting a variety of computer issues. Setting up computer security measures. Installing, configuring and troubleshooting computer network. Offering technical support on site or via phone or email Performed system, unit, functional and performance testing and reported defects of functionality and output"
    }
  ], 
  display: function ()
  {
    for (job in work.jobs)
    {
        $("#workExperience")
            .append(HTMLworkStart);
        var formattedTitle = HTMLworkTitle.replace(
            "%data%", work.jobs[job].employer);
        var formattedEmployer =HTMLworkEmployer.replace(
            "%data%", work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace(
            "%data%", work.jobs[job].dates);
        var formattedCity = HTMLworkLocation.replace(
            "%data%", work.jobs[job].city);
        var formattedDescription =HTMLworkDescription.replace(
            "%data%", work.jobs[job].Description);
        var formattedJobs =
            formattedEmployer + formattedTitle +
            formattedDate + formattedCity +
            formattedDescription;
        $(".work-entry:last")
            .append(formattedJobs);
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
	"title"      : "HTML,CSS,JavaScript Crush course",
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
	"title"          : "Billing Reporting System", 
	"dates"          : "April-2013 - Augest-2014",
	"Description"    : "This system used to import different data from different sources, and converted into single data format and processed them and ready for report. The system has more than 150 reports that has be generated by management daily, weekly and monthly base ",
	"images"         :  ["images/entry.png","images/entry.png"]
    },
    {
	"title"          : "Voucher and Active subscriber Management system", 
	"dates"          : "September-2013 - December-2013",
	"Description"    : "This system used to register beginning, received and sold vouchers and SIMs.Import daily activated voucher and subscription data from billing database and  processed them and provided different reports like Dealer and POS performance, discrepancy between sold and activated voucher. ",
	"images"         :  ["images/loginform.png","images/loginform.png"]
    },
    {
	"title"          : "Monthly revenue processing system", 
	"dates"          : "March-2014 - July-2014",
	"Description"    : "The system is used to register all revenues collected from each subscriber from different services like voice, sms and data and other vas services. Processed the data and exported monthly information in the form of access table to required department automatically.",
	"images"         : []
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
        var formattedDescription = HTMLprojectDescription.replace(
            "%data%", this.projects[project].Description);
            $(".project-entry:last")
            .append(formattedDescription);
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

    
