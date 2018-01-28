import DS from 'ember-data';
import { typeOf } from '@ember/utils';
import $ from 'jquery';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    return (typeOf(serialized) == "string") ? JSON.parse(serialized) : serialized;
  },

  serialize: function (deserialized) {
    var type = typeOf(deserialized);
    if (type == 'array') {
      return deserialized
    } else if (type == 'string') {
      return deserialized.split(',').map(function (item) {
        return $.trim(item);
      });
    } else {
      return [];
    }
  }
});
