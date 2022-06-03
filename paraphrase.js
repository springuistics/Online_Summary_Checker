var dumb_counter1 = 0;
var dumb_counter2 = 0;


function GetPassage() {
    if (document.getElementById('passage_select').value == "Part1") {
        document.getElementById('part1_div').style.display="block";
        document.getElementById('part2_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
        dumb_counter1 = 0;
    }
    else if (document.getElementById('passage_select').value == "Part2") {
        document.getElementById('part2_div').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
        dumb_counter2 = 0;
    }
    else if (document.getElementById('passage_select').value == "Custom") {
        document.getElementById('custom_practice').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('part2_div').style.display="none";
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
        q1_feedback = "Good job changing to passive voice."
    } else { q1_feedback = "Change 'will increase' to 'will be increased by' and move 'students' ability to pay attention' to the subject position after the word 'that' "}
    document.getElementById('p1q1_feedback').innerHTML=q1_feedback;
    //q2
    var q2_answer = document.getElementById('p1q2').value;
    var q2_feedback = "";
    if (q2_answer.includes("are improved by")) {
        q2_feedback = "Good job changing to passive voice."
    } else { q2_feedback = "Change 'improve' to 'are improved by' and move 'social structures' to the subject position"}
    document.getElementById('p1q2_feedback').innerHTML=q2_feedback;
    //q3
    var q3_answer = document.getElementById('p1q3').value;
    var q3_feedback = "";
    if (!q3_answer.includes("English")){
        q3_feedback = "The word English should be included. Please make sure you are attempting the paraphrase."
    } 
    if (q3_answer.includes("officially")) {
        q3_feedback = q3_feedback + "Consider changing 'officially' to a word such as 'official'. "
    } 
    if (q3_answer.includes("extensive")){
        q3_feedback = q3_feedback + "Consider changing 'extensive' to 'extensively'. "
    }
    if (q3_feedback == "") {
        q3_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p1q3_feedback').innerHTML=q3_feedback;
    //q4
    var q4_answer = document.getElementById('p1q4').value;
    var q4_feedback = "";
    if (q4_answer.includes("collection")) {
        q4_feedback = q4_feedback + "Consider changing 'collection' to a word such as 'collective' or 'collected'. "
    } 
    if (q4_answer.includes("different")){
        q4_feedback = q4_feedback + "Consider changing 'different' to the verb 'differ' or to the noun 'difference'. "
    }
    if (q4_answer.includes("consistent")){
        q4_feedback = q4_feedback + "Consider changing 'consistent' to the noun 'consinstency'. "
    }
    if (q4_feedback == "") {
        q4_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p1q4_feedback').innerHTML=q4_feedback;
    //q5
    var q5_answer = document.getElementById('p1q5').value;
    var q5_feedback = "";
    if (q5_answer.includes("southwest")) {
        q5_feedback = q5_feedback + "You can change 'southwest' to 'southwestern'. "
    } 
    if (q5_answer.includes("locally")){
        q5_feedback = q5_feedback + "Consider changing 'locally' to the adjective 'local' or to the noun 'locals'. "
    }
    if (q5_answer.includes("sought")){
        q5_feedback = q5_feedback + "Change to the active voice by moving 'people' to the subject position and 'Acer leiponese' to the object position. The verb should then be 'seek.' "
    }
    if (q5_feedback == "") {
        q5_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p1q5_feedback').innerHTML=q5_feedback;
    //q6
    var q6_answer = document.getElementById('p1q6').value;
    var q6_feedback = "";
    if (q6_answer.includes("generally")) {
        q6_feedback = q6_feedback + "You can change 'generally' to 'in general'. "
    } 
    if (q6_answer.includes("feeds") | q6_answer.includes("feed")){
        q6_feedback = q6_feedback + "Change 'feeds' to the passive voice by making 'flowers' the subject of the sentence and changing 'feeds' to 'are fed on by'. "
    }
    if (q6_feedback == "") {
        q6_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p1q6_feedback').innerHTML=q6_feedback;
    //q7
    var q7_answer = document.getElementById('p1q7').value;
    var q7_feedback = "";
    if (!q7_answer.includes("was provided by")) {
        q7_feedback = q7_feedback + "This sentence is in the past tense - be sure to make the passive voice with the phrase 'was provided by'. "
    }
    if (q7_feedback == "") {
        q7_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p1q7_feedback').innerHTML=q7_feedback;
    //q8
    var q8_answer = document.getElementById('p1q8').value;
    var q8_feedback = "";
    if (q8_answer.includes("was defeated by")) {
        q8_feedback = q8_feedback + "Make the subject of the first half of the sentence 'the Union Army' and the object 'it' then change the verb to active voice. "
    } 
    if (q8_answer.includes("made a retreat")){
        q8_feedback = q8_feedback + "Consider changing the phrase 'make a retreat' to the simple verb 'retreat'. "
    }
    if (q8_answer.includes("remembered")){
        q8_feedback = q8_feedback + "Change to the active voice by moving 'us' to the subject position and 'the event' to the object position. The verb should then be 'remember.' "
    }
    if (q8_feedback == "") {
        q8_feedback = "No advice about the target words and phrases."
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
    if (q1_answer.includes("vessl")) {
        q1_feedback = q1_feedback + "Please find a synonym for 'vessel,' i.e., https://www.thesaurus.com/browse/vessel"
    }  
    if (q1_answer.includes("help")) { 
        q1_feedback = q1_feedback + "Please find a synonym for 'vessel,' i.e., https://www.thesaurus.com/browse/help"
    }
    if (q1_answer.includes("that was built") | q1_answer.includes("which was built")){
        q1_feedback = q1_feedback + "Reduce the phrase 'that was built' to 'built' "
    }
    if (q1_feedback == "") {
        q1_feedback = "No advice about the target words and phrases."
    }
    document.getElementById('p2q1_feedback').innerHTML=q1_feedback;

    
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
    document.getElementById('p1q1_example').style.display="block";
}
function Getp2q2() {
    document.getElementById('p1q2_example').style.display="block";
}
function Getp2q3() {
    document.getElementById('p1q3_example').style.display="block";
}
function Getp2q4() {
    document.getElementById('p1q4_example').style.display="block";
}
function Getp2q5() {
    document.getElementById('p1q5_example').style.display="block";
}
function Getp2q6() {
    document.getElementById('p1q6_example').style.display="block";
}
function Getp2q7() {
    document.getElementById('p1q7_example').style.display="block";
}
function Getp2q8() {
    document.getElementById('p1q8_example').style.display="block";
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
        advice_repeats1 = "Your paraphrase contains " + counter5 + " instances of 5-word chunk repeats from the original. You should not copy 5 or more words in a row from the original. Please rewrite those sections in your own words or rephrase them using the advice in Chapter 4 of Pathways to Academic English."
    }
    else {
        advice_repeats1 = "Your paraphrase does not contain any instances of 5-word chunk repeats from the original - good job."
    }
    if (counter > 1) {
        advice_repeats2 = "Your summary contains " + counter + " instances of 3-word chunk repeats from the original, which is probably too many. Try to rephrase some of your repeated 3-word chunks by using the advice in Chapter 4 of Pathways to Academic English."
    }
    else {
        advice_repeats2 = "Your summary contains " + counter + " instance(s) of 3-word chunk repeats from the original, which is an acceptable amount."
    }

    var resulty = advice_repeats1 + "<br>" + "<br>" + advice_repeats2 + "<br>" + "<br>" + "Your 5-word chunk repeats:" + "<br>" + "<br>" + repeats_5 + "<br>" + "<br>" + "Your 3-word chunk repeats:" + "<br>" + "<br>" + repeats_3;

    document.getElementById('cq_feedback').innerHTML = resulty;
    document.getElementById('cq_feedback').style.display="block";
}
