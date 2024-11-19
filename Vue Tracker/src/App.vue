<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <ExpenseIncome :income = "income" :expenses = "expenses" />
    <Transactions :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import ExpenseIncome from './components/ExpenseIncome.vue';
import Transactions from './components/Transactions.vue';
import AddTransaction from './components/AddTransaction.vue';

import { computed, ref } from 'vue';

const transactions = ref([
  {id: 1, text:'Flower', amount: -20 },
  {id: 2, text:'Salary', amount: 300 },
  {id: 3, text:'Book', amount: -30 },
  {id: 4, text:'Camera', amount: -190 },
]);

//Get total
const total = computed(()=>{
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});
//Get Income
const income = computed(()=>{
  return transactions.value.filter((transaction)=> transaction.amount > 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});
//Get Expenses
const expenses = computed(()=>{
  return transactions.value.filter((transaction)=> transaction.amount < 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0).toFixed(2);
});

</script>