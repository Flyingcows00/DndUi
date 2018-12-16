import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
    userService: service('user'),
    rememberMe: false,

    actions: {
        selectUser() {
            let username = $("#usernameSelect option:selected").text();
            let rememberMe = get(this, 'rememberMe');
            if(!username) {
                return;
            }
            let users = get(this, 'model');
            let user = users.find(user => user.id === username).get('data');
            get(this, 'userService').setUser(user, rememberMe);
            this.transitionToRoute('home');

        }
    }
});

