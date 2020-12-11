'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let ask = true;
    let a, b;
    
    do {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');
    
        if (a === null || b === null || a === '' || b === '' || a.length > 50) {
            alert('Ошибка');
            continue;
        } else {
            personalMoveDB.movies[a] = b;
    
            ask = confirm('Добавить еще фильм?');
        }
    } while (ask === true);
}
rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++ ){
        personalMoveDB.genres[i - 1] = prompt(`Ващ любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if (personalMoveDB.count < 10){
        alert ('Просмотренно довольно мало фильмов');
    } else if (personalMoveDB.count >= 10 || personalMoveDB.count <= 30) {
        alert ('Вы классный зритель!');
    } else if (personalMoveDB.count > 30) {
        alert ('Вы киноман');
    } else{
        alert ('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMoveDB);
    }
}
showMyDB(personalMoveDB.privat);