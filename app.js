var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/chekcers');


app.set("view engine", "hbs")
app.use(express.static(__dirname + "./public"))



db.on('error', console.error.bind(console, 'connection error:' ));
db.once('open', function (callback){

});


var pieceSchema = mongoose.Schema ({
  color: String,
  position: Number,
  jumped: Boolean
})



var Piece = mongoose.model('Piece', pieceSchema)




app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  
  
});

io.sockets.on('connection', function (socket) {

  Piece.find({}, "position -_id color", function(err, pos){
    if (err) return console.error(err);
      socket.emit('position', pos);
      })
  
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

  



http.listen(3000, function(){
  console.log('app listening at http://localhost:3000')
})
