var express = require('express');
var app = express();

var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/chekcers');


db.on('error', console.error.bind(console, 'connection error:' ));
db.once('open', function (callback){

});

var pieceSchema = mongoose.Schema ({
  color: String,
  position: Number,
  jumped: Boolean
})

var Piece = mongoose.model('Piece', pieceSchema)

var piece1 = new Piece ({color: 'red', position: 1, jumped: false})
var piece2 = new Piece ({color: 'red', position: 2, jumped: false})
var piece3 = new Piece ({color: 'red', position: 3, jumped: false})
var piece4 = new Piece ({color: 'red', position: 4, jumped: false})
var piece5 = new Piece ({color: 'red', position: 5, jumped: false})
var piece6 = new Piece ({color: 'red', position: 6, jumped: false})
var piece7 = new Piece ({color: 'red', position: 7, jumped: false})
var piece8 = new Piece ({color: 'red', position: 8, jumped: false})
var piece9 = new Piece ({color: 'red', position: 9, jumped: false})
var piece10 = new Piece ({color: 'red', position: 10, jumped: false})
var piece11 = new Piece ({color: 'red', position: 11, jumped: false})
var piece12 = new Piece ({color: 'red', position: 12, jumped: false})
var piece13 = new Piece ({color: 'black', position: 21, jumped: false})
var piece14 = new Piece ({color: 'black', position: 22, jumped: false})
var piece15 = new Piece ({color: 'black', position: 23, jumped: false})
var piece16 = new Piece ({color: 'black', position: 24, jumped: false})
var piece17 = new Piece ({color: 'black', position: 25, jumped: false})
var piece18 = new Piece ({color: 'black', position: 26, jumped: false})
var piece19 = new Piece ({color: 'black', position: 27, jumped: false})
var piece20 = new Piece ({color: 'black', position: 28, jumped: false})
var piece21 = new Piece ({color: 'black', position: 29, jumped: false})
var piece22 = new Piece ({color: 'black', position: 30, jumped: false})
var piece23 = new Piece ({color: 'black', position: 31, jumped: false})
var piece24 = new Piece ({color: 'black', position: 32, jumped: false})

piece1.save(function(err, piece){
  if (err) return console.log(err);
})

piece2.save(function(err, piece){
  if (err) return console.log(err);
})

piece3.save(function(err, piece){
  if (err) return console.log(err);
})

piece4.save(function(err, piece){
  if (err) return console.log(err);
})

piece5.save(function(err, piece){
  if (err) return console.log(err);
})

piece6.save(function(err, piece){
  if (err) return console.log(err);
})

piece7.save(function(err, piece){
  if (err) return console.log(err);
})

piece8.save(function(err, piece){
  if (err) return console.log(err);
})

piece9.save(function(err, piece){
  if (err) return console.log(err);
})

piece10.save(function(err, piece){
  if (err) return console.log(err);
})

piece11.save(function(err, piece){
  if (err) return console.log(err);
})

piece12.save(function(err, piece){
  if (err) return console.log(err);
})

piece13.save(function(err, piece){
  if (err) return console.log(err);
})

piece14.save(function(err, piece){
  if (err) return console.log(err);
})

piece15.save(function(err, piece){
  if (err) return console.log(err);
})

piece16.save(function(err, piece){
  if (err) return console.log(err);
})

piece17.save(function(err, piece){
  if (err) return console.log(err);
})

piece18.save(function(err, piece){
  if (err) return console.log(err);
})

piece19.save(function(err, piece){
  if (err) return console.log(err);
})

piece20.save(function(err, piece){
  if (err) return console.log(err);
})

piece21.save(function(err, piece){
  if (err) return console.log(err);
})

piece22.save(function(err, piece){
  if (err) return console.log(err);
})

piece23.save(function(err, piece){
  if (err) return console.log(err);
})

piece24.save(function(err, piece){
  if (err) return console.log(err);
})



app.set("view engine", "hbs")
app.use(express.static(__dirname + "./public"))


app.get('/', function( req, res ){
  Piece.find(function(err, piece){
    if (err) return console.error(err);
    res.send(piece)
  })
});

app.post('/', function(req, res){
  res.send('Hello' + req.params.name + '!!!')
})


app.listen(3000, function(){
  console.log('app listening at http://localhost:3000')
})
