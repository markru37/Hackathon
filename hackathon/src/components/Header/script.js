import $ from 'jquery';
const startFunc = () => {
    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });
};

const loadMyScript = () => window.addEventListener('load', startFunc());

export default loadMyScript;
