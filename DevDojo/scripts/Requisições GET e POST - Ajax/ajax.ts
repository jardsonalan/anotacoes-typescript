class AjaxTest {
    /*
    Status Code:
    0 - Quando não for inicilizado (Uninitialized)
    1 - Feito set up, mas não enviado
    2 - Foi enviada (Sent)
    3 - Está navegando pela rede (In flight)
    4 - Foi completa (Complete)
    */
    private READY_STATUS_CODE = 4

    private isCompleted(req: XMLHttpRequest) {
        return req.readyState === this.READY_STATUS_CODE
    }
    
    // Método GET
    public httpGet(url: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest()

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req)
            if (finished) {
                callback(req.status, req.responseText)
            }
        }

        req.open('GET', url, true)
        req.send()
    }

    // Método POST
    public httpPost(url: string, data: string, callback: (status: number, response: string) => any): void {
        let req = new XMLHttpRequest()

        req.onreadystatechange = () => {
            let finished = this.isCompleted(req)
            if (finished) {
                callback(req.status, req.responseText)
            }
        }

        req.open('POST', url, true)
        req.setRequestHeader('Content-type', 'application/json')
        req.send(data)
    }
}

let ajax = new AjaxTest()

// Chamada do método GET
ajax.httpGet('http://httpbin.org/ip', (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById('main')
    divMain.innerHTML = response
})

// Chamada do método POST
ajax.httpPost('http://httpbin.org/post', "{name: 'Jardson', company: 'DevDojo'}", (status: number, response: string) => {
    let divMain = <HTMLDivElement> document.getElementById('main')
    divMain.innerHTML = response
})