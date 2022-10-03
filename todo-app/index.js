/**
 * Métodos de recuperação de elementos HTML
 */
//recupera elementos HTML a partir do nome da tag
const todoForm = document.getElementById('todo-form')
const todos = [] 


/**
 * addEventListener serve para ouvir eventos de elementos HTML sempre que foram emitidos
 */
todoForm.addEventListener('submit', function(evento) {
    /**
     * cancela o comportamento padrão de um formulario
     * que seria o recarregamento da pagina tentando fazer seu envio
     * 
     */
    evento.preventDefault()
    /**
     * cancela a propagaçao do evento que foi emitido para os elemento pai,
     * evitando que outros eventos sejam emitidos
     */
    evento.stopPropagation()
    /**
     * querySelector recupera o primeiro elemento que atenda 
     * a um seletor css informado
     * 
     */
    const todoInput = document.querySelector('#todo')
    /**
     * a propriedade value é uma propriedade que representa o atributo value 
     * dos elementos de formulario do HTMl, para acessarmos o valor que esta dentro
     * deles
     */
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
})

function renderizarTodos() {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''

    for(let tarefa of todos) {
        /**
         * createElement é o método responsavel por gerar novos elementos 
         * HTML dentro do Javascript a partir do nome das tags
         */
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center' )

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        /**
         * innerText é a propriedade que informa qual o conteudo de texto que esta dentro de um 
         * elemnto HTML
         */
         pTodoText.innerText = tarefa

         const btnDelete = document.createElement('button')
         btnDelete.classList.add('btn', 'delete-todo')

         /**
          * arrow functions SEMPRE são anônimas
          */
         btnDelete.addEventListener('click', () => {
            /**
             * descobrir o índice do elemento dentro do array
             */
            /**
             * indexOf informa em qual índice se encontra um determinado valor dentro 
             * do seu array
             * 
             * se ele não achar o valor dentro do array, ele retorna -1
             */
            const index = todos.indexOf(tarefa)
            /**
             * splice serve para exluir um determinado valor do seu array a partir do seu indice
             */
            todos.splice(index, 1)
            renderizarTodos()
         })
 
         const spanicon = document.createElement('span')
         spanicon.classList.add('material-symbols-outlined')
         spanicon.innerText = 'delete'
 
         /**
          * appendChild serve para colocar novos elementos html dentro de outro
          */
         btnDelete.appendChild(spanicon)
         /**
          * append serve para colocar um ou mais elementos html dentro de outro
          */
         divCardBody.append(pTodoText, btnDelete)
         divCard.appendChild(divCardBody)
         todosListSection.appendChild(divCard)
         
     }
 }