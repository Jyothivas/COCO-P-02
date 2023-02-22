$(document).ready(function() {
    var table = $('#employeeTable').DataTable();
    
    $('#submit').click(function() {
      var email = $('#email').val();
      var age = $('#age').val();
      var gender = $('input[name="gender"]:checked').val();
      
      if (emailIsValid(email)) {
        table.row.add([email, age, gender, '<button class="deleteRow">Delete</button>']).draw(false);
        $('#email').val('');
        $('#age').val('');
        $('input[name="gender"]').prop('checked', false);
        $('#emailError').text('');
      } else {
        $('#emailError').text('Please enter a valid email address');
      }
    });
    
    $('#employeeTable tbody').on('click', '.deleteRow', function () {
      var row = $(this).closest('tr');
      table.row(row).remove().draw();
    });
  });
  
  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }