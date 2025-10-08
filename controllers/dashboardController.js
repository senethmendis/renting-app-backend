const dashboardService = require('../services/dashboardService');

exports.getDashboardCounts = async (req, res, next) => {
   try {
      const counts = await dashboardService.getDashboardCounts();
      res.json(counts);
   } catch (err) {
      next(err);
   }
};
