/*Project - Moores B*B - Author: John Mulhall, StudentID:10042622
  Project for Web Design & Development module B8IT115*/
/*Custom JavaScript for all pages*/

//Script run on useful_links.html

//function 1 - slideshow of featured useful links
$(document).ready(function() {
  $("#home_page_slideshow > figure:gt(0)").hide();
    setInterval(function() {
      $('#home_page_slideshow > figure:first').fadeOut(1500).next().fadeIn(1500).end().appendTo('#home_page_slideshow');
  }, 4000);
});

//function 2 - contact form acknowledgement (HTML attribute input.required element has killed this function)
document.getElementById("submit_button").onclick = function submitForm() {
    alert("Many thanks, your contact form was received successfully recevied. "+
    "\nWe shall be in touch within 2 working days");
}
