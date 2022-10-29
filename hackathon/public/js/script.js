'use strict';

const paralax = document.querySelector('.paralax');

let box = paralax.getBoundingClientRect().top + window.scrollY;
const header = document.querySelector('.header');

const rmapBullet = document.querySelectorAll('.roadmap_bullet');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.addEventListener('scroll', () => {
        let offset = window.scrollY;

        if (offset > 0) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }

        for (let index = 0; index < rmapBullet.length; index++) {
            const rmapBulle = rmapBullet[index];
            const rmapBulletTop = rmapBulle.getBoundingClientRect().top;
            const windowElement = document.documentElement;
            const windowElementHeight = windowElement.clientHeight;
            if (rmapBulletTop <= windowElementHeight / 2) {
                rmapBulle.classList.add('_centerBullit');
            } else {
                rmapBulle.classList.remove('_centerBullit');
            }

            const rmapBulle1 = rmapBullet[0];
            const aa = rmapBulle1.getBoundingClientRect().top + pageYOffset;
            const aaa = rmapBulle1.getBoundingClientRect().top;
            const lineActive = document.querySelector('.line-active');
            const yOffset = window.pageYOffset;
            let s = 0;
            if (rmapBulletTop <= windowElementHeight / 2 && yOffset + aaa <= aa) {
                let f = yOffset - aa + windowElementHeight / 2;
                lineActive.style.height = f + 'px';
            }
        }
    });
} else {
    window.addEventListener('scroll', () => {
        let offset = window.scrollY;

        paralax.style.backgroundPositionY = (offset - box) * 0.7 + 'px';

        if (offset > 0) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }

        for (let index = 0; index < rmapBullet.length; index++) {
            const rmapBulle = rmapBullet[index];
            const rmapBulletTop = rmapBulle.getBoundingClientRect().top;
            const windowElement = document.documentElement;
            const windowElementHeight = windowElement.clientHeight;
            if (rmapBulletTop <= windowElementHeight / 2) {
                rmapBulle.classList.add('_centerBullit');
            } else {
                rmapBulle.classList.remove('_centerBullit');
            }

            const rmapBulle1 = rmapBullet[0];
            const aa = rmapBulle1.getBoundingClientRect().top + pageYOffset;
            const aaa = rmapBulle1.getBoundingClientRect().top;
            const lineActive = document.querySelector('.line-active');
            const yOffset = window.pageYOffset;
            let s = 0;
            if (rmapBulletTop <= windowElementHeight / 2 && yOffset + aaa <= aa) {
                let f = yOffset - aa + windowElementHeight / 2;
                lineActive.style.height = f + 'px';
            }
        }
    });
}

const animItems = document.querySelectorAll('._anim-items');

window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (
            pageYOffset > animItemOffset - animItemPoint &&
            pageYOffset < animItemOffset + animItemHeight
        ) {
            animItem.classList.add('_active');
        }
    }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
setTimeout(() => {
    animOnScroll();
}, 300);

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('.block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

let myImageSlider = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    centered: true,
    paginationClickable: true,
    spaceBetween: 0,
});

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });
            e.preventDefault();
        }
    }
}

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue =
        window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
