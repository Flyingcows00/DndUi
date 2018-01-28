import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({


    model() {
        let monsterList = this.store.peekRecord('monster-list', 'monster-list');
        if (monsterList == null) {
            var store = this.store;
            return $.ajax({
                url: "http://localhost:8080/dndtools/monsters",
                method: "GET",
                success(data) {
                    let list = store.normalize('monster-list', { names: data });
                    list.data.id = "monster-list";
                    store.push(list);
                    return data;
                }
            });
        
        }
        return monsterList.data.names;
    }

});
