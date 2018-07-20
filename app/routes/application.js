import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({

    user: service('user'),

    beforeModel(transition) {
        // get(this, "store").findAll('user');
        // console.log(get(this, 'user').username);
    }

});
