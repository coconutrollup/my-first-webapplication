let data = {
    photo: 'images/photo1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  $('#photo').attr('src', data.photo);

  let currentPhoto = 0;
let imagesData = [0,1,2,3,4,5,6,7];
$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
  }

  loadPhoto(currentPhoto);

$('#r').click(() => {
    if(currentPhoto < 8) { 
         currentPhoto++;
      }
  loadPhoto(currentPhoto);
})
$('#l').click(() => {
    if(currentPhoto > 0) { 
    currentPhoto--;
    loadPhoto(currentPhoto);
  })

  loadCurrent(currentPhoto);