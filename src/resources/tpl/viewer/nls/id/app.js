/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Simpan",
      "close": "Tutup"
    },
    "errors": {
      "noConfigName": "Tidak ada konfigurasi di index.html > configOptions.story",
      "configFormatError": "Konfigurasi yang ditentukan tidak dapat dimuat karena kesalahan sintaksis JSON.",
      "configNotFound": "Konfigurasi yang ditentukan tidak ada atau tidak dapat dimuat karena kesalahan sintaksis JSON.",
      "boxTitle": "Terjadi kesalahan",
      "servedFromFile": "Aplikasi harus diakses melalui server web. Lihat ${USER_GUIDE} untuk melihat rinciannya.",
      "userGuide": "panduan pengguna",
      "invalidConfig": "Konfigurasi tidak valid",
      "invalidConfigNoApp": "Pengenal Aplikasi Pemetaan Web tidak ditentukan di index.html.",
      "invalidConfigNoAppDev": "Tidak ada pengenal Aplikasi Pemetaan Web yang ditentukan di parameter URL (?appid=). Pada mode pengembangan, konfigurasi appid pada index.html diabaikan.",
      "unspecifiedConfigOwner": "Pemilik sah belum dikonfigurasi.",
      "invalidConfigOwner": "Pemilik cerita belum disahkan.",
      "invalidConfignoOAuth": "Cerita ini memerlukan autentikasi, harap konfigurasi ArcGIS OAuth ID di index.html atau jadikan cerita tersebut untuk publik.",
      "invalidApp": "Cerita ini tidak dapat dimuat.",
      "appLoadingFail": "Terjadi gangguan, {TPL_NAME} tidak dimuat dengan benar.",
      "notConfiguredDesktop": "Cerita belum dikonfigurasi.",
      "notConfiguredMobile": "Builder {TPL_NAME} tidak didukung di ukuran tampilan ini. Jika mungkin, ubah ukuran browser Anda untuk mengakses builder atau bangun cerita Anda pada perangkat dengan layar yang lebih besar.",
      "notConfiguredMobile2": "Harap putar perangkat Anda ke orientasi lanskap untuk menggunakan builder {TPL_NAME}.",
      "notAuthorized": "Anda tidak memiliki hak untuk mengakses cerita ini.",
      "notAuthorizedBuilder": "Anda tidak memiliki hak untuk menggunakan builder {TPL_NAME}.",
      "noViewerIE": "Cerita ini tidak didukung di Internet Explorer sebelum versi ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Anda coba melihat cerita ini menggunakan browser yang lama dan tidak didukung. Mungkin ada fitur yang tidak berfungsi atau masalah yang tidak diinginkan lainnya. Sebaiknya Anda memperbaruinya ke Internet Explorer 11 atau gunakan browser lain, seperti Chrome.",
      "noViewerIE3": "Di akhir 2017, cerita ini tidak akan dimuat lagi di browser ini. Pada saat itu, Anda harus menggunakan browser yang didukung untuk melihat cerita ini.",
      "upgradeBrowser": "Harap perbarui browser Anda",
      "mapLoadingFail": "Terjadi gangguan, peta tidak dimuat dengan benar.",
      "signOut": "Keluar",
      "builderSupportFirefox": "Builder Story Map Cascade sekarang mendukung Firefox!<br><br>Dukungan untuk menulis cerita Cascade di Firefox saat ini dalam status beta. Silakan coba dan laporan masalah apa pun ke ${ESRI-SUPPORT} atau ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cerita Cascade dapat dilihat di browser web modern mana pun, namun builder Story Map Cascade hanya didukung di ${CHROME}, ${SAFARI}, dan ${FIREFOX}.<br><br>Jika Anda memerlukan builder Cascade untuk mendukung browser yang berbeda, harap hubungi ${ESRI-SUPPORT} atau ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Builder Story Map Cascade tidak didukung di iPad. Cerita Cascade yang Anda buat dan bagikan akan berjalan di iPad.",
      "launchBuilder": "Jalankan builder Cascade",
      "notAgain": "Jangan perlihatkan ini lagi",
      "sorry": "Perhatian:"
    },
    "mobileWarning": {
      "message1": "Anda sudah membaca versi seluler cerita ini. Untuk versi lengkap, dengan unsur media yang lebih kaya, cobalah di komputer desktop.",
      "email": "Kirim tautan ke cerita ini melalui email"
    },
    "cover": {
      "iosEmbedLink": "Ketuk untuk membaca cerita lengkapnya"
    },
    "media": {
      "captionPlaceholder": "Keterangan Anda di sini...",
      "loadingError": "Maaf, konten ini tidak dapat diakses",
      "explore": "Jelajahi",
      "exploreMap": "Jelajahi Peta",
      "exploreStop": "Berhenti Menjelajah",
      "sceneNotSupported": "Maaf, peta 3D tidak didukung di perangkat Anda.",
      "loading1": "Memuat...",
      "loading2": "Memuat peta...",
      "videoPlayPause": "putar/jeda",
      "videoMuteUnmute": "bisukan/bunyikan"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Bagikan atau cetak",
      "tooltipAutoplayDisabled": "Tidak tersedia pada mode pemutaran otomatis"
    },
    "shareFromCommon": {
      "copy": "Salin",
      "copied": "Tersalin",
      "open": "Buka",
      "embed": "Sematkan di halaman web",
      "embedExplain": "Gunakan kode HTML berikut untuk menyematkan cerita pada halaman web.",
      "size": "Ukuran (lebar/tinggi):",
      "autoplayLabel": "Mode pemutaran otomatis",
      "autoplayExplain1": "Mode pemutaran otomatis akan berputar seiring cerita Anda pada interval reguler. Interval ini ideal pada monitor layar kios atau publik, namun perlu diperhatikan bahwa dalam situasi lainnya, cerita mungkin akan lebih sulit dibaca. Fitur ini tidak didukung pada layar kecil.",
      "autoplayExplain2": "Saat mode ini aktif, ada beberapa kontrol untuk memutar/menjeda cerita dan mengatur kecepatan navigasi.",
      "linksupdated": "Tautan diperbarui!"
    },
    "theme": {
      "lightLabel": "Terang",
      "darkLabel": "Gelap"
    },
    "autoplay": {
      "speedFast": "Cepat",
      "speedMedium": "Sedang",
      "speedSlow": "Lambat"
    },
    "bannerNotification": {
      "learnMore": "Pelajari Lebih Lanjut",
      "close": "Tutup",
      "dontShowAgain": "Jangan tampilkan pesan ini lagi"
    },
    "embedBar": {
      "share": "Bagikan",
      "fullScreen": "Layar penuh",
      "exitFullScreen": "Keluar dari layar penuh",
      "enlarge": "Perbesar",
      "newTab": "Buka di tab baru",
      "tagline": "Story Map",
      "twitter": "Bagikan ke Twitter",
      "facebook": "Bagikan ke Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Harap tunggu sampai seluruh cerita dimuat sebelum mencetak",
      "printNotes": "Jika halaman ini lambat dimuat atau sebagian media tidak muncul, coba ganti media langsung dengan gambar atau cetak rentang bagian yang lebih kecil. Untuk hasil terbaik, Anda mungkin perlu mengaktifkan pencetakan elemen latar belakang di pengaturan cetak browser Anda.",
      "printOptions": "Opsi",
      "makeTextBlack": "Jadikan semua teks berwarna hitam",
      "showLinks": "Perlihatkan URL tautan",
      "useAltMedia": "Ganti media langsung dengan gambar, jika tersedia",
      "pageBreaks": "Mulai setiap bagian di halaman baru",
      "printRange": "Cetak bagian dari cerita ini",
      "sectionStart": "Bagian:",
      "go": "Terapkan",
      "reset": "Atur ulang ke seluruh cerita",
      "print": "Cetak"
    },
    "page": {
      "appTagline": "Cerita ini dibuat dengan ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Cascade Story Map Esri",
      "readItOnline": "Baca di web di ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Bagian ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Website:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Akun Anda (%USER_NAME%) tidak dilisensikan untuk membuka Peta Cerita yang bukan bersifat publik.  Harap minta administrator organisasi Anda untuk menetapkan Anda jenis pengguna yang menyertakan Peta Cerita atau lisensi add-on Essential App."
    }
  }
});