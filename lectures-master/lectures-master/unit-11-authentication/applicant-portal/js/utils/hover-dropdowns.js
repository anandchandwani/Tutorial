module.exports = (toggler, menu, focus) => {
  toggler.on('mouseenter', expand);
  menu.on('mouseenter', expand);
  toggler.on('mouseleave', collapse);
  menu.on('mouseleave', collapse);
  
  function collapse() {
    var shouldNotClose = focus && focus.is(':focus');
    if(toggler.attr('aria-expanded') === 'true' && !shouldNotClose)
      toggler.dropdown('toggle');
  }
  function expand() {
    if(toggler.attr('aria-expanded') === 'false')
      toggler.dropdown('toggle');
  }
}