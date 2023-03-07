
$(document).ready(function() {
  var table = $('#employee-table').DataTable({
    "columnDefs": [{
      "targets": -1,
      "data": null,
      "defaultContent": "<button class='delete-btn'>Delete</button>"
    }]
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var email = $('input[name="email"]').val();
    var age = $('input[name="age"]').val();
    var gender = $('input[name="gender"]:checked').val();
    var row = [table.rows().count() + 1, email, age, gender];
    table.row.add(row).draw(false);
    $('input[name="email"], input[name="age"]').val('');
    $('input[name="gender"]').prop('checked', false);

  });

  $('#employee-table tbody').on('click', '.delete-btn', function() {
    var row = table.row($(this).parents('tr'));
    row.remove().draw(false);
  });
});
