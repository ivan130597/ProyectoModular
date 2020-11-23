var i = 0;
var images = [];
var time = 700;


//lista de imagenes
images[0] = "Img/img1.jpg"
images[1] = "Img/slider1.jpg"
images[2] = "Img/slider2.jpg"
images[3] = "Img/slider3.jpg"

function changeImg()
{
    document.slide.src = images[i];

    if(i<images.length-1)
    {
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()",time);
}

window.onload = changeImg;
