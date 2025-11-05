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
      //const {id} = req.params  >>> bom para usar quando tiver mais parametros para usar
      const id = req.params.id;
      const produto = await ServiceProduto.Pegarum(id);

      res.status(200).send({ data: produto });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Criar(req, res) {
    try {
      const { nome, disponivel, quantidade } = req.body;

      await ServiceProduto.Criar(nome, disponivel, quantidade);

      res.status(201).send({msg: "Novo Produto Criado!"});
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Alterar(req, res) {
    try {
      const id = req.params.id;
      // const { nome, disponivel, quantidade } = req.body;
      const nome = req.body?.nome  // para não precisar obrigar o cliente a alterar todos os produtos, fazemos dessa forma, ai ela pode escolher o que quer alterar, e não ter que alterar tudo.
      const disponivel = req.body?.disponivel
      const quantidade = req.body?.quantidade

      ServiceProduto.Alterar(id, nome, disponivel, quantidade);

      res.status(200).send({msg: "Produto Alterado!"});
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }

  async Deletar(req, res) {
    try {
      const id = req.params.id;

      await ServiceProduto.Deletar(id);

      res.status(204).send();
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

export default new ControllerProduto();
