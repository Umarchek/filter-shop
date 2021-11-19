var clothing = $('.category--clothing')
var shoes = $('.category--shoes')
var accessories = $('.category--accessories')

$('#filter-clothing').on('click', () => {
    clothing.removeClass('hide')
    shoes.addClass('hide')
    accessories.addClass('hide')
})
$('#filter-shoes').on('click', () => {
    clothing.addClass('hide')
    accessories.addClass('hide')
    shoes.removeClass('hide');
})
$('#filter-accessories').on('click', () => {
    shoes.addClass('hide')
    clothing.addClass('hide')
    accessories.removeClass('hide');
})