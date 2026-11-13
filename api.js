import express from 'express';
import cors from 'cors';

const app = express(); //aqui estamos criando uma instância do Express, que é o framework que vamos usar para criar nossa API

app.use(cors()); // mecanismo de segurança para permitir requisições de outros domínios'

app.get('/', (req, res) => { //aqui estamos criando uma rota para a raiz do nosso servidor
    res.json({ date: new Date().toLocaleString('pt-BR'), // aqui estamos retornando a data e hora atual do servidor no formato brasileiro
        status: 'API no Render funcionando!' // aqui estamos retornando uma mensagem de status para indicar que a API está funcionando corretamente
    });
});

//Porta dinâmica para o Render
const PORT = process.env.PORT || 3000; //aqui estamos definindo a porta do servidor, que pode ser configurada pelo Render ou será 3000 por padrão
app.listen(PORT, () => { //aqui estamos iniciando o servidor e passando a porta definida anteriormente
    console.log(`Servidor rodando na porta ${PORT}`); //aqui estamos exibindo uma mensagem no console para indicar que o servidor está rodando e em qual porta
});