var elFilmList = document.querySelector(`.film__list`);
var elFilmForm = document.querySelector(`.film__form`);
var elFilmTitle = document.querySelector(`.film__input[name="title"]`);
var elFilmPoster = document.querySelector(`.film__input[name="poster"]`);
var elFilmOverview = document.querySelector(`.film__input[name="overview"]`);
var elFilmData = document.querySelector(`.film__input[name="release_date"]`);
var elFilmGenres= document.querySelector(`.film__input[name="genres"]`);

// Data
function normalizeDate(newData){
    var dataFilm = new Date(newData);
    var day = String(dataFilm.getDate()).padStart(2, 0);
    var month = String(dataFilm.getMonth()+1).padStart(2, 0);
    var year = dataFilm.getFullYear();

    return day + '.' + month + '.' + year
}

function renderfilm(filmArray = [], element) {
    element.innerHTML = null;

    for (var i = 0; i < filmArray.length; i++) {

        // createElement
        var item = document.createElement(`li`);
        var photo = document.createElement(`img`);
        var block = document.createElement(`div`);
        var title = document.createElement(`h2`);
        var data = document.createElement(`time`);
        var overview = document.createElement(`p`);
        var genres = document.createElement(`p`);


        // setAttribute
        item.setAttribute(`class`, `film__item`);
        photo.setAttribute(`class`, `film__photo`);
        photo.setAttribute(`src`, filmArray[i].poster);
        photo.setAttribute(`alt`, filmArray[i].title + ` named film`);
        photo.setAttribute(`width`, `150`);
        photo.setAttribute(`height`, `200`);
        block.setAttribute(`class`, `films__info`)
        title.setAttribute(`class`, `film__heading`);
        data.setAttribute(`class`, `film__text`);
        overview.setAttribute(`class`, `overview__film`);
        genres.setAttribute(`class`, `ganres__film`);

        // textContent
        title.textContent = filmArray[i].title;
        overview.textContent = filmArray[i].overview;
        data.textContent = normalizeDate(films[i].release_date);
        genres.textContent = filmArray[i].genres.join(`, `);

        // appendChild
        item.appendChild(photo);
        item.appendChild(block);
        block.appendChild(title);
        block.appendChild(data);
        item.appendChild(overview);
        item.appendChild(genres);
        element.appendChild(item);
    }
};

// newfilm
function newfilm(title, poster, overview, data, genres, filmArray) {
    var newTitle = title.value.trim();
    var newPoster = poster.value.trim();
    var newOverview = overview.value.trim();
    var newData = data.value.trim();
    var newGanres = genres.value.trim().split(` `);

    var newfilmArray = {
        title: newTitle,
        poster: newPoster,
        overview: newOverview,
        data: newData,
        genres: newGanres
    };

    filmArray.unshift(newfilmArray);

}

var renderNewfilm = function (evt) {
    evt.preventDefault();

    newfilm(
        elFilmTitle,
        elFilmPoster,
        elFilmOverview,
        elFilmData,
        elFilmGenres,
        films
    );

    renderfilm(films, elFilmList);

    elFilmTitle.value = null;
    elFilmPoster.value = null;
    elFilmOverview.value = null;
    elFilmData.value = null;
    elFilmGenres.value = null;
  
};

renderfilm(films, elFilmList);


elFilmForm.addEventListener(`submit`, renderNewfilm)

