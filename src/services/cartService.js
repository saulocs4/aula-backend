const { criarCarrinhoRepository, listarCarrinhoRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");

async function criarCarrinhoService(user_id) {
    return await criarCarrinhoRepository(user_id)
}
async function listarCarrinhoService(user_id) {
    return await listarCarrinhoRepository(user_id)
}
async function limparCarrinhoService(user_id) {
    return await limparCarrinhoRepository(user_id)
}

module.exports = {
    criarCarrinhoService,
    listarCarrinhoService,
    limparCarrinhoService
}