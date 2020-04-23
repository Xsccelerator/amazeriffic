var main = function(){
    'use strict'
   //getJSON сразу интерпретирует JSON, поэтому
   //нет необходимости вызывать JSON.parse
   $.getJSON("cards/aceOfSpades.json", function(card){
       console.log(card)
   })
   
}
$(document).ready(main)