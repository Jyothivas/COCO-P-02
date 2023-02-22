$(document).ready(function() {
    var table = $('#employee-table').DataTable({
      columnDefs: [
        { orderable: false, targets: -1 }
      ]
    });

    $('#employee-form').on('submit', function(e) {
      e.preventDefault();

      var email = $('#email').val();
      var age = $('#age').val();
      var gender = $('input[name="gender"]:checked').val();

      if (validateEmail(email)) {
        var data = [getSerialNumber(), email, age, gender, '<button class="delete-button">Delete</button>'];
        table.row.add(data).draw(false);
        $('#employee-form')[0].reset();
      } else {
        $('.error-message').show();
      }
    });

    $('#employee-table tbody').on('click', '.delete-button', function() {
      table.row($(this).parents('tr')).remove().draw(false);
    });

    function getSerialNumber() {
      return table.data().length + 1;
    }

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });