(function($){
  $(function(){
 
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
     $('.modal-trigger').leanModal();
       $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
      $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

  var options = [
    {selector: '.class', offset: 200, callback: 'globalFunction()' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);
  $(".button-collapse").sideNav();
  
 $('.rrr').sideNav({
      menuWidth: 260, // Default is 240
      //edge: 'right', // Choose the horizontal origin
       // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
   //$('.collapsible').collapsible();
   // $(document).click(function(){
     //   $('.rrr').sideNav.toggle();
    //});
  //$('.rrr').sideNav('show');
  // Hide sideNav
//$('.rrr').sideNav('hide');

  }); // end of document ready
})(jQuery); // end of jQuery name space
