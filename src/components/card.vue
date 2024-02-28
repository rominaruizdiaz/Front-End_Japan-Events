<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true,
    },

});

console.log(props.event);
</script>


<template>
    <article>

        <div id="event_image">
            <div id="event_category">
                {{ event.typeEvent.name }}
            </div>
        </div>

        <div id="event_details">
            <div id="event_details_in   fo">
                <div id="event-title">
                        {{event.name}}
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-place.svg" alt="">
                    <h2>{{event.ubication}}</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-date.svg" alt="">
                    <h2>{{event.date}}</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-ticket.svg" alt="">
                    <h2>¥{{event.price}}</h2>
                </div>
            </div>
            <div id="event_details_read_more">
                <!-- crear pop up de otra pagina-->
                <router-link :to="{ path: `/details/${props.event.id_event}`}">Ver detalles</router-link> 
            </div>
        </div>
    </article>
</template>


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

        > p {
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
            width: 90%; 
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            font-size: 1.5em;
            font-weight: 800;
            color: #424242;
        }

        > div {
            display: flex;
            align-items: center;

            > img {
                width: 10px;
                height: 10px;
            }
        }
        h2 {
            margin: 0;
            margin-left: 1vw;
            font-size: 1em;
            font-weight: 600;
            color: #909090;
        }
    }
    #event_details_read_more {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: end;

        a {
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
            text-decoration: none;
        }
    }
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

            > div {

                > img {
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
                font-size: 1.2em;
                font-weight: 600;
            }
    }
}

}
</style>