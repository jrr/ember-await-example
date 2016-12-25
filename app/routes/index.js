import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.$.getJSON('/api/location')
      .then((loc) => Ember.$.getJSON(`/api/weather?lat=${loc.lat}&long=${loc.long}`))
      .then((weather) => Ember.$.getJSON(`/api/advice?weather=${weather.weather}`));
  },
});
