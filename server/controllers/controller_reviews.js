var Review = require('../models/model_review');

module.exports = {
    
    find_all_reviews: function(request, response){
        
        Review.find({}, (error, products) => {
            if (error) {
                response.json({'message': 'error', 'errors': ['Couldn\'t Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': products});
            }
        });
    },
    
    find_review: function(request, response){
        id = request.params.id;
        Review.findById(id, (error, product) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json(product);
            }
        });
    },
    
    create_review: (request, response) => {
        review = new Review();
        // request.body contains the products passed in from createProducts in http.service.ts
        review.user_name = request.body.user_name;
        review.description = request.body.description;
        review.rating = request.body.rating;
        review.save((error) => {
            if (error) {
                response.json({'error': error});
            }
            else {
                response.json({'success': 'success saving'});
            }
        });
    }
    
};