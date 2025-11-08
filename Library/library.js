const dialog = document.querySelector('dialog');
const inputImg = document.querySelector('#inputImg');
const inputprev = document.querySelector("#Imagepreview");
const addbtn = document.querySelector('#Add_book');
const btitle = document.querySelector('#Book_title');
const bauthor = document.querySelector('#Book_author');
const bcategory = document.querySelector('#Category');
const deletebtn = document.querySelector('#deletebtn');
const library = document.querySelector('.library');
const opendialog = document.querySelector('#open-dialogbtn');
const closedialog = document.querySelector('#Cancel');
const emptyCard = document.querySelector('#empty-card');
const emptyCardBtn = document.querySelector('#empty-card-button');



let arr = [];
let bookindex;
let clickevent = new Event('click');

let clicked = false;


function bookCreator(id, title, author, category)
{
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category
}



addbtn.addEventListener("click", ()=>
{
    if(!(btitle.value) || !(bauthor.value) || !(bcategory.value))
    {
        alert("Enter all the details");
        return;     
    }

    emptyCard.style.display = "none";

    bookindex = arr.length;

    arr[bookindex] = new bookCreator(crypto.randomUUID(), btitle.value, bauthor.value, bcategory.value);

    btitle.value = null;
    bauthor.value = null;
    bcategory.value = "";

    const div =  document.createElement('div');
    div.classList.add('book');
    div.setAttribute("id", arr[bookindex].id);

    //Unique id for checbox and the label
    const cbID = `${arr[bookindex].id}-cb`;

    //Unique id for category id
    const CategoryID = `${arr[bookindex].id}-category`;

    div.innerHTML = `<h3>${arr[bookindex].title}</h3>
             <img src="delete-1487-svgrepo-com.svg" data-id="${arr[bookindex].id}" class = "deletebtn">
            <p class="author">Author : ${arr[bookindex].author}</p>
            <p class="category" id="${CategoryID}">${arr[bookindex].category}</p>
            <input type="checkbox" id="${cbID}">
            <label class="readClass" for = "${cbID}">Yet to Read</label>
            <label class="AlreadyreadClass" for = "${cbID}">Already Read</label>`;

    
    dialog.close();

    library.appendChild(div);

    document.getElementById(CategoryID).style.backgroundColor = Categorycolor(arr[bookindex].category);
});

btitle.addEventListener("input", ()=>{
    clicked = true;
});

document.addEventListener("keydown", (e)=>
{
    if((e.key == 'Enter') && clicked)
    {
        clicked = false;
        addbtn.dispatchEvent(clickevent);
    }
});


//deleting book

library.addEventListener("click", (e)=>{

    if(e.target.classList.contains('deletebtn'))
    {
        let ID = e.target.dataset.id;
        if(!(ID))
        {
            return;
        }
        
        let deleteIndex = arr.findIndex(obj => obj.id === ID);
        if(deleteIndex === -1)
        {
            return;
        }

        const deletediv = document.getElementById(ID);
        library.removeChild(deletediv);
        arr.splice(deleteIndex,1);  

        if(arr.length === 0)
        {
            emptyCard.style.display = "flex";
        }
    }
});

opendialog.addEventListener("click", ()=>{
    dialog.showModal();
});

closedialog.addEventListener("click", ()=>{
    btitle.value = null;
    bauthor.value = null;
    bcategory.value = ""
    dialog.close();

})

emptyCardBtn.addEventListener("click", ()=>{
        opendialog.dispatchEvent(clickevent);
})

function Categorycolor(category)
{
    switch(category)
    {
        case "History" : return "#B08B4F";
        case "Fiction" : return "#3B82F6";
        case "Biography" : return "#16A34A";
        case "Comic" : return "#F59E0B";
        case "Non-Fiction" : return "#6B7280";
        case "Others" : return "#8B5CF6";
    }
}

// close when user clicks on the dialog backdrop
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) closedialog.dispatchEvent(clickevent);
});