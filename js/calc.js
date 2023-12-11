const main = document.querySelector('main')
const root = document.querySelector(':root')

const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '%', '(', ')', '/']

const copyBtn = document.getElementById('copyToClipboard')

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        input.focus()
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function() {
    input.value = ""
    resultInput.value = ""
    input.focus()
    copyBtn.innerText = 'Copy'
    copyBtn.classList.remove("success")
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault(); //comportamento default prevenido: adicionar o valor do Input
    
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key // se usar = ao invés de += o valor do input seria sempre apenas a última key digitada
        return
    }
    
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (ev.key === 'Enter') calculate()
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    const result = eval(input.value)
    resultInput.value = result
}

copyBtn.addEventListener('click', function(ev) {
    const button = ev.currentTarget
    if (copyBtn.innerText === 'Copy') {
        copyBtn.innerText = "Copied "
        copyBtn.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    }
    else {
        copyBtn.innerText = 'Copy'
        copyBtn.classList.remove("success")
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function() {
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#505860')
        main.dataset.theme = 'light'
    }
    else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#aaaaaa')
        main.dataset.theme = 'dark'
    }
})
