const currencySelector = document.querySelector('.currency-selector');
const chart = document.querySelector('.chart');
const iframe = document.querySelector('#igraph');
const currencyValue = document.querySelector('.currency-value');
const dataURL = 'https://api.exchangeratesapi.io/latest?base=PLN';



let currencies = [{
        name: 'US Dollar',
        abbreviation: 'USD',
        symbol: '\u0024',
        rate: 0
    },
    {
        name: 'Euro',
        abbreviation: 'EUR',
        symbol: '\u20AC',
        rate: 0
    },
    {
        name: 'British pound sterling',
        abbreviation: 'GBP',
        symbol: '\u00A3',
        rate: 0
    },
    {
        name: 'Mexican Peso',
        abbreviation: 'MXN',
        symbol: '\u20B1',
        rate: 0
    },
    {
        name: 'Russian Rubel',
        abbreviation: 'RUB',
        symbol: '\u20bd',
        rate: 0
    },
    {
        name: 'Chinese Yuan',
        abbreviation: 'CNY',
        symbol: '\u5143',
        rate: 0
    },
    {
        name: 'Australian dollar',
        abbreviation: 'AUD',
        symbol: 'A\u0024',
        rate: 0
    }
]

const findCurr = function (abbrev) {
    return currencies.find((c) => c.abbreviation == abbrev)
}


const changeCurrency = function (event) {
    if (event.target.value == 'USD') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/13.embed'
        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'EUR') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/5.embed'

        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'GBP') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/7.embed'

        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'MXN') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/9.embed'
        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'RUB') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/11.embed'
        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'CNY') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/3.embed'
        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;

    } else if (event.target.value == 'AUD') {
        iframe.src = 'https://chart-studio.plotly.com/~tomeklechu/1.embed'
        currencyValue.textContent = `1 PLN = ${(1/findCurr(event.target.value).rate).toFixed(4)}${findCurr(event.target.value).symbol}`;
    }
}


fetch(dataURL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
        currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);

        currencyValue.textContent = `1 PLN = ${(1/findCurr('USD').rate).toFixed(4)}${findCurr('USD').symbol}`;
    })
    .catch(err => console.log(err))


currencySelector.addEventListener('change', changeCurrency);