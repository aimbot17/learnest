import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ name: "test" });
});

app.post("/auth/forgot-password", (req: Request, res: Response) => {
  const { email } = req.body;
  res.status(200).send({ message: "Password reset email sent successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
