var dumb_counter1 = 0;
var dumb_counter2 = 0;


function GetPassage() {
    if (document.getElementById('passage_select').value == "Part1") {
        document.getElementById('part1_div').style.display="block";
        document.getElementById('part2_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
        document.getElementById('extra_practice').style.display="none";
        dumb_counter1 = 0;
    }
    else if (document.getElementById('passage_select').value == "Part2") {
        document.getElementById('part2_div').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
        document.getElementById('extra_practice').style.display="none";
        dumb_counter2 = 0;
    }
    else if (document.getElementById('passage_select').value == "Extra_Practice") {
        document.getElementById('extra_practice').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('part2_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
    }
    else if (document.getElementById('passage_select').value == "Custom") {
        document.getElementById('custom_practice').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('part2_div').style.display="none";
        document.getElementById('extra_practice').style.display="none";
    }
}

function CheckPart1 () {
    if (dumb_counter1 == 0) {

    //Make everything visible in a completely lame way.
    document.getElementById('answeredp1q1').style.display="block";
    document.getElementById('answeredp1q2').style.display="block";
    document.getElementById('answeredp1q3').style.display="block";
    document.getElementById('answeredp1q4').style.display="block";
    document.getElementById('answeredp1q5').style.display="block";
    document.getElementById('answeredp1q6').style.display="block";
    document.getElementById('answeredp1q7').style.display="block";
    document.getElementById('answeredp1q8').style.display="block";
    dumb_counter1 = 1;
    ActuallyCheckP1();
    } else {
        ActuallyCheckP1();
    }

}

function ActuallyCheckP1 (){
//Provide advice for each individual question in a completely lame way.
    //q1
    var q1_answer = document.getElementById('p1q1').value;
    var q1_feedback = "";
    if (q1_answer.includes("will be increased by")) {
        q1_feedback = "Good job changing to passive voice. "
    } else { q1_feedback = "Change 'will increase' to 'will be increased by' and move 'students' ability to pay attention' to the subject position after the word 'that.' "}
    document.getElementById('p1q1_feedback').innerHTML=q1_feedback;
    //q2
    var q2_answer = document.getElementById('p1q2').value;
    var q2_feedback = "";
    if (q2_answer.includes("are improved by")) {
        q2_feedback = "Good job changing to passive voice."
    } else { q2_feedback = "Change 'improve' to 'are improved by' and move 'social structures' to the subject position. "}
    document.getElementById('p1q2_feedback').innerHTML=q2_feedback;
    //q3
    var q3_answer = document.getElementById('p1q3').value;
    var q3_feedback = "";
    if (!q3_answer.includes("English")){
        q3_feedback = "The word 'English' should be included. This is an important detail. "
    } 
    if (q3_answer.includes("officially")) {
        q3_feedback = q3_feedback + "Consider removing the -ly averbial suffix from the word 'officially.' "
    } 
    if (q3_answer.includes("extensive")){
        q3_feedback = q3_feedback + "Consider adding an averbial suffix to 'extensive.' "
    }
    if (q3_feedback == "") {
        q3_feedback = "Compare your paraphrase with the example sentence. "
    }
    document.getElementById('p1q3_feedback').innerHTML=q3_feedback;
    //q4
    var q4_answer = document.getElementById('p1q4').value;
    var q4_feedback = "";
    if (q4_answer.includes("collection")) {
        q4_feedback = q4_feedback + "Consider adding an adjective-making suffix to 'collection.' "
    } 
    if (q4_answer.includes("different")){
        q4_feedback = q4_feedback + "Consider using suffixes to change 'different' to a noun or verb. "
    }
    if (q4_answer.includes("consistent")){
        q4_feedback = q4_feedback + "Consider adding an ajective-making suffix to 'consistent.' "
    }
    if (q4_feedback == "") {
        q4_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p1q4_feedback').innerHTML=q4_feedback;
    //q5
    var q5_answer = document.getElementById('p1q5').value;
    var q5_feedback = "";
    if (q5_answer.includes("southwest")) {
        q5_feedback = q5_feedback + "'Southwest' could to be changed to 'southwestern'. "
    } 
    if (q5_answer.includes("locally")){
        q5_feedback = q5_feedback + "Consider using suffixes to change 'locally' to the adjective or noun. "
    }
    if (q5_answer.includes("sought")){
        q5_feedback = q5_feedback + "Change the voice to active by moving 'people' to the subject position and 'Acer leiponese' to the object position. The verb should then be 'seek.' "
    }
    if (q5_feedback == "") {
        q5_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p1q5_feedback').innerHTML=q5_feedback;
    //q6
    var q6_answer = document.getElementById('p1q6').value;
    var q6_feedback = "";
    if (q6_answer.includes("generally")) {
        q6_feedback = q6_feedback + "Consider removing a suffix from 'generally.' "
    } 
    if (q6_answer.includes("feeds") | q6_answer.includes("feed")){
        q6_feedback = q6_feedback + "Make 'flowers' the subject of the sentence and change 'feeds' to the passive 'are fed on by'. "
    }
    if (q6_feedback == "") {
        q6_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p1q6_feedback').innerHTML=q6_feedback;
    //q7
    var q7_answer = document.getElementById('p1q7').value;
    var q7_feedback = "";
    if (!q7_answer.includes("was provided by")) {
        q7_feedback = q7_feedback + "This sentence is in the past tense. The passive verb should also be in the past: 'was provided by'. "
    }
    if (q7_feedback == "") {
        q7_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p1q7_feedback').innerHTML=q7_feedback;
    //q8
    var q8_answer = document.getElementById('p1q8').value;
    var q8_feedback = "";
    if (q8_answer.includes("was defeated by")) {
        q8_feedback = q8_feedback + "Change the subject to be 'the Union Army' and the object to 'it,' then change the verb to active voice. "
    } 
    if (q8_answer.includes("made a retreat")){
        q8_feedback = q8_feedback + "Change the phrase 'make a retreat' to the simple verb 'retreat.' "
    }
    if (q8_answer.includes("remembered")){
        q8_feedback = q8_feedback + "Move 'us' to the subject position and 'the event' to the object position. The verb should then be 'remember.' "
    }
    if (q8_feedback == "") {
        q8_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p1q8_feedback').innerHTML=q8_feedback;
    document.getElementById('check_part1').innerHTML="Re-check Answers";
}

function CheckPart2 () {
    if (dumb_counter2 == 0) {

        //Make everything visible in a completely lame way.
        document.getElementById('answeredp2q1').style.display="block";
        document.getElementById('answeredp2q2').style.display="block";
        document.getElementById('answeredp2q3').style.display="block";
        document.getElementById('answeredp2q4').style.display="block";
        document.getElementById('answeredp2q5').style.display="block";
        document.getElementById('answeredp2q6').style.display="block";
        document.getElementById('answeredp2q7').style.display="block";
        document.getElementById('answeredp2q8').style.display="block";
        dumb_counter2 = 1;
        ActuallyCheckP2();
    } else {
        ActuallyCheckP2();
        }
    
}

function ActuallyCheckP2() {
//Provide advice for each individual question in a completely lame way.
    //q1
    var q1_answer = document.getElementById('p2q1').value;
    var q1_feedback = "";
    if (q1_answer.includes("vessel")) {
       let hateyou = "https://www.thesaurus.com/browse/vessel";
       let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/vessel");
        q1_feedback = q1_feedback + "Please find a synonym for 'vessel,' " + hateyoumore ;
    }  
    if (q1_answer.includes("help")) { 
        let hateyou = "https://www.thesaurus.com/browse/help";
       let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/help");
        q1_feedback = q1_feedback + "Please find a synonym for 'help,' " + hateyoumore ;
    }
    if (q1_answer.includes("that was built") | q1_answer.includes("which was built")){
        q1_feedback = q1_feedback + "Reduce the phrase 'that was built' to 'built' "
    }
    if (q1_feedback == "") {
        q1_feedback = "Compare your paraphrase with the example sentence."
    }
    document.getElementById('p2q1_feedback').innerHTML=q1_feedback;

    //q2
    var q2_answer = document.getElementById('p2q1').value;
    var q2_feedback = "";
    if (q2_answer.includes("special")) {
     let hateyou = "https://www.thesaurus.com/browse/special";
    let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/special");
     q2_feedback = q2_feedback + "Please find a synonym for 'special,' " + hateyoumore ;
}  
    if (q2_answer.includes("enonomic")) { 
        let hateyou = "https://www.thesaurus.com/browse/economic";
        let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/economic ");
     q2_feedback = q2_feedback + "Please find a synonym for 'economic,' " + hateyoumore ;
    }
     if (q2_answer.includes("importance")) { 
        let hateyou = "https://www.thesaurus.com/browse/importance";
        let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/importance ");
     q2_feedback = q2_feedback + "Please find a synonym for 'importance,' " + hateyoumore ;
}
    if (q2_answer.includes("who was") | q2_answer.includes("who was")){
        q2_feedback = q2_feedback + "Reduce the phrase 'who was a botanist' to 'a botanist' "
}
    if (q2_answer.includes("how to") | q2_answer.includes("how to")){
        q2_feedback = q2_feedback + "Reduce the phrase 'how to improve them' to 'their improvement' "
}
    if (q2_feedback == "") {
        q2_feedback = "Compare your paraphrase with the example sentence."
}
    document.getElementById('p2q2_feedback').innerHTML=q2_feedback;


      //q3
      var q3_answer = document.getElementById('p2q3').value;
      var q3_feedback = "";
      if (q3_answer.includes("alongside")) {
         let hateyou = "https://www.thesaurus.com/browse/alongside";
         let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/alongside");
          q3_feedback = q3_feedback + "Please find a synonym for 'alongside,' " + hateyoumore ;
      }  
      if (q3_answer.includes("synthesized")) { 
          let hateyou = "https://www.thesaurus.com/browse/synthesize";
         let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/synthesize");
          q3_feedback = q3_feedback + "Please find a synonym for 'synthesized,' " + hateyoumore ;
      }
      if (q3_answer.includes("and they artifically")) {
          q3_feedback = q3_feedback + "Reduce the phrase 'and they artifically' to 'to artifically' "
      }
      if (q3_feedback == "") {
          q3_feedback = "Compare your paraphrase with the example sentence."
      }
      document.getElementById('p2q3_feedback').innerHTML=q3_feedback;
    

       //q4
       var q4_answer = document.getElementById('p2q4').value;
       var q4_feedback = "";
       if (q4_answer.includes("famous")) {
          let hateyou = "https://www.thesaurus.com/browse/famous";
          let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/famous");
           q4_feedback = q4_feedback + "Please find a synonym for 'famous,' " + hateyoumore ;
       }  
       if (q4_answer.includes("showman")) { 
           let hateyou = "https://www.thesaurus.com/browse/showman";
          let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/showman");
           q4_feedback = q4_feedback + "Please find a synonym for 'showman,' " + hateyoumore ;
       }
       if (q4_answer.includes("who was active")) {
           q4_feedback = q4_feedback + "Reduce the phrase 'who was active' to 'active' "
       }
       if (q4_feedback == "") {
           q4_feedback = "Compare your paraphrase with the example sentence."
       }
       document.getElementById('p2q4_feedback').innerHTML=q4_feedback;


       //q5
       var q5_answer = document.getElementById('p2q5').value;
       var q5_feedback = "";
       if (q5_answer.includes("founded")) {
          let hateyou = "https://www.thesaurus.com/browse/founded";
          let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/founded");
           q5_feedback = q5_feedback + "Please find a synonym for 'founded,' " + hateyoumore ;
       }  
       if (q5_answer.includes("a number of")) { 
           let hateyou = "https://www.wordhippo.com/what-is/another-word-for/a_number_of.html";
          let hateyoumore = hateyou.link("https://www.wordhippo.com/what-is/another-word-for/a_number_of.html");
           q5_feedback = q5_feedback + "Please find a synonym for 'a number of,' " + hateyoumore ;
       }
       if (q5_answer.includes("different")) { 
        let hateyou = "https://www.thesaurus.com/browse/different";
       let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/different");
        q5_feedback = q5_feedback + "Please find a synonym for 'different,' " + hateyoumore ;
    }
       if (q5_answer.includes("that was")) {
           q5_feedback = q5_feedback + "Reduce the phrase 'that was' by just deleting it "
       }
       if (q5_feedback == "") {
           q5_feedback = "Compare your paraphrase with the example sentence."
       }
       document.getElementById('p2q5_feedback').innerHTML=q5_feedback;


       //q6
       var q6_answer = document.getElementById('p2q6').value;
       var q6_feedback = "";
       if (q6_answer.includes("popular")) {
          let hateyou = "https://www.thesaurus.com/browse/popular";
          let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/popular");
           q6_feedback = q6_feedback + "Please find a synonym for 'popular' " + hateyoumore ;
       }  

       if (q6_answer.includes("many")) { 
        let hateyou = "https://www.thesaurus.com/browse/many";
       let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/many");
        q6_feedback = q6_feedback + "Please find a synonym for 'many,' " + hateyoumore ;
    }
       if (q6_answer.includes("which can be found")) {
           q6_feedback = q6_feedback + "Reduce the phrase 'which can be found ' by just deleting it "
       }

       if (q6_answer.includes("as a place")) {
        q6_feedback = q6_feedback + "Reduce the phrase 'as a place ' to 'place' "
    }

       if (q6_feedback == "") {
           q6_feedback = "Compare your paraphrase with the example sentence."
       }
       document.getElementById('p2q6_feedback').innerHTML=q6_feedback;


       //q7
       var q7_answer = document.getElementById('p2q7').value;
       var q7_feedback = "";
       if (q7_answer.includes("kind")) {
          let hateyou = "https://www.thesaurus.com/browse/kind";
          let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/kind");
           q7_feedback = q7_feedback + "Please find a synonym for 'kind' " + hateyoumore ;
       }  

       if (q7_answer.includes("upon")) { 
        let hateyou = "https://www.thesaurus.com/browse/upon";
       let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/upon");
        q7_feedback = q7_feedback + "Please find a synonym for 'upon,' " + hateyoumore ;
    }
       if (q7_answer.includes("that can write and rewrite data")) {
           q7_feedback = q7_feedback + "Reduce the phrase 'that can write and rewrite data ' by changing it to 'capable of writing and rewriting data'  "
       }

       document.getElementById('p2q7_feedback').innerHTML=q7_feedback;

  //q8
  var q8_answer = document.getElementById('p2q8').value;
  var q8_feedback = "";
  if (q8_answer.includes("monarch")) {
     let hateyou = "https://www.thesaurus.com/browse/monarch";
     let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/monarch");
      q8_feedback = q8_feedback + "Please find a synonym for 'monarch' " + hateyoumore ;
  }  

  if (q8_answer.includes("area")) { 
   let hateyou = "https://www.thesaurus.com/browse/area";
  let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/area");
   q8_feedback = q8_feedback + "Please find a synonym for 'area,' " + hateyoumore ;
}
if (q8_answer.includes("credited with")) { 
    let hateyou = "https://www.wordhippo.com/what-is/another-word-for/credited_with.html" ;
   let hateyoumore = hateyou.link("https://www.wordhippo.com/what-is/another-word-for/credited_with.html" );
    q8_feedback = q8_feedback + "Please find a synonym for 'credited with,' " + hateyoumore ;
 }
 if (q8_answer.includes("recognition")) { 
    let hateyou = "https://www.thesaurus.com/browse/recognition";
   let hateyoumore = hateyou.link("https://www.thesaurus.com/browse/recognition");
    q8_feedback = q8_feedback + "Please find a synonym for 'recognition,' " + hateyoumore ;
 }
  if (q8_answer.includes("who was")) {
      q8_feedback = q8_feedback + "Reduce the phrase 'who was the monarch' by deleting 'who was' "   
  }
  if (q8_answer.includes("of the city of Sendai")) {
    q8_feedback = q8_feedback + "Reduce the phrase 'of the city of Sendai' by changing it to 'of Sendai city' "
    
}
  document.getElementById('p2q8_feedback').innerHTML=q8_feedback;




document.getElementById('check_part2').innerHTML="Re-check Answers";
}

//Display part 1 Example Sentences in a completely lame way.
function Getp1q1() {
    document.getElementById('p1q1_example').style.display="block";
}
function Getp1q2() {
    document.getElementById('p1q2_example').style.display="block";
}
function Getp1q3() {
    document.getElementById('p1q3_example').style.display="block";
}
function Getp1q4() {
    document.getElementById('p1q4_example').style.display="block";
}
function Getp1q5() {
    document.getElementById('p1q5_example').style.display="block";
}
function Getp1q6() {
    document.getElementById('p1q6_example').style.display="block";
}
function Getp1q7() {
    document.getElementById('p1q7_example').style.display="block";
}
function Getp1q8() {
    document.getElementById('p1q8_example').style.display="block";
}

//Display part 2 Example Sentences in a completely lame way.
function Getp2q1() {
    document.getElementById('p2q1_example').style.display="block";
    document.getElementById('p2q1_button').style.display="none";
}
function Getp2q2() {
    document.getElementById('p2q2_example').style.display="block";
}
function Getp2q3() {
    document.getElementById('p2q3_example').style.display="block";
}
function Getp2q4() {
    document.getElementById('p2q4_example').style.display="block";
}
function Getp2q5() {
    document.getElementById('p2q5_example').style.display="block";
}
function Getp2q6() {
    document.getElementById('p2q6_example').style.display="block";
}
function Getp2q7() {
    document.getElementById('p2q7_example').style.display="block";
}
function Getp2q8() {
    document.getElementById('p2q8_example').style.display="block";
}


function hidebutton(x)
{
    x.style.display = "none";
}

var stageNo = 0;

function CheckExtra(){
    document.getElementById('answeredeq1').style.display="block";
    document.getElementById('answeredeq2').style.display="block";
    if (stageNo == 0){
        //Give advice on changing POS
        var e1_answer = document.getElementById('eq1').value;
        var e1_feedback = "";
        var e2_answer = document.getElementById('eq2').value;
        var e2_feedback = "";
        if (e1_answer == "") {
            e1_feedback = "Please write something first."
        }
        if (e2_answer == "") {
            e2_feedback = "Please write something first."
        }
        if (e1_answer.includes("rarity")){
            e1_feedback = e1_feedback + "Change the part of speech of 'rarity.' Consider the word 'rare.' "
        }
        if (e1_answer.includes("interacting")){
            e1_feedback = e1_feedback + "Change the part of speech of 'interacting.' Consider making it a noun by using the '-tion' suffix. "
        }
        if (e1_answer.includes("captivity")){
            e1_feedback = e1_feedback + "Change the part of speech of 'captivity.' Consider changing it to the verb form. "
        }
        if (!e2_answer.includes("American")){
            e2_feedback = e2_feedback + "Change the part of speech of 'America.' Consider making it an adjective using the '-ian' suffix. "
        }
        if (e2_answer.includes("intense")){
            e2_feedback = e2_feedback + "Change the word 'intense' by adding the '-ive' suffix. "
        }
        if (e1_answer == "") {
            e1_feedback = "No advice regarding the target words."
        }
        if (e2_answer === "") {
            e2_feedback = "No advice regarding the target words."
        }
        document.getElementById('eq1_feedback').innerHTML=e1_feedback;
        document.getElementById('eq2_feedback').innerHTML=e2_feedback;
        document.getElementById('check_extra_next').style.display="inline";
        SetTheParameters();
    } else if (stageNo == 1) {
        //Give advice on changing voice
        var e1_answer = document.getElementById('eq1').value;
        var e1_feedback = "";
        var e2_answer = document.getElementById('eq2').value;
        var e2_feedback = "";
        if (e1_answer == "") {
            e1_feedback = "Please write something first."
        }
        if (e2_answer == "") {
            e2_feedback = "Please write something first."
        }
        if (e1_answer.includes("been")){
            e1_feedback = e1_feedback + "Move the object 'interactions' to the subject position and change 'kill' to the active voice. "
        }
        if (e2_answer.includes("was accepted")){
            e2_feedback = e2_feedback + "Move the object 'the US Military Academy' to the subject position.  "
        }
        if (!e2_answer.substring(0,2) === "in"){
            e2_feedback = e2_feedback + "Consider moving 'in 1954' to the beginning of the sentence for ease of reading. "
        }
        if (e1_answer == "") {
            e1_feedback = "Compare your paraphrase with the example sentence."
        }
        if (e2_answer === "") {
            e2_feedback = "Compare your paraphrase with the example sentence."
        }
        document.getElementById('eq1_feedback').innerHTML=e1_feedback;
        document.getElementById('eq2_feedback').innerHTML=e2_feedback;
        document.getElementById('check_extra_back').style.display="inline";
        document.getElementById('check_extra_next').style.display="inline";
        SetTheParameters();
    } else if (stageNo == 2) {
        //Give advice on reduction
        var e1_answer = document.getElementById('eq1').value;
        var e1_feedback = "";
        var e2_answer = document.getElementById('eq2').value;
        var e2_feedback = "";
        if (e1_answer == "") {
            e1_feedback = "Please write something first."
        }
        if (e2_answer == "") {
            e2_feedback = "Please write something first."
        }
        if (e1_answer.includes("it is")){
            e1_feedback = e1_feedback + "Delete the pronoun subject 'it' and reduce to a complex noun phrase. Hint: '.... on humans'. "
        }
        if (e1_answer.includes("that were")){
            e1_feedback = e1_feedback + "Reduce the phrase 'orcas that were captive' by moving 'captive' to an adjective position in front of 'orcas.' "
        }
        if (e2_answer.includes("who is")){
            e2_feedback = e2_feedback + "Reduce the relative clause 'who is an American austronaut' by making a noun phrase surrounded by commas. "
        }
        if (e2_answer.includes("and he")){
            e2_feedback = e2_feedback + "Reduce the independent clause 'and he became...' to a relative clause, i.e. 'who became...'  "
        }
        if (e2_answer.includes("that he received")){
            e2_feedback = e2_feedback + "Reduce the relative clause 'that he received there' to a noun phrase beginning with 'receiving.'  "
        }
        if (e1_answer == "") {
            e1_feedback = "Compare your paraphrase with the example sentence."
        }
        if (e2_answer === "") {
            e2_feedback = "Compare your paraphrase with the example sentence."
        }
        document.getElementById('eq1_feedback').innerHTML=e1_feedback;
        document.getElementById('eq2_feedback').innerHTML=e2_feedback;
        document.getElementById('check_extra_back').style.display="inline";
        document.getElementById('check_extra_next').style.display="inline";
        SetTheParameters();
    } else if (stageNo == 3) {
        //Give advice on synonyms
        var e1_answer = document.getElementById('eq1').value;
        var e1_feedback = "";
        var e2_answer = document.getElementById('eq2').value;
        var e2_feedback = "";
        if (e1_answer == "") {
            e1_feedback = "Please write something first."
        }
        if (e2_answer == "") {
            e2_feedback = "Please write something first."
        }
        if (e1_answer.includes("while")){
            e1_feedback = e1_feedback + "Please find a synonym for 'vessel,' i.e., https://www.thesaurus.com/browse/while"
        }
        if (!e1_answer.includes("killer whale")){
            e1_feedback = e1_feedback + "A common name for an 'orca' is 'killer whale.' "
        }
        if (e1_answer.includes("rare")){
            e1_feedback = e1_feedback + "Please find a synonym for 'rare,' i.e., https://www.thesaurus.com/browse/rare"
        }
        if (!e1_answer.slice(-7) === "humans."){
            e1_feedback = e1_feedback + "Please find a synonym for 'human,' i.e., https://www.thesaurus.com/browse/human "
        }
        if (e2_answer.includes("accepted")){
            e2_feedback = e2_feedback + "Please find a synonym for 'accepted,' i.e., https://www.thesaurus.com/browse/accepted"
        }
        if (e2_answer.includes("person")){
            e2_feedback = e2_feedback + "Please find a synonym for 'person,' i.e., https://www.thesaurus.com/browse/person"
        }
        if (e2_answer.includes("walk")){
            e2_feedback = e2_feedback + "Please find a synonym for 'walk,' i.e., https://www.thesaurus.com/browse/walk"
        }
        if (e2_answer.includes("thanks to")){
            e2_feedback = e2_feedback + "Please find a synonym for 'thanks to,' i.e., https://www.thesaurus.com/browse/thanks%20to"
        }
        if (e1_answer == "") {
            e1_feedback = "Compare your paraphrase with the example sentence."
        }
        if (e2_answer === "") {
            e2_feedback = "Compare your paraphrase with the example sentence."
        }
        document.getElementById('eq1_feedback').innerHTML=e1_feedback;
        document.getElementById('eq2_feedback').innerHTML=e2_feedback;
        document.getElementById('check_extra_back').style.display="inline";
        document.getElementById('check_extra_next').style.display="none";
        SetTheParameters();
    } 

}

function SetTheParameters(){
    if (stageNo == 0){
        document.getElementById('extra_directions').innerHTML="Begin by changing the parts of speech of the underlined words";
        document.getElementById('eq1_label').innerHTML="While it is a <u>rarity</u> for orcas to attack humans in the wild, four humans have been killed due to <u>interacting</u> with orcas that were in <u>captivity.</u>";
        document.getElementById('eq2_label').innerHTML="David Scott, who is an astronaut from <u>America</u>, was accepted by the US Military Academy in 1954, and he became the seventh person to walk on the moon in 1967 thanks to the <u>intense</u> training that he received there.";
        document.getElementById('eq1p1_example').style.display="none";
        document.getElementById('eq1p2_example').style.display="none";
    //disable Previous button
    document.getElementById('check_extra_back').style.display="none";
    document.getElementById('check_extra_next').style.display="inline";
    } else if (stageNo == 1) {
        document.getElementById('extra_directions').innerHTML="Now change the voice or move the subjects and objects of the underlined sections";
        document.getElementById('eq1_label').innerHTML="While it is rare for orcas to attack humans in the wild, four humans <u>have been killed due to</u> interactions with orcas that were captive.";
        document.getElementById('eq2_label').innerHTML="David Scott, who is an American astronaut, <u>was accepted</u> by the US Military Academy in 1954, and he became the seventh person to walk on the moon in 1967 thanks to the intensive training that he received there.";
        document.getElementById('eq1p1_example').style.display="none";
        document.getElementById('eq1p2_example').style.display="none";
        document.getElementById('check_extra_back').style.display="inline";
        document.getElementById('check_extra_next').style.display="inline";
    } else if (stageNo == 2) {
        document.getElementById('extra_directions').innerHTML="Now reduce or rephrase the underlined sections";
        document.getElementById('eq1_label').innerHTML="While <u>it is rare for orcas to attack humans</u> in the wild, interactions with <u>orcas that were captive</u> have killed four humans.";
        document.getElementById('eq2_label').innerHTML="In 1954, the US Military Academy accepted David Scott, <u>who is an American astronaut</u>, <u>and he</u> became the seventh person to walk on the moon in 1967 thanks to the intensive training <u>that he received there</u>.";
        document.getElementById('eq1p1_example').style.display="none";
        document.getElementById('eq1p2_example').style.display="none";
        document.getElementById('check_extra_back').style.display="inline";
        document.getElementById('check_extra_next').style.display="inline";
    } else if (stageNo == 3) {
        document.getElementById('extra_directions').innerHTML="Finally, replace the underlined words or phrases with synonyms";
        document.getElementById('eq1_label').innerHTML="<u>While</u> <u>orca</u> attacks on humans are <u>rare</u> in the wild, interactions with captive orcas have killed four <u>humans</u>.";
        document.getElementById('eq2_label').innerHTML="In 1954, the US Military Academy <u>accepted</u> David Scott, an American astronaut, who became the seventh <u>person</u> to <u>walk</u> on the moon in 1967 <u>thanks</u> to receiving intensive training there.";
        document.getElementById('eq1p1_example').style.display="none";
        document.getElementById('eq1p2_example').style.display="none";   
    //disable Next button
    document.getElementById('check_extra_next').style.display="none";
    document.getElementById('check_extra_back').style.display="inline";
    } else if (stageNo > 3) {
        alert("Resetting Stages");
        
        stageNo = 0;
    }
}

function CheckExtraNXT (){
    if (stageNo == 3) {
        stageNo = 3;
    } else {stageNo += 1;}
    document.getElementById('answeredeq1').style.display="none";
    document.getElementById('answeredeq2').style.display="none";
    SetTheParameters();
}

function CheckExtraBK (){
    if (stageNo == 0) {
        stageNo = 0;
    } else {stageNo -= 1;}
    document.getElementById('answeredeq1').style.display="none";
    document.getElementById('answeredeq2').style.display="none";
    SetTheParameters();
}

function GetEq1P1() {
    if (stageNo == 0) {
        document.getElementById('eq1p1_example').style.display="block";
        document.getElementById('eq1p1_example').innerHTML="While it is <u>rare</u> for orcas to attack humans in the wild, four humans have been killed due to <u>interactions</u> with orcas that were <u>captive</u>.";
    } else if (stageNo == 1) {
        document.getElementById('eq1p1_example').style.display="block";
        document.getElementById('eq1p1_example').innerHTML="While it is rare for orcas to attack humans in the wild, <u>interactions with orcas that were captive have killed four humans</u>.";
    } else if (stageNo == 2) {
        document.getElementById('eq1p1_example').style.display="block";
        document.getElementById('eq1p1_example').innerHTML="While <u>orca attacks on humans are rare</u> in the wild, interactions with <u>captive orcas</u> have killed four humans.";
    } else if (stageNo == 3) {
        document.getElementById('eq1p1_example').style.display="block";
        document.getElementById('eq1p1_example').innerHTML="<u>Though</u> <u>killer whale</u> attacks on humans are <u>scarce</u> in the wild, interactions with captive orcas have killed four <u>people</u>.";
    }
}

function GetEq1P2() {
    if (stageNo == 0) {
        document.getElementById('eq1p2_example').style.display="block";
        document.getElementById('eq1p2_example').innerHTML="David Scott, who is an <u>American</u> astronaut, was accepted by the US Military Academy in 1954, and he became the seventh person to walk on the moon in 1967 thanks to the <u>intensive</u> training that he received there.";
    } else if (stageNo == 1) {
        document.getElementById('eq1p2_example').style.display="block";
        document.getElementById('eq1p2_example').innerHTML="<u>In 1954, the US Military Academy accepted David Scott</u>, who is an American astronaut, and he became the seventh person to walk on the moon in 1967 thanks to the intensive training that he received there.";
    } else if (stageNo == 2) {
        document.getElementById('eq1p2_example').style.display="block";
        document.getElementById('eq1p2_example').innerHTML="In 1954, the US Military Academy accepted David Scott, <u>an American astronaut</u>, who became the seventh person to walk on the moon in 1967 thanks to <u>receiving intensive training there</u>.";
    } else if (stageNo == 3) {
        document.getElementById('eq1p2_example').style.display="block";
        document.getElementById('eq1p2_example').innerHTML="In 1954, the US Military Academy <u>admitted</u> David Scott, an American astronaut, who became the seventh <u>man</u> to <u>step</u> on the moon in 1967 <u>as a result of</u> receiving intensive training there.";
    }
}

//Checks custom paraphrases
function CheckCustom () {
    var source_3grams = [];
    var source_5grams = [];
    var input_3grams = [];
    var input_5grams = [];
    var ohno_3grams = [];
    var ohno_5grams = [];
    var counter = 0;
    var counter5 = 0;
//Preps the source text by removing punctuation and making everything lowercase.
    source_1 = document.getElementById('cq1').value;
    let temp_s_text1 = source_1.toLowerCase();
    let temp_s_text = temp_s_text1.replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()]/g,"");
    let s_text = temp_s_text.replace(/\s{2,}/g," ");
    const source_array = s_text.split(" "); 
//Creates arrays of 3-grams and 6-grams for source text.
    source_array.forEach(function(word, index){
        let no_words = source_array.length;
        let checker = index + 2;
        if (checker < no_words){
            let n_word = word;
            let n2_word = source_array[index + 1];
            let n3_word = source_array[index+2];
            let my_gram = n_word.concat(' ', n2_word, ' ', n3_word);
            source_3grams.push(my_gram);

        }
        let checker6 = index + 4;
        if (checker6 < no_words){
            let n_word6 = word;
            let n2_word6 = source_array[index + 1];
            let n3_word6 = source_array[index + 2];
            let n4_word6 = source_array[index + 3];
            let n5_word6 = source_array[index + 4];
            let my_gram6 = n_word6.concat(' ', n2_word6, ' ', n3_word6, ' ', n4_word6, ' ', n5_word6);
            source_5grams.push(my_gram6);
        }        
    });
//Creates arrays of 3-grams and 6-grams for summary text written by user.
    let temp_i_text1 = document.getElementById('cqa').value;
    let temp_i_text2 = temp_i_text1.toLowerCase();
    let temp_i_text = temp_i_text2.replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()]/g,"");
    let i_text = temp_i_text.replace(/\s{2,}/g," ");
    const input_array = i_text.split(" "); 
    input_array.forEach(function(word, index){
        let no_words = input_array.length;
        let checker = index + 2;
        if (checker < no_words){
            let n_word = word;
            let n2_word = input_array[index + 1];
            let n3_word = input_array[index + 2];
            let my_gram = n_word.concat(" ",n2_word," ",n3_word);
            input_3grams.push(my_gram);

        }
        let checker6 = index + 4;
        if (checker6 < no_words){
            let n_word6 = word;
            let n2_word6 = input_array[index + 1];
            let n3_word6 = input_array[index + 2];
            let n4_word6 = input_array[index + 3];
            let n5_word6 = input_array[index + 4];
            let my_gram6 = n_word6.concat(' ', n2_word6, ' ', n3_word6, ' ', n4_word6, ' ', n5_word6);
            input_5grams.push(my_gram6);
        }         
    });
//Iterates source arrays over input arrays to check for matching 3- and 6-grams.
    for (let i = 0; i < source_3grams.length; i++) {
        for (let j = 0; j < input_3grams.length; j++) {
            if (source_3grams[i] === input_3grams[j]) {
                counter = counter + 1;
                ohno_3grams.push(source_3grams[i]);
            }
        }
    }
    for (let i = 0; i < source_5grams.length; i++){
        for (let j = 0; j < input_5grams.length; j++){
            if (source_5grams[i] === input_5grams[j]) {
                counter5 = counter5 + 1;
                ohno_5grams.push(source_5grams[i]);
            }
        }
    }
//display results and give advice
    var repeats_3 = ohno_3grams.toString();
    var repeats_5 = ohno_5grams.toString();
    var advice_repeats1 = "";
    var advice_repeats2 = "";

    if (counter5 > 0) {
        advice_repeats1 = "Number of 5-word repeats in your paraphrase: " + counter5;
    }
    else {
        advice_repeats1 = "Good job - your paraphrase does not contain any 5-word chunk repeats from the original text.";
    }
    if (counter > 1) {
        advice_repeats2 = "Number of 3-word repeats in your paraphrase: " + counter;
    }
    else {
        advice_repeats2 = "Good job - your paraphrase contains very few repeats from the original text. ";
    }

    var resulty = advice_repeats1 + "<br>" + "<br>" + advice_repeats2 + "<br>" + "<br>" + "Your 5-word chunk repeats:" + "<br>" + "<br>" + repeats_5 + "<br>" + "<br>" + "Your 3-word chunk repeats:" + "<br>" + "<br>" + repeats_3;

    document.getElementById('cq_feedback').innerHTML = resulty;
    document.getElementById('cq_feedback').style.display="block";
}
