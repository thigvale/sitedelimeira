export default function darkmode() {
    const toggle = document.getElementById('toggle')


    toggle.addEventListener("change", () => {
document.body.classList.toggle('dark-mode')




// definir o estado da pagina a ser salva


const modeloSelecionado = toggle.checked ? "dark" : "light"


// gravar o estado da pagina no localStorage
localStorage.setItem("modo", modeloSelecionado)





    })

    // recuperar o modo que esta armazenado no navegador

const modoArmazenado = localStorage.getItem("modo")

if (modoArmazenado == "dark") { 
    document.body.classList.add("dark-mode")
// marca o interruptor como ativado
toggle.checked = true
}

}