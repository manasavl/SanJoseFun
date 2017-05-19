var restify = require('restify');
var mongojs = require('mongojs');

var server = restify.createServer();
var db = mongojs('sanfun', ['events']);
restify.CORS.ALLOW_HEADERS.push('Access-Control-Allow-Origin');
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

server.listen(3000, function () {
    console.log("Server started @ 3000");
});

server.get("/events", function (req, res, next) {
    db.events.find(function (err, events) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(events));
    });
    return next();
});

server.post('/event', function (req, res, next) {
    var event = req.params;
    console.log('print: %s', JSON.stringify(event));
    db.events.save(event,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});

server.get('/event/:eventName', function(req, res, next) {
    var eventName = req.params.eventName;
    console.log('eventName: %s', eventName);
    db.events.findOne({eventName: eventName}, function (err, events) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(events));
    });
    return next();
});