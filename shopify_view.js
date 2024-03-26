

export const renderHtml = function (data){
    const dataArray = Object.values(data);
    
    const menHTML = renderMen(dataArray[0]);
    const womanHTML = renderWomen(dataArray[1]);
    const mobileHTML = renderMobile(dataArray[2]);
    const electronicsHTML = renderElectronics(dataArray[3]);
    const appliancesHTML = renderAppliances(dataArray[4]);

    const HTML = menHTML + womanHTML + mobileHTML + electronicsHTML + appliancesHTML;
    
    
    
    const productCon = document.querySelector(".product-con");
    productCon.textContent='';
    productCon.insertAdjacentHTML('beforeend', HTML);
    modalBtn();
}

const renderMen = function(data) {
    const dataArray = Object.values(data);
    
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    })
    // console.log(HTML);
    return HTML;
}



const renderWomen = function(data) {
    const dataArray = Object.values(data);
    
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    })
    // console.log(HTML);
    return HTML;
}

const renderMobile = function(data) {
    const dataArray = Object.values(data);
    
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    })
    
    return HTML;
}


const renderElectronics = function(data) {
    const dataArray = Object.values(data);
    
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    })
    
    return HTML;
}


const renderAppliances = function(data) {
    const dataArray = Object.values(data);
    
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    })
   
    return HTML;
}

const renderProduct = function (data){
    return `
    <div class="product-card-con ">
    <div class="product-image show-modal">
        <img src=${data.image} alt="">

    </div>


    <div class="product-price">
        <p class="del">&#x20b9;${data.priceOld}</p>
        <strong><p class="price">&#x20b9;${data.priceNew}</p>  </strong>  
        <a class="like" href="#"><i class="fa-regular fa-heart"></i></a>
    </div>
    <div class="product-name show-modal">
        <p>${data.name}</p>
    </div>

    <div class="product-rating">
            
        <div class="rating-wrapper" aria-label="5 start rating">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <ion-icon name="star" aria-hidden="true"></ion-icon>
        </div>
        <span class="review">${data.productReview} review</span>

    </div>

</div>
    `;
}


export const category = function(data){
    
    const dataArray = Object.values(data);
    let HTML = '';
    dataArray.forEach(card => {
        HTML += renderProduct(card); 
    });
    console.log(HTML);
    const productCon = document.querySelector(".product-con");
    productCon.textContent='';
    productCon.insertAdjacentHTML('beforeend', HTML);
    modalBtn();
}



// event listners
const modalBtn = function (){
    const modal = document.querySelectorAll(".product-card-con");
    modal.forEach(item => {
        item.addEventListener("click",function(){
            const image = item.querySelector("img");
            const productName = item.querySelector(".product-name");
            const oldPrice = item.querySelector(".del");
            const newPrice = item.querySelector(".price");
            const review = item.querySelector(".review");

            const html = renderModal([image,productName,oldPrice,newPrice,review]);
            document.querySelector(".modal").textContent ='';
            document.querySelector(".fix-modal").classList.toggle('hidden');
            
            document.querySelector(".modal").insertAdjacentHTML("afterbegin",html);
            modal2();
        })

    })
}

const modal2 = function(){
    document.querySelector('.close-modal').addEventListener('click',closemodal);
    document.querySelector(".overlay").addEventListener('click',closemodal);
}
const closemodal = function(){
    document.querySelector(".fix-modal").classList.toggle('hidden');
}

const renderModal = function (data){
    return `<div class="offer-lebal ">
            <p><strong>FREE SHIPPING </strong> ALL INDIA ORDERS $50+</p>
        </div>

        <div class="modal-image">
            <img src="${data[0].src}" alt="">
        </div>
        <button class="close-modal">&times;</button>
        <div class="modal-info">

            <div class="modal-name">
                <p>${data[1].textContent}</p>
            </div>
            <div class="modal-discription">
                <p>This is Premium T shirt by Levis</p>
            </div> 
            <div class="product-price">
                <p class="del">${data[2].textContent}</p>
                <strong><p class="price">${data[3].textContent}</p>  </strong>  
                
            </div>
            <div class="product-rating">
                    
                <div class="rating-wrapper" aria-label="5 start rating">
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                    <ion-icon name="star" aria-hidden="true"></ion-icon>
                </div>
                <span class="review">${data[4].textContent}</span>

            </div>

            <div class="modal-btn">
                <span>FREE delivery in 3 days</span>
                <a href="#">Buy Now</a>
                <span>Buy 3 items, Get 20 % OFF</span>
                <a href="#"><i class="fa-regular fa-heart"></i> &nbsp; Add To Wishlist</a>
            </div>


        </div>`

}
