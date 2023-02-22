
    $(document).ready(function() {
        // Initialize DataTable
        var table = $('#employeeTable').DataTable();

        // Add new row to DataTable
        $('#employeeForm').submit(function(e) {
            e.preventDefault();

            // Get input values
            var email = $('#email').val();
            var age = $('#age').val();
            var gender = $('input[name=gender]:checked').val();

            // Validate email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Invalid email address.');
                return;
            }

            // Generate serial number
            var serialNumber = table.rows().count() + 1;

            // Add row to DataTable
            table.row.add([serialNumber, email, age, gender, '<button class="deleteButton">Delete</button>']).draw(false);

            // Clear form
            $('#email').val('');
            $('#age').val('');
            $('input[name=gender]').prop('checked', false);
        });

        // Delete row from DataTable
        $('#employeeTable').on('click', '.deleteButton', function() {
            table.row($(this).parents('tr')).remove().draw(false);
        });
    });
