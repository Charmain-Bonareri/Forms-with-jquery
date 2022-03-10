// $(document).ready(function() {
//     $("#blanks form").submit(function() {
//         $(".person1").append("blah blah");
//         $(".person2").append("blah blah");
//         $(".animal").append("blah blah");
//         $(".exclamation").append("blah blah");
//         $(".verb").append("blah blah");
//         $(".noun").append("blah blah");
 
//         $("#story").show(); //But when we submit the form, the story briefly flashes and then disappears.
//     });
//  });
//  The submit() function attaches an event listener for when a form is submitted.
//  It's different from the click() function because a form can be submitted by clicking the submit button, of course, 
//  but it can also be submitted by pressing Enter while a form field is selected. 












$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);
 
        $("#story").show();
 
        event.preventDefault();
    });
 });
 
 