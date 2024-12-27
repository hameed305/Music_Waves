let btn=document.getElementById("btn")

btn.onclick=()=>{

    btn.style.display="none"
    

    setInterval(()=>{
        // bg-colors
    
    let color_1 = Math.floor(Math.random() * 100);
    let color_2 = Math.floor(Math.random() * 200);
    let color_3 = Math.floor(Math.random() * 300);
    
    // height
    
    let height_1 = Math.floor(Math.random() * 50);
    let height_2 = Math.floor(Math.random() * 100);
    let height_3 = Math.floor(Math.random() * 150);
    let height_4 = Math.floor(Math.random() * 200);
    let height_5 = Math.floor(Math.random() * 250);
    let height_6 = Math.floor(Math.random() * 50);
    
    
    let boxes = document.querySelectorAll(".box");
    boxes[0].style.height = height_1 + "px"
    boxes[0].style.background =`rgb(${color_1},${color_2},${color_3})`
    
    boxes[1].style.height = height_2 + "px"
    boxes[1].style.background = `rgb(${color_3},${color_1},${color_2})`
    
    boxes[2].style.height = height_3 + "px"
    boxes[2].style.background = `rgb(${color_2},${color_3},${color_1})`
    
    boxes[3].style.height = height_4 + "px"
    boxes[3].style.background = `rgb(${color_1},${color_2},${color_1})`
    
    boxes[4].style.height = height_5 + "px"
    boxes[4].style.background = `rgb(${color_2},${color_2},${color_1})`
    
    boxes[5].style.height = height_6 + "px"
    boxes[5].style.background = `rgb(${color_3},${color_2},${color_3})`
    
    
    let cont=document.querySelector(".container")
    let cont_2=document.querySelector(".cont_2")
    let random_s=Math.floor(Math.random()*2)
    cont.style.scale=random_s;
    cont_2.style.scale=random_s;
    
    
    
    
    },100)
    
    let audio=new Audio("/sazz dj.mp3")
    audio.play()
}