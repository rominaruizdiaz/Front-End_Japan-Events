<template>
  <header class="main_header_event">
    <div class="top_section"></div>
    <div class="logo_container_event">
      <img src="../../assets/images/logoConectados.png" alt="Logo">
    </div>
    <div class="title_container_event">
      <div class="main_title_event">Sushi Restaurant Food Event </div>
    </div>
    <div class="login_container_event">
      <button class="home_button_event">Home</button>
      <button class="login_button_event">Log In</button>
    </div>
  </header>
</template>
  
<script>

</script>
  
<style scoped>
.main_header_event {
    height: 25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;

    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgb(85, 85, 85)),
        url('../../assets/images/THUMBNAIL.png') center/cover no-repeat;
}

.logo_container_event img {
    max-height: 6rem;
}

.title_container_event {
    text-align: center;
    margin-top: 10rem;
}

.main_title_event {
    font-size: 3rem;
    color: #fff;
    display: flex;
    text-align: center;
    margin-left: 1.8rem;
}



.login_container_event {
    display: flex;
    align-items: center;
}

.login_button_event {
    padding: 7px 11px;
    background-color: transparent;
    color: #fff;
    border: 1.5px solid #fff;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.5rem;
}

.home_button_event {
    margin-right: 6rem;
    padding: 7px 11px;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
}

@media (min-width: 768px) {
    .main_header_event {
        height: 40rem;
    }

    .logo_container_event img {
        max-height: 12rem;
    }

    .title_container_event {
        text-align: center;
        margin-top: 12rem;
        margin-left: 20px;
    }

    .main_title_event {
        font-size: 5rem;
    }



    .login_container_event button {
        padding: 10px 10px;
        font-size: 2.2rem;
    }
}

@media (max-width: 550px) {
    .main_title_event {
        font-size: 2.7rem;
        display: flex;
    }


}
</style>