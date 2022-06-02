


function GetPassage() {
    if (document.getElementById('passage_select').value == "Part1") {
        document.getElementById('part1_div').style.display="block";
        document.getElementById('part2_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
    }
    else if (document.getElementById('passage_select').value == "Part2") {
        document.getElementById('part2_div').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('custom_practice').style.display="none";
    }
    else if (document.getElementById('passage_select').value == "Custom") {
        document.getElementById('custom_practice').style.display="block";
        document.getElementById('part1_div').style.display="none";
        document.getElementById('part2_div').style.display="none";
    }
}

function CheckPart1 () {
//Make everything visible in a completely lame way.
    document.getElementById('answeredp1q1').style.display="block";
    document.getElementById('answeredp1q2').style.display="block";

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

}

function CheckPart2 () {
//Make everything visible in a completely lame way.
    document.getElementById('answeredp2q1').style.display="block";
    document.getElementById('answeredp2q2').style.display="block";

//Provide advice for each individual question in a completely lame way.
    //q1


}

//Display Example Sentences in a completely lame way.
function Getp1q1() {
    document.getElementById('p1q1_example').style.display="block";
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
