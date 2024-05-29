const display = document.getElementById('display')
let equationHistory = []
let historyLines = document.getElementById('historyLines')

function appendToDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ""
}

function deleteLastVal() {
    let currentVal = display.value
    display.value = currentVal.slice(0, -1)
}

function calculate() {
    let input = display.value
    let result = eval(input)
    display.value = result

    equationHistory.push({equation: input, result: result})
    printHistory()
}

function printHistory() {

    
    let hisSection = document.getElementById('historyLines')
    while (hisSection.childNodes.length > 0){
    hisSection.removeChild(hisSection.firstChild)
}
    let reversedHistory = equationHistory.slice().reverse()
    reversedHistory.forEach(each => {
        let paragraph = document.createElement('p');
            paragraph.textContent =`${each.equation} = ${each.result}`
            hisSection.appendChild(paragraph)
    })

}


    document.addEventListener('keydown', function(event) { 

        switch(event.key) {
            case '0':
                display.value += 0;
            break;
            case '1':
                display.value += 1;
            break;
            case '2':
                display.value += 2;
            break;
            case '3':
                display.value += 3;
            break;
            case '4':
                display.value += 4;
            break;
            case '5':
                display.value += 5;
            break;
            case '6':
                display.value += 6;
            break;
            case '7':
                display.value += 7;
            break;
            case '8':
                display.value += 8;
            break;
            case '9':
                display.value += 9;
            break;
            case '+':
                display.value += '+';
            break;
            case '-':
                display.value += '-';
            break;
            case '*':
                display.value += '*';
            break;
            case '/':
                display.value += '/';
            break;
            case 'Escape':
                clearDisplay()
            break;
            case 'Backspace':
                deleteLastVal()
            break;
            case '=':
            case "Enter":
                calculate()
            break;
        }
})
