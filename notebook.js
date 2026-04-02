// ===============================
// DX-OS NOTEBOOK SYSTEM
// ===============================

// skapa knapp
const btn = document.createElement("button");
btn.innerText = "📓";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = "9999";
btn.style.padding = "15px";
btn.style.borderRadius = "50%";
btn.style.background = "#eab308";
btn.style.border = "none";
btn.style.cursor = "pointer";
document.body.appendChild(btn);

// skapa panel
const panel = document.createElement("div");
panel.style.position = "fixed";
panel.style.top = "50%";
panel.style.left = "50%";
panel.style.transform = "translate(-50%, -50%)";
panel.style.width = "300px";
panel.style.height = "400px";
panel.style.background = "#111827";
panel.style.color = "white";
panel.style.padding = "10px";
panel.style.display = "none";
panel.style.zIndex = "10000";
panel.style.borderRadius = "10px";

panel.innerHTML = `
<h3>📓 Anteckningar</h3>
<textarea id="notesArea" style="width:100%; height:250px;"></textarea>
<br>
<button onclick="saveNotes()">💾 Spara</button>
<button onclick="exportNotes()">⬇ Export</button>
<button onclick="closeNotes()">❌ Stäng</button>
`;

document.body.appendChild(panel);

// öppna
btn.onclick = () => {
    panel.style.display = "block";
    loadNotes();
};

// stäng
function closeNotes(){
    panel.style.display = "none";
}

// spara
function saveNotes(){
    let text = document.getElementById("notesArea").value;
    localStorage.setItem("dx_notes", text);
}

// ladda
function loadNotes(){
    let text = localStorage.getItem("dx_notes") || "";
    document.getElementById("notesArea").value = text;
}

// export
function exportNotes(){
    let text = localStorage.getItem("dx_notes") || "";
    let blob = new Blob([text], {type: "text/plain"});
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "dx_notes.txt";
    a.click();
}
