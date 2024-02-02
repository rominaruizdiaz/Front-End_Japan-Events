<script setup>

</script>


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
                        Unazuki Onsen Snow Carnival dsadsa aadasdf
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-place.svg" alt="">
                    <h2>Osaka</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-date.svg" alt="">
                    <h2>Oct 14th - 15th 2024</h2>
                </div>
                <div>
                    <img src="./../assets/icons/event-icon-ticket.svg" alt="">
                    <h2>¥ 5.00</h2>
                </div>
            </div>
            <div id="event_details_read_more">
                <!-- crear pop up de otra pagina-->
                <button>Read more</button>
            </div>
        </div>
    </article>
</template>


<style scoped lang="scss">
article {
    background-color: white;
    width: 90vw;
    height: 60vw;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.283);
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
}
#event_image {
    // crear un javascript para añadir las imagenes.
    background-image: url("./../../public/assets/example-event.jpg");
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
        }
        h2 {
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

@media (min-width: 1100px) {
    article {
        width: 16vw;
        height: 16vw;
    }
    #event_image {
        div {
            width: 6vw;
            height: 35px;
        }
    }
    #event_details {
        #event_details_info {
            div {
                margin-left: 1vw;
            }
            #event-title {
                font-size: 1.7em;
            }
            h2 {
                margin-left: 0.5vw;
                font-size: 1.3em;
            }
        }
        #event_details_read_more {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: end;
        }
    }
    }
</style>