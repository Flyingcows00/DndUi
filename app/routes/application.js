import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({

    userService: service('user'),

    beforeModel(transition) {
        let users = get(this, 'store').peekAll('user');
        let currentUser = get(this, 'userService');
        if (0 === users.content.length || undefined === currentUser) {
           this.transitionTo('login');
        }
    }

});
