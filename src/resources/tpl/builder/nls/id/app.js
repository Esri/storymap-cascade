/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Terapkan",
      "close": "Tutup"
    },
    "header": {
      "sharingNotAvailable": "Tidak tersedia sebelum Anda membagikan cerita",
      "edit": "Edit"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Penanda Lokasi",
        "logoSharing": "Logo & Berbagi",
        "theme": "Tampilan"
      },
      "bookmarks": {
        "title": "Bagian",
        "bookmark": "Penanda Lokasi",
        "intro": "Penanda Lokasi adalah tautan ke bagian cerita yang ditunjukkan di header. Membuat penanda lokasi yang singkat untuk bagian utama cerita Anda akan membantu pembaca mendapatkan arah.",
        "sequentialDefault": "Bagian narasi (tidak ada teks ditemukan)",
        "immersiveDefault": "Bagian imersif (tidak ada teks ditemukan)",
        "titleDefault": "Bagian judul (tidak ada teks ditemukan)",
        "coverDefault": "Bagian sampul (tidak ada teks ditemukan)",
        "coverAppendage": "(Sampul)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Gunakan Logo ${ESRI}",
        "useOrgLogo": "Gunakan logo organisasi saya",
        "useOrgLogoHelp": "Gunakan logo yang disediakan administrator Anda",
        "logoLink": "Tautan logo",
        "logoUploadProgress": "Unggah logo sedang berlangsung",
        "logoUploadSuccess": "Logo berhasil diunggah",
        "logoUploadError": "Logo gagal diunggah, beralih kembali ke logo ${ESRI}",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Masukkan slogan untuk mengaktifkan tautan",
        "link": "Tautan slogan",
        "enableSocialSharing": "Tampilkan tombol berbagi"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Font",
        "previewLabel": "Pratinjau",
        "fontsTitleLabel": "Judul",
        "fontsBodyLabel": "Isi",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Sampul",
      "creditsLabel": "Kredit",
      "betaFeedback": "Tanggapan",
      "betaNote": "Harap beri tahu pendapat Anda mengenai ${APP_NAME} atau jika ada yang tidak berfungsi seperti yang Anda inginkan.",
      "notSharedNote": "Cerita Anda tidak dibagikan, hanya Anda yang dapat melihatnya",
      "organizationWarning": "Untuk memastikan cerita ini dapat dilihat oleh orang lain, Anda juga harus membagikan scene, layer scene, dan aplikasi yang disematkan dengan organisasi Anda. Peta dan layer peta dibagikan otomatis.",
      "publicWarning": "Untuk memastikan cerita ini dapat dilihat oleh orang lain, Anda juga harus membagikan scene, layer scene, dan aplikasi yang disematkan dengan Semua Orang. Peta dan layer peta dibagikan secara otomatis.",
      "addTitleNote": "Tambahkan judul pada sampul yang akan disimpan",
      "saveError": "Ada kesalahan saat menyimpan cerita Anda.",
      "duplicate": "Duplikasi",
      "organize": "Atur",
      "done": "Selesai",
      "invite": "Saat Anda membangun cerita Anda, bagian akan muncul di sini...",
      "mystoriestooltip": "Cascade Builder mengingatkan Anda adanya masalah dalam cerita Anda dan membantu memperbaikinya. Scene dan aplikasi yang disematkan tidak diperiksa, harap periksa secara manual."
    },
    "immersiveViewPanel": {
      "transition": "Transisi",
      "fade": "Menghilang",
      "fadeSlow": "Menghilang Perlahan",
      "swipeVertical": "Geser Vertikal",
      "swipeHorizontal": "Geser Horizontal",
      "none": "Tidak ada",
      "disabledConsecutiveSameMedia": "Tidak tersedia ketika tampilan berurutan menggunakan media yang sama",
      "disabledTooltipMap": "Untuk menggunakan transisi ini, layer yang terlihat di kedua tampilan harus berbeda dan properti peta lainnya harus sama",
      "disabledConsecutiveSameMap": "Tidak tersedia ketika tampilan berurutan menggunakan peta yang sama",
      "disabledNotInBeta": "Tidak tersedia ketika tampilan berurutan menggunakan peta yang sama",
      "disabledNonConsecutive": "Tidak tersedia karena ada kejadian lain dari media ini yang tidak berurutan",
      "addMedia": "Tambah media",
      "invite": "Saat Anda membangun cerita Anda, tampilan akan muncul di sini..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Tampilan",
        "manage": "Kelola",
        "size": "Ukuran",
        "background": "Latar belakang",
        "mobile": "Seluler",
        "issues": "Masalah",
        "fixIssues": "Perbaiki Masalah"
      },
      "manage": {
        "changeMedia": "Ubah media",
        "edit": "Edit",
        "editAside": "Buka di tab browser baru. Setelah menyimpan editan Anda, simpan dan muat ulang cerita ini untuk melihat ubahan Anda.",
        "remove": "Hapus"
      },
      "appearance": {
        "homeView": "Tampilan awal",
        "audio": "Audio",
        "on": "Hidup",
        "muted": "Dibisukan",
        "volumeAside": "Video akan diputar otomatis ketika pembaca tiba di tampilan ini. Jika Anda membisukan suara, pembaca tidak dapat mengaktifkannya.",
        "view": "Tampilkan",
        "resetLocation": "Atur Ulang Lokasi",
        "resetLayers": "Atur Ulang Layer",
        "clearPopup": "Bersihkan Pop-up",
        "interaction": "Interaksi",
        "interactionDisabled": "Interaksi Dinonaktifkan",
        "buttonToEnable": "Tombol untuk Mengaktifkan",
        "interactionEnabled": "Interaksi Diaktifkan",
        "interactionAside": "*Perangkat sentuh akan memperlihatkan tombol interaksi.",
        "slide": "Slide",
        "noSlides": "Tidak ada slide tersedia.",
        "mapExtentPrompt": "Perbarui peta untuk menceritakan cerita Anda, klik tanda centang untuk menyimpan ubahan"
      },
      "sectionAppearance": {
        "layout": "Tata Letak",
        "theme": "Tema"
      },
      "size": {
        "small": "Kecil",
        "medium": "Sedang",
        "large": "Besar",
        "noCrop": "Jangan memotong gambar yang tinggi",
        "noCropTallTooltip": "Tidak memotong gambar yang tinggi menghasilkan efek dramatis bagi pembaca yang memerlukan pengguliran untuk melihat keseluruhan gambar."
      },
      "background": {
        "noCrop": "Jangan dipotong",
        "mostImportantPart": "Pilih titik yang paling penting",
        "cropExplanationImmersive": "Pilih titik pada gambar untuk memilih bagaimana gambar akan dipotong pada berbagai ukuran layar. Titik yang Anda pilih akan selalu terlihat. Centang 'Jangan Dipotong' jika gambar Anda harus terlihat sepenuhnya.",
        "cropExplanation": "Pilih titik pada gambar untuk memilih bagaimana gambar akan dipotong pada berbagai ukuran layar. Titik yang Anda pilih akan selalu terlihat.",
        "color": "Warna",
        "previews": "Pratinjau"
      },
      "altMedia": {
        "alternativeMedia": "Media Alternatif",
        "explanation": "Beberapa media tidak didukung atau mungkin tidak berfungsi dengan baik pada perangkat seluler. Gunakan panel ini untuk memilih item lain yang lebih ramah seluler yang akan ditampilkan menggantikan media ini saat cerita Anda dilihat di ponsel atau tablet.",
        "changeAltImage": "Ubah gambar",
        "uploadAltImage": "Tambahkan gambar"
      }
    },
    "imageGallery": {
      "addImage": "Tambahkan gambar lain",
      "moveBackward": "Mundur",
      "moveForward": "Maju"
    },
    "cover": {
      "titlePrompt": "Masukkan judul cerita Anda...",
      "subtitlePrompt": "Gulir ke bawah untuk memulai atau masukkan subjudul opsional",
      "mediaPlaceholder": "Tambahkan gambar atau video Anda",
      "saveError": "Gagal menyimpan, Anda sudah memiliki item dengan judul ini"
    },
    "credits": {
      "sectionInvite": "Tambahkan bagian kredit",
      "warning": "Kedua kolom harus diisi",
      "content": "Konten...",
      "source": "Sumber...",
      "linkPrompt": "Tautan opsional...",
      "introductionPlaceholder": "Masukkan pendahuluan opsional ke bagian kredit Anda..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posisi",
        "theme": "Tema",
        "size": "Ukuran",
        "background": "Latar belakang",
        "layout": "Bergulir (untuk semua panel)"
      }
    },
    "title": {
      "placeholder": "Masukkan judul..."
    },
    "media": {
      "imageUpload": "Unggah gambar sedang berlangsung...",
      "imageUploadSuccess": "Gambar berhasil diunggah",
      "imageUploadFail": "Gambar gagal diunggah"
    },
    "controller": {
      "sectionOrganize": "Anda mengatur bagian",
      "immersiveOrganize": "Anda mengatur tampilan",
      "sectionDelete": "Anda sudah mengatur satu bagian",
      "viewDelete": "Anda menghapus satu tampilan"
    },
    "notification": {
      "cancel": "Batal",
      "close": "Tutup",
      "undo": "Urungkan"
    },
    "sections": {
      "sequence": "Naratif",
      "immersive": "Imersif",
      "title": "Judul"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "gambar",
        "webmap": "peta",
        "webscene": "scene",
        "video": "video",
        "content": "konten",
        "webpage": "laman web"
      },
      "placeholders": {
        "generic": "Konten ini tidak dapat diakses.",
        "deleted": "Item ini sudah dihapus.",
        "inaccessible": "Konten ini tidak dapat diakses.",
        "unauthorized": "Anda tidak berwenang melihat konten ini.",
        "unshared": "Item ini tidak dibagi seperti halnya cerita Anda.",
        "othersUnshared": "Item ini tidak dibagi seperti halnya cerita Anda.",
        "subscriptionContent": "Peta ini berisi layer pelanggan.",
        "premiumContent": "Peta ini berisi layer premium.",
        "secureService": "Peta ini berisi layer yang aman."
      },
      "contentIssues": {
        "noAltImage": "Media Tidak Didukung pada Perangkat Seluler",
        "altImageBroken": "Gambar alternatif yang ditentukan untuk item media ini tidak dapat diakses"
      },
      "contentWarnings": {
        "noAltImage": "Jenis media ini tidak didukung pada perangkat seluler. Sediakan gambar alternatif yang akan ditampilkan saat cerita dilihat pada perangkat seluler.",
        "noAltImageAlt": "Jenis media ini tidak didukung pada perangkat seluler. Pada tab seluler, sediakan gambar alternatif yang akan ditampilkan saat cerita dilihat pada perangkat seluler."
      },
      "mapIssues": {
        "fixButton": "Perbaiki Masalah",
        "nofixButton": "Masalah",
        "mapLabel": "Peta:",
        "summaries": {
          "unshared": "Konten Tidak Dibagi",
          "othersUnshared": "Konten Tidak Dibagi Milik Orang Lain",
          "subscriptionContent": "Konten Pelanggan",
          "premiumContent": "Konten Premium",
          "secureContent": "Konten Aman",
          "deleted": "Konten Terhapus",
          "inaccessible": "Konten Tidak Dapat Diakses",
          "unauthorized": "Konten Tidak Berizin"
        },
        "descriptions": {
          "unshared": "Konten ini tidak dibagi seperti halnya cerita Anda.",
          "othersUnshared": "Konten ini dimiliki oleh orang lain dan tidak dibagi seperti halnya cerita Anda.",
          "othersUnsharedAuthorized": "Konten ini dimiliki oleh orang lain tetapi Anda berwenang membagikannya.",
          "inaccessible": "Konten ini tidak dapat diakses.",
          "deleted": "Konten ini sudah dihapus.",
          "unauthorized": "Anda tidak berwenang melihat konten ini.",
          "popupFeatureLayer": "Pop-up tiled layer berasal dari feature layer yang tidak dibagikan seperti halnya cerita Anda.",
          "subscriptionContent": "Anda harus mengizinkan konten pelanggan untuk penggunaan publik.",
          "premiumContent": "Anda harus mengizinkan konten premium untuk penggunaan publik.",
          "secureService": "Konten aman tidak dapat diakses oleh pembaca Anda.",
          "missingItemWarning": "Item yang dihubungkan dengan layer ini sudah dihapus."
        },
        "tooltips": {
          "unshared": "Klik untuk mempelajari selengkapnya mengenai berbagi.",
          "othersUnshared": "Anda tidak memiliki izin untuk membagikan konten yang dimiliki orang lain. Mintalah pemilik untuk membaginya, menghapus peta dari cerita Anda, atau mengedit peta untuk menghapus layer yang bukan milik Anda. Klik untuk mempelajari selengkapnya mengenai pengeditan peta.",
          "inaccessible": "Hapus peta ini dari cerita Anda atau edit untuk menghapus layer yang tidak dapat diakses. Klik untuk mempelajari selengkapnya mengenai pengeditan peta.",
          "deleted": "Hapus peta ini dari cerita Anda atau edit untuk menghapus layer yang hilang. Klik untuk mempelajari selengkapnya mengenai pengeditan peta.",
          "unauthorized": "Hapus peta ini dari cerita Anda atau edit untuk menghapus layer yang tidak berizin. Klik untuk mempelajari selengkapnya mengenai pengeditan peta.",
          "popupFeatureLayer": "Pop-up tiled layer berasal dari feature layer yang tidak dibagikan seperti halnya cerita Anda.",
          "subscriptionContent": "Konten pelanggan tidak menggunakan kredit. Klik untuk mempelajari selengkapnya.",
          "premiumContent": "Kredit akan dibebankan ke organisasi Anda setiap kali ada yang melihat layer premium di cerita Anda. Klik untuk mempelajari selengkapnya.",
          "secureService": "Hapus konten aman dari cerita Anda, atau klik untuk mempelajari cara memberi izin konten aman untuk digunakan oleh orang lain.",
          "missingItemWarning": "Layer ini tetap berfungsi tetapi simbol, pop-up, atau nama mungkin berubah. Pastikan layer muncul sesuai yang diinginkan, atau hapus dari cerita Anda."
        },
        "fixButtons": {
          "share": "Bagikan",
          "hide": "Sembunyikan",
          "authorize": "Beri Izin",
          "remove": "Hapus",
          "help": "Dapatkan Bantuan",
          "ignore": "Abaikan",
          "confirm": "Konfirmasikan",
          "edit": "Edit Peta"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Sebagian peta dan layer juga dibagikan.",
          "alsoSharedMaps": "Sebagian peta juga dibagikan.",
          "alsoSharedLayers": "Sebagian layer juga dibagikan.",
          "sharedOthersContent": "Anda sudah menggunakan hak administrasi Anda untuk berbagi konten milik orang lain."
        }
      },
      "storyHealth": {
        "healthy": "Tidak ada masalah",
        "notHealthy": "Perbaiki masalah",
        "warnings": "Lihat peringatan"
      }
    }
  }
});