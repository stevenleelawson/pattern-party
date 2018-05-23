
  $('.accordion-tabs').each(function(index) {
    console.log(this)
    $(this).children('li').first().children('a').addClass('active').next().addClass('open').show();
  });

  $('.accordion-tabs').on('click', 'li > .tab-anchor', function(event) {
    if (!$(this).hasClass('active')) {
      event.preventDefault();
      const accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.open').removeClass('open').hide();

      $(this).next().toggleClass('open').toggle();
      accordionTabs.find('.active').removeClass('active');
      $(this).addClass('active');
    } else {
      event.preventDefault();
    }
  });
