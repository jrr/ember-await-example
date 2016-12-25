import Ember from 'ember';

export default Ember.Route.extend({
  async model(){
    const loc = await Ember.$.getJSON('/api/location');
    const weather = await Ember.$.getJSON(`/api/weather?lat=${loc.lat}&long=${loc.long}`);
    return Ember.$.getJSON(`/api/advice?weather=${weather.weather}`);
  },
});
