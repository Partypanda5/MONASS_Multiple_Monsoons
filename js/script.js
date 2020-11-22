var MMTitle = document.getElementById('multipleMonsoons');
var UATitle = document.getElementById('UrbanAssemblages');

var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');

var AccordianOne = document.getElementById('sectionOne');
var AccordianTwo = document.getElementById('sectionTwo');
var AccordianThree = document.getElementById('sectionThree');
var AccordianFour = document.getElementById('sectionFour');

var subtitleContainerOne = document.getElementById('subtitleContainerOne');
var focusedSubtitlesOne = document.getElementById('focusedSubtitlesOne');
var subtitleContainerTwo = document.getElementById('subtitleContainerTwo');
var focusedSubtitlesTwo = document.getElementById('focusedSubtitlesTwo');
var subtitleContainerThree = document.getElementById('subtitleContainerThree');
var focusedSubtitlesThree = document.getElementById('focusedSubtitlesThree');
var subtitleContainerFour = document.getElementById('subtitleContainerFour');
var focusedSubtitlesFour = document.getElementById('focusedSubtitlesFour');

var section = $('li');

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);
section.on('click', checkActiveAccordian);
section.on('click', checkInactiveAccordian);

MMTitle.addEventListener('click', () => 
{
  contentSection.innerHTML = "<h3 id='contentTitle'>An exhibition of the <br/> Monsoon Assemblages</h3> <br><br><p class='contentText'>Bangladesh’s sediment heavy rivers frequently braid or shift, creating precarious, nomadic units of land called chars that cannot be mapped, legally owned or recorded in revenue papers because they move around too quickly and too frequently. Chars have historically been occupied by precarious, marginal populations, often without official documents. Those who live on them lead perilous, calamitous lives. When the monsoon breaks and the flow of rivers increase each year, their land frequently deserts them, their shelters are devastated, crops are damaged and livestock washed away. As the river recedes, new chars emerge and fierce, at times violent struggles to occupy them, overseen by local strongmen, ensue. </p>";

  cityHeadings.innerHTML = "<a href='#'><h1 class='cityName'>MULTIPLE <br/>MONSOONS</h1></a>";
});

UATitle.addEventListener('click', () => 
{
  contentSection.innerHTML = "";
  contentSectionTitle.innerHTML = "<div id='cityNameContainer'><a id='chennaiTitle' href='#'><h1 id='cityChennai' class='cityTitlePrimary'>CHENNAI</h1></a><a id='dhakaTitle' href='#'><h1 id='cityDhaka' class='cityTitlePrimary'>DHAKA</h1></a><a id='YangonTitle' href='#'><h1 id='cityYangon' class='cityTitlePrimary'>YANGON</h1></a><a id='LondonTitle' href='#'><h1 id='cityLondon' class='cityTitlePrimary'>LONDON</h1></a></div>";
  
var chennaiTitle = document.getElementById('chennaiTitle');
var cityChennai = document.getElementById('cityChennai');
var DhakaTitle = document.getElementById('dhakaTitle');
var cityDhaka = document.getElementById('cityDhaka');
var YangonTitle = document.getElementById('YangonTitle');
var cityYangon = document.getElementById('cityYangon');
var LondonTitle = document.getElementById('LondonTitle');
var cityLondon = document.getElementById('cityLondon');

chennaiTitle.addEventListener('click', () => 
{
  cityChennai.style.fontWeight = '900';
  cityChennai.style.textDecoration = "underline";

  $("#cityDhaka").delay(100).animate({"opacity": "0"}, 500);
  $("#cityYangon").delay(100).animate({"opacity": "0"}, 500);
  $("#cityLondon").delay(100).animate({"opacity": "0"}, 500);
  
});

DhakaTitle.addEventListener('click', () => 
{
  cityDhaka.style.fontWeight = '900';
  cityDhaka.style.textDecoration = "underline";


  var changeDhakaPosition = setTimeout(dhakaTimer, 1000);

  function dhakaTimer ()
  {
    // cityDhaka.style.position = "absolute";
    // cityDhaka.style.top = '0vh';
    contentSection.innerHTML = "<p class='contentText'>“Dhaka was a floating city. That's why Dhaka was chosen to be the capital, in those days water was the protection” (River activist, interview with Beth Cullen, 19th October 2019, Dhaka)</p>";
    contentSection.style.position = 'absolute';
    contentSection.style.top = '40vh';
    contentSection.style.opacity = '0';

    $("#primaryPanel").delay(250).animate({"opacity": "1"}, 500);
  }

  $("#cityChennai").delay(250).animate({"opacity": "0"}, 500);
  $("#cityYangon").delay(250).animate({"opacity": "0"}, 500);
  $("#cityLondon").delay(250).animate({"opacity": "0"}, 500);
  
});
});



 function checkActiveAccordian()
{
    if (AccordianOne.classList.contains('active'))
    {
      subtitleContainerOne.style.display = 'none';
      focusedSubtitlesOne.style.display = 'block';

    }
    else if (AccordianTwo.classList.contains('active'))
    {
      subtitleContainerTwo.style.display = 'none';
      focusedSubtitlesTwo.style.display = 'block';
    }
    else if (AccordianThree.classList.contains('active'))
    {
      subtitleContainerThree.style.display = 'none';
      focusedSubtitlesThree.style.display = 'block';
    }
    else if (AccordianFour.classList.contains('active'))
    {
      subtitleContainerFour.style.display = 'none';
      focusedSubtitlesFour.style.display = 'block';
    }
}

function checkInactiveAccordian()
{
  if(!$(sectionOne).hasClass("active"))
  {
    subtitleContainerOne.style.display = 'inline';
    focusedSubtitlesOne.style.display = 'none';
    //alert('section one deactivated');
  }
  if (!$(sectionTwo).hasClass("active"))
  {
    subtitleContainerTwo.style.display = 'inline';
    focusedSubtitlesTwo.style.display = 'none';
    //alert('section two deactivated');
  }
  if (!$(sectionThree).hasClass("active"))
  {
    subtitleContainerThree.style.display = 'inline';
    focusedSubtitlesThree.style.display = 'none';
    //alert('section three deactivated');
  }
  if (!$(sectionFour).hasClass("active"))
  {
    subtitleContainerFour.style.display = 'inline';
    focusedSubtitlesFour.style.display = 'none';
   // alert('section four deactivated');
  }
}

checkActiveAccordian();
checkInactiveAccordian();