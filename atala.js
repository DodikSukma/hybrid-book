function salah() {
    Swal.fire({
        imageHeight: 300,
        imageAlt: 'A tall image',
        imageUrl: '/image/20_Dont_know.gif',
        title: "Oops...",
        icon: "error",
        showConfirmButton: true // Menampilkan tombol "OK" untuk menutup pesan pop-up
    });
    const soundSalah = document.getElementById('soundSalah');
    soundSalah.play();
}

function benar() {
    Swal.fire({
        icon: "success",
        imageUrl: '/image/9_Happy_Jump.gif',
        imageHeight: 300,
        imageAlt: 'A tall image',
        title: 'Good Job!',
        text: 'Jawabanmu sudah mendekati',
        showConfirmButton: true // Menampilkan tombol "OK" untuk menutup pesan pop-up
    })
    const soundBenar = document.getElementById('soundBenar');
    soundBenar.play();
}

function erroralert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}

function successalert() {
    Swal.fire({
        title: "Good job!",
        text: "Data Berhasil Disimpan",
        icon: "success"
    });
    document.getElementById("form").reset();
    document.getElementById("submit-button").disabled = false;
}

function loading() {
    let timerInterval;
    Swal.fire({
        title: "Menyimpan Data",
        html: "Datamu tersimpan dalam <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}