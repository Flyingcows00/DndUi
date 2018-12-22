import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import constants from '../Constants';

export default Route.extend({

    userService: service('user'),

    beforeModel() {
        let currentUser = get(this, 'userService').get('username');
        if (undefined === currentUser) {
            this.transitionTo('login');
        }
    }

});
