import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('restaurant.reviews', 'sortBy'),
  
  actions: {
    delete(restaurant) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRestaurant', restaurant);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
