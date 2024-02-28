<script setup>


</script>
<template>
<div id="Container_Card">
   <div id="Event">
      <div class="Text_one">
           <img src="./../assets/icons/map-regular-24.png" alt="">
           <h4>Lugar:</h4>
            <p> Osaka</p>
      </div>

      <div class="Text_one">
         <img src="./../assets/icons/group-regular-24.png" alt="">
         <h4>Plazas:</h4>
         <p>23</p>
      </div>

     <div class="Text_one">
         <img src="./../assets/icon/Frame.png" alt="">
         <h4>Cuando:</h4> 
         <p class="line">Oct 14th 14:00 pm</p>
         <p class="line1">Oct 15th 18:00 pm</p> 
      </div>

      <div class="Text_one">
         <img src="./../assets/icons/Ticket_Voucher.png" alt=""> 
         <h4>Price:</h4>  
         <p>¥ 5.00</p>
      </div> 

      <div class="Info_Event">
         <h3>About</h3>
         <p>Join us for a unique culinary experience at the Sushi Food Event On [14-15th Oct], Renowned chefs from around the world will showcase their skills, offering sushi stations with both traditional and creative options. Dive into interactive workshops to uncover the secrets of sushi-making and enjoy a premium sake tasting. With live entertainment and an ambiance that transports you to Japan, this night promises to be a sensory feast. Secure your spot to explore the exquisite craftsmanship and flavors of sushi at this exclusive event!</p>
      </div> 
      <button id="Boton_Event">SIGN UP TO PARTICIPATE</button>
   </div>
   
   <div id="Admi_Card"> 
      <img src="./../assets/images/river-fx-R9F2Um5FsSY-unsplash.jpg" alt="">
      <h4>Hosted by:<br>Admi</h4>
   </div> 

</div>

<div id="Container_Bac">
   <div id="Return">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
      <a href="">Back</a>
   </div> 
</div>
</template>

<style scoped lang="scss">

#Container_Card {
   display: flex;
   justify-content: center;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   margin: 2.5rem;
   gap: 2rem;
   box-sizing: border-box;
   
#Event {
   width: 55rem;
   height: 43.2rem;
   border-radius: .5rem;
   margin-top: 2rem;
   border: .1rem solid;
   background-color: rgb(235, 235, 235);

p {
   font-size: small;
}

.Text_one{
   display: flex;
   align-items: center;
   padding-left: 3rem;
   margin-top: .5rem;
   gap: 1rem; 
}

.Text_one img{
   width: 2rem;
   height: 2rem;
}
}

.Info_Event{
   margin: 3rem;
   border: none; 
   border-radius: .5rem;
}

#Boton_Event{
   width: 55rem;
   cursor: pointer;
   background-color: rgb(255, 72, 72);
   color: white;
   border: none;
   border-radius: .5rem;
   padding: .8rem;
}

#Admi_Card{
   display: flex;
   justify-content: center;
   text-align: center;
   gap: 2rem;
   padding: 2rem;
}

#Admi_Card img{
   width: 5rem;
   height: 5rem;
   border-radius: 3rem;
}
}

#Container_Bac{
   padding: 5rem;

#Return {
   width: 10rem;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   background-color: rgb(156, 190, 214); 
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   border-radius: .5rem;
   box-sizing: border-box;

a{
   text-decoration: none;
   color: white;
   font-size: small;
} 
}
}

@media (max-width: 748px){
  #Container_Card{
   flex-direction: column-reverse;
   align-items: flex-start;
  }
  #Event{
   display: flex;
   flex-direction: column;
   margin: 2rem;
  }
}
@media (max-width: 594px){
   #Container_Card{
   flex-direction: column-reverse;
   align-items: flex-start;
  
  #Event{
   width: 50rem;
   height: 45rem;
   display: flex;
   flex-direction: column;
   margin: 2rem;
  }
  #Boton_Event{
   width: 50rem;
  }
}
}

@media (max-width: 543px){
   #Container_Card{
   flex-direction: column-reverse;
   align-items: flex-start;
  
  #Event{
   width: 45rem;
   height: 47rem;
   display: flex;
   flex-direction: column;
   margin: 2rem;
  }
  #Boton_Event{
   width: 45rem;
  }
}
}
@media (max-width: 493px){
   #Container_Card{
   flex-direction: column-reverse;
   align-items: flex-start;
  
  #Event{
   width: 40rem;
   height: 49rem;
   display: flex;
   flex-direction: column;
   margin: 2rem;
  }
  #Boton_Event{
   width: 40rem;
  }
}
}
@media (max-width: 444px){
   #Container_Card{
   flex-direction: column-reverse;
  
  #Event{
   width: 35rem;
   height: 51rem;
  }

  #Boton_Event{
   width: 35rem;
  }
}
}
@media (max-width: 393px){
   #Container_Card{
   flex-direction: column-reverse;
   align-items: flex-start;
  
  #Event{
   width: 30rem;
   height: 53rem;
   display: flex;
   flex-direction: column;
   margin: 2rem;
  }
  #Boton_Event{
   width: 30rem;
  }
}
}
@media (max-width: 394px){
   #Container_Card{
   
   
  #Event{
   height: 22rem;
   display: flex;
   
  }
 
  #Boton_Event{
   width: 15rem;
   padding: .5rem;
   font-size: x-small;
  }
  .Info_Event{
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 25rem;
   border: .1rem solid;
   padding: 1.5rem;
   background-color: rgb(235, 235, 235);
  }
}
}
</style>








