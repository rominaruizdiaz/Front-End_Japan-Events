<template>
    <header class="main-header">
      <div class="logo-container">
        <img src="../../assets/images/logoConectados.png" alt="Logo">
      </div>
      <div class="title-container">
        <div class="main-title">Your official Japan</div>
        <div class="sub-title">travel guide</div>
      </div>
      <div class="login-container">
        <button class="login-button">Log In</button>
      </div>
    </header>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .main-header {
    height: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    padding: 10px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255)),
                url('../../assets/images/imagenFondoHeader.jpg') center/cover no-repeat; 
  }
  
  .logo-container img {
    max-height: 6rem;
  }
  
  .title-container {
    text-align: center;
    margin-top: 10rem;
  }
  
  .main-title {
    font-size: 2.3rem;
    color: #fff;
  }
  
  .sub-title {
    font-size: 2rem;
    color: #ffffff;
  }
  
  .login-container button {
    padding: 7px 11px;
    background-color: transparent;
    color: #fff;
    border: 1.5px solid #fff;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
  .main-header {
    height: 40rem; 
  }

  .logo-container img {
    max-height: 12rem; 
  }

  .title-container {
    text-align: center; 
    margin-top: 12rem; 
    margin-left: 20px; 
  }

  .main-title {
    font-size: 5rem; 
  }

  .sub-title {
    font-size: 3.5rem; 
  }

  .login-container button {
    padding: 10px 20px;
    font-size: 2.2rem;
  }
}
  </style>