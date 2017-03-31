import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow() {
      this.set('addNewRestaurant', true);
    },
    saveRestaurant1() {
      var params = {
        name: this.get('name'),
       city: this.get('city'),
       type: this.get('type'),
       image: this.get('image'),
       description: this.get('description'),
       cost: parseInt(this.get('cost'))
      };
      this.set('addNewRental', false);
      this.sendAction('saveRestaurant2', params);
    }
  }
});
