window.onload = function () {
    let d = document


    // *********************** Slider ************************************ //
    // *********************** Slider ************************************ //
    // *********************** Slider ************************************ //
    let count = 1
    d.querySelector('.slider').addEventListener('click', workClick)

    function workClick(evt) {

        let target = evt.target
        d.querySelector('.slider').removeEventListener('click', workClick)
        clickHandler(target, add)

        function add() {
            d.querySelector('.slider').addEventListener('click', workClick)
        }

        function clickHandler(evt) {
            if (target.dataset['number']) {
                d.querySelectorAll('.bunner').forEach((el, i) => {
                    if (el.dataset['id'] === target.dataset['number']) {
                        d.querySelectorAll('.bunner').forEach(el => {
                            el.classList.remove('bunnerActiv')
                        })
                        d.querySelectorAll('.check').forEach(el => {
                            el.classList.remove('checkActiv')
                        })
                        el.classList.add('bunnerActiv')
                        target.classList.add('checkActiv')
                        count = i + 1
                    }
                })
            }
            if (target.dataset['id'] == 'next') {
                count++
                if (count > [...d.querySelectorAll('.bunner')].length) {
                    count = 1
                }
                d.querySelectorAll('.bunner').forEach(el => {
                    if (el.dataset['id'] == count) {
                        d.querySelectorAll('.bunner').forEach(el => {
                            el.classList.remove('bunnerActiv')
                        })
                        d.querySelectorAll('.check').forEach(el => {
                            el.classList.remove('checkActiv')
                        })
                        el.classList.add('bunnerActiv')
                        d.querySelectorAll('.check').forEach(el => {
                            if (el.dataset['number'] == count) {
                                el.classList.add('checkActiv')
                            }
                        })
                    }
                })
            }
            setTimeout(() => {
                add.call(window)
            }, 610)
        }

    }

    //  ********************************Adept menu************************************ //
    //  ********************************Adept menu************************************ //
    //  ********************************Adept menu************************************ //

    d.querySelector('.menuTop__iconMemu').addEventListener('click', clickHendler)

    function clickHendler(evt) {
        if ((evt.target.className == "menuTop__iconMemu") || (evt.target.className == "menuTop__iconMemu menuTop__iconMemu-activ")) {
            evt.target.classList.toggle('menuTop__iconMemu-activ')
            d.querySelector('.menuTop__nav').classList.toggle('menuTop__nav-activ')
            let iconMenu = d.querySelectorAll('.menuTop__line')
            iconMenu.forEach((el, i) => {
                iconMenu[i].classList.toggle('menuTop__line-activ')
            })
        }

        if ((evt.target.className == "menuTop__line") || (evt.target.className == "menuTop__line menuTop__line-activ")) {
            let par = evt.target.parentNode
            par.classList.toggle('menuTop__iconMemu-activ')
            d.querySelector('.menuTop__nav').classList.toggle('menuTop__nav-activ')
            let iconMenu = d.querySelectorAll('.menuTop__line')
            iconMenu.forEach((el, i) => {
                iconMenu[i].classList.toggle('menuTop__line-activ')
            })
        }

    }

    // ************************* Drop menus from block search *************************//
    // ************************* Drop menus from block search *************************//
    // ************************* Drop menus from block search *************************//

    d.querySelector('.search').addEventListener('click', workClickk)

    function workClickk(evt) {
        if (evt.target.parentNode.className === "search__typeSort") {
            d.querySelector('.search__paramasSort').classList.toggle('search__paramasSort-active')
        }
        if (evt.target.parentNode.className === "search__paramasSort search__paramasSort-active") {
            d.querySelector('.search__valueSort').innerHTML = evt.target.innerHTML
            d.querySelector('.search__paramasSort').classList.toggle('search__paramasSort-active')
        }

        if (evt.target.parentNode.className === "search__contShips") {
            d.querySelector('.search__listAreasShips').classList.toggle('search__listAreasShips-active')
        }
        if (evt.target.parentNode.className === "search__listAreasShips search__listAreasShips-active") {
            d.querySelector('.search__areaship').innerHTML = evt.target.innerHTML
            d.querySelector('.search__listAreasShips').classList.toggle('search__listAreasShips-active')
        }
    }

    // ********************************* Create HTML *************************************** //
    // ********************************* Create HTML *************************************** //
    // ********************************* Create HTML *************************************** //

    let name = [] //list names
    let id = [] //list id
    let brand = [] // brands list
    let price = [] // prices list
    let country = [] // countrys list
    let ship = [] //ships list
    let img = [] // img list


    class product {
        constructor(title, price, brand, country, ship, img) {
            this.name = title;
            this.price = price;
            this.brand = brand;
            this.country = country;
            this.ship = ship;
            this.img = img
        }
        render () {
            return `<div class="contItem">
                        <img src="${this.img}" width="198" height="180" alt="imgProduct" class="contItem__img">
                        <span class="contItem__name">${this.name}</span>
                        <span class="contItem__price">${this.price}</span>
                        <button class="contItem__button">add to cart</button>
                    </div>`
        }
    }

    class contProduct {
        constructor(className) {
            this.className = className;
            this.arrElems = [];
        } 
        fetchProduct () {
            var xhr
            if (window.XMLHttpRequest) {
              xhr = new XMLHttpRequest()
            } else if (window.ActiveXObject) {          
              xhr = new ActiveXObject("Microsoft.XMLHTTP")
            }
            xhr.open('GET', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json', true)
            xhr.send();
             xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.responseText)
                }
              } 






            this.arrElems = [
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"},
                {name: "sameName", price: '$10', brand: 'samsung', country: 'USA', ship: 'free' , img: "build/img/Photo1.png"}
            ] 
        }
        render () {
             let listProduct=''
            for (let i=0; i < this.arrElems.length; i++) {
                let Product = new product (this.arrElems[i].name+(i+1),
                                           this.arrElems[i].price,
                                           this.arrElems[i].brand,
                                           this.arrElems[i].country,
                                           this.arrElems[i].ship,
                                           this.arrElems[i].img) 
                listProduct +=  Product.render()
            }
           d.querySelector(this.className).innerHTML = listProduct 
        }
    }

    let pageShop = new contProduct ('.productsPage')
    pageShop.fetchProduct()
    pageShop.render()
    console.log(pageShop)
}