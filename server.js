// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
// file service
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post('/submit', upload.single('file'), (request, response) => {
  if (!request.file) {
    response.json({
      error: 'Please submit a file'
    });
  }

  response.json({
    size: request.file.size
  });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
