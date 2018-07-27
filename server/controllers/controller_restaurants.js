var Restaurant = require('../models/model_restaurant');

module.exports = {

    find_all_restaurants: (request, response) => {

        Restaurant.find({}, (error, restaurants) => {
            if (error) {
                response.json({'message': 'error', 'errors': ['Couldn\'t Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': restaurants});
            }
        });
    },

    find_restaurant: (request, response) => {
        id = request.params.id;
        Restaurant.findById(id, (error, restaurant) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json(restaurant);
            }
        });
    },

    edit_restaurant: (request, response) => {
        id = request.body._id;
        Restaurant.findByID(id, (error, restaurantEdit) => {
            restaurantEdit.name = request.body.name;
            restaurantEdit.cuisine = request.body.cuisine;
            restaurantEdit.save((error) => {
                if (error) {
                    response.json({'error': error});
                }
                else {
                    response.json({'message': 'Editing successful.'})
                }
            })
        })

    },

    create_review: (request, response) => {

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
                response.json({'message': 'Saving successful'});
            }
        });
    },

    delete_restaurant: (request, response) => {
        id = request.params.id;
        Product.remove({_id: id}, (error, restaurantDelete) => {
            console.log('This is the to be delete:', restaurantDelete);
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'message': 'Deleting successful'})
            }
        })
    }

};