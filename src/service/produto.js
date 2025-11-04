import Produto from "../model/produto.js";

class ServiceProduto {
  async PegarTodos() {
    return Produto.findAll();
  }

  async Pegarum(id) {}

  async Criar(nome, disponivel, quantidade) {
    Produto.create({
      nome,
      disponivel,
      quantidade,
    });
  }

  async Alterar(id, nome, disponivel, quantidade) {
    if (!id || !nome || !disponivel || !quantidade) {
      throw new Error("Favor informar um ID");
    }
    const produto = await Produto.findByPk(id);

    if (!produto) {
      throw new Error(`Usuario ${id} não encontrado`);
    }
    produto.nome = nome;
    produto.disponivel = disponivel;
    produto.quantidade = quantidade;

    return produto.save();
  }

  async Deletar(id) {}
}

export default new ServiceProduto();
