var MMTitle = document.getElementById('multipleMonsoons');
var UATitle = document.getElementById('UrbanAssemblages');

var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');
var primaryPanelContainer = document.getElementById('mainSection');
var primaryTitle = document.querySelector('.cityName');
var contentText = document.querySelector('.contentText');

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

var dhakaScroll = false;
var scrollCounter = 0;

var videoContent = document.getElementById('videoContent');
var imageContent = document.getElementById('imageContent');

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
  primaryPanelContainer.innerHTML = `<div id="cityHeadings"><a href="#"><h1 class="cityName">MONSOONAL <br/>MULTIPLICITIES</h1></a></div><div id="primaryPanel" class="content"><h3 id="contentTitle">An exhibition of <br/> Monsoon Assemblages</h3> <br><br><p class="contentText">Bangladesh’s sediment heavy rivers frequently braid or shift, creating precarious, nomadic units of land called chars that cannot be mapped, legally owned or recorded in revenue papers because they move around too quickly and too frequently. Chars have historically been occupied by precarious, marginal populations, often without official documents. Those who live on them lead perilous, calamitous lives. When the monsoon breaks and the flow of rivers increase each year, their land frequently deserts them, their shelters are devastated, crops are damaged and livestock washed away. As the river recedes, new chars emerge and fierce, at times violent struggles to occupy them, overseen by local strongmen, ensue.</p></div>`;

  cityHeadings.innerHTML = "<a href='#'><h1 class='cityName'>MONSOONAL <br/>MULTIPLICITIES</h1></a>";

  imageContent.style.display = 'none';
  videoContent.style.display = 'block';
  videoContent.style.opacity = 0;
  contentSection.style.position = 'relative';
  contentSection.style.top = '24.5vh';
});

UATitle.addEventListener('click', () => 
{
  primaryPanelContainer.innerHTML = `<div id="cityHeadings">
  <div id='cityNameContainer'><a id='chennaiTitle' href='#'><h1 id='cityChennai' class='cityTitlePrimary'>CHENNAI</h1></a><a id='dhakaTitle' href='#'><h1 id='cityDhaka' class='cityTitlePrimary'>DHAKA</h1></a><a id='YangonTitle' href='#'><h1 id='cityYangon' class='cityTitlePrimary'>YANGON</h1></a><a id='LondonTitle' href='#'><h1 id='cityLondon' class='cityTitlePrimary'>LONDON</h1></a></div>
  </div><div id="primaryPanel" class="content"></div>`;

  imageContent.style.opacity = '0';
  videoContent.style.display = 'none';
  videoContent.style.opacity = 0;
  contentSection.style.position = 'relative';
  contentSection.style.top = '23.5vh';
  
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

  $("#cityDhaka").delay(100).animate({"opacity": "0"}, 500);
  $("#cityYangon").delay(100).animate({"opacity": "0"}, 500);
  $("#cityLondon").delay(100).animate({"opacity": "0"}, 500);
  
});

DhakaTitle.addEventListener('click', () => 
{
  cityDhaka.style.fontWeight = '900';
  dhakaScroll = true;

  var changeDhakaPosition = setTimeout(dhakaTimer, 1000);

  function dhakaTimer ()
  {
    cityDhaka.style.position = "absolute";
    cityDhaka.style.top = '9.5vh';
    var contentSection = document.getElementById('primaryPanel');
    contentSection.innerHTML = `<p class='contentText'>“Dhaka was a floating city. That's why Dhaka was chosen to be the capital, in those days water was the protection” (River activist, interview with Beth Cullen, 19th October 2019, Dhaka)</p>`;
    contentSection.style.position = 'absolute';
    contentSection.style.top = '26vh';
    contentSection.style.opacity = '0';
    videoContent.style.display = 'block';

    $("#primaryPanel").delay(250).animate({"opacity": "1"}, 500);
    $("#videoContent").delay(250).animate({"opacity": "1"}, 500);
  }

  $("#cityChennai").delay(250).animate({"opacity": "0"}, 500);
  $("#cityYangon").delay(250).animate({"opacity": "0"}, 500);
  $("#cityLondon").delay(250).animate({"opacity": "0"}, 500);

  if (dhakaScroll === true && scrollCounter == 0) 
  {
    primaryPanelContainer.addEventListener('wheel', () => 
    {
      $("#primaryPanel").delay(250).animate({"opacity": "0"}, 600);
      $("#videoContent").delay(250).animate({"opacity": "0"}, 600);
      $("#cityDhaka").delay(100).animate({"opacity": "0"}, 600);
      $("#imageContent").delay(100).animate({"opacity": "1"}, 600);

      primaryPanelContainer.innerHTML = `<div id='cityHeadings'><a href='#'><h1 id='hydroTitle' class='cityName'>Hydrological <br/>Infrastructure</h1></a></div><div id='primaryPanel' class='hydrologicalContentText'><p class='contentText'>Since the late 1980s, Dhaka East has been the target of speculative urban development driven by the powerful real estate sector. It is an area of low floodplains and marshy lands that are inundated during the monsoon. To prepare land for development, land is elevated above predicted flood levels through a process known as sand pumping. Suction dredgers extract vast quantities of sand  from river beds, which is then pumped from barges via steel pipelines into the floodplains and marshlands. Dhaka East is this being reimagined and reformed from the fluid fabric of its surroundings through the pumping and piping of sand.</p><a id='explore' href='#'>Explore Map</a></div>`;

      var hydrologicalContentText = document.querySelector('.hydrologicalContentText');

      hydrologicalContentText.style.top = "25vh";
      contentSectionTitle.style.top = "8vh";

      var exploreButton = document.getElementById('explore');
      var backToHydro = document.getElementById('backHyrdo');

      exploreButton.addEventListener('click', () => 
      {
          $("#primaryPanel").delay(250).animate({"opacity": "0"}, 500);
          $(".cityTitle").delay(250).animate({"opacity": "0"}, 500);
          $(".cityName").delay(250).animate({"opacity": "0"}, 500);
          $("#imageContent").delay(250).animate({"z-index": "5"}, 500);
          $("#backHyrdo").delay(250).animate({"opacity": "1"}, 500);
      });

      backToHydro.addEventListener('click', () => 
      {
          $("#imageContent").delay(250).animate({"z-index": "0"}, 100);
          $("#primaryPanel").delay(250).animate({"opacity": "1"}, 500);
          $(".cityTitle").delay(250).animate({"opacity": "1"}, 500);
          $(".cityName").delay(250).animate({"opacity": "1"}, 500);
          $("#backHyrdo").delay(250).animate({"opacity": "0"}, 500);
      });

      console.log(scrollCounter, dhakaScroll);
      scrollCounter = 1;

    if (dhakaScroll === true && scrollCounter == 1)
    {
      primaryPanelContainer.addEventListener('wheel', () => 
      {
        scrollCounter = 2;
        console.log(scrollCounter, dhakaScroll);
        $("#primaryPanel").delay(250).animate({"opacity": "0"}, 600);
        $("#imageContent").delay(100).animate({"opacity": "0"}, 600);
        $(".cityTitle").delay(250).animate({"opacity": "0"}, 500);
        $(".cityName").delay(250).animate({"opacity": "0"}, 500);
      });
    } 
  });
  }
});
});

var zoom = new dmuka.Zoom({
  element: document.querySelector("#hydrologicalImage"),
      // Transform scale increment
      increment: 0.3,

      // Transform min scale
      minZoom: 1,

      // Transform max scale
      maxZoom: 5,

      // Animate enable
      transitionEnable: true,

      // Element append to new parent element
      parentEnable: true,

      // If added parent then classes will add to parent
      parentClasses: "",

      // If added parent then overflow css will add to parent
      parentOverflow: "hidden",

      // If added parent then padding css will add to parent
      parentPadding: 20
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