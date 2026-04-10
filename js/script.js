// ================= REGISTER =================
function register() {
    const firstName = document.getElementById("regFirstName").value;
    const lastName = document.getElementById("regLastName").value;
    const phone = document.getElementById("regPhone").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!firstName || !lastName || !phone || !email || !password) {
        alert("Harap isi semua data!");
        return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("password", password);
    localStorage.setItem("isLogin", "true");

    alert("Pendaftaran berhasil!");
    window.location.href = "index.html";
}

// ================= LOGIN =================
function login() {
    const firstName = document.getElementById("loginFirstName").value;
    const lastName = document.getElementById("loginLastName").value;
    const password = document.getElementById("loginPassword").value;

    if (
        firstName === localStorage.getItem("firstName") &&
        lastName === localStorage.getItem("lastName") &&
        password === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLogin", "true");
        window.location.href = "index.html";
    } else {
        alert("Data login salah!");
    }
}

// ================= CEK LOGIN =================
function checkLogin() {
    if (localStorage.getItem("isLogin") !== "true") {
        window.location.href = "login.html";
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("isLogin");
    window.location.href = "login.html";
}

// ================= TOGGLE =================
function showRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
