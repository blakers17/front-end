console.log('Hello world!')
/**
 * const buttonClick = (event)  => {
    event.preventDefault();
    const button = document.createElement('button');
    button.addEventListener('click', color)
}
 */
let favoriteColor = document.getElementById('favoriteColor');
let favoritePlace = document.getElementById('favoritePlace');
let favoriteRitual = document.getElementById('favoriteRitual');
let myFamily = document.getElementById('myFamily');
let videoGames = document.getElementById('videoGames');

favoriteColor.addEventListener('click', function(){
    alert('my favorite color is Red')
});
favoritePlace.addEventListener('click', function() {
    alert('My favorite place to go is Flaming Gorge')
});
favoriteRitual.addEventListener('click', function() {
    alert('My favorite ritual is Hiking')
});
myFamily.addEventListener('click', function() {
    alert('I love spending time with my Family')
});
videoGames.addEventListener('click', function() {
    alert(' I like to play Video Games!')
})
