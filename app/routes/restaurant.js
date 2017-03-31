import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions:{
    update(restaurant, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          restaurant.set(key,params[key]);
        }
      });
      restaurant.save();
      this.transitionTo('index');
    },

    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return restaurant.save();
      });
      this.transitionTo('restaurant', restaurant);
    },

    destroyRestaurant(restaurant) {
      var review_deletions = restaurant.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return restaurant.destroyRecord();
      });
      this.transitionTo('index');
    },

    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('/restaurant/:restaurant_id');
    }
  }
});
