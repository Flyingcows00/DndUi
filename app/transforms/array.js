import DS from 'ember-data';
import { typeOf } from '@ember/utils';

export default DS.Transform.extend({
  deserialize: function (serialized) {
    return (typeOf(serialized) == "string") ? JSON.parse(serialized) : serialized;
  },

  serialize: function (deserialized) {
    return deserialized;
  }
});
