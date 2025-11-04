import ServiceProduto from "../service/produto.js";

class ControllerProduto {
  async PegarTodos(req, res) {
    try {
      const produtos = await ServiceProduto.PegarTodos();
      res.status(200).send({
        data: produtos,
      });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async PegarUm(req, res) {
    try {
      const id = req.params.id;
      const produto = await ServiceProduto.Pegarum(id);

      res.status(200).send({ produto });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Criar(req, res) {
    try {
      const { nome, disponivel, quantidade } = req.body;

      await ServiceProduto.Criar(nome, disponivel, quantidade);

      res.status(201).send("Novo Produto Criado!");
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Alterar(req, res) {
    try {
      const id = req.params.id;
      const { nome, disponivel, quantidade } = req.body;

      ServiceProduto.Alterar(id, nome, disponivel, quantidade);

      res.status(200).send("Produto alterado!");
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Deletar(req, res) {
    try {
      const id = req.params.id;

      await ServiceProduto.Deletar(id);

      res.status(200).send("Produto deletado!");
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

export default new ControllerProduto();
