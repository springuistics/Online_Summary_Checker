//Stores passages text because its a pain in my ass to import them all
const passage1 = "Horses were used extensively in warfare for thousands of years, starting over 5,000 years ago. They were first used in battle somewhere between 4,000 and 3,000 B.C. in Eurasia, as evidenced by illustrations from ancient Sumeria that depict equestrian-pulled wagons used in fighting. Later, cavalry became an important feature of the powerful armies of the great ancient empires of Greece, Rome, and Mongolia. <br><br>Because horses were such a powerful force when waging war, a number of equestrian related innovations were developed over the centuries. For example, the creation of the saddle, stirrup, and reins all helped riders to more easily mount and maneuver horses. It also made riding more comfortable, thus freeing their hands to wield weapons. A number of training techniques were also invented for both horses and their riders. More effective riding techniques were developed, and better knowledge of breeding and horse temperament allowed riders to develop relationships with their animals. Specialized training was also developed for the horses themselves, as they needed to learn not to run away from loud sounds and to balance heavily armored riders in order to be useful on the battlefield. <br><br>Throughout history, horses have played an important role in wars worldwide, from North America to Central Asia. However, horses were eventually phased out of modern battle plans after World War I. Around this time, tanks, automobiles, and aircraft slowly but surely became the preferred method of transporting troops, launching frontal attacks, and initiating quick charges. Many militaries and police forces still employ some cavalry units, but these regiments are mostly for ceremonial and educational purposes.";
const passage2 = "The intermodal container, a large, standardized shipping container often seen on cargo ships, freight trains, and trucks, began to be used extensively in the 1940s and 1950s. Before that time, shipping companies would transport various goods in a number of different types of containers, which had varying shapes and sizes. However, this soon became a problem because containers with odd shapes and different sizes would not always fit on every train, truck, or ship. If they were able to fit, their inconvenient size would force transport vehicles to make trips at less than 100% capacity. To rectify this inefficiency, several European countries came together in 1933 to create a standard size for shipping containers. <br><br> Once the size of shipping containers became standardized across the world, the makers of trains, boats, and other transportation craft could design their vehicles to match the containers, ensuring that they would always be carrying loads of cargo at full capacity. This dramatic increase in efficiency led to a decrease in fuel waste, which in turn reduced the overall cost of shipping. Further advances in these containers came about when they became modular, that is, several smaller standardized sizes, such as half size and one-fourth size, were created and implemented into the system. <br><br> The creation of the intermodal container and its continued innovations have made shipping much more cost effective, and has greatly contributed to the increase in international trade. The cheaper shipping became, the more sense it made for businesses, large and small, to sell their commodities abroad, establish facilities in a wider range of areas, and develop global networks.";
const original_passage = "";

var source_1 = "";
var source_2 = "Please select a passage from the drop-down menu above. The first two passages come from the summarizing worksheet that accompanies Pathways to Academic English 3rd Edition.";
var running_avg = 0;
var running_copy = 0;
var time_keep = 0;
var Interval;
function StartTimer(){
    clearInterval(Interval);
    Interval = setInterval(keepTimeforActivity, 1000);
    function keepTimeforActivity(){
        time_keep += 1;
    }
}
function StopTimer(){
    clearInterval(Interval);
}

StartTimer();

//Selects Passage
function GetPassage() {
    document.getElementById('alltheresults').style.display="none";
    var picker = document.getElementById('passage_select').value;
    if (picker == "Passage1") {
        document.getElementById('source_text').style.display="block";
        document.getElementById('source_text').innerHTML=passage1;
        source_1 = passage1;
        let newinput2 = document.getElementById('newinput');
        let newbutton2 = document.getElementById('newbutton');
        let dumbbr2 = document.getElementById('dumbbr');
        newinput2.remove();
        newbutton2.parentNode.removeChild(newbutton2);
        dumbbr2.parentNode.removeChild(dumbbr2);
        
    }
    else if (picker == "Passage2") {
        document.getElementById('source_text').style.display="block";
        document.getElementById('source_text').innerHTML=passage2;
        source_1 = passage2;
        let newinput2 = document.getElementById('newinput');
        let newbutton2 = document.getElementById('newbutton');
        let dumbbr2 = document.getElementById('dumbbr');
        newinput2.remove();
        newbutton2.parentNode.removeChild(newbutton2);
        dumbbr2.parentNode.removeChild(dumbbr2);
    }
    else if (picker == "Custom") {
        document.getElementById('source_text').style.display="none";
        var newinput = document.createElement("textarea");
        var newbutton = document.createElement("input");
        var dumbbr = document.createElement("br");
        var reset_button = document.createElement("input");
        newbutton.setAttribute("type", "button");
        newbutton.setAttribute("value", "Click Here to Set the Text");
        newinput.setAttribute("rows", 20);
        newinput.setAttribute("cols", 70);
        reset_button.setAttribute("type", "button");
        reset_button.setAttribute("value", "Click Here to Reset the Text");
        reset_button.setAttribute("style", "display: none");
        newbutton.id='newbutton';
        newinput.id='newinput';
        dumbbr.id='dumbbr';
        reset_button.id='reset_button';        
        document.getElementById('source_id').appendChild(newinput);
        document.getElementById('source_id').appendChild(dumbbr);
        document.getElementById('source_id').appendChild(newbutton);
        document.getElementById('source_id').appendChild(reset_button);
        newbutton.onclick = Finish;
        reset_button.onclick = Reset;
        function Finish() {
            let dumbcheck = document.getElementById('newinput').value;
            if (dumbcheck === "") {
                alert("Please input text before clicking the button.")
            } else {
            document.getElementById('reset_button').style.display="block";
            let newinput2 = document.getElementById('newinput');
            let newbutton2 = document.getElementById('newbutton');
            let dumbbr2 = document.getElementById('dumbbr');
            source_1 = newinput2.value;
            source_2 = newinput2.value;
            document.getElementById('source_text').innerHTML=source_2;
            newinput2.remove();
            newbutton2.parentNode.removeChild(newbutton2);
            dumbbr2.parentNode.removeChild(dumbbr2);
            document.getElementById('source_text').style.display="block";
            }
        }
        function Reset() {
            document.getElementById('reset_button').style.display="none";
            document.getElementById('source_text').style.display="none";
            var newinput = document.createElement("textarea");
            var newbutton = document.createElement("input");
            var dumbbr = document.createElement("br");
            newbutton.setAttribute("type", "button");
            newbutton.setAttribute("value", "Click Here to Set the Text");
            newinput.setAttribute("rows", 20);
            newinput.setAttribute("cols", 70);
            newbutton.id='newbutton';
            newinput.id='newinput';
            dumbbr.id='dumbbr';      
            document.getElementById('source_id').appendChild(newinput);
            document.getElementById('source_id').appendChild(dumbbr);
            document.getElementById('source_id').appendChild(newbutton);
            newbutton.onclick = Finish;
        }
        };

}

function Check_Now(){
    time_keep = 0;
    document.getElementById('alltheresults').style.display="block";
    //Handles stuff using dumbNLP; all hail dumbNLP
    let studentWriting = grabCleanText('summary_text');
    //Prep the input and the source text
    let fixe1 = studentWriting.toLowerCase();
    let temp_i_text = fixe1.replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()]/g,"");
    let studentFixed = temp_i_text.replace(/\s{2,}/g," ");
    let fixe2 = source_1.toLowerCase();
    let temp_s_text = fixe2.replace(/[.,\/#!$%\^&\*;:?{}=\-_`~()]/g,"");
    let sourceFixed = temp_s_text.replace(/\s{2,}/g," ");

    //These are dumbNLP functions
    let kid3 = CompareWritingToSource(3, studentFixed, sourceFixed);
    let kid5 = CompareWritingToSource(5, studentFixed, sourceFixed);
    let counter5 = kid5.copiedWords.length;
    let original_length = CountWords(sourceFixed);
    let summary_length = CountWords(studentFixed);
    let percentage = safeDivision(CountWords(studentFixed), CountWords(sourceFixed));
    
    //These lines create the red/bolded words that were repeated
    let kidWithPunct = ProvideWordsWithPunctuation(studentWriting);
    let highlights = "";
    for (let i=0; i<kidWithPunct.length; i++){
        if (kid3.copiedWords.includes(i)){
            highlights+="<span style='color: red'><b>"+ kidWithPunct[i]+"</b></span> ";
        } else {
            highlights+=kidWithPunct[i] + " ";
        }
    }

    //delete old graphs and make the blank spaces
    if(document.getElementById('myLength')){
        document.getElementById('myLength').remove();
    }
    if(document.getElementById('myChart')){
        document.getElementById('myChart').remove();
    }
    let graphLength = document.createElement("canvas");
    graphLength.id="myLength";
    graphLength.className="losGraph";
    document.getElementById("length_graph").appendChild(graphLength);
    let graphCopy = document.createElement("canvas");
    graphCopy.id="myChart";
    graphCopy.className="losGraph";
    document.getElementById("graph_container").appendChild(graphCopy);

    //Preps advice based on these values and draws charts
    var advice_length = "";
    var advice_length2 = "";
    var advice_repeats1 = "";
    var advice_repeats2 = "";
    //Draws charts
    var originality_3 = (1- parseFloat(kid3.copyPCT)).toFixed(4);
    var xValues = ["Percent Repeated", "Percent Original Writing"];
    var yValues = [parseFloat(kid3.copyPCT)*100, originality_3*100];
    var barColors = ["red", "blue"];
    new Chart('myChart', {type: "doughnut", data: {labels: xValues, datasets: [{backgroundColor: barColors, data: yValues}]},options: {title: {display: true, text: "Percentage of Your Summary that was Original Writing"}}});
    var xBars = ["Maximum Appropriate Length", "Your Text Length", "Minimum Appropriate Length"];
    var yBars = [(parseInt(original_length)*0.4).toFixed(0), summary_length, (parseInt(original_length)*0.25).toFixed(0)];
    var barColors2 = ["green", "red", "blue", "red"];
    new Chart("myLength", {type: "bar", data: {labels: xBars, datasets: [{backgroundColor: barColors2, data: yBars, minBarLength: 10, label: 'Number of Words:'}]}, options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}, title: {display: true, text: "Length of Original Text Versus Your Summary"}}});
    
    //If statements that handle the advice
    if (percentage < 0.25) {
        advice_length = "Your summary is too short."
        advice_length2 = "A good summary is about 25%-35% the length of the orignial text. Try to include a few more details about main points."
    }
    else if (percentage > 0.4) {
        advice_length = "Your summary is too long."
        advice_length2 = "A good summary is about 25%-35% the length of the orignial text. Try to reduce some details without deleting any of the main points."    
    }
    else {
        advice_length = "Good summary length!"
        advice_length2 = "A good summary is about 25%-35% the length of the orignial text."
    }
    if (kid5.copyPCT > 0 || kid3.copyPCT > 0.1) {
        advice_repeats1 = "Your summary repeats too much of the original text."
        resulty = highlights;
        if (kid5.copyPCT > 0 && kid3.copyPCT > 0.1) {
            advice_repeats2 = "Your summary contains " + counter5 + " five-word chunk repeats from the original! You should never copy five or more words from the original! ";
            advice_repeats2 += "Your summary also contains too many 3-word chunk repeats from the original. Use more paraphrasing techniques as suggested in Chapter 4 of Pathways to Academic English.";
        } else if (kid5.copyPCT > 0){
            advice_repeats2 = "Your summary contains " + counter5 + " five-word chunk repeats from the original! You should never copy five or more words from the original! ";
        }
    } else {
        advice_repeats1 = "Your summary doesn't repeat too much of the original text!";
        resulty = "None - good job!";
    }

   
    document.getElementById('results_length').innerHTML = advice_length;
    document.getElementById('length_advice').innerHTML = advice_length2;
    document.getElementById('results_repeating').innerHTML = advice_repeats1;
    document.getElementById('repeats_advice').innerHTML = advice_repeats2;
    document.getElementById('repeats_text').innerHTML = resulty;

}


