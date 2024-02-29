<script setup>
const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});
console.log('URL de la imagen:', props.event.image);
</script>

<template>
    <article>

        <div :style="{ 'background-image': 'url(' + event.image + ')' }" id="event_image">
            <div id="event_category">
                {{ event.typeEvent.name }}
            </div>
        </div>

        <div id="event_details">
            <div id="event_details_info">
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
                <router-link :to="{ path: `/details/${props.event.id_event}`}">Ver detalles</router-link> 
            </div>
        </div>
    </article>
</template>


<style scoped lang="scss">
article {
    background-color: white;
    width: 90vw;
    height: 25rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.283);
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
}

#event_image {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0px 0px;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: end;

    div {
        width: 30vw;
        height: 3rem;
        backdrop-filter: blur(2px);
        background-color: rgba(255, 255, 255, 0.525);
        border-radius: 0px 10px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: white;
        text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.346);
    }
}

#event_details {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    #event_details_info {
        width: 60%;
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
}

#event_details_read_more {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: end;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
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

@media (min-width: 800px) {
article {
    width: 28rem;
    height: 37rem;
}
#event_image > div {
    width: 10vw;
}

#event_details {

    #event_details_info {  
        width: 70%;

        #event-title {
            font-size: 1.7em;
        }

        > div > img {
            width: 2rem;
            height: 2rem;
        }

        h2 {
            margin-left: 1rem;
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
}

#event_details_read_more {
    width: 20%;

    a {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 5rem;
        font-size: 1.2em;
    }
}
}
</style>