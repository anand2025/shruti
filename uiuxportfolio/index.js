// Smooth scrolling
$('.smooth-scroll').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    });
    
    // Project modal
    $('.project img').click(function() {
    var modalImg = $(this).attr('src');
    var modalTitle = $(this).siblings('h3').text();
    var modalDesc = $(this).siblings('p').text();
    
    $('#project-modal img').attr('src', modalImg);
    $('#project-modal h3').text(modalTitle);
    $('#project-modal p').text(modalDesc);
    
    $('#project-modal').fadeIn();
    });
    
    $('#project-modal').click(function() {
    $(this).fadeOut();
    });