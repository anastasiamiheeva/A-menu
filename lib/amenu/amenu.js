(() => {
    let burgerWidth = 0

    const init = (menu, menuList, itemsMenu, burgerMenu) => {
        itemsMenu.forEach(elem => {
            elem.classList.add('amenu__item');
        });

        burgerMenu.classList.add('.amumu__burger');

        const [burgerBtn, burgerList] = createBurgerMenu(burgerMenu)

        updateMenu(menu, menuList, burgerBtn, burgerMenu, burgerList)
    };

    const createBurgerMenu = (parentBurger) => {
        const burgerBtn = document.createElement('button');
        parentBurger.append(burgerBtn);
        burgerBtn.classList.add('amenu__burger-btn');

        burgerBtn.addEventListener('click', () => {
            parentBurger.classList.toggle('amenu__burger-open')
        })

        const burgerList = document.createElement('ul');
        parentBurger.append(burgerList);
        burgerList.classList.add('amenu__burger-list');

        return [burgerBtn, burgerList];
    };

    const updateMenu = (menu, menuList, burgerBtn, burgerMenu, burgerList) => {
        const menuItems = menuList.querySelectorAll('.amenu__item');
        const burgerItems = burgerList.querySelector('.amenu__item');

        const widthMenu = menu.offsetWidth;
        burgerWidth = burgerMenu.offsetWidth || burgerWidth;

        const widthAllItems = [...menuItems].reduce((acc, elem) => {
            return acc + elem.offsetWidth + getComputedStyle(elem).marginRight
            
        }, 0);
        console.log(widthAllItems );
        

    }

    window.amenu = (selectorMenu, selectorMenuList, 
        selectorItemsMenu, selectorBurgerMenu) => {
        const menu = document.querySelector(selectorMenu),
            menuList = document.querySelector(selectorMenuList),
            itemsMenu = document.querySelectorAll(selectorItemsMenu),
            burgerMenu = document.querySelector(selectorBurgerMenu);

        init(menu, menuList, itemsMenu, burgerMenu)
    };

    

})()