// // scuberGreetingForFeet()
// // 1) gives customers a free sample if the ride is less than or equal to 400 feet
// // 2) charges 30 dollars for a distance over 2000 feet
// // 3) does not allow rides over 2500 feet

function scuberGreetingForFeet(ride) {

    if (ride <= 400) {
   return 'This one is on me!'; 
}else if (1999 < ride && ride < 2500){
    return 'I will gladly take your thirty bucks.';
} else {
    return 'No can do.';
 }

}



// // ternaryCheckCity()
// // 4) returns "Ok, sounds good." when the city is NYC
// // 5) should return "No go." if the destination city is not NYC

function ternaryCheckCity (city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }


// // 6) should return "Thank you so much." if the tip is generous
// // 7) should return "Thank you." if the tip is not as generous
// // 8) should return "Bye." if anything else

function switchOnCharmFromTip (tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }

 
  