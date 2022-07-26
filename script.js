function changeImage() 
{
  var image = document.getElementById('myImage');
  if (image.src.match("light-bulb-on")) 
  {
    image.src = "images/light-bulb-off.jpg";
  } 
  else 
  {
    image.src = "images/light-bulb-on.jpg";
  }
}