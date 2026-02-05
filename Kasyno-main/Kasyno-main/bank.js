let balance = parseFloat(localStorage.getItem('balance')) || 1000;
let history = JSON.parse(localStorage.getItem('history')) || [];

const balanceEl = document.getElementById('balance');
const messageEl = document.getElementById('message');
const historyEl = document.getElementById('history-list');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

function updateBalance() {
  balanceEl.textContent = balance.toFixed(2);
  localStorage.setItem('balance', balance);
}

function updateHistory() {
  if(history.length === 0) {
    historyEl.textContent = 'Brak transakcji';
    return;
  }
  historyEl.innerHTML = '';
  history.slice().reverse().forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `<span>${item.type}</span> ${item.amount.toFixed(2)} zł (${item.date})`;
    historyEl.appendChild(div);
  });
  localStorage.setItem('history', JSON.stringify(history));
}

function addTransaction(type, amount) {
  const date = new Date().toLocaleString();
  history.push({type, amount, date});
  updateHistory();
}

function deposit() {
  const amount = parseFloat(document.getElementById('amount').value);
  if(!amount || amount <= 0) {
    messageEl.textContent = '❌ Podaj poprawną kwotę';
    return;
  }
  balance += amount;
  messageEl.textContent = '✅ Wpłata zakończona';
  updateBalance();
  addTransaction('Wpłata', amount);
  document.getElementById('amount').value = '';
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amount').value);
  if(!amount || amount <= 0) {
    messageEl.textContent = '❌ Podaj poprawną kwotę';
    return;
  }
  if(amount > balance) {
    messageEl.textContent = '❌ Brak wystarczających środków';
    return;
  }
  balance -= amount;
  messageEl.textContent = '✅ Wypłata zakończona';
  updateBalance();
  addTransaction('Wypłata', amount);
  document.getElementById('amount').value = '';
}

// Podpięcie przycisków
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

// Inicjalizacja
updateBalance();
updateHistory();
