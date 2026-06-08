// Data Karakteristik & Sejarah Kelab Sukan (Dipaparkan secara dinamik dalam Modal)
const clubCharacteristics = {
    bolasepak: {
        title: "Kelab Bola Sepak",
        history: "Undang-undang bola sepak moden mula digubal di England pada tahun 1863 oleh Persatuan Bola Sepak (FA), mengubah permainan sukan jalanan tradisional menjadi sukan global terulung yang paling popular di dunia hari ini.",
        features: [
            "Fokus kepada stamina tinggi dan larian pecut.",
            "Melatih koordinasi kaki-mata dan strategi padang.",
            "Keperluan: Kasut bola (studs) dan pelindung tulang kering.",
            "Sesuai untuk individu yang sukakan kerja berpasukan berskala besar."
        ]
    },
    badminton: {
        title: "Kelab Badminton",
        history: "Sukan badminton moden berkembang pada pertengahan abad ke-19 di India British sebagai 'Poona', sebelum dibawa pulang ke England dan dimainkan secara rasmi di estet 'Badminton House' di Gloucestershire pada tahun 1873.",
        features: [
            "Fokus kepada kelajuan refleks dan ketangkasan tangan.",
            "Latihan intensif kardio jenis 'stop-and-go'.",
            "Keperluan: Raket badminton dan kasut gelanggang dalaman.",
            "Sesuai untuk permainan perseorangan mahupun bergu."
        ]
    },
    bolakeranjang: {
        title: "Kelab Bola Keranjang",
        history: "Dicipta pada Disember 1891 oleh Dr. James Naismith, seorang guru pendidikan jasmani di Springfield, Amerika Syarikat. Beliau mencipta sukan ini sebagai aktiviti dalaman musim sejuk menggunakan bakul buah pic dan bola hoki.",
        features: [
            "Fokus kepada ketinggian lompatan dan kekuatan tubuh atas.",
            "Melatih ketepatan balingan dan kemahiran mengelecek.",
            "Keperluan: Kasut bola keranjang berdaya serapan tinggi.",
            "Permainan dinamik yang mementingkan taktikal pantas."
        ]
    },
    renang: {
        title: "Kelab Renang",
        history: "Aktiviti renang telah dikesan sejak zaman prasejarah lagi, namun ia mula dipertandingkan sebagai sukan kompetitif moden sekitar tahun 1830-an di England sebelum dimasukkan ke dalam Sukan Olimpik moden pertama pada tahun 1896.",
        features: [
            "Latihan impak rendah yang menyelamatkan sendi.",
            "Membina kapasiti paru-paru dan kekuatan otot teras.",
            "Keperluan: Pakaian renang, gogal, dan penutup kepala.",
            "Sesuai untuk semua tahap kecergasan fizikal."
        ]
    },
    olahraga: {
        title: "Kelab Olahraga",
        history: "Olahraga merupakan antara sukan tertua di dunia yang bermula sejak Sukan Olimpik Kuno di Greece pada tahun 776 SM. Sukan ini merangkumi disiplin asas manusia paling tulen iaitu larian, lompatan, dan balingan.",
        features: [
            "Merangkumi acara balapan (larian) dan padang (lompat/baling).",
            "Melatih disiplin asas pergerakan manusia secara maksima.",
            "Keperluan: Kasut sukan bersesuaian (running shoes/spikes).",
            "Sesuai untuk pembinement kekuatan asas atlet."
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
       2. LOGIK INTERAKTIF MODAL (Karakteristik & Sejarah)
       ========================================== */
    const modal = document.getElementById("char-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalHistory = document.getElementById("modal-history");
    const modalList = document.getElementById("modal-list");
    const closeModalBtn = document.querySelector(".close-modal");
    const charButtons = document.querySelectorAll(".view-char-btn");

    charButtons.forEach(button => {
        button.addEventListener("click", () => {
            const clubKey = button.getAttribute("data-club");
            const data = clubCharacteristics[clubKey];

            if (data) {
                modalTitle.textContent = data.title;
                modalHistory.textContent = data.history;
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
       4. ANIMASI INTERAKTIF LOGO
       ========================================== */
    const logoImage = document.querySelector(".logo-img");

    if (logoImage) {
        logoImage.addEventListener("click", () => {
            logoImage.classList.add("logo-bounce");
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
	
    /* ==========================================
       6. LOGIK INTERAKTIF SPAWN BOLA & FIZIK KURSOR
       ========================================== */
    const hubToggle = document.getElementById("sports-hub-toggle");
    const sportsMenu = document.getElementById("sports-menu");
    const spawnButtons = document.querySelectorAll(".spawn-item-btn");
    const clearSportsBtn = document.getElementById("clear-sports-btn");
    
    let activeObjects = [];

    // Buka / Tutup Menu Hub
    hubToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        sportsMenu.classList.toggle("hidden");
    });

    // Tutup menu jika klik di tempat lain
    document.addEventListener("click", () => {
        sportsMenu.classList.add("hidden");
    });

    // Klik butang untuk spawn objek
    spawnButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const emoji = button.getAttribute("data-type") || button.innerText.split(" ")[0]; 
            createSportObject(emoji);
        });
    });

    // Bersihkan semua objek sukan di skrin
    clearSportsBtn.addEventListener("click", () => {
        activeObjects.forEach(obj => obj.element.remove());
        activeObjects = [];
    });

    // Fungsi Utama Mencipta Objek Sukan + Simulasi Fizik Melantun pada Kursor
    function createSportObject(emoji) {
        const objEl = document.createElement("div");
        objEl.className = "spawned-sport-object";
        objEl.innerText = emoji;

        // Set lokasi spawn rawak di tengah-tengah skrin atas
        let posX = window.innerWidth / 2 + (Math.random() * 100 - 50);
        let posY = 100;
        
        // Nilai Halaju (Velocity) & Fizik Asas
        let velX = (Math.random() * 10 - 5); 
        let velY = 0;
        const gravity = 0.4;
        const bounce = -0.75;  // Daya lantunan semula dinding/lantai
        const friction = 0.98; // Geseran udara
        const radius = 30;     // Jejari objek (saiz 60px / 2)

        objEl.style.left = posX + "px";
        objEl.style.top = posY + "px";
        document.body.appendChild(objEl);

        let isDragging = false;
        
        // Menyimpan posisi kursor tetikus semasa global
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isDragging) return;
            // Kemas kini kedudukan mengikut cursor tetikus jika sedang di-drag
            posX = mouseX - radius;
            posY = mouseY - radius;
            objEl.style.left = posX + "px";
            objEl.style.top = posY + "px";
        });

        // --- SISTEM DRAG & DROP ---
        objEl.addEventListener("mousedown", (e) => {
            isDragging = true;
            velX = 0;
            velY = 0;
        });

        document.addEventListener("mouseup", (e) => {
            if (isDragging) {
                isDragging = false;
                velX = (Math.random() * 14 - 7);
                velY = -8;
            }
        });

        // --- INTERAKSI TENDANG (JIKA DIKLIK) ---
        objEl.addEventListener("click", () => {
            if (!isDragging) {
                velY = -12;
                velX = (Math.random() * 20 - 10);
            }
        });

        // Loop Animasi Fizik Real-Time
        function updatePhysics() {
            if (!isDragging) {
                // 1. KIRA KEDUDUKAN PUSAT BOLA & JARAK DENGAN KURSOR
                const ballCenterX = posX + radius;
                const ballCenterY = posY + radius;

                const diffX = ballCenterX - mouseX;
                const diffY = ballCenterY - mouseY;
                const distance = Math.sqrt(diffX * diffX + diffY * diffY);

                // Jarak sensitiviti tolakan (dalam piksel). 
                // Jika kursor berada dalam lingkungan 65px dari pusat bola, bola akan tertolak.
                const kickRadius = 65; 

                if (distance < kickRadius && distance > 0) {
                    // Kira arah tolakan (Vector Normalization)
                    const dirX = diffX / distance;
                    const dirY = diffY / distance;

                    // Kekuatan tolakan (semakin dekat kursor, semakin kuat lantunan)
                    const force = (kickRadius - distance) * 0.5;

                    // Berikan impak halaju (velocity) baharu kepada bola
                    velX += dirX * force * 1.5;
                    velY += dirY * force * 1.5;
                    
                    // Beri had laju maksimum supaya bola tidak terkeluar skrin terlalu laju
                    const maxSpeed = 25;
                    if (velX > maxSpeed) velX = maxSpeed;
                    if (velX < -maxSpeed) velX = -maxSpeed;
                    if (velY > maxSpeed) velY = maxSpeed;
                    if (velY < -maxSpeed) velY = -maxSpeed;
                }

                // 2. SIMULASI GRAVITI & GESERAN
                velY += gravity;
                velX *= friction;

                posX += velX;
                posY += velY;

                // 3. BATASAN SEMPADAN SKRIN
                // Lantai
                const groundLevel = window.innerHeight - 85; 
                if (posY >= groundLevel) {
                    posY = groundLevel;
                    velY *= bounce; 
                    // Berhentikan lantunan mikro yang tiada henti di atas lantai
                    if (Math.abs(velY) < 1.5) velY = 0;
                }
                // Siling (Atas skrin)
                if (posY <= 0) {
                    posY = 0;
                    velY *= bounce;
                }
                // Dinding Kiri
                if (posX <= 0) {
                    posX = 0;
                    velX *= bounce;
                } 
                // Dinding Kanan
                else if (posX >= window.innerWidth - 60) {
                    posX = window.innerWidth - 60;
                    velX *= bounce;
                }

                // 4. KEMASKINI VISUAL & PUTARAN (ROTATION)
                objEl.style.left = posX + "px";
                objEl.style.top = posY + "px";

                if (emoji === "⚽" || emoji === "🏀") {
                    objEl.style.transform = `rotate(${posX * 1.5}deg)`;
                }
            }
            requestAnimationFrame(updatePhysics);
        }

        requestAnimationFrame(updatePhysics);

        // Simpan ke dalam array tracker untuk fungsi clear
        activeObjects.push({ element: objEl });
    }
});
