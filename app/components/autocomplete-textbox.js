import Component from '@ember/component';
import $ from 'jquery';
import { schedule } from '@ember/runloop'
import { observer } from '@ember/object';

export default Component.extend({

    data: undefined,
    searchResults: undefined,
    didInsertElement() {
        if (this.get("autofocus") == true) {
            $("#autocomplete").focus();
        }
        //Populate and show dropdown on keyup event
        $("#autocomplete").keyup((e) => {
            // Return on escape key press because that is handled elsewhere
            if (e.keyCode === 27) {
                return;
            }
            var search = $("#autocomplete").val();
            if (search == "") {
                this.set("searchResults", undefined);
                $("#autocomplete-list").addClass("d-none");
                return;
            }
            schedule('actions', () => {
                let data = JSON.parse(this.get("data"));
                var results = [];
                $.each(data, function (i, item) {
                    if (item.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                        results.push(item);
                    }
                })
                this.set("searchResults", results);
                $("#autocomplete-list").removeClass("d-none");
            });
        });
        // $("body").keyup(function (e) {
        //     //Close dropdown on escape
        //     if (e.keyCode === 27) {
        //         $("#autocomplete-list").addClass("d-none");
        //     }
        // });
        // $("#autocomplete-list").focusout(function(){
        //     $("#autocomplete-list").addClass("d-none");
        // });
        // $("#autocomplete, #autocomplete-list").focusin(function(){
        //     $("#autocomplete-list").removeClass("d-none");
        // });
    },
    actions: {
        chooseMonster: function (monsterName) {
            this.get("chooseMonster")(monsterName);
        }
    }

});
