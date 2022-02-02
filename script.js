// animation for products showcase.
// creating variables needed in it.
var prdpar = document.querySelector('#prdpar')
var prd = document.querySelector('#products')
var prdchld = document.querySelectorAll('.product')

// products showcase images
var prdimg = [
    'https://images.unsplash.com/photo-1572811777766-c1e15fc231b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    'https://images.unsplash.com/photo-1557592316-b4877e2bf457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1532986761747-d642d7e195f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1573111251402-76b8c401b009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1573111251402-76b8c401b009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1565588277136-f23d7de6f8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1566886855382-398dceed993e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
]
prdchld.forEach((prdct, i) => {
    prdct.style = `background-image: url("${prdimg[i]}");`
})


// setting width for product's parent.
prd.style.width = ((prdchld[0].getBoundingClientRect().width * prdchld.length) + ((prdchld[1].left - prdchld[0].right) * (prdchld.length + 1)))

// putting value of initial left position of first product in a variable.
var current = prdchld[0].getBoundingClientRect().left

// raising scroll listner for parent products div.
prdpar.addEventListener("scroll", () => {
    // putting new value of initial left position of first product in a variable.
    var newpos = prdchld[0].getBoundingClientRect().left

    // subtracting current value from new value and store it in a variable.
    var diff = newpos - current

    // multiplying some point value to the subtracted value and store it in a variable.
    var speed = Math.floor(diff * .26)

    // updating previous initial value of left position of first product to the new goted value.
    current = newpos

    // checking some sondition to perform animation without any bugs.
    if (prd.getBoundingClientRect().left == prdpar.getBoundingClientRect().left) {
        // know providing skewX value to the product childs to perform animation.
        prdchld.forEach(elm => {
            elm.style.transform = `skewX(0deg)`
        })
    } else {
        prdchld.forEach(elm => {
            elm.style.transform = `skewX(${speed}deg)`
        })
    }

})

// 
// creating products buy button on products showcase card.

prdchld.forEach((div, i) => {
    div.innerHTML = `<div class="bybtn" id="buy-1">
                        Buy Know
                    </div>
                    <div class="add2cart" id="add-1">
                        Add to Cart
                    </div>`
})

var mb = document.querySelector("#menubtn")
var cb = document.querySelector(".ri-close-line")
var fn = document.querySelector("#fullnav")

mb.addEventListener("click", () => {
    fn.style.left = "0%";

})
cb.addEventListener("click", () => {
    fn.style.left = "100%";
})


//  fullnav animation 
var imgarr = [
    "https://images.unsplash.com/photo-1585016326448-428671b934ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1562516120-b6bd4124d669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
    "https://images.unsplash.com/photo-1604133218878-aee3c68a8690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1580149207045-d4625a166fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
]
var hd = document.querySelectorAll("#fnl h1")
var rimg = document.querySelector("#rdisp")
hd.forEach((dets, i) => {
    dets.addEventListener("mousemove", (mp) => {
        dets.children[0].style = `background-image: url("${imgarr[i]}"); transform: translate( ${mp.clientX-130}px, ${mp.clientY - (dets.getBoundingClientRect().top + 230)}px) rotate(${mp.clientX/8-20}deg); opacity: 1 ;`
        rimg.style = `background-image: url("${imgarr[i]}");`
    })
    dets.addEventListener("mouseout", () => {
        dets.children[0].style = `opacity:0;`
    })

})