import Component from '@ember/component';
import { computed } from '@ember/object';
import constants from '../Constants';
import { htmlSafe } from '@ember/string';
import $ from 'jquery';

export default Component.extend({

  data:null,
  name:null,
  abilities: constants.abilities,
  skills: constants.skills,
  currentHitPointsPercentage: computed('data.currentHitPoints', function(){
    let data = this.get('data');
    return data.currentHitPoints / data.hitPoints * 100;
  }),
  healthBarWidth: computed('currentHitPointsPercentage', function(){
    return htmlSafe("width:" + this.get('currentHitPointsPercentage') + "%");
  }),
  healthBarClass: computed('currentHitPointsPercentage', function(){
    let currentHitPoints = this.get('currentHitPointsPercentage');
    if(currentHitPoints > 50) {
      return "bg-success";
    } else if (currentHitPoints > 25) {
      return "bg-warning";
    }
    return "bg-danger";
  }),
  didReceiveAttrs(){
    this.get('data').currentHitPoints = this.get('data').hitPoints;
  },
  didInsertElement(){
    $("#spinner" + this.get('name')).spinner();
  }

});
