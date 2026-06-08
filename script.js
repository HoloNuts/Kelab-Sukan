/* ==========================================
   1. VARIABLES & BASE STYLES (Tema & Font)
   ========================================== */
:root {
    --bg-color: #f8f9fa;
    --text-color: #212529;
    --card-bg: #ffffff;
    --accent-color: #0d6efd;
    --accent-hover: #0b5ed7;
    --border-color: #dee2e6;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
}

/* Nilai pembolehubah untuk Mod Gelap */
[data-theme="dark"] {
    --bg-color: #121212;
    --text-color: #f8f9fa;
    --card-bg: #1e1e1e;
    --accent-color: #375a7f;
    --accent-hover: #4b75a4;
    --border-color: #333333;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: var(--transition);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* ==========================================
   2. NAVBAR & HEADER
   ========================================== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
}

/* Susun atur kontena logo supaya imej dan teks duduk sebaris */
.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Jarak antara gambar logo dan teks */
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

/* Gaya asal logo (Pastikan ada transition) */
.logo-img {
    height: 40px;
    width: auto;
    object-fit: contain;
    cursor: pointer; /* Menukar penunjuk tetikus kepada bentuk tangan */
    transition: transform 0.3s ease; /* Mengawal kelajuan dan kelancaran animasi */
}

/* Kesan INTERAKTIF: Zoom masuk sedikit apabila tetikus berada di atas logo */
.logo-img:hover {
    transform: scale(1.15); /* 1.15 bermaksud logo akan membesar sebanyak 15% */
}

/* Kesan INTERAKTIF: Zoom masuk lebih besar sedikit apabila logo diklik/ditekan */
.logo-img:active {
    transform: scale(0.95); /* Memberi kesan 'picitan' (button press effect) */
}

.logo span {
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-btn {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: var(--transition);
}

.nav-btn:hover, .nav-btn.active {
    background-color: var(--accent-color);
    color: #ffffff;
}

.theme-btn {
    background: none;
    border: 1px solid var(--border-color);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--card-bg);
    transition: var(--transition);
}

/* ==========================================
   3. STRUKTUR HALAMAN (SPA Toggle)
   ========================================== */
.content-container {
    flex: 1;
    padding: 2rem 5%;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.page-section {
    display: none; /* Sembunyikan semua halaman secara default */
    animation: fadeIn 0.5s ease forwards;
}

.page-section.active {
    display: block; /* Paparkan halaman aktif sahaja */
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Typography Umum */
.section-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-align: center;
}

.section-subtitle {
    text-align: center;
    color: #6c757d;
    margin-bottom: 2rem;
}

/* ==========================================
   4. HALAMAN 1: HERO, KEBAIKAN & SEJARAH AM
   ========================================== */
.hero {
    text-align: center;
    padding: 3rem 1rem;
    background: linear-gradient(135deg, var(--accent-color), #004085);
    color: white;
    border-radius: 12px;
    margin-bottom: 3rem;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

/* Kotak Sejarah Am pada Halaman 1 */
.intro-history-box {
    background: var(--card-bg, #ffffff);
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color, #e0e0e0);
}

.intro-history-box p {
    line-height: 1.6;
    color: #444;
}

.grid-benefits {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.benefit-card {
    background-color: var(--card-bg);
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow);
}

.benefit-card h3 {
    margin-bottom: 0.75rem;
    color: var(--accent-color);
}

/* ==========================================
   5. HALAMAN 2: SENARAI KELAB (GRID)
   ========================================== */
.grid-clubs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
}

.club-card {
    background-color: var(--card-bg);
    border-radius: 10px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.club-card:hover {
    transform: translateY(-5px);
}

.club-image-placeholder {
    height: 150px;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #495057;
}

[data-theme="dark"] .club-image-placeholder {
    background-color: #2a2a2a;
    color: #adb5bd;
}

.club-info {
    padding: 1.2rem;
    text-align: center;
}

.club-info h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
}

.view-char-btn {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    width: 100%;
    transition: var(--transition);
}

.view-char-btn:hover {
    background-color: var(--accent-hover);
}

/* ==========================================
   6. INTERACTIVE MODAL (Page Kecil)
   ========================================== */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
}

.modal-content {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.close-modal {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
}

.modal hr {
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid var(--border-color);
}

/* Ruang hiasan tajuk kecil di dalam modal */
.modal-content h3 {
    font-size: 1.1rem;
    color: var(--text-color);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    border-left: 3px solid #007bff;
    padding-left: 0.5rem;
}

.modal ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
}

.modal li {
    margin-bottom: 0.5rem;
}

.hidden {
    display: none !important;
}

/* ==========================================
   7. HALAMAN 3: BORANG MAKLUM BALAS
   ========================================== */
.form-container {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    max-width: 600px;
    margin: 0 auto;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.25rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
}

.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
    font-size: 0.95rem;
    transition: var(--transition);
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
}

.submit-btn {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    transition: var(--transition);
}

.submit-btn:hover {
    background-color: var(--accent-hover);
}

.success-message {
    background-color: #d1e7dd;
    color: #0f5132;
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
}

/* ==========================================
   8. FOOTER
   ========================================== */
footer {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-color);
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #6c757d;
}

/* ==========================================
   9. SEKSYEN JADUAL SEJARAH & KELAS (BAHAGIAN BAWAH)
   ========================================== */
.history-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-top: 2rem;
}

/* Garis Masa (Timeline) */
.history-timeline {
    background: var(--card-bg, #ffffff);
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--border-color, #e0e0e0);
    box-shadow: var(--shadow);
}

.history-timeline h3, .classes-schedule h3 {
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-size: 1.3rem;
    border-left: 4px solid #007bff;
    padding-left: 0.5rem;
}

.timeline-item {
    position: relative;
    padding-left: 1.5rem;
    border-left: 2px solid #007bff;
    padding-bottom: 1.5rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #007bff;
}

.timeline-item h4 {
    margin-bottom: 0.3rem;
    font-size: 1rem;
}

.timeline-item p {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #666;
}

/* Jadual Kelas (Table) */
.classes-schedule {
    background: var(--card-bg, #ffffff);
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--border-color, #e0e0e0);
    box-shadow: var(--shadow);
}

.table-responsive {
    overflow-x: auto;
}

.schedule-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    text-align: left;
}

.schedule-table th, .schedule-table td {
    padding: 0.75rem;
    border-bottom: 1px solid var(--border-color, #e0e0e0);
}

.schedule-table th {
    background-color: rgba(0, 123, 255, 0.1);
    color: var(--text-color);
    font-weight: 600;
}

.schedule-table tr {
    transition: background-color 0.2s ease;
}

.schedule-table tr:hover {
    background-color: rgba(0, 0, 0, 0.02);
    cursor: pointer;
}

/* Efek Highlight untuk Interaktiviti JavaScript */
.row-highlight {
    background-color: rgba(40, 167, 69, 0.2) !important;
    font-weight: 600;
}

/* ==========================================
   10. KETETAPAN MOD GELAP SOKONGAN (Dark Theme Override)
   ========================================== */
[data-theme="dark"] .timeline-item p {
    color: #bbb;
}

[data-theme="dark"] .schedule-table tr:hover {
    background-color: rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .intro-history-box p,
[data-theme="dark"] #modal-history {
    color: #ddd !important;
}

/* ==========================================
   11. RESPONSIVENESS (Mobile Friendly)
   ========================================== */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .nav-links {
        width: 100%;
        justify-content: center;
        gap: 0.5rem;
    }

    .nav-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }

    .theme-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .hero h1 {
        font-size: 1.8rem;
    }

    .history-container {
        grid-template-columns: 1fr; /* Menjadi 1 lajur pada skrin telefon */
    }
}

/* ==========================================
   12. INTERAKTIF HUB & SPAWN OBJEK (BAHARU)
   ========================================== */
.interactive-sports-hub {
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 9999; /* Sentiasa berada di lapisan paling atas */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}

/* Butang Bulat Utama */
.hub-main-btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #28a745;
    color: white;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: transform 0.2s ease, background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hub-main-btn:hover {
    transform: scale(1.1) rotate(15deg);
    background-color: #218838;
}

/* Menu Pilihan Sukan */
.sports-menu {
    background: var(--card-bg, #ffffff);
    border: 1px solid var(--border-color, #dee2e6);
    padding: 10px;
    border-radius: 12px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: slideUp 0.3s ease;
}

.spawn-item-btn, .clear-btn {
    background: var(--bg-color, #f8f9fa);
    color: var(--text-color, #212529);
    border: 1px solid var(--border-color, #dee2e6);
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: left;
    transition: var(--transition);
    white-space: nowrap;
}

.spawn-item-btn:hover {
    background-color: var(--accent-color, #0d6efd);
    color: white;
}

.clear-btn {
    background-color: #dc3545;
    color: white;
    text-align: center;
}

.clear-btn:hover {
    background-color: #c82333;
}

/* Gaya Elemen Sukan Yang Di-spawn (Bola/Bulu Tangkis) */
.spawned-sport-object {
    position: fixed;
    font-size: 3rem;
    cursor: grab;
    user-select: none;
    z-index: 9998;
    transition: transform 0.05s linear;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spawned-sport-object:active {
    cursor: grabbing;
}
