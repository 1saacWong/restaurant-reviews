import Ember from 'ember';

export function restaurantCost(params) {
  var restaurantPrice = params[0].get('cost');

  if (restaurantPrice >= 150){
    return '$$$$';
  } else if (restaurantPrice >= 100){
    return '$$$';
  } else if (restaurantPrice >= 50){
    return '$$';
  } else if (restaurantPrice <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(restaurantCost);
