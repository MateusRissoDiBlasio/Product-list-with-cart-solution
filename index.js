    const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    });
 
    let cartItems = 0;
    document.querySelector(".orderItens").innerHTML = cartItems;
    let emptyCart = document.getElementById("empty-cart");       

    const item1Img = ["image-waffle-desktop", "image-waffle-mobile"];
    const item2Img = ["image-creme-brulee-desktop", "image-creme-brulee-mobile"];
    const item3Img = ["image-macaron-desktop", "image-macaron-mobile"];
    const item4Img = ["image-tiramisu-desktop", "image-tiramisu-mobile"];
    const item5Img = ["image-baklava-desktop", "image-baklava-mobile"];
    const item6Img = ["image-meringue-desktop", "image-meringue-mobile"];
    const item7Img = ["image-cake-desktop", "image-cake-mobile"];
    const item8Img = ["image-brownie-desktop", "image-brownie-mobile"];
    const item9Img = ["image-panna-cotta-desktop", "image-panna-cotta-mobile"];

    const screenSize = screen.width;
    
    function checkScreenSize(){

        if(screen.width <= 375){
            
            const mobileItem1Img = document.querySelector('.product-1');
            mobileItem1Img.src = `./assets/images/${item1Img[1]}.jpg`;
            
            const mobileItem2Img = document.querySelector('.product-2');
            mobileItem2Img.src = `./assets/images/${item2Img[1]}.jpg`;

            const mobileItem3Img = document.querySelector('.product-3');
            mobileItem3Img.src = `./assets/images/${item3Img[1]}.jpg`;

            const mobileItem4Img = document.querySelector('.product-4');
            mobileItem4Img.src = `./assets/images/${item4Img[1]}.jpg`;

            const mobileItem5Img = document.querySelector('.product-5');
            mobileItem5Img.src = `./assets/images/${item5Img[1]}.jpg`;

            const mobileItem6Img = document.querySelector('.product-6');
            mobileItem6Img.src = `./assets/images/${item6Img[1]}.jpg`;

            const mobileItem7Img = document.querySelector('.product-7');
            mobileItem7Img.src = `./assets/images/${item7Img[1]}.jpg`;

            const mobileItem8Img = document.querySelector('.product-8');
            mobileItem8Img.src = `./assets/images/${item8Img[1]}.jpg`;

            const mobileItem9Img = document.querySelector('.product-9');
            mobileItem9Img.src = `./assets/images/${item9Img[1]}.jpg`;
        }
    }
    checkScreenSize();

// Item 1

    let item1Selected = document.getElementById('item1Button');
    let item1 = 0;
    document.getElementById("sumItem1").innerHTML = item1;
    let item1ImgSelected = document.querySelector(".product-1");

    function addFirstItem1(){
    // Add the 'active' class to the button
        item1 = 0;
        item1++;
        item1Selected.classList.remove('hide');
        document.getElementById("sumItem1").innerHTML = item1;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item1ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem1(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item1");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Waffle with Berries";
    orderList.appendChild(NewH3);

    const item1Ordered = document.createElement("div");
    item1Ordered.id = ('item1OnOrder');
    orderList.appendChild(item1Ordered);
    item1Ordered.classList.add("orderQuantities");

    const item1Quantity = document.createElement("p");
    item1Quantity.innerHTML = item1 +"x";
    item1Quantity.classList.add("quantityItem1");
    item1Ordered.appendChild(item1Quantity);
    const item1Price = document.createElement("p");
    item1Price.innerHTML = "@ $6.50";
    item1Ordered.appendChild(item1Price);
    const item1Total = document.createElement("p");
    const item1TotalMultiply = item1 * 6.50;
    item1Total.innerHTML = usdFormatter.format(item1TotalMultiply);
    item1Total.classList.add("subTotalItem1");
    item1Ordered.appendChild(item1Total);

    const removeItem1 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem1.appendChild(svg);
    removeItem1.classList.add("removeFromOrder");
    orderList.appendChild(removeItem1);
    removeItem1.addEventListener('click', function removeItem1FromOrder(){
        
        
        item1Div = document.querySelector('.Item1');
        item1Div.remove();
        item1ImgSelected.classList.remove("selected");
        item1Selected.classList.add('hide');
        cartItems = cartItems - item1;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive'); 
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item1OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item1OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item1Total = Number(item1OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item1);
            let sum = totalizer - item1Total;
            console.log(sum);
            item1OrderRemoval = sum;

            console.log(item1OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item1OrderRemoval);
            orderPrice();
        }
    item1 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    
    // newDiv.textContent = "This is the second element.";
    // newDiv.style.backgroundColor = "lightblue";
    // newDiv.style.padding = "10px";  

}

    function addItem(){
        item1++;
        document.getElementById("sumItem1").innerHTML = item1;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem1").innerHTML = item1 + "x";

        item1TotalMultiply = item1 * 6.50;
        document.querySelector(".subTotalItem1").innerHTML = usdFormatter.format(item1TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item1TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);
        orderPrice();
    };

    function remItem(){
        if (item1 > 1){
            
        item1 --;
        document.getElementById("sumItem1").innerHTML = item1;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        document.querySelector(".quantityItem1").innerHTML = item1 + "x";
        item1TotalMultiply = item1 * 6.50;
        document.querySelector(".subTotalItem1").innerHTML = usdFormatter.format(item1TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }
        

        }else{
            
            item1Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item1ImgSelected.classList.remove("selected");
            item1Div = document.querySelector('.Item1');
            item1Div.remove();
            item1 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
        console.log(item1);
    };  
        
    

// Item 2

    let item2Selected = document.getElementById('item2Button');
    let item2 = 0;
    document.getElementById("sumItem2").innerHTML = item2;
    let item2ImgSelected = document.querySelector(".product-2");

    function addFirstItem2(){
    // Add the 'active' class to the button
        item2 = 0;
        item2++;
        item2Selected.classList.remove('hide');
        document.getElementById("sumItem2").innerHTML = item2;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item2ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem2(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item2");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Vanilla Bean Crème Brûlée";
    orderList.appendChild(NewH3);

    const item2Ordered = document.createElement("div");
    item2Ordered.id = ('item2OnOrder');
    orderList.appendChild(item2Ordered);
    item2Ordered.classList.add("orderQuantities");

    const item2Quantity = document.createElement("p");
    item2Quantity.innerHTML = item2 +"x";
    item2Quantity.classList.add("quantityItem2");
    item2Ordered.appendChild(item2Quantity);
    const item2Price = document.createElement("p");
    item2Price.innerHTML = "@ $7.00";
    item2Ordered.appendChild(item2Price);
    const item2Total = document.createElement("p");
    const item2TotalMultiply = item2 * 7;
    item2Total.innerHTML = usdFormatter.format(item2TotalMultiply);
    item2Total.classList.add("subTotalItem2");
    item2Ordered.appendChild(item2Total);

    const removeItem2 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem2.appendChild(svg);
    removeItem2.classList.add("removeFromOrder");
    orderList.appendChild(removeItem2);
    removeItem2.addEventListener('click', function removeItem2FromOrder(){
        
        
        item2Div = document.querySelector('.Item2');
        item2Div.remove();
        item2ImgSelected.classList.remove("selected");
        item2Selected.classList.add('hide');
        cartItems = cartItems - item2;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item2OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item2OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item2Total = Number(item2OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item2);
            let sum = totalizer - item2Total;
            console.log(sum);
            item2OrderRemoval = sum;

            console.log(item2OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item2OrderRemoval);
            orderPrice();
        }
    item2 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
}

    function addItem2(){
        item2++;
        document.getElementById("sumItem2").innerHTML = item2;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem2").innerHTML = item2 + "x";

        item2TotalMultiply = item2 * 7;
        document.querySelector(".subTotalItem2").innerHTML = usdFormatter.format(item2TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item2TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item2TotalMultiply);
    orderPrice();
        
    };

    function remItem2(){
        if (item2 > 1){
            item2 --;
        document.getElementById("sumItem2").innerHTML = item2;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem2").innerHTML = item2 + "x";
        item2TotalMultiply = item2 * 7;
        document.querySelector(".subTotalItem2").innerHTML = usdFormatter.format(item2TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item2Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item2ImgSelected.classList.remove("selected");
            item2Div = document.querySelector('.Item2');
            item2Div.remove();
            item2 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 3

    let item3Selected = document.getElementById('item3Button');
    let item3 = 0;
    document.getElementById("sumItem3").innerHTML = item3;
    let item3ImgSelected = document.querySelector(".product-3");

    function addFirstItem3(){
    // Add the 'active' class to the button
        item3 = 0;
        item3++;
        item3Selected.classList.remove('hide');
        document.getElementById("sumItem3").innerHTML = item3;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item3ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem3(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item3");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Macaron Mix of Five";
    orderList.appendChild(NewH3);

    const item3Ordered = document.createElement("div");
    item3Ordered.id = ('item3OnOrder');
    orderList.appendChild(item3Ordered);
    item3Ordered.classList.add("orderQuantities");

    const item3Quantity = document.createElement("p");
    item3Quantity.innerHTML = item3 +"x";
    item3Quantity.classList.add("quantityItem3");
    item3Ordered.appendChild(item3Quantity);
    const item3Price = document.createElement("p");
    item3Price.innerHTML = "@ $8.00";
    item3Ordered.appendChild(item3Price);
    const item3Total = document.createElement("p");
    const item3TotalMultiply = item3 * 8;
    item3Total.innerHTML = usdFormatter.format(item3TotalMultiply);
    item3Total.classList.add("subTotalItem3");
    item3Ordered.appendChild(item3Total);

    const removeItem3 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem3.appendChild(svg);
    removeItem3.classList.add("removeFromOrder");
    orderList.appendChild(removeItem3);
    removeItem3.addEventListener('click', function removeItem3FromOrder(){
        
        
        item3Div = document.querySelector('.Item3');
        item3Div.remove();
        item3ImgSelected.classList.remove("selected");
        item3Selected.classList.add('hide');
        cartItems = cartItems - item3;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item3OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item3OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item3Total = Number(item3OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item3);
            let sum = totalizer - item3Total;
            console.log(sum);
            item3OrderRemoval = sum;

            console.log(item3OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item3OrderRemoval);
            orderPrice();
        }
    item3 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
}

    function addItem3(){
        item3++;
        document.getElementById("sumItem3").innerHTML = item3;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem3").innerHTML = item3 + "x";

        item3TotalMultiply = item3 * 8;
        document.querySelector(".subTotalItem3").innerHTML = usdFormatter.format(item3TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item3TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item3TotalMultiply);
    orderPrice();
        
    };

    function remItem3(){
        if (item3 > 1){
            item3 --;
        document.getElementById("sumItem3").innerHTML = item3;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem3").innerHTML = item3 + "x";
        item3TotalMultiply = item3 * 8;
        document.querySelector(".subTotalItem3").innerHTML = usdFormatter.format(item3TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item3Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item3ImgSelected.classList.remove("selected");
            item3Div = document.querySelector('.Item3');
            item3Div.remove();
            item3 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 4


    let item4Selected = document.getElementById('item4Button');
    let item4 = 0;
    document.getElementById("sumItem4").innerHTML = item4;
    let item4ImgSelected = document.querySelector(".product-4");

    function addFirstItem4(){
    // Add the 'active' class to the button
        item4 = 0;
        item4++;
        item4Selected.classList.remove('hide');
        document.getElementById("sumItem4").innerHTML = item4;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item4ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem4(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item4");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Classic Tiramisu";
    orderList.appendChild(NewH3);

    const item4Ordered = document.createElement("div");
    item4Ordered.id = ('item4OnOrder');
    orderList.appendChild(item4Ordered);
    item4Ordered.classList.add("orderQuantities");

    const item4Quantity = document.createElement("p");
    item4Quantity.innerHTML = item4 +"x";
    item4Quantity.classList.add("quantityItem4");
    item4Ordered.appendChild(item4Quantity);
    const item4Price = document.createElement("p");
    item4Price.innerHTML = "@ $5.50";
    item4Ordered.appendChild(item4Price);
    const item4Total = document.createElement("p");
    const item4TotalMultiply = item4 * 5.50;
    item4Total.innerHTML = usdFormatter.format(item4TotalMultiply);
    item4Total.classList.add("subTotalItem4");
    item4Ordered.appendChild(item4Total);

    const removeItem4 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem4.appendChild(svg);
    removeItem4.classList.add("removeFromOrder");
    orderList.appendChild(removeItem4);
    removeItem4.addEventListener('click', function removeItem4FromOrder(){
        
        
        item4Div = document.querySelector('.Item4');
        item4Div.remove();
        item4ImgSelected.classList.remove("selected");
        item4Selected.classList.add('hide');
        cartItems = cartItems - item4;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item4OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item4OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item4Total = Number(item4OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item4);
            let sum = totalizer - item4Total;
            console.log(sum);
            item4OrderRemoval = sum;

            console.log(item4OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item4OrderRemoval);
            orderPrice();
        }
    item4 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem4(){
        item4++;
        document.getElementById("sumItem4").innerHTML = item4;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem4").innerHTML = item4 + "x";

        item4TotalMultiply = item4 * 5.50;
        document.querySelector(".subTotalItem4").innerHTML = usdFormatter.format(item4TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item4TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item4TotalMultiply);
    orderPrice();
        
    };

    function remItem4(){
        if (item4 > 1){
            item4 --;
        document.getElementById("sumItem4").innerHTML = item4;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem4").innerHTML = item4 + "x";
        item4TotalMultiply = item4 * 5.50;
        document.querySelector(".subTotalItem4").innerHTML = usdFormatter.format(item4TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item4Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item4ImgSelected.classList.remove("selected");
            item4Div = document.querySelector('.Item4');
            item4Div.remove();
            item4 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 5


    let item5Selected = document.getElementById('item5Button');
    let item5 = 0;
    document.getElementById("sumItem5").innerHTML = item5;
    let item5ImgSelected = document.querySelector(".product-5");

    function addFirstItem5(){
    // Add the 'active' class to the button
        item5 = 0;
        item5++;
        item5Selected.classList.remove('hide');
        document.getElementById("sumItem5").innerHTML = item5;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item5ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem5(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item5");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Pistachio Baklava";
    orderList.appendChild(NewH3);

    const item5Ordered = document.createElement("div");
    item5Ordered.id = ('item5OnOrder');
    orderList.appendChild(item5Ordered);
    item5Ordered.classList.add("orderQuantities");

    const item5Quantity = document.createElement("p");
    item5Quantity.innerHTML = item5 +"x";
    item5Quantity.classList.add("quantityItem5");
    item5Ordered.appendChild(item5Quantity);
    const item5Price = document.createElement("p");
    item5Price.innerHTML = "@ $4.00";
    item5Ordered.appendChild(item5Price);
    const item5Total = document.createElement("p");
    const item5TotalMultiply = item5 * 4.00;
    item5Total.innerHTML = usdFormatter.format(item5TotalMultiply);
    item5Total.classList.add("subTotalItem5");
    item5Ordered.appendChild(item5Total);

    const removeItem5 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem5.appendChild(svg);
    removeItem5.classList.add("removeFromOrder");
    orderList.appendChild(removeItem5);
    removeItem5.addEventListener('click', function removeItem5FromOrder(){
        
        
        item5Div = document.querySelector('.Item5');
        item5Div.remove();
        item5ImgSelected.classList.remove("selected");
        item5Selected.classList.add('hide');
        cartItems = cartItems - item5;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item5OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item5OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item5Total = Number(item5OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item5);
            let sum = totalizer - item5Total;
            console.log(sum);
            item5OrderRemoval = sum;

            console.log(item5OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item5OrderRemoval);
            orderPrice();
        }
    item5 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem5(){
        item5++;
        document.getElementById("sumItem5").innerHTML = item5;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem5").innerHTML = item5 + "x";

        item5TotalMultiply = item5 * 4.00;
        document.querySelector(".subTotalItem5").innerHTML = usdFormatter.format(item5TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item5TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item5TotalMultiply);
    orderPrice();
        
    };

    function remItem5(){
        if (item5 > 1){
            item5 --;
        document.getElementById("sumItem5").innerHTML = item5;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem5").innerHTML = item5 + "x";
        item5TotalMultiply = item5 * 4.00;
        document.querySelector(".subTotalItem5").innerHTML = usdFormatter.format(item5TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item5Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item5ImgSelected.classList.remove("selected");
            item5Div = document.querySelector('.Item5');
            item5Div.remove();
            item5 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 6


    let item6Selected = document.getElementById('item6Button');
    let item6 = 0;
    document.getElementById("sumItem6").innerHTML = item6;
    let item6ImgSelected = document.querySelector(".product-6");

    function addFirstItem6(){
    // Add the 'active' class to the button
        item6 = 0;
        item6++;
        item6Selected.classList.remove('hide');
        document.getElementById("sumItem6").innerHTML = item6;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item6ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem6(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item6");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Lemon Meringue Pie";
    orderList.appendChild(NewH3);

    const item6Ordered = document.createElement("div");
    item6Ordered.id = ('item6OnOrder');
    orderList.appendChild(item6Ordered);
    item6Ordered.classList.add("orderQuantities");

    const item6Quantity = document.createElement("p");
    item6Quantity.innerHTML = item6 +"x";
    item6Quantity.classList.add("quantityItem6");
    item6Ordered.appendChild(item6Quantity);
    const item6Price = document.createElement("p");
    item6Price.innerHTML = "@ $5.00";
    item6Ordered.appendChild(item6Price);
    const item6Total = document.createElement("p");
    const item6TotalMultiply = item6 * 5.00;
    item6Total.innerHTML = usdFormatter.format(item6TotalMultiply);
    item6Total.classList.add("subTotalItem6");
    item6Ordered.appendChild(item6Total);

    const removeItem6 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem6.appendChild(svg);
    removeItem6.classList.add("removeFromOrder");
    orderList.appendChild(removeItem6);
    removeItem6.addEventListener('click', function removeItem6FromOrder(){
        
        
        item6Div = document.querySelector('.Item6');
        item6Div.remove();
        item6ImgSelected.classList.remove("selected");
        item6Selected.classList.add('hide');
        cartItems = cartItems - item6;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item6OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item6OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item6Total = Number(item6OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item6);
            let sum = totalizer - item6Total;
            console.log(sum);
            item6OrderRemoval = sum;

            console.log(item6OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item6OrderRemoval);
            orderPrice();
        }
    item6 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem6(){
        item6++;
        document.getElementById("sumItem6").innerHTML = item6;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem6").innerHTML = item6 + "x";

        item6TotalMultiply = item6 * 5.00;
        document.querySelector(".subTotalItem6").innerHTML = usdFormatter.format(item6TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item6TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item6TotalMultiply);
    orderPrice();
        
    };

    function remItem6(){
        if (item6 > 1){
            item6 --;
        document.getElementById("sumItem6").innerHTML = item6;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem6").innerHTML = item6 + "x";
        item6TotalMultiply = item6 * 5.00;
        document.querySelector(".subTotalItem6").innerHTML = usdFormatter.format(item6TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item6Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item6ImgSelected.classList.remove("selected");
            item6Div = document.querySelector('.Item6');
            item6Div.remove();
            item6 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 7


    let item7Selected = document.getElementById('item7Button');
    let item7 = 0;
    document.getElementById("sumItem7").innerHTML = item7;
    let item7ImgSelected = document.querySelector(".product-7");

    function addFirstItem7(){
    // Add the 'active' class to the button
        item7 = 0;
        item7++;
        item7Selected.classList.remove('hide');
        document.getElementById("sumItem7").innerHTML = item7;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item7ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem7(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item7");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Red Velvet Cake";
    orderList.appendChild(NewH3);

    const item7Ordered = document.createElement("div");
    item7Ordered.id = ('item7OnOrder');
    orderList.appendChild(item7Ordered);
    item7Ordered.classList.add("orderQuantities");

    const item7Quantity = document.createElement("p");
    item7Quantity.innerHTML = item7 +"x";
    item7Quantity.classList.add("quantityItem7");
    item7Ordered.appendChild(item7Quantity);
    const item7Price = document.createElement("p");
    item7Price.innerHTML = "@ $4.50";
    item7Ordered.appendChild(item7Price);
    const item7Total = document.createElement("p");
    const item7TotalMultiply = item7 * 4.50;
    item7Total.innerHTML = usdFormatter.format(item7TotalMultiply);
    item7Total.classList.add("subTotalItem7");
    item7Ordered.appendChild(item7Total);

    const removeItem7 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem7.appendChild(svg);
    removeItem7.classList.add("removeFromOrder");
    orderList.appendChild(removeItem7);
    removeItem7.addEventListener('click', function removeItem7FromOrder(){
        
        
        item7Div = document.querySelector('.Item7');
        item7Div.remove();
        item7ImgSelected.classList.remove("selected");
        item7Selected.classList.add('hide');
        cartItems = cartItems - item7;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item7OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item7OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item7Total = Number(item7OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item7);
            let sum = totalizer - item7Total;
            console.log(sum);
            item7OrderRemoval = sum;

            console.log(item7OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item7OrderRemoval);
            orderPrice();
        }
    item7 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem7(){
        item7++;
        document.getElementById("sumItem7").innerHTML = item7;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem7").innerHTML = item7 + "x";

        item7TotalMultiply = item7 * 4.50;
        document.querySelector(".subTotalItem7").innerHTML = usdFormatter.format(item7TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item7TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item7TotalMultiply);
    orderPrice();
        
    };

    function remItem7(){
        if (item7 > 1){
            item7 --;
        document.getElementById("sumItem7").innerHTML = item7;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem7").innerHTML = item7 + "x";
        item7TotalMultiply = item7 * 4.50;
        document.querySelector(".subTotalItem7").innerHTML = usdFormatter.format(item7TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item7Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item7ImgSelected.classList.remove("selected");
            item7Div = document.querySelector('.Item7');
            item7Div.remove();
            item7 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 8


    let item8Selected = document.getElementById('item8Button');
    let item8 = 0;
    document.getElementById("sumItem8").innerHTML = item8;
    let item8ImgSelected = document.querySelector(".product-8");

    function addFirstItem8(){
    // Add the 'active' class to the button
        item8 = 0;
        item8++;
        item8Selected.classList.remove('hide');
        document.getElementById("sumItem8").innerHTML = item8;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item8ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem8(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item8");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Salted Caramel Brownie";
    orderList.appendChild(NewH3);

    const item8Ordered = document.createElement("div");
    item8Ordered.id = ('item8OnOrder');
    orderList.appendChild(item8Ordered);
    item8Ordered.classList.add("orderQuantities");

    const item8Quantity = document.createElement("p");
    item8Quantity.innerHTML = item8 +"x";
    item8Quantity.classList.add("quantityItem8");
    item8Ordered.appendChild(item8Quantity);
    const item8Price = document.createElement("p");
    item8Price.innerHTML = "@ $5.50";
    item8Ordered.appendChild(item8Price);
    const item8Total = document.createElement("p");
    const item8TotalMultiply = item8 * 5.50;
    item8Total.innerHTML = usdFormatter.format(item8TotalMultiply);
    item8Total.classList.add("subTotalItem8");
    item8Ordered.appendChild(item8Total);

    const removeItem8 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem8.appendChild(svg);
    removeItem8.classList.add("removeFromOrder");
    orderList.appendChild(removeItem8);
    removeItem8.addEventListener('click', function removeItem8FromOrder(){
        
        
        item8Div = document.querySelector('.Item8');
        item8Div.remove();
        item8ImgSelected.classList.remove("selected");
        item8Selected.classList.add('hide');
        cartItems = cartItems - item8;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item8OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item8OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item8Total = Number(item8OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item8);
            let sum = totalizer - item8Total;
            console.log(sum);
            item8OrderRemoval = sum;

            console.log(item8OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item8OrderRemoval);
            orderPrice();
        }
    item8 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem8(){
        item8++;
        document.getElementById("sumItem8").innerHTML = item8;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem8").innerHTML = item8 + "x";

        item8TotalMultiply = item8 * 5.50;
        document.querySelector(".subTotalItem8").innerHTML = usdFormatter.format(item8TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item8TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item8TotalMultiply);
    orderPrice();
        
    };

    function remItem8(){
        if (item8 > 1){
            item8 --;
        document.getElementById("sumItem8").innerHTML = item8;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem8").innerHTML = item8 + "x";
        item8TotalMultiply = item8 * 5.50;
        document.querySelector(".subTotalItem8").innerHTML = usdFormatter.format(item8TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }

        }else{
            item8Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item8ImgSelected.classList.remove("selected");
            item8Div = document.querySelector('.Item8');
            item8Div.remove();
            item8 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };



// Item 9


    let item9Selected = document.getElementById('item9Button');
    let item9 = 0;
    document.getElementById("sumItem9").innerHTML = item9;
    let item9ImgSelected = document.querySelector(".product-9");

    function addFirstItem9(){
    // Add the 'active' class to the button
        item9 = 0;
        item9++;
        item9Selected.classList.remove('hide');
        document.getElementById("sumItem9").innerHTML = item9;
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;
        item9ImgSelected.classList.add("selected")
        if (cartItems > 0){
            emptyCart.classList.add("inactive");
        }
        if (cartItems > 1 ){
            orderPrice();
        }
    };

    function addOnOrderItem9(){

    const container = document.querySelector(".order-container");
    const orderList = document.createElement("div");
    orderList.classList.add("orderList");
    orderList.classList.add("Item9");

    const ordertotaldiv = document.querySelector(".order-total")
    container.insertBefore(orderList, ordertotaldiv);
    
    const NewH3 = document.createElement("h3");
    NewH3.textContent = "Vanilla Panna Cotta";
    orderList.appendChild(NewH3);

    const item9Ordered = document.createElement("div");
    item9Ordered.id = ('item9OnOrder');
    orderList.appendChild(item9Ordered);
    item9Ordered.classList.add("orderQuantities");

    const item9Quantity = document.createElement("p");
    item9Quantity.innerHTML = item9 +"x";
    item9Quantity.classList.add("quantityItem9");
    item9Ordered.appendChild(item9Quantity);
    const item9Price = document.createElement("p");
    item9Price.innerHTML = "@ $6.50";
    item9Ordered.appendChild(item9Price);
    const item9Total = document.createElement("p");
    const item9TotalMultiply = item9 * 6.50;
    item9Total.innerHTML = usdFormatter.format(item9TotalMultiply);
    item9Total.classList.add("subTotalItem9");
    item9Ordered.appendChild(item9Total);

    const removeItem9 = document.createElement("div");

    const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    
    svg.setAttribute("viewBox", "0 0 10 10");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z");
    svg.appendChild(path);
    removeItem9.appendChild(svg);
    removeItem9.classList.add("removeFromOrder");
    orderList.appendChild(removeItem9);
    removeItem9.addEventListener('click', function removeItem9FromOrder(){
        
        
        item9Div = document.querySelector('.Item9');
        item9Div.remove();
        item9ImgSelected.classList.remove("selected");
        item9Selected.classList.add('hide');
        cartItems = cartItems - item9;
        document.querySelector(".orderItens").innerHTML = cartItems;
        if(cartItems === 0){
            total = document.querySelector('.orderTotal');
            emptyCart.classList.remove('inactive');
            total.remove();
            const msg = document.querySelector(".carbonMsg");
            msg.remove();
            button = document.querySelector('.confirmButton');
            button.remove();
        }else{
            var item9OrderRemoval = document.querySelector(".totalValue").innerHTML;
            var totalizer = Number(item9OrderRemoval.replace(/[^0-9.-]+/g, ""));
            var item9Total = Number(item9OrderRemoval.replace(/[^0-9.-]+/g, ""));
            
            console.log(totalizer);
            console.log(item9);
            let sum = totalizer - item9Total;
            console.log(sum);
            item9OrderRemoval = sum;

            console.log(item9OrderRemoval);
            document.querySelector(".totalValue").innerHTML = usdFormatter.format(sum);
            console.log(item9OrderRemoval);
            orderPrice();
        }
    item9 = 0;
    });
    if (cartItems > 1 ){
        orderPrice();
    }
    }

    function addItem9(){
        item9++;
        document.getElementById("sumItem9").innerHTML = item9;
    
        cartItems++;
        document.querySelector(".orderItens").innerHTML = cartItems;

        document.querySelector(".quantityItem9").innerHTML = item9 + "x";

        item9TotalMultiply = item9 * 6.50;
        document.querySelector(".subTotalItem9").innerHTML = usdFormatter.format(item9TotalMultiply);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item9TotalMultiply);

        // var orderTotalValue = document.querySelector(".totalValue").innerHTML;
        

        // var totalizer = Number(orderTotalValue.replace(/[^0-9.-]+/g, ""));
        // console.log(totalizer);

        // document.querySelector(".totalValue").innerHTML = usdFormatter.format(item9TotalMultiply);
    orderPrice();
        
    };

    function remItem9(){
        if (item9 > 1){
            item9 --;
        document.getElementById("sumItem9").innerHTML = item9;
        cartItems--;
        document.querySelector(".orderItens").innerHTML = cartItems;
        console.log(cartItems);
        
        document.querySelector(".quantityItem9").innerHTML = item9 + "x";
        item9TotalMultiply = item9 * 6.50;
        document.querySelector(".subTotalItem9").innerHTML = usdFormatter.format(item9TotalMultiply);
        orderPrice();
        if (cartItems > 1 ){
            orderPrice();
        }
        }else{
            item9Selected.classList.add('hide');
            cartItems--;
            document.querySelector(".orderItens").innerHTML = cartItems;
            item9ImgSelected.classList.remove("selected");
            item9Div = document.querySelector('.Item9');
            item9Div.remove();
            item9 = 0;
            orderPrice();
            if(cartItems === 0){
                emptyCart.classList.remove('inactive'); 
                total = document.querySelector('.orderTotal');
                total.remove();
                const msg = document.querySelector(".carbonMsg");
                msg.remove();
                button = document.querySelector('.confirmButton');
                button.remove();
            }
        }
    };

function openningOrder(){    
        if (cartItems === 1){
            const container = document.querySelector(".order-total");
            const total = document.createElement("div");
            container.appendChild(total);
            total.classList.add("orderTotal");
            const orderTotalText = document.createElement("p");
            orderTotalText.innerHTML = "Order Total";
            total.appendChild(orderTotalText);

            const orderTotalValue = document.createElement("h2");
            orderTotalValue.classList.add("totalValue");
            total.appendChild(orderTotalValue);

            item1TotalMultiply = item1 * 6.50;
            item2TotalMultiply = item2 * 7.00;
            item3TotalMultiply = item3 * 8.00;
            item4TotalMultiply = item4 * 5.50;
            item5TotalMultiply = item5 * 4.00;
            item6TotalMultiply = item6 * 5.00;
            item7TotalMultiply = item7 * 4.50;
            item8TotalMultiply = item8 * 5.50;
            item9TotalMultiply = item9 * 6.50;
            orderTotalValue.innerHTML = usdFormatter.format(item1TotalMultiply+item2TotalMultiply+item3TotalMultiply+item4TotalMultiply+item5TotalMultiply+item6TotalMultiply+item7TotalMultiply+item8TotalMultiply+item9TotalMultiply);
            console.log(orderTotalValue.innerHTML);
            confirmOrder();
            
        }else if(cartItems === 0){   
            total.remove();
        }    
}

function confirmOrder(){
    const ordercontainer = document.querySelector(".order-container");
    const msg = document.createElement("div");
    ordercontainer.appendChild(msg);
    msg.classList.add("carbonMsg");
    const carbonimg = document.createElement("img");
    carbonimg.src = './assets/images/icon-carbon-neutral.svg';
    carbonimg.alt = 'carbon-neutral';
    msg.appendChild(carbonimg);

    const msgTextPart1 = document.createElement("p");
    msgTextPart1.innerHTML = "This is a "
    msg.appendChild(msgTextPart1);
    const msgTextPart2 = document.createElement("strong");
    msgTextPart2.innerHTML = "carbon-neutral";
    msg.appendChild(msgTextPart2);
    const msgTextPart3 = document.createElement("p");
    msgTextPart3.innerHTML = "delivery";
    msg.appendChild(msgTextPart3);


    const confirmOrderButton = document.createElement("div");
    confirmOrderButton.classList.add("confirmButton");
    ordercontainer.appendChild(confirmOrderButton)
    confirmOrderButton.innerHTML = "Confirm Order";
    confirmOrderButton.onclick = function(){orderConfirmed();}
}

function orderPrice(){
    if (document.querySelector(".subTotalItem1") === null){
    var subtotalItem1 = 0;
    }else{
        var subtotalItem1 = document.querySelector(".subTotalItem1").innerHTML;
        subtotalItem1 = Number(subtotalItem1.replace(/[^0-9.-]+/g, ""));
    }
    
    if (document.querySelector(".subTotalItem2") === null){
    var subtotalItem2 = 0;
    }else{
        var subtotalItem2 = document.querySelector(".subTotalItem2").innerHTML;
        subtotalItem2 = Number(subtotalItem2.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem3") === null){
    var subtotalItem3 = 0;
    }else{
        var subtotalItem3 = document.querySelector(".subTotalItem3").innerHTML;
        subtotalItem3 = Number(subtotalItem3.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem4") === null){
    var subtotalItem4 = 0;
    }else{
        var subtotalItem4 = document.querySelector(".subTotalItem4").innerHTML;
        subtotalItem4 = Number(subtotalItem4.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem5") === null){
    var subtotalItem5 = 0;
    }else{
        var subtotalItem5 = document.querySelector(".subTotalItem5").innerHTML;
        subtotalItem5 = Number(subtotalItem5.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem6") === null){
    var subtotalItem6 = 0;
    }else{
        var subtotalItem6 = document.querySelector(".subTotalItem6").innerHTML;
        subtotalItem6 = Number(subtotalItem6.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem7") === null){
    var subtotalItem7 = 0;
    }else{
        var subtotalItem7 = document.querySelector(".subTotalItem7").innerHTML;
        subtotalItem7 = Number(subtotalItem7.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem8") === null){
    var subtotalItem8 = 0;
    }else{
        var subtotalItem8 = document.querySelector(".subTotalItem8").innerHTML;
        subtotalItem8 = Number(subtotalItem8.replace(/[^0-9.-]+/g, ""));
    }

    if (document.querySelector(".subTotalItem9") === null){
    var subtotalItem9 = 0;
    }else{
        var subtotalItem9 = document.querySelector(".subTotalItem9").innerHTML;
        subtotalItem9 = Number(subtotalItem9.replace(/[^0-9.-]+/g, ""));
    }

    var totalizer = subtotalItem1 + subtotalItem2 + subtotalItem3 + subtotalItem4 + subtotalItem5 + subtotalItem6 + subtotalItem7 + subtotalItem8 + subtotalItem9;
    totalizer = usdFormatter.format(totalizer);

    document.querySelector(".totalValue").innerHTML = totalizer;

    console.log(totalizer);
}

function orderConfirmed(){
    window.scrollTo({
        top: 0
        // behavior: 'smooth'
        // Optional: Makes the scroll smooth
    });
    let body = document.querySelector("body");
    let section = document.querySelector("section");
    const orderConfirmedContainer = document.createElement("div");
    orderConfirmedContainer.classList.add("orderConfirmationContainer");
    body.insertBefore(orderConfirmedContainer, section);  

    const orderConfirmedBox = document.createElement("div");
    orderConfirmedContainer.appendChild(orderConfirmedBox);
    orderConfirmedBox.classList.add('orderConfirmationBox');

    const orderConfirmedBoxMsg = document.createElement("div");
    orderConfirmedBoxMsg.classList.add('orderConfirmedBoxMsg');
    orderConfirmedBox.appendChild(orderConfirmedBoxMsg);

    const confirmedSign = document.createElement("img");
    confirmedSign.src = './assets/images/icon-order-confirmed.svg';
    confirmedSign.alt = 'Confirm green logo';
    orderConfirmedBoxMsg.appendChild(confirmedSign);

    const confirmedOrderTitle = document.createElement("h1");
    confirmedOrderTitle.innerHTML = "Order Confirmed";
    orderConfirmedBoxMsg.appendChild(confirmedOrderTitle);

    const confirmedOrderMsg = document.createElement("p");
    confirmedOrderMsg.innerHTML = "We hope you enjoy your food";
    orderConfirmedBoxMsg.appendChild(confirmedOrderMsg);

    
        const sourceContainer = document.querySelector('.order-container');

        const targetContainer = document.querySelector('.orderConfirmationBox');

        const createdElementsItems = sourceContainer.querySelectorAll('.orderList');
        const createdElementsItemsTotalValue = sourceContainer.querySelectorAll('.order-total');

        createdElementsItems.forEach(function(element) {
            const clonedElement = element.cloneNode(true); // Deep clone
            targetContainer.appendChild(clonedElement);
            const elementsToRemove = clonedElement.querySelectorAll('.removeFromOrder');
            elementsToRemove.forEach(el => el.remove());
        });
        
        createdElementsItemsTotalValue.forEach(function(element) {
            const clonedElementTotalValue = element.cloneNode(true); // Deep clone
            targetContainer.appendChild(clonedElementTotalValue);
        });

        const parentElement = document.querySelector('.order-total');
        const firstChild = parentElement.children[0]; 
        firstChild.classList.add('confirmedBox'); 
        console.log(parentElement);


        function newOrder(){
            location.reload();
        }

        const newOrderButton = document.createElement("div");
        newOrderButton.classList.add("newOrderButton");
        orderConfirmedBox.appendChild(newOrderButton)
        newOrderButton.innerHTML = "Start New Order";
        newOrderButton.onclick = function(){newOrder();}
        

        const parentElement1 = document.querySelector('.orderConfirmationBox');
        const children = parentElement1.querySelectorAll('.orderList');
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('ConfirmBoxOrderListImages');
        };

        const children2 = parentElement1.querySelectorAll('.orderList');
        console.log(children2);

        const localToInsert = parentElement1.querySelectorAll('h3');
        console.log(localToInsert);

        for (let i = 0; i < children2.length; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = `./assets/images/${item1Img[0]}.jpg`;
            // children2[i].appendChild(imgElement);
            children2[i].insertBefore(imgElement, localToInsert[i]);
        };

        const changeItem2Img = document.querySelector('.Item2');
        if (changeItem2Img !== null) {
        const changeImg2 = changeItem2Img.querySelector('img');
        changeImg2.src = `./assets/images/${item2Img[0]}.jpg`
        }

        const changeItem3Img = document.querySelector('.Item3');
        if (changeItem3Img !== null) {
        const changeImg3 = changeItem3Img.querySelector('img');
        changeImg3.src = `./assets/images/${item3Img[0]}.jpg`
        }

        const changeItem4Img = document.querySelector('.Item4');
        if (changeItem4Img !== null) {
        const changeImg4 = changeItem4Img.querySelector('img');
        changeImg4.src = `./assets/images/${item4Img[0]}.jpg`
        }
        
        const changeItem5Img = document.querySelector('.Item5');
        if (changeItem5Img !== null) {
        const changeImg5 = changeItem5Img.querySelector('img');
        changeImg5.src = `./assets/images/${item5Img[0]}.jpg`
        }
        
        const changeItem6Img = document.querySelector('.Item6');
        if (changeItem6Img !== null) {
        const changeImg6 = changeItem6Img.querySelector('img');
        changeImg6.src = `./assets/images/${item6Img[0]}.jpg`
        }

        const changeItem7Img = document.querySelector('.Item7');
        if (changeItem7Img !== null) {
        const changeImg7 = changeItem7Img.querySelector('img');
        changeImg7.src = `./assets/images/${item7Img[0]}.jpg`
        }        
        
        const changeItem8Img = document.querySelector('.Item8');
        if (changeItem8Img !== null) {
        const changeImg8 = changeItem8Img.querySelector('img');
        changeImg8.src = `./assets/images/${item8Img[0]}.jpg`
        }
        
        const changeItem9Img = document.querySelector('.Item9');
        if (changeItem9Img !== null) {
        const changeImg9 = changeItem9Img.querySelector('img');
        changeImg9.src = `./assets/images/${item9Img[0]}.jpg`
        }           


        console.log(children.length);

        if(children.length < 3){
            orderConfirmedContainer.style.height = "125vh";
        }
        if(children.length > 2 && children.length < 5){
            orderConfirmedContainer.style.height = "150vh";
        }
        if(children.length > 4 && children.length < 7){
            orderConfirmedContainer.style.height = "175vh";
        }
        if(children.length > 6 && children.length <= 9){
            orderConfirmedContainer.style.height = "225vh";
        }

}