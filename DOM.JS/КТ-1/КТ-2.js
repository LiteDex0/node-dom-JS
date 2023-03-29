const cats = [
    {
        "name": "Лара",
        "img_link": "https://cdn.tvc.ru/pictures/o/225/578.jpg",
        "age": 8,
        "rate": 7,
        "favourite": false,
        "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "id": 1
    },
    {
        "name": "Базиль",
        "img_link": "https://cdn.tvc.ru/pictures/o/225/578.jpg",
        "age": 2,
        "rate": 10,
        "favourite": false,
        "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "id": 2
    },
    {
        "name": "Риш",
        "img_link": "https://cdn.tvc.ru/pictures/o/225/578.jpg",
        "age": 1,
        "rate": 10,
        "favourite": true,
        "description": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "id": 3
    },
    {
        "name": "Элли",
        "img_link": "https://cdn.tvc.ru/pictures/o/225/578.jpg",
        "age": 4,
        "rate": 8,
        "favourite": false,
        "description": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "id": 4
    },
    {
        "name": "Чарли",
        "img_link": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
        "age": 1,
        "rate": 8,
        "favourite": false,
        "description": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "id": 5
    },
    {
        "name": "Стефани",
        "img_link": "https://storage-api.petstory.ru/resize/1000x1000x80/1b/15/eb/1b15ebf4227346c2a1d74e5b5cf69d79.jpeg",
        "age": 6,
        "rate": 9,
        "favourite": false,
        "description": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "id": 6
    },
    {
        "name": "Дуся",
        "img_link": "https://garden-zoo.ru/userfiles/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D0%BA%D0%BE%D1%82%D1%8B%20%D1%82%D0%B0%D0%BA%D0%B8%D0%B5%20%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%BC%D0%B5%D1%80%D0%BD%D1%8B%D0%B5.jpg",
        "age": 1,
        "rate": 9,
        "favourite": false,
        "description": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "id": 7
    },
    {
        "name": "Бруно",
        "img_link": "https://cdn.forbes.ru/forbes-static/new/2022/10/Tykvy-i-Koty-4-copy-635b9c871da83.jpg",
        "age": 1,
        "rate": 10,
        "favourite": false,
        "description": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "id": 8
    },
    {
        "name": "Лара",
        "img_link": "https://images11.graziamagazine.ru/upload/img_cache/6f3/6f3aaa02620ee2b8baf302eebda2a55e_cropped_666x666.jpeg",
        "age": 1,
        "rate": 9,
        "favourite": true,
        "description": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "id": 9
    }
]

const catsContainer = document.getElementById("cats");
catsContainer.style.backgroundColor = "red";
cats.forEach((cat) => {
    const catCard = document.createElement("div");
    catCard.style.backgroundColor = "pink";

    const catName = document.createElement("h2");
    catName.textContent = cat.name;
    catName.style.color = "blue"

    const catPhoto = document.createElement("img");
    catPhoto.src = cat.img_link;
    catPhoto.style.width = "300px"

    const catAge = document.createElement("p");
    catAge.textContent = `Age: ${cat.age}`;

    const catRate = document.createElement("p");
    catRate.textContent = `Rate: ${cat.rate}`;

    const catFavourite = document.createElement("p");
    catFavourite.textContent = `Favourite: ${cat.favourite}`;

    const catDescription = document.createElement("p");
    catDescription.textContent = `Description: ${cat.description}`;

    const catId = document.createElement("p");
    catId.textContent = `Id: ${cat.id}`;



    catCard.appendChild(catName);
    catCard.appendChild(catPhoto);
    catCard.appendChild(catAge);
    catCard.appendChild(catRate);
    catCard.appendChild(catFavourite);
    catCard.appendChild(catDescription);
    catCard.appendChild(catId);


    catsContainer.appendChild(catCard);
});