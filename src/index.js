const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const aList = document.querySelectorAll('a');
console.log(aList)
aList[0].textContent = 'Services';
aList[1].textContent = 'Product';
aList[2].textContent = 'Vision';
aList[3].textContent = 'Features';
aList[4].textContent = 'About';
aList[5].textContent = 'Contact';
aList[6].textContent = 'Copyright Great Idea! 2021';
console.log(aList[5]);

const imgList = document.querySelectorAll('img');
console.log(imgList[0]);
imgList[0].setAttribute('src', 'http://localhost:9000/img/logo.png');
imgList[1].setAttribute('src', 'http://localhost:9000/img/cta.png');
imgList[2].setAttribute('src', 'http://localhost:9000/img/accent.png');

const h4s = document.querySelectorAll('h4');
console.log(h4s);
h4s[0].textContent = 'Features';
h4s[1].textContent = 'About';
h4s[2].textContent = 'Services';
h4s[3].textContent = 'Product';
h4s[4].textContent = 'Vision';
h4s[5].textContent = 'Contact';

const paras = document.querySelectorAll('p');
console.log(paras);
paras[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et.Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paras[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paras[5].textContent = '123 Way 456 Street Somewhere, USA';
paras[6].textContent = '1 (888) 888-8888';
paras[7].textContent = 'sales@greatidea.io';


const h1 =document.querySelector('h1');
console.log(h1);
h1.textContent = 'Dom Is Awesome';

const buttons =document.querySelectorAll('button');
console.log(buttons);
buttons[0].textContent = 'Get Started';