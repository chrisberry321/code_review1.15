$(document).ready(function() {
  $('#blanks form').submit(function(event) {

      age = parseInt($("input#age1").val());
      gender = $("select#gender1").val();
      orientation = $("select#orientation1").val();
      tempPreferance = $("select#tempPreferance1"). val();
      partySize =parseInt($("input#partySize").val());

      if (age >=35) {
        if (gender === "Female" && tempPreferance === "Hot" || gender === "Male" && tempPreferance === "Hot") {
        $('#container-result2').show();
        }
        else {
          $('#container-result1').show();
          }
        }

      if (age <35) {
        if (gender === "Female" && tempPreferance === "Hot" || gender === "Male" && tempPreferance === "Hot") {
        $('#container-result4').show();
        }
        else {
          $('#container-result3').show();
          }
        }

        
  // Another way to get the same results! Just a different way of thinking about the code.
      // if (age >= 35){
      //   if (gender === "Female"){
      //     if (tempPreferance === "Hot") {
      //       $('#container-result2').show();
      //     }
      //     else {
      //       $('#container-result1').show();
      //     }
      //   }
      //   else {
      //     if (tempPreferance === "Cold"){
      //       $('#container-result1').show();
      //     }
      //     else {
      //       $('#container-result2').show();
      //     }
      //   }
      // }
      // else {
      //   if (gender === "Female"){
      //       if (tempPreferance === "Cold"){
      //         $('#container-result3').show();
      //       }
      //       else{
      //         $('#container-result4').show();
      //       }
      //   }
      //   else{
      //     if (tempPreferance === "Hot") {
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
