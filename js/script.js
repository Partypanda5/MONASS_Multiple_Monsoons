var section = $('li');
var Chennai = document.getElementById('Chennai');
var Dhaka = document.getElementById('Dhaka');
var Yangon = document.getElementById('Yangon');
var London = document.getElementById('London');
var sectionOne = document.getElementById('sectionOne');
var sectionTwo = document.getElementById('sectionTwo');
var sectionThree = document.getElementById('sectionThree');
var sectionFour = document.getElementById('sectionFour');

function toggleAccordion() 
{
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);

Chennai.addEventListener('click', () => 
{
  sectionTwo.classList.remove('active');
  sectionThree.classList.remove('active');
  sectionFour.classList.remove('active');
  sectionOne.classList.add('active');
});

Dhaka.addEventListener('click', () => 
{
  sectionTwo.classList.add('active');
  sectionThree.classList.remove('active');
  sectionFour.classList.remove('active');
  sectionOne.classList.remove('active');
});

Yangon.addEventListener('click', () => 
{
  sectionTwo.classList.remove('active');
  sectionThree.classList.add('active');
  sectionFour.classList.remove('active');
  sectionOne.classList.remove('active');
});

London.addEventListener('click', () => 
{
  sectionTwo.classList.remove('active');
  sectionThree.classList.remove('active');
  sectionFour.classList.add('active');
  sectionOne.classList.remove('active');
});