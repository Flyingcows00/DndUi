import { helper } from '@ember/component/helper';

export function uppercaseUnderscore(value) {
  return value.toString().toUpperCase().replace(/ /g, "_");
}

export default helper(uppercaseUnderscore);
