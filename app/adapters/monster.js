import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8080/dndtools',
    defaultSerializer: 'monster',
    pathForType: function () {
        return "monsters";
    }

});
