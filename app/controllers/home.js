import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { set } from '@ember/object';

export default Controller.extend({

    selectedItem: undefined,

    // compile a list of all monster names, player names, and spells.
    quickData: computed(() => {
        return ['asdf', 'asdfasdf', 'asvd', 'asdvd'];
    }),

    actions: {
        displayQuickView(item) {
            set(this, 'item', item);
        }
    }

});
