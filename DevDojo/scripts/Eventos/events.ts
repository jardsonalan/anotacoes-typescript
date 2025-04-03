class ClickHandler {
    constructor(){
        let main = document.getElementById('main')
        let btn1 = document.getElementById('btn1')
        let btn2 = document.getElementById('btn2')

        if (main !== null && btn1 !== null && btn2 !== null) {
            // Capturing: true
            // Bubbling: false
            main.addEventListener('click', ClickHandler.alertEventMain, true)
            btn1.addEventListener('click', ClickHandler.alertEventBtn1, true)
            btn2.addEventListener('click', ClickHandler.alertEventBtn2, true)
        }
    }
    static alertEventMain(event: Event):void{
        alert('Clicked over main')
        event.stopPropagation() // Para a propagação do evento
        // Quando utilizamos o stopPropagation(), devemos utilizar o capturing
    }
    static alertEventBtn1():void{
        alert('Clicked btn1')
    }
    static alertEventBtn2():void{
        alert('Clicked btn2')
    }
}

const clickHandler = new ClickHandler()