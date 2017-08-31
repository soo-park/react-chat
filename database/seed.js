const db = require('./index');
const data = require('../preference_data');

data.forEach((fromaccountId) => {
  fromaccountId.YES.forEach((toYesaccountId) => {
    db.createPreference(fromaccountId, toYesaccountId, 1);
  });

  fromaccountId.NO.forEach((toNoaccountId) => {
    db.createPreference(fromaccountId, toNoaccountId, 2);
  });
});