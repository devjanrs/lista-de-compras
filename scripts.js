const lista = {
    data() {
        return {
            tarefas: [],
            novaTarefa: {
                status: false
            }
        }
    },
    methods: {
        addTarefa: function() {
            if(this.novaTarefa.texto) {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    status: false
                };
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
            } else {
                alert("O texto do item é obrigatório");
            }
        }
    },
    created() {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated() {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
    }
    
};

Vue.createApp(lista).mount('#app');