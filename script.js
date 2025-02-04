document.addEventListener('DOMContentLoaded',()=>{
    const imageContainer = document.querySelector('#carousel_image_holder');
    const leftButton = document.querySelector('#left-btn');
    const rightButton = document.querySelector('#right-btn');
    
    // storing images from lorem picsum in an array
    
    // smaller sized images, faster to load
    let imgArray = [
        "https://fakeimg.pl/350x200/?text=Image1",
        "https://fakeimg.pl/350x200/?text=Image2",
        "https://fakeimg.pl/350x200/?text=Image3",
        "https://fakeimg.pl/350x200/?text=Image4",
        "https://fakeimg.pl/350x200/?text=Image5",
        "https://fakeimg.pl/350x200/?text=Image6",
    ];
    let imgArray2 = [
        "https://picsum.photos/600/400?random=1",
        "https://picsum.photos/600/400?random=2",
        "https://picsum.photos/600/400?random=3",
        "https://picsum.photos/600/400?random=4"
    ];

    let cur = 0;
    
    // The below is code for if we take a list of images from the lorem picsum website, they are high resolution so they take a bit long to load, so we load them before hand, convert them to BLOB files and then store those blobs in the array and move through it 


    // const getloremPic = async(count) => {
    //     try{
    //         let response = await fetch(`https://picsum.photos/v2/list?page=23&limit=${count}`);
    //         let imgArrayJSON = await response.json();

    //         // for(const element of imgArrayJSON){
    //         //     const imgResponse = await fetch(element.download_url);
    //         //     const blob = await imgResponse.blob();
    //         //     imgArray.push(blob);
    //         // }
    //         imgArrayJSON.forEach(element => {
    //             imgArray.push(element.download_url);
    //             console.log(element);
    //         });
    //         console.log(imgArray);
    //     }
    //     catch(error){
    //         console.error(`Error fetching the images`,error);
    //     }

    // }

    // getloremPic(6).then(()=>imageContainer.src = URL.createObjectURL(imgArray[0]));
    // getloremPic(6).then(()=>imageContainer.src = (imgArray[0]));


    imageContainer.src = (imgArray2[0])
    const transition = (cur)=>{
        imageContainer.style.opacity = 0;
        
            setTimeout(()=>{
                // imageContainer.src = URL.createObjectURL(imgArray.at(cur));
                imageContainer.src = (imgArray2.at(cur));
                imageContainer.onload = () =>{
                    imageContainer.style.opacity = 1;
                }
            },300);
      
        
    }
    
    rightButton.addEventListener('click',()=>{
        if(cur === imgArray.length-1){
            cur = 0;
        }
        else{
            cur++;
        }
        console.log(cur);
        transition(cur);
    })
    
    leftButton.addEventListener('click',()=>{
        if(cur === 0){
            cur = imgArray.length - 1;
        }
        else{
            cur--;
        }
        console.log(cur);
        transition(cur);
    })

    
});

////////////// drag and drop UI thingy

window.addEventListener("load", () => {
    const all = document.querySelectorAll("#dragNdrop li");
   
    let dragged;
   
    for (let i of all) {
      // set all the list items to be draggable allowed
        i.draggable = true;
   
        // to start dragging the list items
      i.ondragstart = e => {
        dragged = i;
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", i.innerHTML);
      };
   
      i.ondragover = e => e.preventDefault(); // preventing the default behavior i.e selecting the text 
      
      // swapping the position to the new dropped position
      i.ondrop = e => {
        e.preventDefault();
        if (dragged != i) {
          dragged.innerHTML = i.innerHTML;
          i.innerHTML = e.dataTransfer.getData("text/html");
        }
      };

    }
  });