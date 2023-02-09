import express, { Router } from "express";
import cors from "cors";

//configurações
const app = express();
const router = Router();

app.use(cors());
app.use(express.json());
app.use(router);

// rotas
router.get("/api", (req, res) => {
  res.send({
    msg: "API está em funcionamento",
    by: "https://github.com/deni-rocha/",
  });
});

app.listen(3000, () => console.log("está rodando na porta 3000"));
