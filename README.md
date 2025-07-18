# Background Color Change

Projeto simples que permite alterar a cor de fundo da página utilizando um seletor de cores nativo do navegador. A cor selecionada é exibida em formato hexadecimal e armazenada localmente para persistência entre sessões.

## Tecnologias

- HTML5  
- CSS3  
- JavaScript  

## Estrutura do Projeto

```
background-color-change/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Funcionalidades

- Alteração dinâmica da cor de fundo via input tipo color.  
- Exibição em tempo real do código hexadecimal da cor selecionada.  
- Salvamento da cor escolhida no localStorage do navegador.  
- Recuperação automática da cor salva ao carregar a página.  
- Ajuste do contorno do seletor para garantir boa visibilidade.

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/background-color-change.git
```

2. Navegue até a pasta do projeto:

```bash
cd background-color-change
```

3. Abra o arquivo `index.html` no navegador.

## Detalhes técnicos

- O evento `input` do elemento color é usado para capturar a cor selecionada e atualizar o fundo da página.  
- O valor hexadecimal da cor é exibido em um elemento `<span>` para feedback visual.  
- A cor é salva no `localStorage` para manter a preferência após recarregar ou fechar o navegador.  
- Ao carregar a página, o script verifica se há uma cor salva e aplica automaticamente.  
- O contorno do seletor de cor muda para branco quando a cor de fundo é preta, garantindo contraste.

## Autor

Lucas Silva Porto - lucassporto.contanto@gmail.com

---

Licença MIT
