import { helper } from '@ember/component/helper';

export function getAbilityMod(level) {
  let mod = null;
  if (level < 1) {
    mod = -5;
  } else if (level > 30) {
    mod = 10;
  } else {
    mod = Math.floor((level - 10) / 2);
  }
  if(mod >= 0){
    return "+" + mod; 
  }
  return mod;
}

export default helper(getAbilityMod);
