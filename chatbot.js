let text = "";
function getData() {
    let prompt = window.prompt("Anfrage an die KI:");
    let myMsg = document.createElement("div");
    myMsg.innerHTML = prompt;
    document.getElementById("antwort").append(myMsg);
    text += prompt;
    $.ajax({
        url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
        type: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            'prompt': prompt,
            'temperature': 0.9,
            'max_tokens': 60,
            'top_p': 0.9,
            'frequency_penalty': 2.0,
            'presence_penalty': 0.0
        }),
        success: function (result) {
            let textZurück = result.choices[0].text;
            $('#button').html("Ask me anything!");

            let msg = document.createElement("div");
            msg.innerHTML = textZurück;
            document.getElementById("antwort").append(msg);
            text += textZurück
        },
        error: function (error) {
            alert("Cannot get data");
            $('#button').html("get data");
        }
    });
}