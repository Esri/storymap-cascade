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
    "share": {
      "btnPrivate": "Pribadi",
      "btnOrg": "Organisasi",
      "btnPublic": "Publik",
      "btnEveryone": "Semua orang"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Menyimpan",
      "buttonSaved": "Tersimpan",
      "buttonError": "Gagal menyimpan",
      "buttonShare": "Bagikan",
      "buttonSettings": "Pengaturan",
      "settingsLogoError": "Ada masalah dengan logo Anda. Klik untuk mempelajari lebih lanjut.",
      "buttonHelp": "Dapatkan Bantuan atau Kirim Umpan Balik mengenai GeoNet",
      "buttonPreview": "Tampilkan Cerita",
      "buttonHealth": "Laporan Kesehatan",
      "manageStories": "Kelola Cerita Saya",
      "closeWithPendingChange": "Anda yakin ingin mengonfirmasi tindakan ini? Perubahan Anda akan hilang.",
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
      "chooseTransition": "Pilih Transisi",
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
        "remove": "Hapus",
        "altTextPlaceholder": "Tambahkan deskripsi media ini untuk pembaca tunanetra...",
        "altTextHelptip": "Teks alternatif adalah deskripsi media visual yang digunakan oleh teknologi bantuan seperti perangkat lunak pembaca layar. Ini adalah opsional tetapi disarankan untuk memenuhi pedoman aksesibilitas web seperti WCAG dan Bagian 508."
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
        "alternativeMedia": "Gambar Alternatif untuk Seluler",
        "explanation": "Beberapa media tidak didukung atau mungkin tidak berfungsi dengan baik pada perangkat seluler. Gunakan panel ini untuk menetapkan gambar yang akan ditampilkan di tempat media ini ketika cerita Anda ditampilkan di ponsel atau tablet.",
        "changeAltImage": "Ubah gambar",
        "uploadAltImage": "Tambahkan gambar alternatif"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Tautkan ke Konten",
        "urls_short": "Tautan",
        "contentType": {
          "error": "Tidak ada media yang sah.",
          "imageOnly": "Pada bagian cerita ini, Anda dapat menambahkan gambar.",
          "imageAndVideo": "Pada bagian cerita ini, Anda dapat menambahkan gambar atau video.",
          "imageVideoWebpage": "Pada bagian cerita ini, Anda dapat menambahkan audio, gambar, video, atau halaman web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Mencari \"${searchterm}\"...",
          "searchedFor": "Hasil pencarian untuk \"${searchterm}\"",
          "albumsOf": "Album ${username}",
          "noPhotosFound": "Tidak ada foto yang cocok dengan pencarian Anda. Coba lagi.",
          "noItemsFound": "Tidak ada item yang cocok dengan pencarian Anda. Coba lagi.",
          "noItemsInThisStory": "Belum ada konten dari ArcGIS yang ditambahkan ke cerita ini.",
          "limitReached": "Menampilkan 100 item. Jika Anda tidak menemukan apa yang Anda perlukan, coba pencarian kata kunci.",
          "galleryItems": {
            "uploadError": "Maaf, item ini gagal diunggah."
          },
          "agol": {
            "remove1": "Hapus gambar yang tidak digunakan ini dari akun ArcGIS Anda.",
            "remove2": "(Anda harus mengunggahnya kembali jika Anda memutuskan untuk menggunakannya nanti.)",
            "removeFailed": "Hapus gambar yang tidak dapat diakses dari daftar ini.",
            "modified": "Diubah ${date}",
            "uploaded": "Diunggah ${date}",
            "contentByAuthor": "${contentType} oleh ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Telusuri foto di ${Picasa} atau ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Cari dan telusuri foto di ${Flickr}",
            "captionStarter": "Foto oleh ${USERNAME} di ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Cari foto di ${Unsplash}",
            "photoBy": "Foto oleh ${username}",
            "userLink": "Buka halaman ${Unsplash} ${username}",
            "captionStarter": "Foto oleh ${USERNAME} di ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Tautkan ke konten di web",
              "imageOnly": "Tautkan ke gambar di web",
              "imageAndVideo": "Tautkan ke gambar atau video di web"
            },
            "linkText": {
              "imageOnly": "Pada kotak di atas, Anda dapat menautkan langsung ke foto.",
              "imageAndVideo1": "Pada kotak di atas, Anda dapat menempel tautan atau kode iframe untuk video di ${YouTube} atau ${Vimeo}.",
              "imageAndVideo2": "Anda juga dapat menautkan langsung ke foto.",
              "imageVideoWebpage1": "Pada kotak di atas, Anda dapat menempel tautan atau kode iframe untuk konten web seperti bagan dinamis atau video di ${YouTube} atau ${Vimeo}.",
              "imageVideoWebpage2": "Anda juga dapat menautkan langsung ke foto, video, file audio, halaman web, atau aplikasi web.",
              "ender": "Selalu gunakan tautan yang aman (https). Jika konten Anda tidak mendukung https, tambahkan tautan ke konten dalam teks cerita Anda, agar pembaca dapat melihatnya di tab browser baru.",
              "httpsError": "Tautan harus diawali dengan HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Muat halaman pada koneksi yang aman (https)",
              "embedProtocolWarning1": "Jika halaman ini tidak dimuat dalam cerita Anda, halaman tersebut tidak dapat disematkan untuk alasan keamanan web.",
              "embedProtocolWarning2": "Jika halaman ini tidak dimuat dalam cerita Anda, hapus centang opsi ini dan coba lagi. Jika halaman tetap tidak dimuat, halaman tersebut tidak dapat disematkan untuk alasan keamanan web.",
              "embedProtocolWarning3": "Sebagai alternatif, tambahkan tautan di narasi Anda untuk membuka halaman di tab browser baru. ${linkText}",
              "linkText": "Pelajari Selengkapnya."
            },
            "placeholder": "${https://}... atau ${<iframe>}",
            "uploadErrors": {
              "generic": "Ada yang tidak beres dengan alamat yang dimasukkan. Coba lagi.",
              "imageOnly1": "Anda harus menggunakan gambar pada bagian cerita ini.",
              "imageOnly2": "Berikan tautan ke gambar (.jpg, .png, .gif), atau pilih gambar dari ${ArcGIS}, ${Flickr}, ${Google+}, atau ${Unsplash}.",
              "imageAndVideo1": "Anda harus menggunakan gambar atau video pada bagian cerita ini.",
              "imageAndVideo2": "Berikan tautan ke gambar (.jpg, .png, .gif) atau video di ${YouTube} atau ${Vimeo}, atau pilih gambar dari ${ArcGIS}, ${Flickr}, ${Google+}, atau ${Unsplash}.",
              "badFormat": "Tautan ke file yang ingin Anda tambahkan tidak diformat dengan benar.",
              "inaccessible": "File yang ingin Anda tambahkan hilang atau tidak dapat diakses.",
              "tryAgain": "Periksa alamat dan coba lagi.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "gambar",
                "generic": "media"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Dengan menggunakan layanan pihak ketiga, berarti Anda menyetujui ketentuan layanannya: ",
          "googlePhotos": {
            "placeholder": "Email atau ID ${Picasa}/${Google+}",
            "helpText": "Anda dapat menambahkan foto yang diunggah ke ${Picasa} atau ${Google+} ke cerita Anda. ${helpLinkText} tentang menggunakan gambar yang disimpan di akun ${Google} di cerita Anda.",
            "helpLinkText": "Pelajari lebih lanjut",
            "cannotFindUser": "Tidak dapat menemukan pengguna ${username}. Coba lagi."
          },
          "unsplash": {
            "placeholder": "Cari foto",
            "aboutText": "${Unsplash} adalah kumpulan kurasi foto berkualitas tinggi dan gratis.",
            "copyrightText": "Semua foto dilisensikan berdasarkan Lisensi ${Unsplash}. Temukan informasi selengkapnya ${moreInfoLink}.",
            "moreInfoLink": "di sini"
          },
          "flickr": {
            "searchType": {
              "account": "Akun ${Flickr}",
              "text": "Semua ${Flickr}"
            },
            "placeholders": {
              "user": "Cari akun",
              "userText": "Cari foto untuk akun ini",
              "text": "Cari foto"
            },
            "errors": {
              "cannotFindUser": "Tidak dapat menemukan pengguna ${username}.",
              "noUserPhotos": "${username} tidak memiliki foto publik apa pun.",
              "didYouMean": "Apakah maksud Anda ${username}?",
              "generalUserError": "Ada yang tidak beres ketika mencari pengguna ${username}."
            },
            "licenses": {
              "licenseLabel": "Lisensi: ",
              "public": "Domain Publik",
              "commercial": "Ya untuk Penggunaan Komersial",
              "nonCommercial": "Ya untuk Penggunaan Non-Komersial",
              "reserved": "Semua Hak Dilindungi Undang-Undang",
              "any": "Lisensi Apa Pun"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Cerita Ini",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organisasi ${orgname}",
              "myContent": "Konten Saya"
            },
            "createContent": {
              "createNewMap": "Buat Peta Baru",
              "or": "ATAU",
              "dragAndDropImage": "Letakkan gambar",
              "dragAndDropImageAudio": "Letakkan gambar atau audio",
              "uploadButton": "Jelajahi",
              "agolInfo": "Gambar dan audio yang sudah diunggah hanya akan dapat diakses dalam cerita ini.",
              "saveBeforeUpload": "Setelah menyimpan cerita ini, Anda dapat mengunggah gambar dan audio ke ArcGIS di sini.",
              "fileExtsImage": "Jenis yang didukung: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Jenis yang didukung: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks 10 MB per file."
            },
            "filterAndSort": {
              "webmap": "Web Map",
              "webscene": "Web Scene",
              "image": "Gambar",
              "audio": "Audio",
              "date": "Tanggal",
              "sortByDate": "Urutkan berdasarkan tanggal",
              "title": "Judul",
              "sortByTitle": "Urutkan berdasarkan judul",
              "views": "Tampilan",
              "search": "Cari menurut kata kunci atau ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Edit peta",
      "unauthorizedDomain": "Anda tidak berada di domain resmi untuk menggunakan editor peta",
      "loading": "Harap tunggu selagi editor peta sedang dimuat",
      "saving": "Menyimpan peta",
      "success": "Peta disimpan",
      "cancelTitle": "Buang perubahan apa pun yang belum disimpan?",
      "errorSave": "Tidak dapat menyimpan peta. Coba lagi.",
      "loadFail": "Maaf, editor peta tidak dapat dimuat",
      "close": "Tutup",
      "save": "Simpan",
      "confirm": "Iya, tutup peta",
      "deny": "Tidak, tetap bekerja"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Lanjutkan cerita Anda di sini..."
      },
      "blockAdd": {
        "text": "Teks",
        "media": "Media",
        "title": "Judul",
        "immersive": "Imersif"
      },
      "link": {
        "invite": "Tempel atau ketik tautan..."
      },
      "color": {
        "choose": "pilih",
        "cancel": "batal",
        "clear": "Hapus warna"
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
      "mediaUpload": "Unggahan media sedang dalam proses...",
      "mediaUploadSuccess": "Media berhasil diunggah",
      "mediaUploadFail": "Media gagal diunggah"
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
        "audio": "audio",
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
        "noAltImage": "Media Mungkin Tidak Berfungsi di Seluler",
        "noAltImageUnsupported": "Media Tidak Didukung di Seluler",
        "noAltImageWarning": "Media Mungkin Tidak Berfungsi di Seluler",
        "altImageBroken": "Gambar alternatif yang ditentukan untuk item media ini tidak dapat diakses",
        "httpMedia": "Media Tidak Aman",
        "httpContent": "Konten Tidak Aman"
      },
      "contentWarnings": {
        "noAltImage": "Pastikan untuk menguji cerita Anda di perangkat seluler sebelum membagikannya. Jika media ini tidak berfungsi sebagaimana mestinya, gunakan tombol bagian bawah untuk menambahkan gambar alternatif yang akan ditampilkan ketika cerita dilihat di ponsel atau tablet.",
        "noAltImageUnsupported": "Media ini tidak akan berfungsi sebagaimana mestinya. Gunakan tombol bagian bawah untuk menambahkan gambar alternatif yang akan ditampilkan ketika cerita dilihat di ponsel atau tablet.",
        "noAltImageWarning": "Pastikan untuk menguji cerita Anda di perangkat seluler sebelum membagikannya. Jika media ini tidak berfungsi sebagaimana mestinya, gunakan tombol bagian bawah untuk menambahkan gambar alternatif yang akan ditampilkan ketika cerita dilihat di ponsel atau tablet.",
        "noAltImageAlt": "Jenis media ini tidak didukung atau mungkin tidak berfungsi pada perangkat seluler. Pada tab seluler, sediakan gambar alternatif yang akan ditampilkan saat cerita dilihat pada perangkat seluler."
      },
      "descriptions": {
        "httpAudioUnfixable": "Audio ini tidak mendukung HTTPS. Hapus dari cerita Anda atau ganti dengan tautan.",
        "httpAudioUncheckable": "Audio ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk mencoba menggunakan URL HTTPS untuk audio ini. Jika tidak berfungsi, hapus audio dari cerita Anda atau ganti dengan hyperlink.",
        "httpAudioFixable": "Audio ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk menggunakan URL HTTPS aman untuk audio ini.",
        "httpWebpageUnfixable": "Halaman web ini tidak mendukung HTTPS. Hapus dari cerita Anda atau ganti dengan tangkapan layar atau tautan.",
        "httpWebpageUncheckable": "Halaman web ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk mencoba menggunakan URL HTTPS untuk halaman web ini. Jika tidak berfungsi, hapus halaman web dari cerita Anda atau ganti dengan tangkapan layar atau hyperlink.",
        "httpWebpageFixable": "Halaman web ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk menggunakan URL HTTPS aman untuk halaman web ini.",
        "httpVideoUnfixable": "Video ini tidak mendukung HTTPS. Hapus dari cerita Anda atau ganti dengan tangkapan layar atau tautan.",
        "httpVideoUncheckable": "Video ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk mencoba menggunakan URL HTTPS untuk video ini. Jika tidak berfungsi, hapus video dari cerita Anda atau ganti dengan tangkapan layar atau hyperlink.",
        "httpVideoFixable": "Video ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk menggunakan URL HTTPS aman untuk video ini.",
        "httpImageUnfixable": "Gambar ini tidak mendukung HTTPS. Hapus dari cerita Anda atau ganti dengan tautan.",
        "httpImageUncheckable": "Gambar ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk mencoba menggunakan URL HTTPS untuk gambar ini. Jika tidak berfungsi, hapus gambar dari cerita Anda atau ganti dengan hyperlink.",
        "httpImageFixable": "Gambar ini memiliki URL tidak aman (HTTP). Klik tombol di bawah untuk menggunakan URL HTTPS aman untuk gambar ini.",
        "httpLayer": "Layer ini memiliki URL tidak aman (HTTP).",
        "inaccessibleLogo": "Logo ini tidak dapat diakses. Ganti dengan gambar lain.",
        "httpLogoUnfixable": "Logo ini tidak mendukung HTTPS. Ganti dengan gambar lain.",
        "httpLogoFixable": "Logo ini memiliki URL tidak aman (HTTP). Gunakan URL HTTPS untuk logo tersebut.",
        "httpLogoUncheckable": "Logo ini memiliki URL tidak aman (HTTP). Gunakan URL HTTPS untuk logo tersebut, atau ganti dengan gambar lain."
      },
      "tooltips": {
        "httpAudioFixable": "Klik tombol untuk menggunakan URL HTTPS aman untuk audio ini.",
        "httpAudioUncheckable": "Coba gunakan URL HTTPS untuk audio ini. Jika tidak berfungsi, hapus audio dari cerita Anda atau ganti dengan tautan.",
        "httpWebpageFixable": "Klik tombol untuk menggunakan URL HTTPS aman untuk halaman web ini.",
        "httpWebpageUncheckable": "Coba gunakan URL HTTPS untuk halaman web ini. Jika tidak berfungsi, hapus halaman web dari cerita Anda atau ganti dengan tangkapan layar atau tautan.",
        "httpVideoFixable": "Klik tombol untuk menggunakan URL HTTPS aman untuk video ini.",
        "httpVideoUncheckable": "Coba gunakan URL HTTPS untuk video ini. Jika tidak berfungsi, hapus video dari cerita Anda atau ganti dengan tangkapan layar atau tautan.",
        "httpImageFixable": "Klik tombol untuk menggunakan URL HTTPS aman untuk gambar ini.",
        "httpImageUncheckable": "Coba gunakan URL HTTPS untuk gambar ini. Jika tidak berfungsi, hapus gambar dari cerita Anda atau ganti dengan tautan.",
        "httpLayerMyMap": "Kunjungi halaman item peta untuk memperbarui layer ini untuk menggunakan HTTPS. Jika layer tidak dapat diperbarui, hapus layer tersebut dari peta.",
        "httpLayerNotMyMap": "Buat salinan peta dan perbarui layer ini untuk menggunakan HTTPS. Jika layer tidak dapat diperbarui, hapus layer tersebut dari peta.",
        "clickLearnMore": "Klik untuk mempelajari selengkapnya."
      },
      "fixButtons": {
        "agolItemPage": "Halaman Item",
        "openTheMap": "Buka Peta",
        "updateAudio": "Perbaiki URL Audio",
        "updateWebpages": "Perbaiki URL Halaman Web",
        "updateVideos": "Perbaiki URL Video",
        "updateImages": "Perbaiki URL Gambar"
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
    },
    "saveErrorSocial": {
      "title": "Berbagi di media sosial",
      "panel1": "Cerita Anda mungkin tidak ditampilkan dengan benar di media sosial karena judul item aplikasi web ArcGIS Anda tidak sama dengan judul cerita Anda.",
      "panel1tooltip": "Dengan menentukan judul, ringkasan, dan gambar thumbnail, cerita Anda akan terlihat seperti ini:",
      "panel2": "Judul mana yang ingin Anda gunakan di media sosial:",
      "panel2q1": "Judul cerita (disarankan)",
      "panel2q1tooltip": "Dengan memilih opsi ini, judul item akan diubah agar sama dengan judul cerita Anda dan perubahan lebih lanjut pada penyusun akan diselaraskan.",
      "panel2q2": "Judul item",
      "panel3": "Untuk meningkatkan penampilan cerita Anda di media sosial, gunakan ${MYSTORIES} untuk menambahkan ringkasan dan gambar thumbnail.",
      "panel4": "Jangan ingatkan saya lagi untuk cerita ini",
      "save": "Simpan",
      "mystories": "Cerita Saya"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Pesan Penting mengenai Keamanan Web dan Story Map",
      "s1h1": "Esri sedang meningkatkan keamanan Story Map",
      "s1p1": "Story Map Anda disiarkan langsung di web, dan komunitas web selalu berupaya menyusun dan mengimplementasikan keamanan yang lebih baik. HTTPS, yang memberikan koneksi aman bagi konten untuk ditransmisikan melalui internet, semakin berkembang sebagai cara mengakses konten web yang diharapkan. Sebagian besar browser modern saat ini menunjukkan pesan peringatan jika HTTP digunakan alih-alih HTTPS. Karena standar yang terus berkembang ini, kami sangat menyarankan Anda menggunakan tautan HTTPS untuk menulis dan berbagi Story Map, dan hanya menggunakan URL HTTPS saat menyematkan konten web atau menautkan gambar dalam Story Map.",
      "s1p2": "Singkatnya, ini berarti Story Map dan semua kontennya (termasuk gambar, layer, aplikasi yang disematkan, dan situs web) harus diakses menggunakan tautan yang dimulai dengan HTTPS alih-alih HTTP. Ini memastikan pengalaman terbaik bagi pembaca Anda karena sebagian besar browser akan menunjukkan bahwa cerita Anda aman.",
      "s2h1": "Apa yang harus saya lakukan?",
      "s2p1": "Esri berupaya untuk membuat ini menjadi transisi yang mudah bagi penulis dan pembaca Story Map. Alat sekarang sudah tersedia di builder Story Map dan My Stories yang membantu Anda menemukan konten (HTTP) tidak aman di cerita Anda dan memberi saran cara mengatasinya. Harap periksa peta Anda apakah ada konten tidak aman dan perbarui menjadi HTTPS sesegera mungkin.",
      "action1": "Tutup",
      "action2": "Periksa cerita saya sekarang",
      "action3": "Pelajari lebih lanjut",
      "floatingNotification": "Cerita ini berisi konten tidak aman (HTTP). Harap tinjau dan atasi masalah tersebut."
    }
  }
});