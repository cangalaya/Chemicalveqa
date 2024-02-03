const enlaceHome =document.getElementById('enlaceHome');
const enlaceGaleria =document.getElementById('enlaceGaleria');
enlaceGaleria.addEventListener('click',function(){
  if (enlaceHome.classList.contains('active')){
      enlaceHome.classList.remove('active');
  }else{
      enlaceGaleria.classList.add('active');
  }
})


