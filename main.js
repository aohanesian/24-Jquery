const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const renderTiles = (data) => {
    $(data).each((index, item) => {
        let span = $('<span/>').css('background-color', `${item.color}`).addClass('tile');
        $(`#colorPicker`).append(span);
        span.on(`click`, () => {
            renderPic(item);
            renderColorName(item)
        });
    });
};

const renderPic = (data) => {
    $(`#carImg`).attr({
        'src': `https://mc-astro.github.io/tesla-roadster-colors/img/${data.img}.jpg`,
        'alt': `Tesla car in ${data.title} color`,
        'title': `${data.title}`
    })
}

const renderColorName = (data) => {
    $(`#colorName`).text(`${data.title}`)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$.ajax({
    url: URL,
    method: 'GET',
    error: error => {
        console.log(`in catch:`, error);
    }
})
    .done(data => {
        data = JSON.parse(data);
        renderTiles(data);
        let rnd = getRandomInt(data.length);
        renderPic(data[rnd]);
        renderColorName(data[rnd]);
        return data;
    })
