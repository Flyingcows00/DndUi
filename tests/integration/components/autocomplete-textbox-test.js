import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('autocomplete-textbox', 'Integration | Component | autocomplete textbox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{autocomplete-textbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#autocomplete-textbox}}
      template block text
    {{/autocomplete-textbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
