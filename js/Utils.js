define(function(){
  
var Utils = function () {
    
}

Utils.prototype = {

    bind: function (fn, context) {
        return function(){
          fn.apply(context, arguments);
        }
    }
}

return new Utils;
});