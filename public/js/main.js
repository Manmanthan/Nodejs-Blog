$(document).ready(function () {
  $('.delete-article').on('click', function (e) {
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: '/articles/' + id,
      success: function (response) {
        alert('Deleting Article');
        window.location.href = '/';
      },
      error: function (err) {
        console.log(err);
      }
    });
  });
});

$(document).ready(function () {
  if (window.location.href.indexOf("add") > -1) {
    document.getElementById('add-article').className = "active";
  } else if (window.location.href.indexOf("login") > -1) {
    document.getElementById('login').className = "active";
  } else if (window.location.href.indexOf("register") > -1) {
    document.getElementById('register').className = "active";
  } else if (window.location.href.indexOf("/articles/") > -1) {
  } else {
    document.getElementById('home-page').className = "active";
  }

  setTimeout(function () {
    if ($('#message-div').length > 0) {
      $('#message-div').delay(1500).fadeOut(500);
    }
  }, 1500)
});
