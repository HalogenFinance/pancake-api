const express = require('express');
const app = express();
const { farm } = require('./farm')

const port = process.env.PORT || 5009;


app.get('/8010fd0f87d3aaa0ea48aa78948c081e', async (req, res) => {
  const result = await handler()
   res.send(result);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))