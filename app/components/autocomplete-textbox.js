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
                this.get("performAction")(ui.item.value);
                return false;
            },
            focus: function () {
                return false;
            }
        });
        if (this.get("autofocus")) {
            $("#autocomplete").focus();
        }
    },
    actions: {
        performAction: function (item) {
            this.get("performAction")(item);
        }
    }

});
