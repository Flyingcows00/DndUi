import Component from '@ember/component';
import $ from 'jquery';
import { computed } from '@ember/object';
export default Component.extend({

    data: undefined,
    searchResults: undefined,
    dataArray: computed("data", function () {
        let data = this.get("data");
        if (typeof data == "string") {
            return JSON.parse(this.get("data"));
        }
        return data;
    }),
    didInsertElement() {
        $("#autocomplete").autocomplete({
            source: this.get("dataArray"),
            delay: 100,
            autoFocus: true,
            minLength: 2,
            select: (event, ui) => {
                this.get("chooseMonster")(ui.item.value);
                return false;
            },
            focus: function () {
                return false;
            },
            close: function () {
                //TODO: Why doesn't this prevent the closing of the dropdown?
                return false;
            }
        });

        if (this.get("autofocus")) {
            $("#autocomplete").focus();
        }
    },
    actions: {
        chooseMonster: function (monsterName) {
            this.get("chooseMonster")(monsterName);
        }
    }

});
