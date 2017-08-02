var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 서버 실행
app.listen(3000, function() {
  console.log("practice01 start@ on port 3000");
})

// 정적 파일 등록
app.use(express.static('public'));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

// URL Routing
app.get('/', function(req,res){
  //res.send("<h1>Hello</h1>")
  res.sendFile(__dirname + "/public/main.html")
})


app.get('/main', function(req,res){
  res.sendFile(__dirname + "/public/main.html")

})

// view engine 사용 ... 어캐하지
app.post('/search', function(req,res){
  //res.send("post response")
  // console.log(req.body.key)
  // res.send("You want to know about " + req.body.key)
  res.render('search.ejs', {'key' : req.body.key});
})
