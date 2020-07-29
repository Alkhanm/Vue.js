export default {
    computed: {
        virgularCp() {
            let retorne = this.texto
                .split("")
                .map((t) => t.replace(" ", ","))
                .join("");
            return retorne;
        },
        contarCp() {
            let retorne = this.texto
                .split(" ")
                .map((t) => t + "(" + t.length + ") ")
                .join("");
            return retorne;
        },
    },
}