const express = require('express');
const app = express();
const { handler } = require('./farm')

const port = process.env.PORT || 5009;


app.get('/stat', async (req, res) => {

  const result = await handler()
   res.send(result);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))