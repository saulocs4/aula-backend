const router = require('express').Router()
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')



//insere itens no carrinho
router.post('/', inserirItens)

 //Alterar a quantidade de item no carrinho
router.put('/:id', alterarItens)

//deletar item
router.delete('/:id', deletarItens)

module.exports = router