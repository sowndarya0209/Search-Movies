const API_LINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ad73e76ee16c0a37b435032768e2ccd&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280' ;//specify path or link to every movie
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=5ad73e76ee16c0a37b435032768e2ccd&query=" ; // how are we going to search for something

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(API_LINK)
function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card=document.createElement('div');    
            div_card.setAttribute('class','card');    

            const div_row=document.createElement('div');   
            div_row.setAttribute('class','row');

            const div_column=document.createElement('div');   
            div_column.setAttribute('class','column');

            const image=document.createElement('img');
            image.setAttribute('class','thumbnail');      
            image.setAttribute('id','image');

            const title=document.createElement('h3');
            title.setAttribute('id','title');
            
            const center = document.createElement('center'); 
            
            title.innerHTML=`${element.title}`;
            image.src=IMG_PATH+element.poster_path;

            //to create that section part of the html code
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row); //all tags comes under section tag now
        });
    });   
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    main.innerHTML='';

    const searchItem=search.value;

    if(searchItem){
        returnMovies(SEARCHAPI + searchItem);
        search.value="";
        
    }

});