//create html elements using DOM

document.body.innerHTML = `<div class="heading-container">
<h1>CAT API</h1>
<input type="text" placeholder="Search" id="search">
<button type="button" class="btn btn-primary" id="searchbar">search</button>
</div>
<div id="mainContainer" class="main-container"></div>`;

let catData1;
const getData= async ()=>{
    try{
        const data= await fetch("https://cataas.com/api/cats");
        const catimage=await data.json();
        catData1 = catimage;

        mainContainer.innerHTML="";
        catimage.forEach((catty) =>{
            displayData(catty);
            // console.log(catty);
        });

    }catch(error){
        console.log(error);
    }

    
    
};
getData();

const displayData = (obj) => {
    console.log(obj.id)
    mainContainer.innerHTML += `
    <div class="container">
    <img src="https://cataas.com/cat/${obj.id}" width="200" height="200"/>
    <p class="parablue">Cat Id:<br><span>${obj.id}</span></p>
    <p class="parablue">Created_at:<br><span>${obj.created_at}</span></p>
    <p class="parablue">Tags:<br><span>${obj.tags}</span></p>
    
    </div>`;

};

// let img = document.createElement('img');
// img.setAttribute("id", "imagee");
// img.src ="https://cataas.com/cat/id";
// document.body.appendChild(img);

let button=document.querySelector("#searchbar");

button.addEventListener("click",function(){
 let textEntered=document.getElementById("search").value;
console.log(textEntered);

//create an empty array 
let filteredCats=[];
if(textEntered!==""){
    
  filteredCats=catData1.filter(function(catimagi){
      console.log(catimagi);
      
      return catimagi.tags.includes(textEntered.toLowerCase())
  });
  console.log(filteredCats);
  document.querySelector("#mainContainer").innerHTML="";
  filteredCats.forEach((catty) =>{
    displayData(catty);
    // console.log(catty);
});

}else{
  document.querySelector("#mainContainer").innerHTML="";
}

})

