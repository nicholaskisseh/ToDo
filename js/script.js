let addbtn = document.getElementById('addbtn'); 
let clearbtn = document.getElementById('clearbtn'); 
let todo_ol = document.getElementById('mylist'); 
let inputItem = document.getElementById('inputItem');
var todolistarray = [];

var clearlist = function(){
todolistarray = []
localStorage.removeItem('mylist');
mylist.innerHTML = '';
}

var ListItemobj = function(content, status){
    this.content = '';
    this.status = 'incomplete'; 
}

let refreshlocalstorage = function(){
var todo = todolistarray;
localStorage.removeItem('my list');
localStorage.setItem('my list', JSON.stringify(todo))

}

var addlistL = function(){
   let newlistitem = new ListItemobj();
   newlistitem.content = inputItem.value;
   todolistarray.push(newlistitem);
   //Refresh
   refreshlocalstorage();

   var newitem = createitemDom(inputItem.value, 'incomplete');
   mylist.appendchild(newitem);
   inputItem.value = '';
}


clearbtn.addEventListener('click',clearlist);
