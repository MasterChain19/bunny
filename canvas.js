let start = false



const txt1 = document.getElementById('textOne')
const txt2 = document.getElementById('textTwo')




var canvas = new fabric.Canvas('c', {
    width: document.querySelector('.image').clientWidth,
    height: document.querySelector('.image').clientHeight
});

document.getElementById('imageFile').addEventListener("change", function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
        var data = f.target.result;
        fabric.Image.fromURL(data, function (img) {
            var scaleFactor = canvas.height / img.height;
            img.set({
                left: (canvas.width - img.width * scaleFactor) / 2,
                top: 0,
                scaleX: scaleFactor,
                scaleY: scaleFactor
            });
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        });
    };
    reader.readAsDataURL(file);

    document.querySelector('.addImage').innerHTML = 
    `
        <div class="loader">
        </div>
        <p>creating your canvas</p>
    `

    setTimeout(() => {
        document.querySelector('.addImage').style.display = 'none';  
        start = true 

        txt1.value = ''
        txt2.value = ''
    }, 500);
});


function resetCanvas() {
    location.reload()
}



const textOne = new fabric.Text(
    txt1.value.toUpperCase(), {
    fontFamily: 'zilla black',
    textColor: 'red',
    fontSize: 90,
    fill: '#fff',
    stroke: '#000',
    strokeWidth: 2,

    left: ranPosition(), // X position
    top: ranPosition() 
});

const textTwo = new fabric.Text(
    txt2.value.toUpperCase(), {
    fontFamily: 'zilla black',
    textColor: 'red',
    fontSize: 90,
    fill: '#fff',
    stroke: '#000',
    strokeWidth: 2,

    left: ranPosition(), // X position
    top: ranPosition() 
});

function textChanged() {
    if (start) {
        canvas.remove(textTwo, textOne);
        textOne.text = txt1.value.toUpperCase();
        textTwo.text = txt2.value.toUpperCase();

        if (txt1.value) {
            canvas.add(textOne);
        }
        if (txt2.value) {
            canvas.add(textTwo);
        }
    }
}

function ranPosition() {
    return Math.floor(
        Math.random() * (200 - 50 + 1)
    ) + 50;

}

// function saveCanvas() {
//     if (start) {
//         var imgData = canvas.toDataURL('image/png', 1); // Reduced quality
//         var link = document.createElement('a');
//         link.href = imgData;
//         link.download = 'my gato.png';
//         link.click();
//     }
// }

const saveCanvas = () => {
    if (start) {
        const ext = "png";
        const base64 = canvas.toDataURL({
        format: ext,
        enableRetinaScaling: true
        });
        const link = document.createElement("a");
        link.href = base64;
        link.download = `eraser_example.${ext}`;
        link.click();
    }
};

function addImage(file) {
    if (start) {
        fabric.Image.fromURL('/img/heads/'+file, function(oImg) {
            oImg.scaleToWidth(150);
            oImg.scaleToHeight(150);
            oImg.set({
                left: ranPosition(), // X position
                top: ranPosition()   // Y position
            });
            canvas.add(oImg);
        });
    }
}


