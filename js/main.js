requirejs.config({
  'paths':{'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
           'jqui': 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min'
          }
});

requirejs(['HeaderFooter', 'ClockWidget', 'Modal', 'jquery', 'jqui'],
  function(HeaderFooter, ClockWidget, Modal, $) {

  var body = document.body;
  
  //Insert Header and Footer
  new HeaderFooter(body);
  
  //add clock widget (not required)
  body.appendChild(new ClockWidget());
  
  //add jquery stuff
  $(function() {
    var head = $('head');
    $('<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css" />').appendTo(head);
    
    //add modal that times session
    var modal = new Modal("Session Expired", "Would you like to continue your session?");
    body.appendChild(modal.modal);
    modal.addButton('Continue', resetSession)
    modal.addButton('Exit',   function exit(){window.location = "http://google.com";});
  
    var countdown, sessionTimeout;
    
    var sessionProgressbar = $('#sessionProgressbar');
    var progressLabel = $('.progress-label');
    
    sessionProgressbar.progressbar({
      value: 0,
      change: function() {
          var val = sessionProgressbar.progressbar( "value" );
          progressLabel.text('Session will expire in ' + (11 - Math.ceil(val/10)) + ' seconds');
      },
      complete: function() {
        progressLabel.text( "Session Expired" );
      }
    });
    
    sessionProgressbar.attr('title', 'Click to pause session timeout.');
    sessionProgressbar.tooltip({track: true});
    progressLabel.css('display', 'none');
    enableSession();
  
    function resetSession(){
      modal.close();
      sessionProgressbar.progressbar('value', 0);
      sessionTimeout = setTimeout(sessionCount,100);
    }
    
    function sessionCount(){
      var value = sessionProgressbar.progressbar('value');
      if(value == 100){
        modal.open();
      }
      else{
        sessionProgressbar.progressbar('value', value + 1);
        sessionTimeout = setTimeout(sessionCount,100);
      }
    }
    
    function disableSession(){
      clearTimeout(sessionTimeout);
      sessionProgressbar.off('click',disableSession);
      sessionProgressbar.on('click',enableSession);
      progressLabel.text('Paused');
      sessionProgressbar.tooltip('option', 'content', 'Click to resume session timeout.');
    }
    
    function enableSession(){
      sessionTimeout = setTimeout(sessionCount,100);
      sessionProgressbar.off('click',enableSession);
      sessionProgressbar.on('click',disableSession);
      sessionProgressbar.tooltip('option', 'content', 'Click to pause session timeout.');
    }
  });

});
