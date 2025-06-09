const {listarCarrinhoService, criarCarrinhoService ,limparCarrinhoService} = require('../services/cartService.js')

async function listarItens(req, res) {
    const {id} = req.params
   try {
        const result = await listarCarrinhoService(id)
        res.status(200).json(result)
   } catch (error) {
        console.log("Erro ao listar itens do carrinho", error)
        res.status(500).json({error: 'Erro ao buscar itens'})
   }
}

async function criarCarrinho(req, res) {
    const {user_id} = req.body 
    try {
        await criarCarrinhoService(user_id)
        res.status(201).json({message: 'Carrinho criado com sucesso'})
    } catch (error) {
        console.log("Erro ao criar carrinho", error)
        res.status(500).json({
            erro: "Erro ao criar carrinho",
            details: error.message
         })
    }
}


async function limparCarrinho(req, res) {
    const {id} = req.params
     try {
        await limparCarrinhoService(id)
        res.status(200).json({message: "Carrinho limpo"})
     } catch (error) {
        console.log("Erro ao limpar carrinho", error)
        res.status(500).json({erro: "Erro ao limpar carrinho",
        details: error.message })
     }
}

module.exports = { 
    listarItens,
    criarCarrinho,
    limparCarrinho
}