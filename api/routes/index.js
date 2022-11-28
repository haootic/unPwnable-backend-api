const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.json({ title: "epic api for the blog", status: 200 });
});


router.get('/blog/view:id', (request, response) => {
  const blogId = parseInt(request.params?.id);


});

router.post('/blog/new', (request, response) => {
  response.statusCode = 201; // 201 Created

// TODO: add data to 

  response.json({ status: "New article posted" });
});

module.exports = router;