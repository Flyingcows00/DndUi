import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({

    model() {
        let users = get(this, 'store').peekAll('user');
        if(0 === users.content.length) {
            return get(this, "store").findAll('user');
        }
        return users;
    }
});
