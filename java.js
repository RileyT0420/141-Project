

$(document).ready(function () {
    const raiderLogo = $('#raiderLogo');

    function setDimmedState(dimmed) {
        if (dimmed) {
            raiderLogo.attr('data-dimmed', 'true');
        } else {
            raiderLogo.attr('data-dimmed', 'false');
        }
    }

    function checkIfAnyOpen() {
        if ($('.multi-collapse.show').length > 0) {
            setDimmedState(true);
        } else {
            setDimmedState(false);
        }
    }

    $('.learn-more-btn').on('click', function (e) {
        e.preventDefault(); 
        const targetId = $(this).attr('href');

        $('.multi-collapse').not(targetId).collapse('hide');
        $(targetId).collapse('show');
    });

    $('.multi-collapse').on('shown.bs.collapse', function () {
        const card = $(this).closest('.card');
        card.addClass('active-mask');
        setDimmedState(true);
    });

    $('.multi-collapse').on('hidden.bs.collapse', function () {
        const card = $(this).closest('.card');
        card.removeClass('active-mask');
        checkIfAnyOpen();
    });

    $('.card').hover(
        function () {
            if ($(this).find('.multi-collapse.show').length > 0) {
                $(this).addClass('active-mask');
            }
        },
        function () {
            if (!$(this).find('.multi-collapse.show').length) {
                $(this).removeClass('active-mask');
            }
        }
    );

    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

$(document).ready(function () {
  $('.card').hide().each(function (i) {
    $(this).delay(i * 200).fadeIn(500);
  });
});

$(document).ready(function () {
    $(window).on('scroll', function () {
      const sectionOffset = $('#upcoming-events').offset().top;
      const scrollPosition = $(window).scrollTop() + $(window).height();
  
      if (scrollPosition > sectionOffset) {
        $('.card').hide().each(function (i) {
          $(this).delay(i * 200).fadeIn(500);
        });
      }
    });
  });
  
});

