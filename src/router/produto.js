import express from "express";
import ControllerProduto from "../controller/produto.js";

const router = express.Router();

router.get("/produtos", ControllerProduto.PegarTodos);
router.get("/produto/:id", ControllerProduto.PegarUm);
router.post("/produto", ControllerProduto.Criar);
router.put("/produto/:id", ControllerProduto.Alterar);
router.delete("/produto/:id", ControllerProduto.Deletar);

export default router;
