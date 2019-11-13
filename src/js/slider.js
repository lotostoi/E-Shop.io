window.onload = function () {
    let d = document
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
                        console.log(count)
                    }
                })
            }
            if (target.dataset['id'] == 'next') {
                count++
                if (count > [...d.querySelectorAll('.bunner')].length) {
                    count = 1
                }
                console.log(count)
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

    d.querySelector('.menuTop__iconMemu').addEventListener('click', clickHendler)

    function clickHendler(evt) {
        if ((evt.target.className == "menuTop__iconMemu") || (evt.target.className == "menuTop__iconMemu menuTop__iconMemu-activ")) {
            evt.target.classList.toggle('menuTop__iconMemu-activ')
            d.querySelector('.menuTop__nav').classList.toggle('menuTop__nav-activ')
            let iconMenu = d.querySelectorAll('.menuTop__line')
            iconMenu.forEach((el, i) => {
                iconMenu[i].classList.toggle('menuTop__line-activ')
            })
            console.log(evt.target.parentNode);
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

}