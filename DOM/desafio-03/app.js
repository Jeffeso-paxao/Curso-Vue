new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    computed:{
        resultado() {
            return this.valor == 37 ?
                'Igual a 37' : 'Diferente 37'
        }
    },

    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }

    },
});