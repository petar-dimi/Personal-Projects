<template>
  My app
  <div class="container">
    <Balance />
    <ExpenseIncome />
    <Transactions />
    <AddTransaction />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import ExpenseIncome from './components/ExpenseIncome.vue';
import Transactions from './components/Transactions.vue';
import AddTransaction from './components/AddTransaction.vue';


export default{
  components:{
    Header,
    Balance,
    ExpenseIncome,
    Transactions,
    AddTransaction

  },
};
</script>