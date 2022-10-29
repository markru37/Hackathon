/* eslint-disable no-restricted-globals */
const startFunc = () => {
    const rmapBullet = document.querySelectorAll('.roadmap_bullet');
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
        window.addEventListener('scroll', () => {
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
};
const loadMyScript = () => window.addEventListener('load', startFunc());

export default loadMyScript;
