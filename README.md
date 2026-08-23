# myROBOT-V12

🤖 myROBOT-V12 Development

Developer: Asep Pudin
Version: V12.0 Development
Platform: Web / Mobile Browser
Repository: GitHub

Download Aplikasi:
https://github.com/aseppudinnew-pro/APLIKASI-V12-PRO/raw/refs/heads/main/myROBOTV12app-release.apk

Review Aplikasi:
https://aseppudinnew-pro.github.io/APLIKASI-V12-PRO/

---

📌 Tentang

myROBOT-V12 adalah dashboard berbasis HTML, CSS, dan JavaScript yang dirancang untuk penggunaan pada HP maupun komputer.

Dashboard menyediakan monitoring sederhana seperti:

- 🕐 Jam real-time
- 📅 Tanggal otomatis
- ⏱️ Timer
- 🌐 Status internet
- 🤖 Status sistem aktif
- 📍 GPS perangkat
- 📋 System Log
- 📱 Tampilan responsive untuk HP

---

🚀 Instalasi

1. Clone Repository

Buka Terminal / CMD:

git clone https://github.com/USERNAME/myROBOT-V12.git

Masuk ke folder:

cd myROBOT-V12

---

2. Jalankan Secara Lokal

Tidak membutuhkan server khusus.

Cukup buka:

index.html

menggunakan browser seperti:

- Google Chrome
- Microsoft Edge
- Firefox

---

📂 Struktur Folder

myROBOT-V12/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── assets/
    └── logo/

«Jika project masih menggunakan satu file HTML, CSS dan JavaScript dapat tetap berada di dalam "index.html".»

---

📱 Penggunaan di HP

Buka repository melalui browser atau gunakan GitHub Pages.

Untuk mendapatkan pengalaman terbaik:

1. Buka website menggunakan Chrome.
2. Izinkan akses lokasi ketika diminta.
3. Aktifkan GPS pada HP.
4. Pastikan koneksi internet aktif.
5. Dashboard akan menampilkan status sistem.

---

📍 GPS

Fitur GPS menggunakan:

navigator.geolocation

Ketika tombol AKTIFKAN GPS ditekan, browser akan meminta izin lokasi.

Data yang ditampilkan:

Latitude
Longitude
Accuracy

⚠️ Catatan

GPS pada browser biasanya membutuhkan HTTPS atau "localhost".

Karena itu, GPS disarankan digunakan melalui GitHub Pages, bukan hanya membuka file HTML secara langsung.

---

🌐 Status Internet

myROBOT-V12 menggunakan:

navigator.onLine

Status akan berubah otomatis:

ONLINE

atau:

OFFLINE

Dashboard juga mencatat perubahan status ke dalam System Log.

---

⏱️ Timer

Timer mempunyai tiga fungsi:

START

Memulai timer.

PAUSE

Menghentikan sementara timer.

RESET

Mengembalikan timer menjadi:

00:00:00

---

📋 System Log

System Log mencatat aktivitas dashboard seperti:

[SYSTEM] myROBOT-V12 starting...
[NETWORK] Internet ONLINE
[GPS] Meminta lokasi perangkat...
[TIMER] Timer START
[TIMER] Timer PAUSE

Log digunakan untuk membantu monitoring aktivitas sistem.

---

🌍 GitHub Pages

Untuk menjalankan myROBOT-V12 secara online:

1. Masuk ke repository GitHub.
2. Pilih Settings.
3. Pilih Pages.
4. Pada Build and deployment, pilih:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
5. Klik Save.

Setelah proses selesai, GitHub akan memberikan alamat website.

Contoh:

https://username.github.io/myROBOT-V12/

Buka alamat tersebut menggunakan HP.

---

🔐 Izin GPS

Saat pertama kali membuka dashboard, browser dapat meminta:

«Allow this site to access your location?»

Pilih:

Allow / Izinkan

Jika sebelumnya memilih Block:

Chrome Android

Chrome
→ Settings
→ Site settings
→ Location
→ Izinkan website

Kemudian buka kembali myROBOT-V12.

---

🛠️ Development

Project ini masih dalam tahap:

DEVELOPMENT

Pengembangan berikutnya dapat mencakup:

- 🗺️ GPS Map
- 📍 GPS Tracking
- 🛰️ Riwayat lokasi
- 📊 Dashboard monitoring
- 💾 Penyimpanan log
- 🔔 Notifikasi
- 🔐 Login pengguna
- 📡 Monitoring perangkat
- 🖥️ Admin Panel
- ☁️ Database
- 📱 PWA / Install sebagai aplikasi HP

---

👨‍💻 Developer

Asep Pudin

Project:

myROBOT-V12 Development

---

📄 License

Project ini merupakan project pengembangan pribadi.

Penggunaan, modifikasi, dan distribusi mengikuti ketentuan yang ditetapkan oleh pemilik repository.

---

⭐ Status Project

myROBOT-V12
Version : V12.0
Status  : DEVELOPMENT
Platform: WEB / MOBILE
GPS     : ENABLED
TIMER   : ENABLED
NETWORK : MONITORING
SYSTEM  : ACTIVE

© 2026 Asep Pudin — myROBOT-V12 Development

