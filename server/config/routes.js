const controller_restaurants = require('../controllers/controller_restaurants'),
    // controller_review = require('../controllers/controller_review'),
    path = require('path');

//routes are first checked here in express

module.exports = (app) => {
    // Restaurant paths/routes
    // add restaurant
    app.get('/restaurants', controller_restaurants.find_all_restaurants);
    // view restaurant w/ reviews/
    app.get('/restaurants/:id', controller_restaurants.find_restaurant);
    // Update restaurant

    app.patch('/restaurants/:id/edit', controller_restaurants.edit_restaurant);

    // add review
    app.post('/restaurants/:id/review', controller_restaurants.create_review);
    // create restaurant

    app.post('/restaurants', controller_restaurants.create_restaurant);
    // Delete restaurant
    app.delete('/restaurants/:id', controller_restaurants.delete_restaurant);
    // Review paths/routes



    // if no Express routes match, go to Angular
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve('./public/dist/public/index.html'))
    });

};