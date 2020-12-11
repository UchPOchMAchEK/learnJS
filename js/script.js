'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMoveDB.count < 10){
    alert ('Просмотренно довольно мало фильмов');
} else if (personalMoveDB.count >= 10 || personalMoveDB.count <= 30) {
    alert ('Вы классный зритель!');
} else if (personalMoveDB.count > 30) {
    alert ('Вы киноман');
} else{
    alert ('Произошла ошибка');
}

console.log(personalMoveDB);