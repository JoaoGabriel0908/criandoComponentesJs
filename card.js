class card extends HTMLElement {
    constructor(){
        super();
        this.build()
    }

    build () {
        // Construindo o método e enviando para a constante shadow, para depois chamar no html
        const shadow = this.attachShadow({mode: 'open'})
        // Adicionando filhos que no futuro irá ser elementos
        shadow.appendChild(this.style())
        shadow.appendChild(this.createCard())
    }

    style(){
        const style = document.createElement('style')
        // Criando uma tag e estilizando o conteúdo
        style.textContent = `
            .card{
                width: 300px;
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                background-color: ${this.bgcolor()};
            }

            .card-turm{
                border-radius: 12px;
                width: 50%;
                padding: 4px;
                text-align: center;
                color: white;
                text-transform: uppercase;
                box-shadow: 0 0 2px #000;
            }

            .card-text{
                border-radius: 12px;
                width: 50%;
                padding: 4px;
                text-align: center;
                color: white;
                text-transform: uppercase;
                box-shadow: 0 0 2px #000;
            }

            .card-image{
                border-radius: 50%;
                width: 50%;
                height: 50%;
                background-image: ${this.bgimagem()};
                background-size: cover;
                box-shadow: inset 0 0 12px #000;
            }
        `
        return style
    }

    // Criando um elemento com a tag div
    createCard(){
    // <div class="card">
    //     <div class="card-text">João Gabriel</div>
    //     <div class="card-image"></div>
    //     <div class="card-text">DS2T</div>
    // </div>
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <div class="card-text">${this.nome()}</div>
        <div class="card-image"></div>
        <div class="card-turm">${this.turma()}</div> 
    `

    return card
    }

    // Criando uma função para mudar a cor do usuário pelo atributo DATA
    bgcolor() {
        const color = this.getAttribute('data-bgcolor') ?? "#f85"
        return color
    }

    bgimagem() {
        const imagem = this.getAttribute('data-bgimagem') ?? "url(9.png)"
        return imagem
    }

    nome() {
        const nome = this.getAttribute('data-card-text') ?? "Aluno"
        return nome
    }

    turma() {
        const turma = this.getAttribute('card-turm') ?? "Sem Turma"
        return turma
    }
}
// Definindo 
customElements.define('card-aluno', card)