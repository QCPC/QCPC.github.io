$(document).ready(() => {
  $('#hbtn').on('click', function () {
    $this = $(this);
    if (!$this.children().hasClass('active')) {
      $this.children('li').attr('class', 'active');
    } else {
      $this.children('li').attr('class', 'not-active');
    }
  });
});