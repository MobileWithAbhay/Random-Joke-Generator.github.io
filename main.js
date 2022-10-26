// Hindi Joke function
function hindiJoke(){
  url = "https://hindi-jokes-api.onrender.com/jokes?api_key=85dc7e4050901d737fcad2ed5354"
  fetch(url).then((response)=>{
    return response.json()
  }).then((data)=>{
    document.querySelector(".joke").innerHTML = data.jokeContent;
  });
}

// English Joke function
function englishJoke(){
  url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
  fetch(url).then((response)=>{
    return response.json()
  }).then((data)=>{
    document.querySelector(".joke").innerHTML = data.joke;
  });
}
