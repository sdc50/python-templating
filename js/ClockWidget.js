define(["./Utils"], function(Utils){
  
  
var ClockWidget = function(){
  this.init();
  return this.timeContainer;
}

ClockWidget.prototype = {
  
  init: function(){
      this.timeContainer = document.createElement('div');
      this.timeDiv = document.createElement('div');
      var timeIcon = document.createElement('img');
      timeIcon.src = 'http://iconbug.com/data/b1/64/60b97059b77edcfc25463eacdfcf8be0.png';
      
      this.timeContainer.appendChild(timeIcon);
      this.timeContainer.appendChild(this.timeDiv);
      
      this.offset = -135;
      
      this.timeContainer.style.right = this.offset + "px";
      this.timeContainer.style.position = 'fixed'; 
      this.timeContainer.style.top = '150px';
      this.timeContainer.style.transition = 'right 1s';
      this.timeContainer.style.cursor = 'pointer';
      this.timeDiv.style.border = '1px solid gray'; 
      this.timeDiv.style.backgroundColor = 'gray'; 
      this.timeDiv.style.padding = '0 10px';
      this.timeDiv.style.color = 'white';
      this.timeDiv.style.fontSize = '30px';
      this.timeDiv.style.textShadow = '2px 2px black';
      this.timeDiv.style.fontFamily = "arial";
      this.timeDiv.style.display = 'inline';
      timeIcon.style.marginBottom = '-22px';
      
      
      this.setBindings();
      this.timeContainer.addEventListener('click',this.toggleTime);
      this.updateTime();
  },

  toggleTime: function(evt){
    var div = this.timeContainer;
    if(div.style.right == "0px"){
      div.style.right = this.offset + "px";
    }
    else{
      div.style.right = "0px";
    }
  },
  
  formatTimeElement: function (elem){
    return elem < 10 ? "0" + elem : elem;
  },
  
  getTime: function(){
    var d = new Date();
    var hr = this.formatTimeElement(d.getHours());
    var min = this.formatTimeElement(d.getMinutes());
    var sec = this.formatTimeElement(d.getSeconds());
    var time = "" + hr + ":" + min + ":" + sec;
    return time;
  },
  
  updateTime: function(){
    this.timeDiv.innerText = this.getTime();
    setTimeout(this.updateTime,1000);
  },
  
  setBindings: function(){
    this.updateTime = Utils.bind(this.updateTime, this);
    this.toggleTime = Utils.bind(this.toggleTime, this);
    //this.getTime    = Utils.bind(this.getTime,    this);
  }
    
}

return ClockWidget;
});