define(["jquery", "./Utils"],function($, Utils){
  
var Modal = function(title, content){
  this.init(title, content);
}

Modal.prototype = {
 
  init: function(title, content){
 
    this.modal = document.createElement('div');
    this.modal.className = 'modalBackground';
    this.content = document.createElement('section');
    this.content.className = "content modalContent";
    this.content.innerHTML = "<h1>" + title + "</h1> <p>" + content + "</p>";
    this.modal.appendChild(this.content);
    // this.continueBtn = document.createElement('button');
    // this.continueBtn.innerText = "Continue";
    // this.continueBtn.className = 'modalButton';
    // this.content.appendChild(this.continueBtn);
    // this.exitBtn = document.createElement('button');
    // this.exitBtn.innerText = "Exit";
    // this.exitBtn.className = 'modalButton';
    // this.content.appendChild(this.exitBtn);
    
    
    this.applyCss();
    
    this.setBindings();
    
    //this.setListeners();
    
    //this.continueSession();
  },
  
  applyCss: function(){
  
    var modalBackgroundCss = ''
                  //+ '.modalBackground {'
                  + ' position:fixed;'
                  + ' top:0;'
                  + ' height:100%;'
                  + ' width:100%;'
                  + ' background-color:rgba(10,10,10,.7);'
                  + ' display:none;'
                  //+ '}'
                  ;
    this.modal.style.cssText = modalBackgroundCss;
    
    var modalContentCss = ''
                  //+ '.modalContent {'
                  + ' position:fixed;'
                  + ' top:50%;'
                  + ' left:50%;'
                  + ' height:250px;'
                  + ' width:500px;'
                  + ' margin-top:-125px;'
                  + ' margin-left:-250px;'
                  + ' background-color:white;'
                  + ' box-shadow: 0px 0px 50px 10px black;'
                  + ' border-radius:10px;'
                  + ' text-align:center;'
                  //+ '}'
                  ;
    this.content.style.cssText = modalContentCss;
                 
    var modalBtnCss = ''
                  //+ '.modalButton {'
                  + ' font-size:30px;'
                  + ' border-radius:10px;'
                  + ' color:white;'
                  + ' cursor:pointer;'
                  + ' align:right;'
                  + ' background-color:#3670A0;'
                  + ' border:1px solid gray;'
                  + ' margin: 10px;'
                  //+ '}'
                  ;
                 
    //this.continueBtn.style.cssText = modalBtnCss;
    //this.exitBtn.style.cssText = modalBtnCss;     
    //document.styleSheets[0].insertRule(modalBackgroundCss, 1);
    //document.styleSheets[0].insertRule(modalContentCss, 1);
    //document.styleSheets[0].insertRule(modalBtnCss, 1);
  },
  
  addButton: function(name, func){
    var btn = document.createElement('button');
    btn.innerText = name;
    btn.className = 'modalButton';
    this.content.appendChild(btn);
    
    btn.addEventListener('click', func);
    
    var modalBtnCss = ''
              //+ '.modalButton {'
              + ' font-size:30px;'
              + ' border-radius:10px;'
              + ' color:white;'
              + ' cursor:pointer;'
              + ' align:right;'
              + ' background-color:#3670A0;'
              + ' border:1px solid gray;'
              + ' margin: 10px;'
              //+ '}'
              ;
              
    btn.style.cssText = modalBtnCss;
  },
  
  open: function(){
    this.modal.style.display = 'block';
  },
  
  close: function(){
    this.modal.style.display = 'none';
  },
  
  // continueSession: function(){
    // this.close();
    // setTimeout(this.open,10000);
  // },
//   
  // exit: function(){
    // window.location = "http://google.com";
  // },
  
  setBindings: function(){
    //this.disableSession = Utils.bind(this.disableSession,this);
    //this.continueSession = Utils.bind(this.continueSession,this);
    this.open = Utils.bind(this.open,this);
    this.close = Utils.bind(this.close,this);
  },

  setListeners: function(){
    //this.disableBtn.addEventListener('click',this.disableSession);
    //this.continueBtn.addEventListener('click',this.continueSession);
    //this.exitBtn.addEventListener('click',this.exit);
  }

}



return Modal;
});