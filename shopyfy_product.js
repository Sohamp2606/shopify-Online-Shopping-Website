

import { renderHtml, category } from "./shopify_view.js";




// hamburger 

const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobilenav");

hamburger.addEventListener("click",()=>{
    mobilenav.classList.toggle("opendrawer");
});

// navbar 
document.querySelector('.nav-title').addEventListener('click',function(){
    let targetPageUrl = "index.html";
            
    window.location.href = targetPageUrl;
});

// product object

let products = {
    menFashion : {
        "product1": {
            "name": "Levis Shirt",
            "category" :"menfashion",
            "priceOld": 400,
            "priceNew": 300,
            "disc": "Men Colorblock Regular Fit Polo T-Shirt",
            "productReview": 5068,
            "image" :"shopyfy/product2.webp"
        },
        "product2": {
            "name": "Levis Shirt",
            "category" :"menfashion",
            "priceOld": 1200,
            "priceNew": 900,
            "disc": "Men's Air Max Excee Sneakers",
            "productReview": 2489,
            "image" :"shopyfy/product16.webp"
        },
        "product3": {
            "name": "Levis Shirt",
            "category" :"menfashion",
            "priceOld": 800,
            "priceNew": 600,
            "disc": "Men's Essentials 3-Stripes Regular Fit Tricot Track Pants",
            "productReview": 1457,
            "image" :"shopyfy/product19.webp"
        },
        "product4": {
            "name": "Levis Shirt",
            "category" :"menfashion",
            "priceOld": 1500,
            "priceNew": 1200,
            "disc": "Unisex Wayfarer Sunglasses",
            "productReview": 3621,
            "image" :"shopyfy/product20.webp"
        },
        "product5": {
            "name": "Tommy Hilfiger Jacket",
            "category" :"menfashion",
            "priceOld": 2500,
            "priceNew": 2000,
            "disc": "Men's Lightweight Water Resistant Packable Down Puffer Jacket",
            "productReview": 1893,
            "image" :"shopyfy/product17.webp"
        },
        "product6": {
            "name": "H & M Shirt",
            "category" :"menfashion",
            "priceOld": 600,
            "priceNew": 450,
            "disc": "Unisex Phase Backpack",
            "productReview": 987,
            "image" :"shopyfy/product18.webp"
        },
    },
    womenFashion :{
        "product11": {
            "name": "Petite Sleeve Ponte Dress",
            "category" :"womenfashion",
            "priceOld": 600,
            "priceNew": 450,
            "disc": "Women's Floral Print Fit & Flare Dress",
            "productReview": 1876,
            "image" :"shopyfy/product3.webp"
        },
        "product12": {
            "name": "Petite Knitted Dress",
            "category" :"womenfashion",
            "priceOld": 800,
            "priceNew": 600,
            "disc": "Women's Skinny High Ankle Jeans",
            "productReview": 2345,
            "image" :"shopyfy/product6.webp"
        },
        "product13": {
            "name": "Sleeve Shift Dress",
            "category" :"womenfashion",
            "priceOld": 500,
            "priceNew": 400,
            "disc": "Women's Printed Button-Up Blouse",
            "productReview": 1498,
            "image" :"shopyfy/product4.webp"
        },
        "product14": {
            "name": "Petite Midi Dress",
            "category" :"womenfashion",
            "priceOld": 700,
            "priceNew": 550,
            "disc": "Women's Medium-Support Sports Bra",
            "productReview": 1765,
            "image" :"shopyfy/product8.webp"
        },
        "product15": {
            "name": "Flute Sleeve Top",
            "category" :"womenfashion",
            "priceOld": 900,
            "priceNew": 750,
            "disc": "Women's High-Rise 3-Stripes Leggings",
            "productReview": 2123,
            "image" :"shopyfy/product7.webp"
        },
        "product16": {
            "name": "Lace Wrap Top",
            "category" :"womenfashion",
            "priceOld": 1200,
            "priceNew": 950,
            "disc": "Women's Belted Linen-Blend Jumpsuit",
            "productReview": 987,
            "image" :"shopyfy/product5.webp"
        },
        
    },
   
    mobiles :{
        "product1": {
            "name": "iPhone 13 Pro",
            "category" :"iphone",
            "priceOld": 1099,
            "priceNew": 999,
            "disc": "6.1-inch Super Retina XDR display",
            "productReview": 4378,
            "image" :"shopyfy/product38.jpg"
        },
        "product2": {
            "name": "OnePlus 11 Pro",
            "category" :"oneplus",
            "priceOld": 969,
            "priceNew": 849,
            "disc": "6.7-inch Fluid AMOLED display",
            "productReview": 3245,
            "image" :"shopyfy/product29.webp"
        },
        "product3": {
            "name": "Samsung Galaxy S21 Ultra",
            "category" :"samsung",
            "priceOld": 1199,
            "priceNew": 1099,
            "disc": "6.8-inch Dynamic AMOLED 2X display",
            "productReview": 5643,
            "image" :"shopyfy/product32.webp"
        },
        "product4": {
            "name": "Vivo X70 Pro+",
            "category" :"vivo",
            "priceOld": 999,
            "priceNew": 899,
            "disc": "6.78-inch AMOLED display",
            "productReview": 2876,
            "image" :"shopyfy/product33.webp"
        },
        "product5": {
            "name": "iPhone 12",
            "category" :"iphone",
            "priceOld": 799,
            "priceNew": 699,
            "disc": "6.1-inch Super Retina XDR display",
            "productReview": 8567,
            "image" :"shopyfy/product30.jpg"
        },
        "product6": {
            "name": "OnePlus 12R",
            "category" :"oneplus",
            "priceOld": 749,
            "priceNew": 649,
            "disc": "6.55-inch Fluid AMOLED display",
            "productReview": 4235,
            "image" :"shopyfy/product31.webp"
        },
        "product7": {
            "name": "Samsung S20 Ultra",
            "category" :"samsung",
            "priceOld": 1299,
            "priceNew": 1199,
            "disc": "6.9-inch Dynamic AMOLED 2X display",
            "productReview": 3987,
            "image" :"shopyfy/product32.webp"
        },
        
        "product9": {
            "name": "iPhone 13",
            "category" :"iphone",
            "priceOld": 399,
            "priceNew": 349,
            "disc": "4.7-inch Retina HD display",
            "productReview": 7643,
            "image" :"shopyfy/product30.jpg"
        },
        
    },
    electronics :{
        "product1": {
            "name": "Smartwatch",
            "category" :"watch",
            "priceOld": 2000,
            "priceNew": 1500,
            "disc": "Fitness tracker with heart rate monitor and waterproof design",
            "productReview": 1200,
            "image" :"shopyfy/product34.jpg"
        },
        "product2": {
            "name": "Laptop",
            "category" :"laptop",
            "priceOld": 80000,
            "priceNew": 70000,
            "disc": "14-inch ultrabook with Intel Core i5 processor and 8GB RAM",
            "productReview": 1800,
            "image" :"shopyfy/product35.webp"
        },
        "product3": {
            "name": "Desktop Computer",
            "category" :"desktop",
            "priceOld": 100000,
            "priceNew": 95000,
            "disc": "Gaming desktop with NVIDIA GeForce RTX graphics and RGB lighting",
            "productReview": 2200,
            "image" :"shopyfy/product37.webp"
        },
        "product4": {
            "name": "Digital Camera",
            "category" :"camera",
            "priceOld": 40000,
            "priceNew": 35000,
            "disc": "Mirrorless camera with 24.2MP sensor and 4K video recording",
            "productReview": 1500,
            "image" :"shopyfy/product36.webp"
        },
        
    },
    // books :{
    //     "product1": {
    //         "name": "The Alchemist",
    //         "category" :"book",
    //         "author": "Paulo Coelho",
    //         "priceOld": 15,
    //         "priceNew": 10,
    //         "disc": "A novel about a young Andalusian shepherd named Santiago who dreams of finding a worldly treasure",
    //         "productReview": 4500
    //     },
    //     "product2": {
    //         "name": "To Kill a Mockingbird",
    //         "category" :"book",
    //         "author": "Harper Lee",
    //         "priceOld": 12,
    //         "priceNew": 8,
    //         "disc": "A novel that explores themes of racial injustice and loss of innocence",
    //         "productReview": 3890
    //     },
    //     "product3": {
    //         "name": "1984",
    //         "category" :"book",
    //         "author": "George Orwell",
    //         "priceOld": 10,
    //         "priceNew": 7,
    //         "disc": "A dystopian social science fiction novel",
    //         "productReview": 4200
    //     },
    //     "product4": {
    //         "name": "The Great Gatsby",
    //         "category" :"book",
    //         "author": "F. Scott Fitzgerald",
    //         "priceOld": 14,
    //         "priceNew": 9,
    //         "disc": "A novel set in the summer of 1922 that portrays the American Dream",
    //         "productReview": 3600
    //     },
    //     "product5": {
    //         "name": "Pride and Prejudice",
    //         "category" :"book",
    //         "author": "Jane Austen",
    //         "priceOld": 11,
    //         "priceNew": 7,
    //         "disc": "A romantic novel of manners written by Jane Austen",
    //         "productReview": 4100
    //     },
    //     "product6": {
    //         "name": "The Catcher in the Rye",
    //         "category" :"book",
    //         "author": "J.D. Salinger",
    //         "priceOld": 13,
    //         "priceNew": 9,
    //         "disc": "A story about a teenager named Holden Caulfield's turbulent journey into adulthood",
    //         "productReview": 3800
    //     },
    //     "product7": {
    //         "name": "Harry Potter and the Sorcerer's Stone",
    //         "category" :"book",
    //         "author": "J.K. Rowling",
    //         "priceOld": 18,
    //         "priceNew": 12,
    //         "disc": "The first book in the Harry Potter series",
    //         "productReview": 4700
    //     }
    // },
    Appliances :{
        "product1": {
            "name": "Gird Round Organizer",
            "category" :"cooler",
            "priceOld": 2000,
            "priceNew": 1500,
            "disc": "Portable air cooler with cooling pads for efficient cooling",
            "productReview": 1200,
            "image" :"shopyfy/product13.webp"
        },
        "product2": {
            "name": "8Pcs Storage Containers",
            "category" :"tv",
            "priceOld": 6000,
            "priceNew": 5000,
            "disc": "55-inch 4K Ultra HD smart TV with built-in streaming apps",
            "productReview": 1800,
            "image" :"shopyfy/product12.webp"
        },
        "product3": {
            "name": "Dish Drainer",
            "category" :"refrigerator",
            "priceOld": 8000,
            "priceNew": 7000,
            "disc": "Double door refrigerator with frost-free technology and spacious compartments",
            "productReview": 2200,
            "image" :"shopyfy/product10.webp"
        },
        "product4": {
            "name": "Ultra Soft Sofa",
            "category" :"microwave",
            "priceOld": 15000,
            "priceNew": 12000,
            "disc": "20-liter solo microwave oven with multiple power levels and timer function",
            "productReview": 1500,
            "image" :"shopyfy/product1.webp"
        },
        "product5": {
            "name": "2-Seater Sofa ",
            "category" :"cooler",
            "category" :"cooler",
            "priceOld": 25000,
            "priceNew": 20000,
            "disc": "HEPA air purifier with activated carbon filter for clean and fresh air",
            "productReview": 900,
            "image" :"shopyfy/product9.webp"
        },
        "product7": {
            "name": "Cashmere 750ml Jug",
            "category" :"microwave",
            "priceOld": 10000,
            "priceNew": 8000,
            "disc": "Portable induction cooktop with touch controls and multiple power levels",
            "productReview": 1100,
            "image" :"shopyfy/product15.webp"
        }
    }

}


renderHtml(products);




// -->>  event listners for all dropdown categories 

const menKey = document.querySelector('.menfashion');
const womenKey = document.querySelector('.womenfashion');
const oneplusKey = document.querySelector('.oneplus');
const iphoneKey = document.querySelector('.iphone');
const samsungKey = document.querySelector('.samsung');
const vivoKey = document.querySelector('.vivo');
const laptopKey = document.querySelector('.laptop');
const watchKey = document.querySelector('.watch');
const cameraKey = document.querySelector('.camera');
const desktopKey = document.querySelector('.desktop');

const keyArray = [menKey,womenKey,oneplusKey,iphoneKey,samsungKey,
                    vivoKey,laptopKey,watchKey,cameraKey,desktopKey];

menKey.addEventListener('click',function(){
    category(products.menFashion);
     
});

womenKey.addEventListener('click',function(){
    category(products.womenFashion);

});
iphoneKey.addEventListener('click',function(){
    
    let arr = Object.values(products.mobiles);

    let phone =  arr.filter(mobile => {
        if(mobile.category == 'iphone') 
            return mobile.category;
    });
    
    category(phone);

});
oneplusKey.addEventListener('click',function(){

    let arr = Object.values(products.mobiles);

    let phone =  arr.filter(mobile => {
        if(mobile.category == 'oneplus') 
            return mobile.category;
    });
    
    category(phone);

});
samsungKey.addEventListener('click',function(){

    let arr = Object.values(products.mobiles);

    let phone =  arr.filter(mobile => {
        if(mobile.category == 'samsung') 
            return mobile.category;
    });
    
    category(phone);

});

vivoKey.addEventListener('click',function(){
    let arr = Object.values(products.mobiles);

    let phone =  arr.filter(mobile => {
        if(mobile.category == 'vivo') 
            return mobile.category;
    });
    
    category(phone);

});

laptopKey.addEventListener('click',function(){

    let arr = Object.values(products.electronics);

    let item =  arr.filter(items => {
        if(items.category == 'laptop') 
            return items.category;
    });
    
    category(item);

});

watchKey.addEventListener('click',function(){

    let arr = Object.values(products.electronics);

    let item =  arr.filter(items => {
        if(items.category == 'watch') 
            return items.category;
    });
    
    category(item);
});

cameraKey.addEventListener('click',function(){

    let arr = Object.values(products.electronics);

    let item =  arr.filter(items => {
        if(items.category == 'camera') 
            return items.category;
    });
    
    category(item);

});

desktopKey.addEventListener('click',function(){

    let arr = Object.values(products.electronics);

    let item =  arr.filter(items => {
        if(items.category == 'desktop') 
            return items.category;
    });
    
    category(item);

});


// Get the category from the URL query parameters
const params = new URLSearchParams(window.location.search);
const categoryKey = params.get('category');

// Filter products based on the category
if (categoryKey) {
    if(categoryKey == 'menfashion'){
        category(products.menFashion);
    }
    else if(categoryKey == 'womenfashion'){
        category(products.womenFashion);
    }
    else if(categoryKey == 'iphone'){
        let arr = Object.values(products.mobiles);

        let phone =  arr.filter(mobile => {
            if(mobile.category == 'iphone') 
                return mobile.category;
        });
        
        category(phone);
    }
    else if(categoryKey == 'oneplus'){
        let arr = Object.values(products.mobiles);

        let phone =  arr.filter(mobile => {
            if(mobile.category == 'oneplus') 
                return mobile.category;
        });
        
        category(phone);
    }
    else if(categoryKey == 'samsung'){
        let arr = Object.values(products.mobiles);

    let phone =  arr.filter(mobile => {
        if(mobile.category == 'samsung') 
            return mobile.category;
    });
    
    category(phone);
    }
    else if(categoryKey == 'vivo'){
        let arr = Object.values(products.mobiles);

        let phone =  arr.filter(mobile => {
            if(mobile.category == 'vivo') 
                return mobile.category;
        });
        
        category(phone);
    }
    else {
        renderHtml(products);
    }
}
    
