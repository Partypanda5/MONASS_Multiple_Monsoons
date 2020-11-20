var MMTitle = document.getElementById('multipleMonsoons');
var UATitle = document.getElementById('UrbanAssemblages');
var contentSection = document.getElementById('primaryPanel');
var contentSectionTitle = document.getElementById('cityHeadings');

var section = $('li');

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);

MMTitle.addEventListener('click', () => 
{
  contentSection.innerHTML = "<h3 id='contentTitle'>An exhibition of the <br/> Monsoon Assemblages</h3> <br><br><p class='contentText'>Bangladesh’s sediment heavy rivers frequently braid or shift, creating precarious, nomadic units of land called chars that cannot be mapped, legally owned or recorded in revenue papers because they move around too quickly and too frequently. Chars have historically been occupied by precarious, marginal populations, often without official documents. Those who live on them lead perilous, calamitous lives. When the monsoon breaks and the flow of rivers increase each year, their land frequently deserts them, their shelters are devastated, crops are damaged and livestock washed away. As the river recedes, new chars emerge and fierce, at times violent struggles to occupy them, overseen by local strongmen, ensue. </p>";

  cityHeadings.innerHTML = "<a href='#'><h1 class='cityName'>MULTIPLE <br/>MONSOONS</h1></a>";
});

UATitle.addEventListener('click', () => 
{
  contentSection.innerHTML = "";
  contentSectionTitle.innerHTML = "<div id='cityNameContainer'><a id='chennaiTitle;' href='#'><h1 class='cityTitlePrimary'>CHENNAI</h1></a><a id='dhakaTitle' href='#'><h1 class='cityTitlePrimary'>DHAKA</h1></a><a id='YangonTitle' href='#'><h1 class='cityTitlePrimary'>YANGON</h1></a><a id='LondonTitle' href='#'><h1 class='cityTitlePrimary'>LONDON</h1></a></div>";
});