$(document).ready(function() {
  $('#blanks form').submit(function(event) {

      age = parseInt($("input#age1").val());
      gender = $("select#gender1").val();
      orientation = $("select#orientation1").val();
      tempPreferance = $("select#tempPreferance1"). val();


      if (age >=35 && gender === "Female" && tempPreferance === "Hot" || age >=35 && gender === "Male" && tempPreferance === "Hot") {
        $('#container-result2').show();
        }
        if(age >=35 && gender === "Female" && tempPreferance === "Cold" || age >=35 && gender === "Male" && tempPreferance === "Cold") {
          $('#container-result1').show();
          }
      if (age <35 && gender === "Female" && tempPreferance === "Hot" || age <35 && gender === "Male" && tempPreferance === "Hot") {
        $('#container-result4').show();
        }
        if(age <35 && gender === "Female" && tempPreferance === "Cold" || age <35 && gender === "Male" && tempPreferance === "Cold") {
          $('#container-result3').show();
        }
  // Another way to get the same results! Just a different way of thinking about the code.
      // if (age >= 35){
      //   if (gender === "Female"){
      //     if (orientation === "Straight") {
      //       $('#container-result2').show();
      //     }
      //     else {
      //       $('#container-result1').show();
      //     }
      //   }
      //   else {
      //     if (orientation === "Straight"){
      //       $('#container-result1').show();
      //     }
      //     else {
      //       $('#container-result2').show();
      //     }
      //   }
      // }
      // else {
      //   if (gender === "Female"){
      //       if (orientation === "Straight"){
      //         $('#container-result3').show();
      //       }
      //       else{
      //         $('#container-result4').show();
      //       }
      //   }
      //   else{
      //     if (orientation === "Straight") {
      //       $('#container-result4').show();
      //     }
      //     else {
      //       $('#container-result3').show();
      //     }
      //   }
      // }

    event.preventDefault();
  });
});
