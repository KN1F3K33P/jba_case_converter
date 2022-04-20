let uc = document.getElementById("upper-case");
if(uc) {
    uc.addEventListener("click", function() {
        document.getElementById("myText").value = document.getElementById("myText").value.toUpperCase();
    });
}

let lc = document.getElementById("lower-case");
if(lc) {
    lc.addEventListener("click", function() {
        document.getElementById("myText").value = document.getElementById("myText").value.toLowerCase();
    });
}

let pc = document.getElementById("proper-case");
if(pc) {
    pc.addEventListener("click", function() {
        let sentence = document.getElementById("myText").value.toLowerCase().split(" ");
        for(let i = 0; i < sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        document.getElementById("myText").value = sentence.join(" ");
    });
}

let sc = document.getElementById("sentence-case");
if(sc) {
    sc.addEventListener("click", function() {
        let sentence = document.getElementById("myText").value.toLowerCase().split(". ");
        for(let i = 0; i < sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        document.getElementById("myText").value = sentence.join(". ");
    });
}


let stf = document.getElementById("save-text-file");
if(stf) {
    stf.addEventListener("click", function() {
        let mytext = document.getElementById("myText").value;
        download("text.txt", mytext);
    });
}


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}