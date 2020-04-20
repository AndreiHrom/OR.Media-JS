var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var seveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var lis = document.getElementsByTagName('li');
//инфо автора 
userInfo = {
    neme:'Andrei',
    surneme:'Zaznov'
    };

//условия добавления даты
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() +1,
    day = date.getDate();
var currDate = ' ' +  day + '-' + month + '-' + year;

    //выполнение удаления
function deleteTodo(){
            for(let span of spans){
            span.addEventListener('click',function(){
          span.parentElement.remove();
        event.preventDefault(); 
    })
}
};

function loadTodo(){  //инициализация LocalStorage
    if(localStorage.getItem('todoApplication')){
      ulSpisok.innerHTML = localStorage.getItem('todoApplication'); 
    }
  };

//addEventListener-получение типа события и вызов функции
inputData.addEventListener('keypress', function(keyPressed){
if(keyPressed.which === 13){
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    newSpan.innerHTML = 'Delete';


    var newTodo = this.value;  // палучение value из imput
    this.value = ''; //очистка поля ввода

    if(newTodo.trim() === ''){ //функция проверки поля ввода на отсутствие данных
        alert('Необходимо ввести данные!');
        return false;
    };


    ulSpisok.appendChild(newLi).append(newSpan, currDate, ' - ', newTodo);

   
    deleteTodo();
    loadTodo();
    striket();
    

}
});

    seveBtn.addEventListener('click', function(){
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

    clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
});



deleteTodo();
loadTodo();
striket();




function striket(){ //зачеркивание текста из списка
    for(let li of lis){
      li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through';
        li.style.color = 'red';
        event.preventDefault();
      })
    }
}
