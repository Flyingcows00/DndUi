import Service from '@ember/service';
import { set } from '@ember/object';

export default Service.extend({

    username: undefined,
    admin: false,

    setUser(username, admin) {
        set(this, "user", username);
        set(this, "admin", admin);
    }

});
