class Database {
    constructor() {
      this.data = {
        usuarios: [
          { id: 1, nome: 'João', idade: 30 },
          { id: 2, nome: 'Maria', idade: 25 },
          { id: 3, nome: 'Pedro', idade: 35 },
        ],
        produtos: [
          { id: 101, nome: 'Camiseta', preco: 20 },
          { id: 102, nome: 'Calça', preco: 30 },
          { id: 103, nome: 'Tênis', preco: 50 },
        ],
      };
    }
  
    encontrarUsuarioPorId(id) {
      return this.data.usuarios.find(usuario => usuario.id === id);
    }
  
    encontrarProdutoPorId(id) {
      return this.data.produtos.find(produto => produto.id === id);
    }
  
    adicionarUsuario(usuario) {
      this.data.usuarios.push(usuario);
    }
  
    adicionarProduto(produto) {
      this.data.produtos.push(produto);
    }
  
    atualizarUsuario(id, novosDados) {
      const index = this.data.usuarios.findIndex(usuario => usuario.id === id);
      if (index !== -1) {
        this.data.usuarios[index] = { ...this.data.usuarios[index], ...novosDados };
      }
    }
  
    atualizarProduto(id, novosDados) {
      const index = this.data.produtos.findIndex(produto => produto.id === id);
      if (index !== -1) {
        this.data.produtos[index] = { ...this.data.produtos[index], ...novosDados };
      }
    }
  
    excluirUsuario(id) {
      const index = this.data.usuarios.findIndex(usuario => usuario.id === id);
      if (index !== -1) {
        this.data.usuarios.splice(index, 1);
      }
    }
  
    excluirProduto(id) {
      const index = this.data.produtos.findIndex(produto => produto.id === id);
      if (index !== -1) {
        this.data.produtos.splice(index, 1);
      }
    }
  
    // Outros métodos de consulta ou manipulação de dados podem ser adicionados aqui
  
    // Exemplo de um método para retornar todos os usuários
    obterTodosOsUsuarios() {
      return this.data.usuarios;
    }
  
    // Exemplo de um método para retornar todos os produtos
    obterTodosOsProdutos() {
      return this.data.produtos;
    }
  }
  
  // Exemplo de uso
  const database = new Database();
  console.log(database.encontrarUsuarioPorId(2)); // Encontrar usuário por ID
  console.log(database.encontrarProdutoPorId(102)); // Encontrar produto por ID
  
  database.adicionarUsuario({ id: 4, nome: 'Ana', idade: 28 }); // Adicionar usuário
  database.adicionarProduto({ id: 104, nome: 'Bolsa', preco: 40 }); // Adicionar produto
  
  database.atualizarUsuario(1, { idade: 31 }); // Atualizar dados do usuário
  database.atualizarProduto(101, { preco: 25 }); // Atualizar dados do produto
  
  database.excluirUsuario(3); // Excluir usuário
  database.excluirProduto(103); // Excluir produto
  
  console.log(database.obterTodosOsUsuarios()); // Lista de usuários atualizada
  console.log(database.obterTodosOsProdutos()); // Lista de produtos atualizada
  