'use strict';

const personalMoveDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoveDB.count == '' || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
            personalMoveDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMoveDB.count < 10){
            alert ('Просмотренно довольно мало фильмов');
        } else if (personalMoveDB.count >= 10 || personalMoveDB.count <= 30) {
            alert ('Вы классный зритель!');
        } else if (personalMoveDB.count > 30) {
            alert ('Вы киноман');
        } else{
            alert ('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMoveDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMoveDB.privat) {
            personalMoveDB.privat = false;
        } else {
            personalMoveDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++ ){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null){
                alert ('Вы ввели некорректные данные');
                i--;
            } else {
                personalMoveDB.genres[i - 1] =  genre;
            }
        }

        personalMoveDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};