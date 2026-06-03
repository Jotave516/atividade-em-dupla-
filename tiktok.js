const express = require('express');
const exphbs = require('express-handlebars')
const app = express();

app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');

const videos = [
    {
        titulo: 'Jogada ensaiada',
        criador: 'João',
        descricao: 'Vídeo de futebol',
        visualizacoes: 15000,
        curtidas: 1000,
        hashtag: '#fut',
        urlVideo: 'https://tiktok.com/videofut',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADAP6Xe0ZphDvfd6zLK7CkTs4IR90KJRLhg&s'
    },
      {
        titulo: 'Como fazer a chapadinha na gaveta',
        criador: 'Joaquim',
        descricao: 'Vídeo de futebol ',
        visualizacoes: 15000,
        curtidas: 1000,
        hashtag: '#chapada',
        urlVideo: 'https://tiktok.com/videofut',
        thumbnail: 'https://admin.itatiaia.com.br/wp-content/uploads/sites/27/2026/03/Moise-Kean-abriu-o-placar-para-a-Italia-no-jogo-contra-a-Bosnia-com-um-belo-chute.jpg?w=450&h=300&quality=50'
    }
    
];

app.get('/', (req, res) => {
    res.redirect('/videos');
});

app.get('/videos', (req, res) => {
    res.render('videos', {
        videos
    })
});

app.get('/videos/cadastrar', (req, res) =>{
    res.render('cadastrarvideo')
})

app.listen(
    5000, 
    () => console.log('Servidor do tiktok')
);  
