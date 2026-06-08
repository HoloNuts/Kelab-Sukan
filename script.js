// Data Karakteristik Kelab Sukan (Dipaparkan secara dinamik dalam Modal)
const clubCharacteristics = {
    bolasepak: {
        title: "Kelab Bola Sepak",
        features: [
            "Fokus kepada stamina tinggi dan larian pecut.",
            "Melatih koordinasi kaki-mata dan strategi padang.",
            "Keperluan: Kasut bola (studs) dan pelindung tulang kering.",
            "Sesuai untuk individu yang sukakan kerja berpasukan berskala besar."
        ]
    },
    badminton: {
        title: "Kelab Badminton",
        features: [
            "Fokus kepada kelajuan refleks dan ketangkasan tangan.",
            "Latihan intensif kardio jenis 'stop-and-go'.",
            "Keperluan: Raket badminton dan kasut gelanggang dalaman.",
            "Sesuai untuk permainan perseorangan mahupun bergu."
        ]
    },
    bolakeranjang: {
        title: "Kelab Bola Keranjang",
        features: [
            "Fokus kepada ketinggian lompatan dan kekuatan tubuh atas.",
            "Melatih ketepatan balingan dan kemahiran mengelecek.",
            "Keperluan: Kasut bola keranjang berdaya serapan tinggi.",
            "Permainan dinamik yang mementingkan taktikal pantas."
        ]
    },
    renang: {
        title: "Kelab Olahraga Air (Renang)",
        features: [
            "Latihan impak rendah yang menyelamatkan sendi.",
            "Membina kapasiti paru-paru dan kekuatan otot teras.",
            "Keperluan: Pakaian renang, gogal, dan penutup kepala.",
            "Sesuai untuk semua tahap kecergasan fizikal."
        ]
    },
    olahraga: {
        title: "Kelab Olahraga",
        features: [
            "Merangkumi acara balapan (larian) dan padang (lompat/baling).",
            "Melatih disiplin asas pergerakan manusia secara maksima.",
            "Keperluan: Kasut sukan bersesuaian (running shoes/spikes).",
            "Sesuai untuk pembinaan kekuatan asas atlet."
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. LOGIK NAVIGASI (Single Page Application)
       ========================================== */
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page-section");

    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            
            navButtons.forEach(btn => btn.classList.remove("active"));
            pages.forEach(page => page.classList.remove("active"));

            button.classList.add("active");
            
            const targetPageId = button.getAttribute("data-target");
            document.getElementById(targetPageId).classList.add("active");
        });
    });

    /* ==========================================
       2. LOGIK INTERAKTIF MODAL (Karakteristik)
       ========================================== */
    const modal = document.getElementById("char-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalList = document.getElementById("modal-list");
    const closeModalBtn = document.querySelector(".close-modal");
    const charButtons = document.querySelectorAll(".view-char-btn");

    charButtons.forEach(button => {
        button.addEventListener("click", () => {
            const clubKey = button.getAttribute("data-club");
            const data = clubCharacteristics[clubKey];

            if (data) {
                modalTitle.textContent = data.title;
                modalList.innerHTML = "";
                
                data.features.forEach(feature => {
                    const li = document.createElement("li");
                    li.textContent = feature;
                    modalList.appendChild(li);
                });

                modal.classList.remove("hidden");
            }
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    /* ==========================================
       3. TOGGLE MOD GELAP / CERAH
       ========================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        themeToggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    }

    themeToggleBtn.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        
        if (theme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });

    /* ==========================================
       4. ANIMASI INTERAKTIF LOGO (Di Sini Tempatnya!)
       ========================================== */
    const logoImage = document.querySelector(".logo-img");

    if (logoImage) {
        logoImage.addEventListener("click", () => {
            // Tambah class 'logo-bounce' apabila diklik
            logoImage.classList.add("logo-bounce");
            
            // Buang semula class tersebut selepas 400 milisaat
            setTimeout(() => {
                logoImage.classList.remove("logo-bounce");
            }, 400);
        });
    }

    /* ==========================================
       5. INTERAKSI BORANG MAKLUM BALAS
       ========================================== */
    const feedbackForm = document.getElementById("feedback-form");
    const successMsg = document.getElementById("form-success");

    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        feedbackForm.reset();
        successMsg.classList.remove("hidden");

        setTimeout(() => {
            successMsg.classList.add("hidden");
        }, 5000);
    });
}); // <--- Ini adalah penutup mutlak kod JavaScript anda