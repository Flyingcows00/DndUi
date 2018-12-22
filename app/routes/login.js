import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({

    userService: service('user'),
    beforeModel() {
        let username = get(this, 'userService').get('username');
        if(username) {
            this.transitionTo('hojme');
        }
    },
    model() {
        let users = get(this, 'store').peekAll('user');
        if (0 === users.content.length) {
            return users = get(this, "store").findAll('user');
        }
        return users;
    },
    afterModel(model) {
        let username = localStorage.getItem('user');
        if(username) {
            let user = model.find(user => user.id === username);
            if (user) {
                get(this, 'userService').setUser(user, false);
                this.transitionTo('home');
            } else {
                localStorage.removeItem('user');
            }
        }
    },
    actions: {
        willTransition(transition) {
            let username = get(this, 'userService').get('username');
            if (username === undefined) {
                transition.abort();
                return false;
            }
            return true;
        }
    }

});
