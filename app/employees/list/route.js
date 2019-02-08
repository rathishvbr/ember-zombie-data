import Ember from 'ember';

export default Ember.Route.extend({
  model() {
        return this.store.findAll('employee').then((okay) => {
        return okay;
        }).catch((err) => {
        alert("okay");
        });
  },
  actions: {
    test(){
    console.log(this.get('model')); this.transitionTo('employees.neworedit');
    }
  }
});