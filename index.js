

// buttons 

var addBtn = document.getElementById('add-btn');
var delBtn = document.getElementById('delete-btn');
var plusBtn = document.querySelector('.btn-section');
var itemDelete = document.getElementById('item-delete');

// Containers

var container = document.querySelector('.input-field');
var overlay = document.querySelector('.overlay');

// section Field

var sectionField = document.querySelector('.section-container');

// input values

var novel = document.getElementById('inputField');
var author = document.getElementById('author');
var textarea = document.getElementById('text-area');


delBtn.addEventListener('click', function (event) {
    event.preventDefault();
    container.style.display = "none";
    overlay.style.display = "none";
})


var res = document.querySelector('.container');


addBtn.addEventListener('click', function () {

    if(novel.value === '' & author.value ==='' & textarea.value === ''){
        alert('Please Enter The Valid Information!');
    }
    else{
        var a = document.createElement('div');
        a.setAttribute('class', 'sub-div');
        a.innerHTML = ` <h1>${novel.value}</h1>
         <h5>${author.value}</h5>
         <p>${textarea.value}</p>
     <button id="item-delete" onclick=deleted(event)>DELETE</button>`;
        res.append(a);
        author.value = '';
        novel.value = '';
        textarea.value = '';
        container.style.display = "none";
        overlay.style.display = "none";
    }

   

  
})

plusBtn.addEventListener('click', function () {
    overlay.style.display = "block";
    container.style.display = "block";
})



function deleted(event) {
    event.preventDefault();
    event.target.parentElement.remove();
}


// addBtn.addEventListener('click',function(){
   
// })

