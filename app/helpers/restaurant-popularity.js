import Ember from 'ember';

export function restaurantPopularity(params) {
  var restaurant = params[0];

  if(restaurant.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(restaurantPopularity);
