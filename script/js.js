
const toDos= [
  'Закончить писать книгу',
  'Вывести собаку на прогулку',
  'Ответить на емейлы',
  'Сделать ченибудь еще',
  'Купить продукты',
  'Еще какое-то задание'
]
  $(document).ready(function(){
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    handlerO()
    handlerN()
  });



 
  $('.btn-center').on('click', function(){
    $('.content').slideUp(700)
    
  })
  
  
  var textArea = $('.text-area')
  
  textArea.on('keypress', function(e){
    
    if(e.code === "Enter"){
      console.log('test')
      var text = textArea.val()
      toDos.push(text.toString())
      e.preventDefault()
      
      toDos.forEach(function(item){
        console.log(item)
        textArea.val("")
      })

    }
  })
  

  var handlerO = function(e){
    
  var ulOld = $('.oldTodos').empty()
  toDos.forEach(function(item){
    ulOld.prepend($(`<li>${item}</li>`))
  })
}
  
var handlerN = function(e){
  var ul = $('.newTodos').empty()
  toDos.forEach(function(item){
    ul.append($(`<li>${item}</li>`))
  })
}
var tab = $('.tab')
 tab.on('click', function(e){
    if(e.target.dataset.par === "new" ){
      handlerN()
      
    }if(e.target.dataset.par === "old" ){
      handlerO()
  }
})