<template>
    <article>
        <div id="event_image">
            <div id="event_category">
                <p>FOOD</p>
            </div>
        </div>
        <div id="event_details">
            <div id="event_details_info">
                <div id="event-title">
                    Unazuki Onsen Snow
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-place.svg" alt="">
                    <h2>Osaka</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-date.svg" alt="">
                    <h2>Oct 14th - 15th</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-ticket.svg" alt="">
                    <h2>¥ 5.00</h2>
                </div>
            </div>
            <div id="event_details_buttons">
                <button class="buttonEliminate" @click="eliminarEvento">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20"
                        viewBox="0 0 24 24" stroke-width="2.5" stroke="#ff2825" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
                <button class="buttonFav" @click="marcarFavorito">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20" height="20"
                        viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffbf00" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                </button>
            </div>
            
        </div>
    </article>
</template>
<script>
export default {
    methods: {
        eliminarEvento() {
            // Lógica para eliminar el evento
            console.log("Evento eliminado");
        },
        marcarFavorito() {
            // Lógica para marcar el evento como favorito
            console.log("Evento marcado como favorito");
        }
    }
}
</script>


<style scoped lang="scss">
article {
    background-color: white;
    width: 90vw;
    height: 55vw;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.283);
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
}

#event_image {
    // crear un javascript para añadir las imagenes.
    background-image: url("./../assets/images/example-event.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0px 0px;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: end;

    div {
        width: 30vw;
        height: 30px;
        background-color: rgba(255, 255, 255, 0.525);
        border-radius: 0px 10px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        >p {
            color: white;
            font-size: 1.5em;
            text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.589);
        }
    }
}

#event_details {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;

    #event_details_info {
        width: 70%;
        flex-direction: column;
        justify-content: space-evenly;
        display: flex;

        #event-title {
            margin-top: 1.5vh;
            width: 80%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            font-size: 1.5em;
            font-weight: 800;
            color: #424242;
        }

        >div {
            display: flex;
            align-items: center;

            >img {
                width: 10px;
                height: 10px;
            }
        }

        h2 {
            margin: 0;
            margin-left: 1vw;
            font-size: 0.7em;
            font-weight: 600;
            color: #909090;
        }
    }

    #event_details_read_more {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: end;

        button {
            margin-bottom: 2vh;
            width: 100%;
            height: 4vh;
            font-size: 1.2em;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            color: white;
            background-color: #FFB69E;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.283);
        }
    }
}
#event_details_buttons{
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .buttonFav {
        padding: 7px 7px;
        background-color: transparent;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    .buttonEliminate {
        padding: 7px 7px;
        background-color: transparent;
        color: #fff;
        border: none;
        cursor: pointer;
    }
@media (min-width: 500px) {
    article {
        width: 90vw;
        height: 35vw;
    }

    #event_details {
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: center;

        #event_details_info {
            width: 70%;

        }
    }

    #event_image {

        div {
            width: 20vw;
        }
    }
}

@media (min-width: 800px) {
    article {
        width: 40vw;
        height: 25vh;
    }
}

@media (min-width: 1200px) {
    article {
        height: 30vh;
        width: 25vh;

    }

    #event_image {

        div {
            width: 8vw;
        }
    }

    #event_details {

        #event_details_read_more {
            button {
                font-size: 1em;
                font-weight: 400;
                border-radius: 5px;
            }
        }
    }
}

@media (min-width: 1600px) {
    article {
        width: 15vw;
        height: 15vw;
        border-radius: 5px;
    }

    #event_image {
        border-radius: 5px;

        div {
            width: 8vw;
        }
    }

    #event_details {

        #event_details_info {

            #event-title {
                margin-top: 0.5vh;
            }

            >div {

                >img {
                    width: 20px;
                    height: 20px;
                }
            }

            h2 {
                font-size: 1.3em;
            }
        }

        #event_details_read_more {

            button {
                font-size: 1em;
                font-weight: 500;
            }
        }
    }
    
}</style>

    
