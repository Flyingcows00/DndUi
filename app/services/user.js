import Service from '@ember/service';
import { set } from '@ember/object';
import Constants from '../Constants';

export default Service.extend({

    username: undefined,
    admin: false,
    firstName: undefined,
    lastName: undefined,
    
    setUser(user, rememberMe) {
        set(this, 'username', user.username);
        set(this, 'admin', user.admin);
        set(this, 'firstName', user.firstName);
        set(this, 'lastName', user.lastName);
        if(rememberMe) {
            localStorage.setItem(Constants.localStorage, user.username);
        }
    }

});
