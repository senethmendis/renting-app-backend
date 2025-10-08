const Users = require('../models/users');
const Items = require('../models/item');
const Renter = require('../models/renter');

async function getDashboardCounts() {
   const [userCount, itemCount, renterCount] = await Promise.all([
      Users.countDocuments(),
      Items.countDocuments(),
      Renter.countDocuments(),
   ]);
   return {
      userCount,
      itemCount,
      renterCount,
   };
}

module.exports = {
   getDashboardCounts,
};
