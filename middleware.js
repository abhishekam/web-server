module.exports = {
    requestAuthentication: function(req, res, next){
        console.log("pvt route hit!");
        next();
    },
    logger: function(req, res, next){
        console.log("Request: "+new Date().toString()+": "+req.method+": "+req.originalUrl);
        next();
    }
};
