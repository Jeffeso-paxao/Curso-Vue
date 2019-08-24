new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Estou alertando agora!')
        },
        alterarValor(event){
            this.valor = envet.target.value
        }
    }
})