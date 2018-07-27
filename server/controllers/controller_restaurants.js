var Restaurant = require('../models/model_restaurant');

module.exports = {

    find_all_restaurants: (request, response) => {

        Restaurant.find({}, (error, products) => {
            if (error) {
                response.json({'message': 'error', 'errors': ['Couldn\'t Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': products});
            }
        });
    },

    find_restaurant: (request, response) => {
        id = request.params.id;
        Restaurant.findById(id, (error, product) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json(product);
            }
        });
    },

    create_review:(request, response) =>{

    },


    create_restaurant: (request, response) => {
        restaurant = new Restaurant();
        // request.body contains the products passed in from createProducts in http.service.ts
        restaurant.name = request.body.name;
        restaurant.cuisine = request.body.cuisine;
        restaurant.save((error) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'success': 'success saving'});
            }
        });
    }

};