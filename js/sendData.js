//newsletter email submition
$("#subscription-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyyn6inDthfeWjQgMBg2Ox1HxI3jGpyYeAR6rX3tOXSQPq52pRiHhgBnnPr0J6O_xuK/exec",
    data: $("#subscription-form").serialize(),
    method: "post",
    success: function (response) {
      alert("subscription applied");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Wrong!");
    },
  });
});

//contact-from submittion
$("#contact-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwKwgrtVQIGO8s9_t14q07jaoWKVABzjAKI8Q2mfu1yIOjN8_iX4PGBiX-kVgnY37lEHQ/exec",
    data: $("#contact-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Message Sent Successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Wrong!");
    },
  });
});
