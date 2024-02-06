<script setup>

</script>


<template>
    <div id="cards_filters">
          <div id="cards_filters_category">
            <button>All interest</button>
            <button>Festivals</button>
            <button>Culture</button>
            <button>Sport</button>
            <button>Food</button>
          </div>
          <div id="cards_filters_date">
            <button> <img src="./../assets/icons/event-icon-calendar.svg" alt=""> nearest date
            </button>
          </div>
        </div>
</template>


<style scoped lang="scss">
#cards_filters {
  padding-top: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  #cards_filters_category {
    height: 5vh;
    border-radius: 10px;
    background-color: white;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    button:hover {
        background-color: #D64747;
        transition: all 0.3s ease-in-out ;
        border-radius: 10px;
        color: white;
        font-weight: 500;
    }
  }
  #cards_filters_date {
    width: 44%;
    height: 5vh;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;


    button {
      width: 100%;
      height: 100%;
        img {
            width: 1.3em;
            margin-right: 1em;
        }
    }
    button:hover {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out ;
      border-radius: 10px;
      border: 1px solid gray;
    }
    }
}
button {
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}



@media (min-width: 500px) {
  #cards_filters {
    padding-top: 30vh;
    #cards_filters_date {
      width: 32%;
    }
  }
  
}

@media (min-width: 900px) {
  #cards_filters {
    #cards_filters_date {
      width: 22%;
    }
  }
  
}
</style>