import express from "express";
import helloRouter from "./routes/hello";
import byeRouter from "./routes/bye";
import successRouter from "./routes/success";

const app = express();
const PORT = 3000;

app.use("/api", helloRouter);
app.use("/api", byeRouter);
app.use("/api", successRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
