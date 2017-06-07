var restify = require('restify');
var mongojs = require('mongojs');

var server = restify.createServer();
var db = mongojs('sanfun', ['events', 'users', 'rsvp']);
restify.CORS.ALLOW_HEADERS.push('Access-Control-Allow-Origin');
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

server.listen(3000, function () {
    console.log("Server started @ 3000");
});

server.post('/login', function(req, res, next) {
    var login = req.params;
    console.log('print: %s', JSON.stringify(login));
    db.users.find({ email: login.email }, function(err, data) {
        if (err) {
            return res.send(500, err);
        }
        res.send(data);
    })
});

server.post('/signup', function(req, res, next) {
    var signupdata = req.params;

    console.log('print: %s', JSON.stringify(signupdata));
    db.users.save(signupdata, function(err, data, next) {
        if (err) {
            return res.send(500, err);
        }
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
    });
    return next();
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

server.post('/rsvp', function (req, res, next) {
    var rsvp = req.params;
    console.log('print: %s', JSON.stringify(rsvp));
    db.rsvp.save(rsvp,
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

server.get('/category/:category', function(req, res, next) {
    var category = req.params.category;
    console.log('category: %s', category);
    db.events.find({category: category}, function (err, events) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(events));
    });
    return next();
});

server.get('/location/:location', function(req, res, next) {
    var location = req.params.location;
    console.log('location: %s', location);
    db.events.find({location: location}, function (err, events) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(events));
    });
    return next();
});

server.get('/rsvp/:user', function(req, res, next) {
    var user = req.params.user;
    console.log('user: %s', user);
    db.rsvp.find({user: user}, function (err, events) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(events));
    });
    return next();
});