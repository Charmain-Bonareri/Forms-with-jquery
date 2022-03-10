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


// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         $(".person1").append("blah blah");
//         $(".person2").append("blah blah");
//         $(".animal").append("blah blah");
//         $(".exclamation").append("blah blah");
//         $(".verb").append("blah blah");
//         $(".noun").append("blah blah");
 
//         $("#story").show();
 
//         event.preventDefault();
//     });
//  });
 
//Notice that we've added a parameter event to the callback function we passed to submit() method. 
//When the form is submitted, jQuery runs the callback function and passes in something as an argument. 
//We don't know what this "something" is - we just know that it somehow represents the event of the form being submitted, and so we give the parameter the name event.
//And we know that if we call the method preventDefault() on this event thing, it will stop the form from submitting.

// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         var person1Input = $("input#person1").val();
//         var person2Input = $("input#person2").val();
//         var animalInput = $("input#animal").val();
//         var exclamationInput = $("input#exclamation").val();
//         var verbInput = $("input#verb").val();
//         var nounInput = $("input#noun").val();
//         $(".person1").append(person1Input);
//         $(".person2").append(person2Input);
//         $(".animal").append(animalInput);
//         $(".exclamation").append(exclamationInput);
//         $(".verb").append(verbInput);
//         $(".noun").append(nounInput);
 
//         $("#story").show();
 
//         event.preventDefault();
//     });
//  });
 
// Now, we need to actually get the values from the form. If we open up the JavaScript console on the page and run:
// We can see that this jQuery method returns the value from the input as a string. Since the append()method takes a string as an argument, 

//If you don't refresh the page and you change the value of one of the inputs, it just adds it after the first value, instead of replacing it. We need to replace the existing text rather than just appending to it:

// $(document).ready(function() {
//     $("#blanks form").submit(function(event) {
//         var person1Input = $("input#person1").val();
//         var person2Input = $("input#person2").val();
//         var animalInput = $("input#animal").val();
//         var exclamationInput = $("input#exclamation").val();
//         var verbInput = $("input#verb").val();
//         var nounInput = $("input#noun").val();
//         $(".person1").text(person1Input);
//         $(".person2").text(person2Input);
//         $(".animal").text(animalInput);
//         $(".exclamation").text(exclamationInput);
//         $(".verb").text(verbInput);
//         $(".noun").text(nounInput);
 
//         $("#story").show();
 
//         event.preventDefault();
//     });
//  });
 
 
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
 
 