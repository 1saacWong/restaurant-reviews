import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  	city: DS.attr(),
  	type: DS.attr(),
  	description: DS.attr(),
  	image: DS.attr(),
    reviews: DS.hasMany('review', { async: true }),
    cost: DS.attr()
});
