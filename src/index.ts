import express from "express";
import helloRouter from "./routes/hello";
import byeRouter from "./routes/bye";

const app = express();
const PORT = 3000;

app.use("/api", helloRouter);
app.use("/api", byeRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
