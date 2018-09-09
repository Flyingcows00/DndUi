import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
    userService: service('user'),

    actions: {
        selectUser(value) {
            if(!value) {
                return;
            }
            let users = get(this, 'users');
            let user = users.find(user => user.id === value).get('data');
            get(this, 'userService').setUser(user.username, user.admin);
        }
    }
});

