function isTouching(objeto1, objeto2){
    if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
      && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
      return true;
    }
  else {
    return false;
    }
  }
  