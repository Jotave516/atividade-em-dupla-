const express = require('express');
const exphbs = require('express-handlebars')
const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Bem vindo ao Sistema`');
});

app.get('/sobre', (req, res) => {
  res.send('Sistema sobre o Santa Cruz')
})

app.get('/contato', (req, res) => {
    res.json({
        "email": "contatosantacruz@email.com",
        "telefone": "(81) 99659-9076"
    })
})

app.get('/erro', (req, res) => {
  res.status(404).send('Página não encontrada');
})

app.get('/inicio', (req, res) => {
    res.redirect('/');
})

app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send('Usuario '+ userId)
});

app.get('/produtos/:nome', (req, res) => {
    const produto = req.params.nome;
    res.send('produto '+ produto)
});

app.get('/filmes/:id/:nome', (req, res) => {
    const filme = req.params.nome;
    const codigo = req.params.id;
    res.json({
        "nome do filme": filme,
        "id": codigo
    })
});

app.get('/buscar', (req, res) => {
    const { nome } = req.query;

    res.send(`buscando por: ${nome}`);
});

app.get('/produto2/:categoria/:pagina', (req, res) => {
    const produto2 = req.params.categoria;
    const produto = req.params.pagina;
    res.json({
        "categoria do produto": produto2,
        "pagina": produto
    })
});

app.get('/usuarios', (req, res) => {
    const { idade } = req.query;

    res.send(`filtrando usuário com idade: ${idade}`);
});

app.get('/perfil', (req, res) => {
    res.render('home', {
        nome: 'João',
        idade: 16
    });
});

app.listen(
    3000, 
    () => console.log('sistema encontrado')
);
