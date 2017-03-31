import Ember from 'ember';

export default Ember.Component.extend({
  updateRestaurantForm: false,
    actions: {
      updateRestaurantForm() {
        this.set('updateRestaurantForm', true);
      },
      update(restaurant) {
        var params = {
          name: this.get('name'),
          city: this.get('city'),
          type: this.get('type'),
          image: this.get('image'),
          description: this.get('description'),
        };
        this.set('updateRestaurantForm', false);
        this.sendAction('update', restaurant, params);
      }
    }
  });
