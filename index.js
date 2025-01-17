const express = require('express')
const mongoose = require('mongoose');
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course")
const { adminRouter } = require('./routes/admin')
const app = express()
const port = 3000
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);



async function main() {
  await mongoose.connect("");

  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
}

main();

