<template>
    <nav>
      <h1>Chloe Lynne Choi</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <NuxtLink to="/directory">Works Directory</NuxtLink>
      <span>/</span>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </template>
  <script>
  export default {
    name: "Navigation",
  };
  </script>
  
  <style scoped>
  nav {
    padding: 24px 0;
    color: black;
  }
  a{
    color:inherit;
    text-decoration: none; 
  }
  </style>