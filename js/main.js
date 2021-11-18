
// active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
        
    })
    
})

// counter design

document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / 0)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);

});

//.............Subscribe...........

const form = document.querySelector("form");
    const input = document.querySelector("#email");
    const subAlert = document.querySelector("#subAlert")
    let items;

    eventListeners();

    function eventListeners() {
      form.addEventListener('submit', subscribe);
      form.addEventListener('reset', unSubscribe);

    }

    function unSubscribe() {
      if(confirm('Are you sure ?')) {
        localStorage.clear();
      }
      
      subAlert.classList.add('visually-hidden');
      
    }

    function subscribe(e) {
      if (input.value === '') {
        alert('Please add your email');
      } else {
        subAlert.classList.remove('visually-hidden');
        setItemToLS(input.value);
        
      }
     
      input.value = '';

      e.preventDefault();
    }

    function getItemsFromLS() {
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));

      }
      return items;

    }

    function setItemToLS(email) {

      items = getItemsFromLS();
      items.push(email);
      localStorage.setItem('items', JSON.stringify(items));

    }


