import Produto from "../model/produto.js";

class ServiceProduto {
  async PegarTodos() {
    return Produto.findAll();
  }

  async Pegarum(id) {
    if (!id) {
      throw new Error("Favor informar um ID");
    }

    const produto = await Produto.findByPk(id); //se tiver o id, é melhor usar o findbypk, se nao tiver id, usar o findOne, para emails por exemplo

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
    if (!id ) { // || !nome || disponivel === undefined || !quantidade, poderia usar isso para tratamento, porem iria ter que receber todos os valores para alterar qualquer coisa
      throw new Error("Favor preencher todas as informações.");
    }
    const produtoVelho = await Produto.findByPk(id);

    if (!produtoVelho) {
      throw new Error("Produto não encontrado");
    }
    produtoVelho.nome = nome || produtoVelho.nome  //se receber null ou undefigne, ele salva o nome antigo
    produtoVelho.disponivel = disponivel || produtoVelho.disponivel
    produtoVelho.quantidade = quantidade || produtoVelho.quantidade

    return produtoVelho.save();
  }

  async Deletar(id) {
    if (!id) {
      throw new Error("Favor informar um ID");
    }

    const produto = await Produto.findByPk(id);

    if (!produto) {
      throw new Error(`Produto ${id} não encontrado`);
    }

    return produto.destroy();
  }
}

export default new ServiceProduto();
