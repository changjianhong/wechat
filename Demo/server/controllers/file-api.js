const APIError = require('../rest').APIError;

module.exports = {
    'POST /api/file': async(ctx, next) => {
        var file = ctx.request.body;
    },
};