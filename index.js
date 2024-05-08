




function somethingClicked(type, thing) {

    if ( type === 'down') {
        document.querySelector('.'+thing).style.scale = '1'
    }

    if ( type === 'up') {

        document.querySelector('div.box img.present.main').style.display = 'none'

        document.querySelector('div.box img.present.left').style.display = 'block'
        document.querySelector('div.box img.present.right').style.display = 'block'
        setTimeout(() => {
            document.querySelector('div.box img.present.left').style.transform = 'translate(-1300px, -150px) rotate(-180deg)'
            document.querySelector('div.box img.present.right').style.transform = 'translate(1300px, 150px) rotate(180deg)'

            document.querySelector('div.box img.elgatoImg').style.scale = '1'
            document.querySelector('p.one').style.display = 'none'

            setTimeout(() => {
                document.querySelector('div.box img.elgatoImg').style.animation = 'present 2s ease-in-out infinite'

                document.querySelector('div.box img.present.left').style.display = 'none'
                document.querySelector('div.box img.present.right').style.display = 'none'
                
            }, 900);


        }, 100);
       

    }

}





function buttonEffect(button, type) {
    if (type === 'down') {
        document.querySelector('.'+button).style.boxShadow = "0 0 0 #231F20"
        document.querySelector('.'+button).style.transform = "translate(0, 5px)"
    } else if (type === 'up') {
        document.querySelector('.'+button).style.boxShadow = "0 5px 0 #231F20"
        document.querySelector('.'+button).style.transform = "translate(0, 0px)"

    }
}



function buttonEffect2(button, type) {
    if (type === 'down') {
        document.querySelector('.'+button).style.scale = "0.9"
    } else if (type === 'up') {
        document.querySelector('.'+button).style.scale = "1"

    }
}




function caClicked() {
    document.querySelector('p.ca').innerHTML =`F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs <i class="fa-solid fa-clipboard"></i> Copied`
   

    setTimeout(() => {
        document.querySelector('p.ca').innerHTML =`F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs <i class="fa-solid fa-clipboard"></i>`  
    }, 500);

    navigator.clipboard.writeText('F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs');

}


function scrollFaces() {
    var facesContainer = document.querySelector('.faces');
    var scrollAmount = 300; 
    facesContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}


function learnMore() {
    window.open('https://www.youtube.com/results?search_query=el+gato', '_blank');
}
