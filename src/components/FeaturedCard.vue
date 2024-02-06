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
            <div id="event-description">
                <div id="event-title">
                Unazuki Onsen Snow Carnival dsadsa aadasdf
                </div>
                <h2>pequeña pero un poco larga descripcion, que no ocupe mas de x letras supongo.</h2>
            </div>
            <div id="event_details_info">
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

            <!-- crear pop up de otra pagina-->
            <button>Read more</button>

        </div>
    </article>
</template>

<style scoped lang="scss">

article {
    background-color: white;
    width: 250px;
    height: 350px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.283);
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
}
#event_image {
    // crear un javascript para añadir las imagenes.
    background-image: url("./../../public/assets/example-event.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 5px 0px 0px;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: end;

    div {
        width: 150px;
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
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    #event-title {
            margin-top: 1vh;
            width: 90%;
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            font-size: 1.5em;
            font-weight: 800;
            color: #424242;
        }
    #event-description {
        width: 100%;
        h2 {
            font-weight: 500;
            font-size: 0.8em;
        }
        }
    #event_details_info {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        gap: 1em;

        > div {
            display: flex;
            align-items: center;
            flex-direction: column;

            > img {
                width: 10px;
                height: 10px;
            }

            > h2 {
            margin: 0;
            margin-top: 1vh;
            font-size: 0.8em;
            font-weight: 600;
            color: #909090;
        }
        }
        
    }

    button {
            margin-bottom: 1vh;
            width: 90px;
            height: 30px;
            font-size: 1.2em;
            font-weight: 600;
            border-radius: 10px;
            border: none;
            color: white;
            background-color: #FFB69E;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.283);
        }

}

</style>