import Controller from '@ember/controller';
import $ from 'jquery';
import constants from '../Constants'

export default Controller.extend({

    fighters: null,
    abilities: constants.abilities,
    skills: constants.skills,
    actions: {
        addMonster(monster) {
            // get all current monsters
            let fighters = this.get("fighters");
            if (fighters == null) {
                fighters = [];
            }
            // get existing count of monster being added
            let count = 1;
            Object.keys(fighters).forEach(function (key) {
                if (key.startsWith(monster)) {
                    count++;
                }
            });
            // get monster data and add it to fighter list
            let record = this.store.peekRecord('monster', monster);
            if (record == null) {
                this.store.findRecord('monster', monster).then((result) => {
                    fighters[monster + " " + count] = result.data;
                    this.set("fighters", fighters);
                    this.notifyPropertyChange("fighters");
                });
            } else {
                fighters[monster + " " + count] = record.data;
                this.set("fighters", fighters);
                this.notifyPropertyChange("fighters");
            }
        }
    }

});
