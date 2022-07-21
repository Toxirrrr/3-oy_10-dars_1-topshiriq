var movies = [
    {
        "Title": "Patton Oswalt: Annihilation",
        "fulltitle": "Patton Oswalt: Annihilation (2017)",
        "movie_year": 2017,
        "Categories": "Uncategorized",
        "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
        "ImageURL": "https://images.squarespace-cdn.com/content/v1/59a7023ce5dd5bece80b480b/1546982495017-6FSORDRJ0F7SEQNYDLAD/patton_oswalt.jpg?format=750w",
        "imdb_id": "tt7026230",
        "imdb_rating": 7.4,
        "runtime": 66,
        "language": "English",
        "ytid": "4hZi5QaMBFc"
    },
    {
        "Title": "New York Doll",
        "fulltitle": "New York Doll (2005)",
        "movie_year": 2005,
        "Categories": "Documentary|Music",
        "summary": "A recovering alcoholic and recently converted Mormon, Arthur \"Killer\" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.",
        "ImageURL": "https://target.scene7.com/is/image/Target/GUEST_acdbc206-45a6-4833-bb44-3ea112b1b9e5?wid=488&hei=488&fmt=pjpeg",
        "imdb_id": "tt0436629",
        "imdb_rating": 7.9,
        "runtime": 75,
        "language": "English",
        "ytid": "jwD04NsnLLg"
    },
    {
        "Title": "Mickey's Magical Christmas: Snowed in at the House of Mouse",
        "fulltitle": "Mickey's Magical Christmas: Snowed in at the House of Mouse (2001)",
        "movie_year": 2001,
        "Categories": "Adventure|Animation|Comedy|Family|Fantasy",
        "summary": "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
        "ImageURL": "https://m.media-amazon.com/images/M/MV5BMTkyODU0MTA1MF5BMl5BanBnXkFtZTcwNzEzODcxMQ@@._V1_FMjpg_UX335_.jpg",
        "imdb_id": "tt0300195",
        "imdb_rating": 6.8,
        "runtime": 65,
        "language": "English",
        "ytid": "uCKwHHftrU4"
    },
    {
        "Title": "Mickey's House of Villains",
        "fulltitle": "Mickey's House of Villains (2001)",
        "movie_year": 2001,
        "Categories": "Animation|Comedy|Family|Fantasy|Horror",
        "summary": "The villains from the popular animated Disney films are gathered at the House of Mouse with plans to take over. Soon, the villains take over the house and kick out Mickey, Donald and Goofy. It's all up to Mickey and his friends to overthrow evil and return the House of Mouse to normal--or as close to normal as it get's.",
        "ImageURL": "https://pics.filmaffinity.com/mickey_s_house_of_villains-640015256-mmed.jpg",
        "imdb_id": "tt0329374",
        "imdb_rating": 6.6,
        "runtime": 0,
        "language": "English",
        "ytid": "JA03ciYt-Ek"
    },
];

var elList = document.querySelector(`#list`)

function Render(evt) {

    for (let i = 0; i < movies.length; i++) {
        var newLi = document.createElement('li')
        elList.appendChild(newLi)
        for (let k = 0; k < 1; k++) {
            var newImg = document.createElement('img')
            newLi.appendChild(newImg)
            newImg.src = movies[i]["ImageURL"]
            newImg.width = 200
            newImg.height = 200
        }
        for (let k = 0; k < 1; k++) {
            var newP = document.createElement('p')
            newLi.appendChild(newP)
            newP.textContent = movies[i]["Title"]
        }
    }
}

Render()