const API_KEY = "AQ.Ab8RN6IB99Rp0L1a7FuF7ajDKe6z0xnDrJViTGlhiXtqUASDYA";

async function askAI(){
 
const prompt =
document.getElementById("userPrompt").value;

const response = await fetch(

`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,

{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[{

parts:[{

text:`You are a men's fashion expert.

Recommend outfits based on this request:

${prompt}

Keep the answer short.`

}]

}]

})

});

const data = await response.json();

if (!response.ok) {
    console.log(data);
    document.getElementById("aiResponse").innerHTML =
        "AI request failed. Check your API key or quota.";
    return;
}

const answer = data.candidates[0].content.parts[0].text;
document.getElementById("aiResponse").innerHTML = answer;
}