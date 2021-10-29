const {response} = require("express");
const router = require("express").Router();
const links = ['about', 'contacts', 'FAQ'];

router.get('/', (rq,rs) => {
    rs.render('index', {
        title: 'Main Page',
        caption: 'Главная страница',
        links: links
    });
});

router.get('/page/:name', (rq,rs) => {
    rs.render('page', {
        title: 'Page',
        caption: rq.params.name,
        links: links
    });
});


module.exports = router;