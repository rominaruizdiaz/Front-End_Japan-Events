<template>
  <header class="main_header">
    <div class="logo_container">
      <img src="../../assets/images/logoConectados.png" alt="Logo">
    </div>
    <div class="title_container">
      <div class="main_title">Your official Japan</div>
      <div class="sub_title">travel guide</div>
    </div>
    <div class="login_container">
      <button class="home_button">Home</button>
      <button class="login_button">Log In</button>
    </div>
  </header>
</template>

<style scoped>
.main_header {
  height: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding: 10px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255)),
              url('../../assets/images/imagenFondoHeader.jpg') center/cover no-repeat; 
}

.logo_container img {
  max-height: 6rem;
}

.title_container {
  text-align: center;
  margin-top: 10rem;
}

.main_title {
  font-size: 2.3rem;
  color: #fff;
}

.sub_title {
  font-size: 2rem;
  color: #ffffff;
}

.login_button {
  padding: 7px 11px;
  background-color: transparent;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
}

.home_button {
  margin-right: 2rem;
  padding: 7px 11px;
  background-color: transparent;
  color: #fff;
  border: none; 
  cursor: pointer;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .main_header {
    height: 40rem; 
  }

  .logo_container img {
    max-height: 12rem; 
  }

  .title_container {
    text-align: center; 
    margin-top: 12rem; 
    margin-left: 20px; 
  }

  .main_title {
    font-size: 5rem; 
  }

  .sub_title {
    font-size: 3.5rem; 
  }

  .login_container button {
    padding: 10px 20px;
    font-size: 1.5rem;
  }
}
@media (max-width: 445px) {
  .login_container {
    flex-direction: row;
    align-items: center;
  }

  .home_button {
    margin-right: 0.5rem; 
  }
}
</style>