const router = require('express').Router();
const { listarItens, criarCarrinho, deletarCarrinho } = require('../controllers/cartController');



// //listar carrinho itens
router.get('/:id/itens', listarItens)

//cria carrinho
router.post('/', criarCarrinho)

// //deletar todos os itens do carrinho
router.delete('/:id/itens', limparCarrinho)

module.exports = router;