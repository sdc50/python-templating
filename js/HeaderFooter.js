
define(["./Utils"],function(Utils){
  var HeaderFooter = function(body){
    this.init(body);
  }
    
    
  
  HeaderFooter.prototype = {            
    
    init: function(body){
        this.HEADER_CONTENT =  ''
                            + '<div class="content">'
                            + '   <h1>Python Templating Systems</h1>'
                            + '   <p>A comparision of several templating systems for Python web development.</p>'
                            + '</div>'
                            + '<nav>'
                            + '   <div class="content">'
                            + '     <a href="./index.html" class="active">Overview</a>'
                            + '     <a href="./django.html">Django</a>'
                            + '     <a href="./jinja2.html">Jinja2</a>'
                            + '     <a href="./chameleon.html">Chameleon</a>'
                            + '     <a href="./mako.html">Mako</a>'
                            + '   </div>'
                            + '</nav>'  
              
      this.FOOTER_CONTENT = ''
                          + '<div class="content">'
                          + '  <div>'
                          + '    <small>'
                          + '      <h1>About</h1>'
                          + '      This site was created as an assignment for the IS 542 class at Brigham Young University.'
                          + '    </small>'
                          + '  </div>'
                          + '  <div>'
                          + '    <small>'
                          + '      Copyright © by Scott Christensen. All rights reserved.'
                          + '    </small>'
                          + '  </div>'
                          + '</div>'
                    
      this.header = this.setHTML('header',this.HEADER_CONTENT);
      this.footer = this.setHTML('footer',this.FOOTER_CONTENT);
      this.nav = this.header.getElementsByTagName('nav')[0];
      this.body = body;
      body.insertBefore(this.header,body.firstChild);
      body.appendChild(this.footer);
      
      window.addEventListener('scroll', Utils.bind(this.navBarScroll,this));
    },
    
    setHTML: function(tag,content){
      var el = document.createElement(tag);
      el.innerHTML = content;
      return el;
    },
    
    navBarScroll: function(evt){
        var scroll = document.documentElement.scrollTop; 
        if(scroll < 95){
          this.nav.style.cssText = '';
        }
        else{
          this.nav.style.cssText = "position:fixed; top:0px;";
        }
    }
  }
  
  return HeaderFooter;
});