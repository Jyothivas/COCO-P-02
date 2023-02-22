function AddRow(){

    let srNum =employeeData.length+1;
    var Email = document.getElementById('email').value;
    var Age = document.getElementById('age').value;
    var Gender = document.querySelector('input[name="gender"]:checked').value;
    var Action = '<a>Delete</a>'

    
    employeeData.push([srNum,Email,Age,Gender,Action]);

    $('#example').on('draw.dt', function(){
    }).DataTable({
        data:employeeData,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })

} 


 function deleteEmployee(empId){

    console.log(empId);
       
    for( var i = 0; i < employeeData.length; i++){ 
    
        if ( employeeData[i][i] === empId) { 
    
            employeeData.splice(i, 1); 
        }

    
    }
    console.log(employeeData)
    $('#example').on('draw.dt', function(){
    }).DataTable({
        data:employeeData,
      'destroy': true,
      'paging': true,
      'lengthChange': true,
      'searching': true,
      'ordering': true,
      'info': true,
      'autoWidth': true 
    })
} 
