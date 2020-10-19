//create map 
const map = L.map('mapid').setView([-23.5292991,-46.7234483],14); 

 //create and add tileLayer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map); 

// create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
     iconSize: [58, 68], 
     iconAnchor: [29, 68]
 })

 let marker;

 //create and add marker 
 map.on('click', (event) => {
     const lat  = event.latlng.lat;
     const lng = event.latlng.lng;

     document.querySelector('[name=lat]').value = lat;
     document.querySelector('[name=lng]').value = lng;


     //remover icon 
     marker && map.removeLayer(marker);

     // add icon layer 

     marker= L.marker ([lat, lng], {icon})
     .addTo(map)
 } ) 

    
  //adicionar o campo de fotos

function addPhotosField () {
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-upload 
  const fieldContainer = document.querySelectorAll('.new-upload') 
  // realizar o clone da ultima imagem adicionada.
  const newFieldContainer = fieldContainer[fieldContainer.length -1].cloneNode(true)
  // check if the field is empty, if yes, do not add to the image container
  const input = newFieldContainer.children[0]
  if (input.value =="") {
      return
  }
  //clean the field before adding the images container
  input.value=""
  //adicionar o clone ao container de #imagens 
  container.appendChild(newFieldContainer)
}
   function deleteField (event) {
       
       const span = event.currentTarget 
       const fieldContainer = document.querySelectorAll('.new-upload')
       if(fieldContainer.length < 2) {
           //limpar o valor do campo
           span.parentNode.children[0].value =""
           return
       } 

       // deletar o campo
       span.parentNode.remove();
   } 

   // select yes or no / troca do sim e não 
    function toggleSelect (event) {
       

        //remove .active class (both buttons)
         document.querySelectorAll('.button-select button')
         .forEach( function (button) {
             button.classList.remove ('active')
         })
        
         //get the button clicked 
         const button = event.currentTarget
         button.classList.add('active') 

         //update the input hidden with the selected value 
         const input = document.querySelector('[name="open_on_weekends"]')

         input.value=button.dataset.value;
        } 

         //validating if lat and lgn are filled

         function validate(event) {
            const inputLat = document.querySelector('#lat');
            const inputLgn = document.querySelector('#lgn');
        
            if (inputLat.value == '' || inputLgn.value == '') {
                event.preventDefault();
                alert('Por favor, selecione um local no mapa');
            }
        }
