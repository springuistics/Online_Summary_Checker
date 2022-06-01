var source_1 = "This is the source text.";


function Initialize(){
document.getElementById('source_text').innerHTML=source_1;
}

function Check_Now(){
    var source_3grams = [];
    var source_6grams = [];
    var input_3grams = [];
    var input_6grams = [];
    var counter = 0;
    var counter6 = 0;
//Preps the text by removing punctuation and making everything lowercase.
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
        let checker6 = index + 5;
        if (checker6 < no_words){
            let n_word6 = word;
            let n2_word6 = source_array[index + 1];
            let n3_word6 = source_array[index + 2];
            let n4_word6 = source_array[index + 3];
            let n5_word6 = source_array[index + 4];
            let n6_word6 = source_array[index + 5];
            let my_gram6 = n_word6.concat(' ', n2_word6, ' ', n3_word6, ' ', n4_word6, ' ', n5_word6, ' ', n6_word6);
            source_6grams.push(my_gram6);
        }        
    });
//Creates arrays of 3-grams and 6-grams for summary text written by user.
    let temp_i_text1 = document.getElementById('summary_text').value;
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
        let checker6 = index + 5;
        if (checker6 < no_words){
            let n_word6 = word;
            let n2_word6 = input_array[index + 1];
            let n3_word6 = input_array[index + 2];
            let n4_word6 = input_array[index + 3];
            let n5_word6 = input_array[index + 4];
            let n6_word6 = input_array[index + 5];
            let my_gram6 = n_word6.concat(' ', n2_word6, ' ', n3_word6, ' ', n4_word6, ' ', n5_word6, ' ', n6_word6);
            input_6grams.push(my_gram6);
        }         
    });
//Iterates source arrays over input arrays to check for matching 3- and 6-grams.
    for (let i = 0; i < source_3grams.length; i++) {
        for (let j = 0; j < input_3grams.length; j++) {
            if (source_3grams[i] === input_3grams[j]) {
                counter = counter + 1;
            }
        }
    }
    for (let i = 0; i < source_6grams.length; i++){
        for (let j = 0; j < input_6grams.length; j++){
            if (source_6gams[i] === input_6grams[j]) {
                counter6 = counter6 + 1;
            }
        }
    }
//display results and give advice
    var resulty = 'Your text has ' + counter + ' instances of 3-word chunks from the original, and ' + counter6 + ' instances of 6-word chunks from the original.';
    document.getElementById('results_text').innerHTML = resulty;
}


