$('.comments').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1160,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});