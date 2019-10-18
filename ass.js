
$('body').click(function() {
  if ($('.wrapper').hasClass('active')) {
      return false;
  } else if ($('.wrapper').hasClass('search')) {
      $('.wrapper').addClass('active');
      $('#three').velocity({
          width: '0',
          borderRadius: '0',
          rotateZ: '-45deg'
      }, {
          duration: 250,
          easing: 'easeOutSine',
          complete: function() {
              $('#three').velocity({
                  left: '62px',
                  borderWidth: '1px',
                  top: '38px'
              }, {
                  duration: 250,
                  easing: 'easeOutSine'
              });
          }
      });
      $('#two').velocity({
          rotateZ: '225deg'
      }, {
          duration: 500,
          easing: 'easeOutSine',
          complete: function() {
              $('.wrapper').removeClass('active');
          }
      });
      $('.wrapper').addClass('close').removeClass('search');
  } else if ($('.wrapper').hasClass('close')) {
      $('.wrapper').addClass('active');
      $('#three').velocity('reverse', {
          duration: 250,
          easing: 'easeOutSine',
          complete: function() {
              $('#three').velocity({
                  width: '50px',
                  borderRadius: '50%'
              }, {
                  duration: 250,
                  easing: 'easeOutSine'
              });
          }
      });
      $('#two').velocity({
          rotateZ: '-45deg'
      }, {
          duration: 500,
          easing: 'easeOutSine',
          complete: function() {
              $('.wrapper').removeClass('active');
          }
      });
      $('.wrapper').addClass('search').removeClass('close');
  }
});
