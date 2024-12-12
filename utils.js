const Action = require('./Action');

const disallowedValues = [
  '[not provided]',
  'placeholder',
  '[[unknown]]',
  'not set',
  'not provided',
  'unknown',
  'undefined',
  'n/a'
];

const filterNullValuesFromObject = object =>
  Object
    .fromEntries(
      Object
        .entries(object)
        .filter(([_, v]) =>
          v !== null &&
          v !== '' &&
          typeof v !== 'undefined' &&
          (typeof v !== 'string' || !disallowedValues.includes(v.toLowerCase()) || !v.toLowerCase().includes('!$record'))));

const normalizePropertyName = key => key.toLowerCase().replace(/__c$/, '').replace(/^_+|_+$/g, '').replace(/_+/g, '_');

const goal = actions => {
  console.log(actions);
  // disable this for testing purposes
  // return;

  // Write actions to the database
  actions.forEach(action => {
    new Action({
      ...action,
      id: action.identity
    }).save();
  });
};

module.exports = {
  filterNullValuesFromObject,
  normalizePropertyName,
  goal
};
