import express from "express";
import TarefaController from '../controllers/TarefaController.js'

const routes = express.Router();

routes.get('/',(req,res) => {
  res.send("Teste técnico fatto");
})

routes.get("/tarefas", TarefaController.getTarefas);
routes.get("/tarefas/:id", TarefaController.getTarefaById);
routes.post("/tarefas", TarefaController.createTarefa);
routes.put("/tarefas/:id", TarefaController.updateTarefa);
routes.delete("/tarefas/:id", TarefaController.deleteTarefa);

export default routes;