
    
      const submit = document.querySelector(".submit");
  const head = document.getElementById("ids1");
  
    submit.addEventListener("click", function(e) {
      e.preventDefault();
      document.body.style.backgroundColor = "red";
    });
    head.addEventListener("mouseover",
        function(e){
            e.preventDefault();
            head.textContent = "This is not Dom";
        }
    );
    head.addEventListener("mouseout",
        function(e){
            e.preventDefault();
            head.textContent = "This is Dom";
        }
    );
    document.getElementById("pic1").addEventListener("click",
        function( ){
            document.getElementById("pic1").src = "image/2.jpg";
        }
    );
     document.getElementById("pic1").addEventListener("dblclick",
        function( ){
            document.getElementById("pic1").src = "image/1.jpg";
        }
    );
      const name = document.getElementById("name");
      name.addEventListener("input",
        function(){
          const Value = name.value;
          document.getElementById("name1").innerText = "Your name is" +" " + Value;
        }
      );

      //JS flex try
    const container = document.getElementById("flexContainer");
    const products = [
  {
    titles: "Wireless Bluetooth Headphones",
    image: "image/1.jpg",
  },
  {
    titles: "Smartphone 128GB",
    image: "image/1.jpg",
  },
  {
    titles: "Laptop 15.6\" FHD",
    image: "image/1.jpg",
  },
  {
    titles: "Smart Watch Fitness Tracker",
    image: "image/1.jpg",
  },
  {
    titles: "Wireless Keyboard and Mouse Combo",
    image: "image/1.jpg",
  },
  {
    titles: "4K Ultra HD Television",
    image: "image/1.jpg",
  },
  {
    titles: "Noise Cancelling Earbuds",
    image: "image/1.jpg",
  },
  {
    titles: "Portable Bluetooth Speaker",
    image: "image/1.jpg",
  }
];

    products.forEach((product) =>{
    
      const item = document.createElement("div");
      item.classList.add("box");

      const img = document.createElement("img");
      img.src = product.image; 

   
      const title = document.createElement("p");
      title.classList.add("text");
      title.textContent = product.titles; 


      item.appendChild(img);
      item.appendChild(title);

    
      container.appendChild(item);
      
    });

  //    for (let i = 0; i < products.length; i++) {
  //   const item = document.createElement("div");
  //   item.classList.add("box");

  //   const img = document.createElement("img");
  //   img.src = products[i].image;

  //   const title = document.createElement("p");
  //   title.classList.add("text");
  //   title.textContent = products[i].titles;

  //   item.appendChild(img);
  //   item.appendChild(title);
  //   container.appendChild(item);
  // }