import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    nickname: DS.attr('string'),
    size: DS.attr('string'),
    type: DS.attr('string'),
    subtype: DS.attr('string'),
    alignment: DS.attr('string'),
    armorClass: DS.attr('number'),
    hitPoints: DS.attr('number'),
    currentHitPoints: DS.attr('number'),
    hitDice: DS.attr('string'),
    speed: DS.attr('string'),
    senses: DS.attr('string'),
    languages: DS.attr('string'),
    challengeRating: DS.attr('number'),
    abilities: DS.attr('array'),
    savingThrows: DS.attr('array'),
    skills: DS.attr('array'),
    damageVulnerabilities: DS.attr('array'),
    damageResistances: DS.attr('array'),
    damageImmunities: DS.attr('array'),
    conditionImmunities: DS.attr('array'),
    specialAbilities: DS.attr('array'),
    actions: DS.attr('array'),
    legendaryActions: DS.attr('array')

});
