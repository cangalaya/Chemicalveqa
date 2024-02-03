

const enlaceHome =document.getElementById('enlaceHome');
const enlaceNosotros =document.getElementById('enlaceNosotros');
enlaceNosotros.addEventListener('click',function(){
  if (enlaceHome.classList.contains('active')){
      enlaceHome.classList.remove('active');
  }else{
      enlaceNosotros.classList.add('active');
  }
})