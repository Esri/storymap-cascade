/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Tautkan ke Konten",
      "urls_short": "Tautkan",
      "contentType": {
        "error": "Tidak ada media yang sah.",
        "imageOnly": "Pada bagian cerita ini, Anda dapat menambahkan gambar.",
        "imageAndVideo": "Pada bagian cerita ini, Anda dapat menambahkan gambar atau video.",
        "imageVideoWebpage": "Pada bagian cerita ini, Anda dapat menambahkan gambar, video, atau halaman web."
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
          "searchAndBrowse": "Cari dan telusuri foto di ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Cari foto di ${Unsplash}",
          "photoBy": "Foto oleh ${username}",
          "userLink": "Buka halaman ${Unsplash} ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Tautkan ke konten di web",
            "imageOnly": "Tautkan ke gambar di web",
            "imageAndVideo": "Tautkan ke gambar atau video di web"
          },
          "linkText": {
            "imageOnly": "Pada kotak di atas, Anda dapat menautkan langsung ke foto.",
            "imageAndVideo1": "Pada kotak di atas, Anda dapat menempel tautan atau kode iframe untuk video dari ${YouTube} dan ${Vimeo}.",
            "imageAndVideo2": "Anda juga dapat menautkan langsung ke foto.",
            "imageVideoWebpage1": "Pada kotak di atas, Anda dapat menempel tautan atau kode iframe untuk video dari ${YouTube} dan ${Vimeo}.",
            "imageVideoWebpage2": "Anda juga dapat menautkan langsung ke foto, halaman web, atau aplikasi web.",
            "ender": "Jika memungkinkan, gunakan tautan (https) yang aman."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Muat halaman pada koneksi yang aman (https)",
            "embedProtocolWarning1": "Jika halaman ini tidak dimuat dalam cerita Anda, halaman tersebut tidak dapat disematkan untuk alasan keamanan web.",
            "embedProtocolWarning2": "Jika halaman ini tidak dimuat dalam cerita Anda, hapus centang opsi ini dan coba lagi. Jika halaman tetap tidak dimuat, halaman tersebut tidak dapat disematkan untuk alasan keamanan web.",
            "embedProtocolWarning3": "Sebagai alternatif, tambahkan tautan di narasi Anda untuk membuka halaman di tab browser baru. ${linkText}",
            "linkText": "Pelajari Selengkapnya."
          },
          "placeholder": "${https://}... atau ${http://}... atau ${<iframe>}",
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
        "googlePhotos": {
          "placeholder": "Email atau ID ${Picasa}/${Google+}",
          "helpText": "Anda dapat menambahkan foto yang diunggah ke ${Picasa} atau ${Google+} ke cerita Anda. ${helpLinkText} tentang menggunakan gambar yang disimpan di akun ${Google} di cerita Anda.",
          "helpLinkText": "Pelajari selengkapnya",
          "cannotFindUser": "Tidak dapat menemukan pengguna ${username}. Coba lagi."
        },
        "unsplash": {
          "placeholder": "Cari foto",
          "aboutText": "${Unsplash} adalah kumpulan kurasi foto berkualitas tinggi dan gratis.",
          "copyrightText": "Semua foto yang dipublikasikan di ${Unsplash} memiliki lisensi di bawah Lisensi ${CC0}. Temukan informasi selengkapnya ${moreInfoLink}.",
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
            "or": "ATAU",
            "dragAndDrop": "Masukkan gambar di sini",
            "uploadImage": "Telusuri gambar",
            "agolInfo": "Gambar akan disimpan di akun ArcGIS Anda dan dapat diakses hanya dari dalam cerita Anda.",
            "saveBeforeUpload": "Setelah menyimpan cerita ini, Anda dapat mengunggah gambar ke ArcGIS di sini.",
            "fileTypesImage": "Mendukung jenis file berikut: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Web Map",
            "webscene": "Web Scene",
            "image": "Gambar",
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
  }
});