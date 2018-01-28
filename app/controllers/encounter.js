import Controller from '@ember/controller';

export default Controller.extend({

    fighters:null,

    actions:{
        addMonster(monster){
            let fighters = this.get("fighters");
            if(fighters == null){
                fighters = [];
            }
            fighters.push(monster);
            this.set("fighters", fighters);
            this.notifyPropertyChange("fighters");
        }
    }

});
