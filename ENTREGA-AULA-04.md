# Entrega da Aula 04

## Objetivo

Implementar uma API em Node.js com Express para consultar a data e hora do servidor, desenvolver um Front-end separado para consumir essa API e preparar a publicação nos serviços Render e Vercel.

## API

A API foi desenvolvida com Express e CORS para permitir acesso de outros domínios. O endpoint principal é:

- `GET /` — mensagem de status da API
- `GET /data-hora` — retorna JSON com `data`, `hora` e `dataHora`

## Tecnologias utilizadas

- Node.js
- Express
- CORS
- HTML
- CSS
- JavaScript

## Repositórios

- API: https://github.com/Ry4nBR/projeto-express
- Front-end: https://github.com/Ry4nBR/front-end-projeto-express

## URLs públicas

- Render (API): aguardando deploy manual no Render
- Vercel (Front-end): aguardando deploy manual na Vercel

> Não foram inventadas URLs públicas. Os links reais serão preenchidos quando os deploys forem concluídos no Render e na Vercel.

## Evidências

### 1) Código da API

```js
// inserir captura do arquivo api.js
```

### 2) Resposta do endpoint `/data-hora`

```json
{
  "data": "13/11/2026",
  "hora": "16:29:08",
  "dataHora": "2026-11-13T19:29:08.859Z"
}
```

### 3) Código do consumo no Front-end

```js
// inserir captura do arquivo script.js
```

### 4) Aplicação funcionando

![Aplicação funcionando](./evidencias/aplicacao-funcionando.png)

> Inserir a captura real do front-end em funcionamento após o deploy local ou publicado.

### 5) Painel do Render

![Painel do Render](./evidencias/render-painel.png)

> Inserir a imagem real do painel do Render com o serviço em funcionamento.

### 6) Painel da Vercel

![Painel da Vercel](./evidencias/vercel-painel.png)

> Inserir a imagem real do painel da Vercel com o deploy do front-end.

## Como inserir imagens no Markdown

```md
![Descrição da imagem](./evidencias/nome-da-imagem.png)
```

A pasta `evidencias/` pode ser criada para organizar as capturas reais do projeto, conforme necessário.

## Pendências manuais

- publicar a API no Render;
- confirmar a URL pública do Render;
- publicar o Front-end na Vercel;
- confirmar a URL pública da Vercel;
- incluir as imagens finais no documento de entrega.
