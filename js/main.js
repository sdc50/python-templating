requirejs(['HeaderFooter', 'ClockWidget', 'Modal'],
  function(HeaderFooter, ClockWidget, Modal) {

  var body = document.body;
  
  //Insert Header and Footer
  new HeaderFooter(body);
  
  //add modal that times session
  var modal = new Modal("Session Expired", "Would you like to continue your session?");
  body.appendChild(modal.modal);
  
  //add clock widget (not required)
  body.appendChild(new ClockWidget());

});
