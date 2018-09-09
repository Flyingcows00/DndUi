import Service from '@ember/service';
import { set, get } from '@ember/object';

export default Service.extend({

    username: undefined,
    admin: false,

    setUser(username, admin) {
        set(this, "user", username);
        set(this, "admin", admin);
    },
    
    setUser(username, admin) {
        set(this, 'username', username);
        set(this, 'admin', admin);
    }

});
