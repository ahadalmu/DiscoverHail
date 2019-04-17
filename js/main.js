$(document).ready(function(){

    $('.gallery1').flickity({
        autoPlay: 2000,
        cellAlign: 'right',
        contain: true,
        setGallerySize: false,
        wrapAround: true
      });
    
$('#aljouf').on('click', togglealjouf);

    function togglealjouf(){
        console.log('hiii')
        $('#aljouf-info').toggleClass('show');
      }
    
$('#alolaa').on('click', togglealolaa);

      function togglealolaa(){
        $('#alolaa-info').toggleClass('show');
      }
 $('#Umluj').on('click', toggleumluj);

      function toggleumluj(){
        $('#Umluj-info').toggleClass('show');
      }
})