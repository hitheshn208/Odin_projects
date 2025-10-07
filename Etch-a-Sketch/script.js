console.log("hello");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const selectedColor = document.querySelector("#color");
const changeGridBtn = document.querySelector("#change-grid-size");
const gridSize = document.querySelector("#input-change-grid-size");
const resetBtn = document.querySelector("#reset");
const randomColorBtn = document.querySelector("#random-color");
const selectSpecificColor = document.querySelector("#selected-color");

// let num = +prompt("Enter the grid size :", 16);
createDiv(16);
body.addEventListener("mouseup", ()=>{ 
	isMouseDown = false; 
});

let colorType = 0;

let isMouseDown = false;

container.addEventListener("mouseover", (e)=>{
    if(e.target !== container)
	{
		if(isMouseDown)
        e.target.style.backgroundColor = selectBackgroundType(colorType);
    }
});

container.addEventListener("mousedown", (e)=>{
 	e.target.style.backgroundColor = selectBackgroundType(colorType);
	 isMouseDown = true; 
	 e.preventDefault();
});


container.addEventListener("mouseup", ()=>{ 
	isMouseDown = false; 
	console.log("Mouse Upp");
});


resetBtn.addEventListener("click", ()=>{
	const cells = document.querySelectorAll(".cell-class");
	cells.forEach((items)=>
	{
		items.style.backgroundColor = "white";
	})
});

selectSpecificColor.addEventListener("change", ()=>{
	colorType = 2;
	randomColorBtn.style.opacity = 1;
});

randomColorBtn.addEventListener("click", ()=>{
	if(colorType !== 1)
	{
		colorType=1;
		randomColorBtn.style.opacity = 0.5;
	}
	else
	{
		colorType=0;
		randomColorBtn.style.opacity = 1;
	}
});

changeGridBtn.addEventListener("click", ()=>{
	if (gridSize.value === "")
	{
		alert("Enter a number for grid size");	
	}
	else if( (gridSize.value<16) ||(gridSize.value>100))
	{
		alert("Enter the grid size between 16 and 100");
	}
	else
	{
		createDiv(gridSize.value);
	}
	gridSize.value = "";
});

function createDiv(n)
{
	container.innerHTML = "";

    for(let i=0; i<n; i++)
    {
        const newRow = document.createElement("div");
        newRow.classList.add("row-class");

        for(let j=0; j<n; j++)
        {
            const newCell = document.createElement("div");
            newCell.classList.add("cell-class");
            newRow.appendChild(newCell);
        }

        container.appendChild(newRow);
    }
}

function randomcolor()
{
	let x = Math.floor(Math.random()*256);
	let y = Math.floor(Math.random()*256);
	let z = Math.floor(Math.random()*256);
	return `rgb(${x}, ${y}, ${z})`
}

function selectBackgroundType(n)
{
	if (n===0)
	{
		return `rgba(75, 75, 75, 1)`;
	}
	else if(n===1)
	{
		return randomcolor();
	}
	else
	{
		return selectSpecificColor.value;
	}
}
