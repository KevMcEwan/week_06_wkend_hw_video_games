document.addEventListener('DOMContentLoaded', () => {
  console.log('Ready to go!');

  //selects the #save-button and listens for the click event. When the event is heard, it then proceeds to use the handleForm function.
  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', saveForm);

  //selects the #delete-button and listens for the click event. When the event is heard, it then proceeds to use the handleDelete function.
  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDelete);

})

//Upon hearing the click on the save button (the event), the following function is carried out:
const saveForm = function(event){

  //stops the page reloading by default
  event.preventDefault();

  //creates a new div element of the class 'game'
  const game = document.createElement('div');
  game.classList.add('game');

  //adds the game div to the #best-games-list
  const gameList = document.querySelector('#best-games-list');
  gameList.appendChild(game);

  //adds a title to the game div that we're adding to the list, taking it from the title input on the form
  const gameTitle = document.createElement('h3');
  gameTitle.textContent = event.target.title.value;
  game.appendChild(gameTitle);

  //adds a main character to the game div that we're adding to the list, taking it from the main character input on the form
  const gameMainCharacter = document.createElement('p');
  gameMainCharacter.textContent = event.target.maincharacter.value;
  game.appendChild(gameMainCharacter);

  //adds a game genre to the game div that we're adding to the list, taking it from the genre drop down menu on the form
  const gameGenre = document.createElement('p');
  gameGenre.textContent = event.target.genre.value;
  game.appendChild(gameGenre);

  //resets the form (clears the text fields)
  const form = document.querySelector('#new-game-form');
  form.reset();

}

//Upon hearing the click on the delete button (the event), changes the text content of the entire game list to an empty string, thereby clearing the game list
const handleDelete = function (event) {
  let gameList = document.querySelector('#best-games-list');
  gameList.textContent = "";
}
