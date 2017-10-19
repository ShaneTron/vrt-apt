$(document).ready(function() {
  $("#patientInfo").submit(function(event) {
    var name = $("input#patientName").val();
    var purpose = $("#action").val();
    var date = $("#patientDate").val();
    var time = $("input#patientTime").val();
    var type = $("input:radio[name=type]:checked").val();


    $(".name").text(name);
    $(".purpose").text(purpose);
    $(".date").text(date);
    $(".time").text(time);
    $(".type").text(type);


    $("#confirmation").show();
    $("#patientInfo").hide();

    event.preventDefault();
  });
});
