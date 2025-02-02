// Fungsi menyimpan draft ke local storage
function simpanDraft() {
    let tulisan = document.getElementById("editor").value;
    localStorage.setItem("draft", tulisan);
    alert("Draft tersimpan!");
}

// Fungsi menghapus teks di editor
function bersihkanEditor() {
    document.getElementById("editor").value = "";
}

// Cek apakah ada draft yang tersimpan sebelumnya
window.onload = function() {
    let draft = localStorage.getItem("draft");
    if (draft) {
        document.getElementById("editor").value = draft;
    }
};