var infoVisible = false;

function showInfo() {
  var elem = document.getElementById('description-text');
  if(infoVisible) {
    elem.style.display = 'none';
    infoVisible = false;
  } else {
    elem.style.display = 'block';
    infoVisible = true;
  }
}
