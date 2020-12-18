window.onscroll = function() { menuScroll() };

function menuScroll() {
  const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const floatMenu = document.getElementsByClassName('hummel__pdp__float')[0];
  windowScroll > 200 ?
    floatMenu.style.cssText = "max-height: 150px" :
    floatMenu.style.cssText = "max-height: 0";
}

const descButton = document.querySelector('.hummel__pdp__especifications__descriptions');
descButton.addEventListener('click', function() {
  document.querySelector('#productdescription').classList.toggle('is-active');
  document.querySelector('.hummel__pdp__especifications__descriptions > h3').classList.toggle('is-minus');
});

const caracButton = document.querySelector('.hummel__pdp__especifications__feat');
caracButton.addEventListener('click', function() {
  document.querySelector('.hummel__pdp__especifications__feat-box').classList.toggle('is-active');
  document.querySelector('.hummel__pdp__especifications__feat > h3').classList.toggle('is-minus');
});