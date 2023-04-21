const {Router} = require('express')
const { gatLivros, gatLivro, postLivros, patchLivro, deleteLivro } = require('../controllers/livros')

const router = Router()

router.get('/', gatLivros)
router.get('/:id', gatLivro)

router.post('/', postLivros )
router.post('/', (req, res)=>{
    res.send('você fez uma requisiçao do tipo POST')
})

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)


module.exports = router