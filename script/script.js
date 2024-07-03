
// CSS qo'shish
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  .container {
    // width: 100%;
    // margin: 0 auto;
    padding: 10px;
    background-color: #fff;
  }
  .header {
    background-color: #fff;
    color: #000;
    padding: 10px 40px;
    // border:1px solid #000;
  }
 .header nav {
 display: flex;
 justify-content: space-between;
 align-items: center;
 }
  .header nav a {
    color: #000;
    text-decoration: none;
    margin: 0 20px;
  }
  .header nav .search {
    width: 200px;
    height: 20px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color:#F5F5F5;
    outline: none;
  } 
    .header nav .links {
      display: flex;
      align-items: center;
    }
  .banner {
    margin: 20px 20px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    // gap: 100px;  
  }

  .section {
    margin: 20px 20px;
  }
  .section h2 {
  }
  .products, .categories {
    display: flex;
    justify-content: space-around;
  }
  .product, .category {
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // width: 22%;
    // text-align: center;
  }
 .view-all {
   color: #fff;
   background-color: red;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 12px 10px;
   font-size: 20px;
   margin: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   width: 22%;
 }
  .product img, .category img {
    max-width: 100%;
  }
  .view-all-1 {
    display: flex;
    justify-content: center;
    align-items: center;
}
    .bannerImg {
       display: flex;
        justify-content: center;
    }
    // .footerImg{
    //     width:100%;
    //     height:100%;
    // }
    .containr {
        background-color: #000;
    }
    .arrival {
        display: flex;
        justify-content: center;
        gap: 30px;
    }
    .arrivalNew {
        display: flex;
        justify-content: center;
        gap: 50px;
        margin: 80px 0;
    }
`;
document.head.appendChild(style);

// Container yaratish
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// Container yaratish
const containr = document.createElement('div');
containr.className = 'containr';
document.body.appendChild(containr);

// Header yaratish
const header = document.createElement('div');
header.className = 'header';
header.innerHTML = `
  <nav>
   <div>
    <h1>Exclusive</h1>
   </div>
   <div class="links">
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">Contact</a>
    <a href="#">About</a>
    <a href="#">Sign Up</a>
    <a href="#"><input class="search" type="text" placeholder="What are you looking for?"></a>
    <img src="../assets/icon/Wishlist.svg" alt="Cart">
    <img src="assets/icon/Cart1 with buy.svg" alt="Cart">

    </div>
  </nav>
`;
container.appendChild(header);

// Banner yaratish
const banner = document.createElement('div');
banner.className = 'banner';
banner.innerHTML = `


  <div class="banner">
    <div>
      <p>Woman’s Fashion</p>
      <p>Men’s Fashion</p>
      <p>Electronics</p>
      <p>Home & Lifestyle</p>
      <p>Medicine</p>
      <p>Sports & Outdoor</p>
      <p>Baby’s & Toys</p>
      <p>Health & Beauty</p>      
    </div>
    <img src="../assets/imgs/Frame 560.svg" alt="Banner">
  </div>

`;
container.appendChild(banner);

// Flash Sales bo'limi
const flashSales = document.createElement('div');
flashSales.className = 'section';
flashSales.innerHTML = `
  <h2>Flash Sales</h2>
  <div class="products">
    <div class="product">
      <img src="../assets/imgs/Frame 570.svg" alt="asas">
      <p>HAVIT HV-G92 Gamepad</p>
      <p>$120</p>
      <img src="../assets/icon/Five star.svg" alt="asas">

    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (1).svg" alt="Product">
      <p>AK-900 Wired Keyboard</p>
      <p>$960</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (2).svg" alt="Product 3">
      <p>Product 3</p>
      <p>$30.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="../assets/imgs/Frame 570 (3).svg" alt="Product 4">
      <p>Product 4</p>
      <p>$40.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
  </div>
  <div class="view-all-1">
    <button class="view-all">View All</button>
  </div>
`;
container.appendChild(flashSales);

// category bo'limi
const category = document.createElement('div');
category.className = 'section';
category.innerHTML = `
    <h2>Browse By Category</h2>
    <div class="categories">
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>
      <div class="category">
        <img src="assets/imgs/Category-Phone.svg" alt="Category 1">
      </div>

`;
container.appendChild(category);



// product bo'limi
const product = document.createElement('div');
product.className = 'section';
product.innerHTML = `
  <h2>Flash Sales</h2>
  <div class="products">
    <div class="product">
      <img src="../assets/imgs/Frame 570.svg" alt="asas">
      <p>HAVIT HV-G92 Gamepad</p>
      <p>$120</p>
      <img src="../assets/icon/Five star.svg" alt="asas">

    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (1).svg" alt="Product">
      <p>AK-900 Wired Keyboard</p>
      <p>$960</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (2).svg" alt="Product 3">
      <p>Product 3</p>
      <p>$30.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="../assets/imgs/Frame 570 (3).svg" alt="Product 4">
      <p>Product 4</p>
      <p>$40.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
  </div>
`;
container.appendChild(product);


// banner bo'limi
const bannerImg = document.createElement('div');
bannerImg.className = 'section';
bannerImg.innerHTML = `
 <div class="bannerImg">
    <img src="../assets/imgs/Frame 600.svg" alt="Banner">
 </div>
`

container.appendChild(bannerImg);

// our products
const ourProduct = document.createElement('div');
ourProduct.className = 'section';
ourProduct.innerHTML = `
  <h2>Our Products</h2>
  <div class="products">
    <div class="product">
      <img src="../assets/imgs/Frame 570.svg" alt="asas">
      <p>HAVIT HV-G92 Gamepad</p>
      <p>$120</p>
      <img src="../assets/icon/Five star.svg" alt="asas">

    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (1).svg" alt="Product">
      <p>AK-900 Wired Keyboard</p>
      <p>$960</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (2).svg" alt="Product 3">
      <p>Product 3</p>
      <p>$30.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="../assets/imgs/Frame 570 (3).svg" alt="Product 4">
      <p>Product 4</p>
      <p>$40.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
  </div>
  <div class="products">
    <div class="product">
      <img src="../assets/imgs/Frame 570.svg" alt="asas">
      <p>HAVIT HV-G92 Gamepad</p>
      <p>$120</p>
      <img src="../assets/icon/Five star.svg" alt="asas">

    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (1).svg" alt="Product">
      <p>AK-900 Wired Keyboard</p>
      <p>$960</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="assets/imgs/Frame 570 (2).svg" alt="Product 3">
      <p>Product 3</p>
      <p>$30.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
    <div class="product">
      <img src="../assets/imgs/Frame 570 (3).svg" alt="Product 4">
      <p>Product 4</p>
      <p>$40.00</p>
      <img src="../assets/icon/Five star.svg" alt="asas">
    </div>
  </div>
  <div class="view-all-1">
    <button class="view-all">View All</button>
  </div>
`

container.appendChild(ourProduct);


// arrival
const arrival = document.createElement('div');
arrival.className = 'section';
arrival.innerHTML = `
  <div class="arrival">
    <img src="../assets/imgs/Frame 684.svg" alt="Banner">
    <img src="../assets/imgs/Frame 738.svg" alt="Banner">
 </div>
`

container.appendChild(arrival);

// arrival
const arrivalNew = document.createElement('div');
arrivalNew.className = 'section';
arrivalNew.innerHTML = `
  <div class="arrivalNew">
    <img src="../assets/imgs/Frame 701.svg" alt="Banner">
    <img src="../assets/imgs/Frame 702.svg" alt="Banner">
    <img src="../assets/imgs/Frame 704.svg" alt="Banner">
 </div>
`

container.appendChild(arrivalNew);

// footer
const footer = document.createElement('div');
footer.className = 'section';
footer.innerHTML = `
  <div class="footerImg">
    <img src="../assets/imgs/Footer.svg" alt="Banner">
 </div>
`

containr.appendChild(footer);



// document.body.appendChild(container);
