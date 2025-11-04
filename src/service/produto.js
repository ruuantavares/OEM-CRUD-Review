import Produto from "../model/produto.js";

class ServiceProduto {
  async PegarTodos() {
    return Produto.findAll();
  }

  async Pegarum(id) {
    if (!id) {
      throw new Error("Favor informar um ID");
    }

    const produto = await Produto.findByPk(id);

    if (!produto) {
      throw new Error(`Produto ${id} não encontrado`);
    }

    return produto;
  }

  async Criar(nome, disponivel, quantidade) {
    if (!nome || !disponivel || !quantidade) {
      throw new Error("Favor Preencher todos os dados");
    }

    await Produto.create({
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

  async Deletar(id) {
    if (!id) {
      throw new Error("Favor informar um ID");
    }

    const produto = await Produto.findByPk(id);

    if (!produto) {
      throw new Error(`Produto ${id} não encontrado`);
    }

    return produto.destroy(id);
  }
}

export default new ServiceProduto();
