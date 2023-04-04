/* max height*/
$("#menu > ul > li").each(function(){
  var maxHeight = 0;
  var myUl=$("ul", $(this));
  
  myUl.each(function(){
    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });
  
  myUl.height(maxHeight);

  // Show the 'right arrow' only when there is a submenu
  if ($(this).find('ul').length > 0) {
    $(this).find('a').addClass('show-arrow');
      $('#promo').css('order', 1); $(this).find('ul').css('order', 0);
  }
});





/*promo column*//*
var submenus = $('#menu ul ul');
var promo = $('#promo');


// Add event listener to each submenu item
submenus.hover(function() {
  // Show the promo column
  $(this).parent().append(promo.removeClass('promo-hidden'));
  var position = $(this).position().left + $('#menu ul ul').outerWidth();
  promo.css({left: position, top: $(this).position().top});
  promo.css('right', $('#menu ul ul ').outerWidth());

}, function() {
  // Hide the promo column
  promo.addClass('promo-hidden');
});

*/



/*
// Add event listener to the main nav bar
$('#menu').hover(function() {}, function() {
  // Hide the promo column when mouse moves out of the nav bar
  promo.addClass('promo-hidden');
});

$(document).ready(function() {
  $('.has-submenu').hover(function() {
    $(this).children('ul').stop(true, true).fadeIn(200);
    if ($(this).closest('ul').hasClass('submenu')) {
      $(this).closest('.submenu').siblings('.promo').find('.promo-hidden').stop(true, true).fadeOut(200);
    }
  }, function() {
    $(this).children('ul').stop(true, true).fadeOut(200);
    if ($(this).closest('ul').hasClass('submenu')) {
      $(this).closest('.submenu').siblings('.promo').find('.promo-hidden').stop(true, true).fadeIn(200);
    }
  });
});
















/*
// get a reference to the #promo element
const promo = document.getElementById('promo');

// get all the list items in the menu
const listItems = document.querySelectorAll('li');

// loop through the list items and add event listeners to each one
listItems.forEach(item => {
  // add event listener for mouseenter event
  item.addEventListener('mouseenter', () => {
    // check if the current item is not the one with the #promo element
    if (!item.contains(promo)) {
      // hide the #promo element
      promo.style.display = 'none';
    }
  });
});

// add event listener for mouseleave event on the entire menu
document.querySelector('ul').addEventListener('mouseleave', () => {
  // show the #promo element again
  promo.style.display = 'block';
});


*/


/*

$(document).ready(function() {
  $('#menu li').hover(function() {
    if ($(this).find('ul').length > 0) {
      $('#promo').hide();
    } else {
      $('#promo').show();
    }
  }, function() {
    $('#promo').hide();
  });
});
*/


/*

/*promo column*//*
var submenus = $('#menu ul ul');
var promo = $('#promo');


// Add event listener to each submenu item
submenus.hover(function() {
  // Show the promo column
  $(this).parent().append(promo.removeClass('promo-hidden'));
  var position = $(this).position().left + $('#menu ul ul').outerWidth();
  promo.css({left: position, top: $(this).position().top});
  promo.css('right', $('#menu ul ul ').outerWidth());

}, function() {
  // Hide the promo column
  promo.addClass('promo-hidden');
});

// Add event listener to the main nav bar
$('#menu').hover(function() {}, function() {
  // Hide the promo column when mouse moves out of the nav bar
  promo.addClass('promo-hidden');
});
*/























/*

    var promoLinks = document.querySelectorAll('.promo-link');

    promoLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            var promo = this.nextElementSibling;
            if (promo.classList.contains('promo-hidden')) {
                promo.classList.remove('promo-hidden');
            }
        });

        link.addEventListener('mouseleave', function() {
            var promo = this.nextElementSibling;
            if (!promo.classList.contains('promo-hidden')) {
                promo.classList.add('promo-hidden');
            }
        });
    });

*/















/*prom column*/ /*

const prom = document.getElementById('prom');

// get all the list items in the menu
const listItems = document.querySelectorAll('li');

// loop through the list items and add event listeners to each one
listItems.forEach(item => {
  // add event listener for mouseenter event
  item.addEventListener('mouseenter', () => {
    // check if the current item is not the one with the #promo element
    if (!item.contains(prom)) {
      // hide the #promo element
      prom.style.display = 'none';
    }
  });
});

// add event listener for mouseleave event on the entire menu
document.querySelector('ul').addEventListener('mouseleave', () => {
  // show the #promo element again
  prom.style.display = 'block';
});

*/








/*
var submenus = $('#menu ul ul');
var promo = $('#promo');
var timeout;

// Add event listener to each submenu item
submenus.hover(function() {
  var self = $(this);
  clearTimeout(timeout);

  // Show the promo column
  self.parent().append(promo.removeClass('promo-hidden'));
  var position = self.position().left + self.outerWidth();
  promo.css({ left: position, top: self.position().top });
  promo.css('right', $('#menu ul ul ').outerWidth());
  timeout = setTimeout(function() {
    // Show the promo column
    promo.removeClass('promo-hidden');
    var lastSubmenu = self.find('li:last');
    position = lastSubmenu.position().left + lastSubmenu.outerWidth() + promo.outerWidth();
    promo.css({ left: position, top: self.position().top });
  }, 500); // 500 milliseconds delay
 
}, function() {
  // Hide the promo column
  clearTimeout(timeout);
  promo.addClass('promo-hidden').appendTo($('#main'));
});


*//*

function togglePromo() {
  const promo = document.getElementById("promo");
  const menu = document.getElementById("menu");

  if (promo.classList.contains("promo-hidden")) {
    promo.classList.remove("promo-hidden");
    menu.style.gridTemplateColumns = "3fr 1fr";
  } else {
    promo.classList.add("promo-hidden");
    menu.style.gridTemplateColumns = "1fr";
    const lastSubColumn = document.querySelector("#menu ul ul li:last-child ul");
    if (lastSubColumn) {
      lastSubColumn.style.display = "none";
    }
  }
}

*/


/*   screen size*/
$(document).ready(function() {
  // Set the initial state of the menu
  setMenuState();

  // Call setMenuState() on window resize
  $(window).resize(function() {
    setMenuState();
  });

  // Function to set the state of the menu based on screen size
  function setMenuState() {
    var windowWidth = $(window).width();
    var mobileBreakpoint = 768;

    // If the screen size is smaller than the mobile breakpoint, collapse the menu
    if (windowWidth < mobileBreakpoint) {
      $('#menu').removeClass('expanded');
    }
    // If the screen size is larger than the mobile breakpoint, expand the menu
    else {
      $('#menu').addClass('expanded');
    }
  }

  // Toggle the menu when the button is clicked
  $('#menu-toggle').click(function() {
    $('#menu').toggleClass('expanded');
  });
});

/*
$(document).ready(function() {

  var hoverTimeout;

  $("#menu > ul > li").hover(function() {
    var $this = $(this);
    clearTimeout(hoverTimeout);
    $this.addClass("hover");
    $('ul:first', $this).css('visibility', 'visible');
  }, function() {
    var $this = $(this);
    hoverTimeout = setTimeout(function() {
      $this.removeClass("hover");
      $('ul:first', $this).css('visibility', 'hidden');
    }, 500); // Set the delay time in milliseconds here (currently set to 500ms)
  });

  $("#menu > ul > li:has(ul) > ul > li").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  });

});

*/