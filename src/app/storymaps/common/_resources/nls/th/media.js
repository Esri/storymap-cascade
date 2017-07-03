/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "ลิงก์ไปยังเนื้อหา",
      "urls_short": "ลิงค์",
      "contentType": {
        "error": "ไม่มีสื่อที่ได้รับอนุญาต",
        "imageOnly": "ในส่วนหนึ่งของเรื่องนี้คุณจะสามารถเพิ่มภาพ",
        "imageAndVideo": "ในส่วนหนึ่งของเรื่องนี้คุณจะสามารถเพิ่มรูปภาพหรือวิดีโอ.",
        "imageVideoWebpage": "ในส่วนหนึ่งของเรื่องนี้คุณสามารถเพิ่มภาพวิดีโอหรือหน้าเว็บ."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "ค้นหา \"${searchterm}\"...",
        "searchedFor": "ผลการค้นหาสำหรับ \"${searchterm}\"",
        "albumsOf": "${username}'s อัลบั้ม",
        "noPhotosFound": "ไม่มีภาพถ่ายตรงกับการค้นหาของคุณ กรุณาลองอีกครั้ง.",
        "noItemsFound": "ไม่มีรายการที่ตรงกับการค้นหาของคุณ กรุณาลองอีกครั้ง.",
        "noItemsInThisStory": "เนื้อหาจาก ArcGIS ไม่ได้รับการเพิ่มเรื่องนี้เลย.",
        "limitReached": "แสดง 100 รายการ หากคุณไม่ได้พบสิ่งที่คุณต้องลองค้นหาคำหลัก.",
        "galleryItems": {
          "uploadError": "ขออภัยรายการนี้ไม่สามารถอัปโหลด."
        },
        "agol": {
          "remove1": "ลบภาพที่ไม่ได้ใช้นี้ออกจากบัญชีของคุณ ArcGIS",
          "remove2": "(คุณจะต้องอัปโหลดอีกครั้งถ้าคุณตัดสินใจที่จะใช้ในภายหลัง.)",
          "removeFailed": "ลบภาพที่ไม่สามารถเข้าถึงได้จากรายการนี้",
          "modified": "ดัดแปลง ${date}",
          "uploaded": "อัปโหลด ${date}",
          "contentByAuthor": "${contentType} โดย ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "เรียกดูภาพถ่ายบน ${Picasa} หรือ ${Google+}"
        },
        "flickr": {
          "photostream": "โฟโต้สตรีม",
          "searchAndBrowse": "ค้นหาและเรียกดูภาพถ่ายบน ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "ค้นหารูปภาพบน ${Unsplash}",
          "photoBy": "ภาพถ่ายโดย ${username}",
          "userLink": "ไปที่ ${username}'s ${Unsplash} หน้า"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "เชื่อมโยงไปยังเนื้อหาบนเว็บ",
            "imageOnly": "เชื่อมโยงไปยังภาพบนเว็บ",
            "imageAndVideo": "เชื่อมโยงไปยังภาพหรือวิดีโอบนเว็บ"
          },
          "linkText": {
            "imageOnly": "ในช่องด้านบนคุณสามารถเชื่อมโยงโดยตรงกับภาพถ่าย",
            "imageAndVideo1": "ในช่องด้านบนคุณสามารถวางการเชื่อมโยงหรือรหัส iframe สำหรับวิดีโอจาก ${YouTube} และ ${Vimeo}.",
            "imageAndVideo2": "นอกจากนี้คุณยังสามารถเชื่อมโยงโดยตรงกับภาพถ่าย.",
            "imageVideoWebpage1": "ในช่องด้านบนคุณสามารถวางการเชื่อมโยงหรือรหัส iframe สำหรับวิดีโอจาก ${YouTube} และ ${Vimeo}.",
            "imageVideoWebpage2": "นอกจากนี้คุณยังสามารถเชื่อมโยงโดยตรงกับภาพถ่ายหน้าเว็บหรือการใช้งานเว็บ",
            "ender": "เมื่อเป็นไปได้ใช้ปลอดภัย (https) การเชื่อมโยง"
          },
          "embedProtocol": {
            "embedProtocolLabel": "โหลดหน้าเว็บผ่านการเชื่อมต่อที่ปลอดภัย (https)",
            "embedProtocolWarning1": "หากหน้านี้ไม่ได้โหลดในเรื่องราวของคุณก็ไม่สามารถฝังตัวสำหรับเหตุผลด้านความปลอดภัยเว็บ",
            "embedProtocolWarning2": "หากหน้านี้ไม่ได้โหลดในเรื่องราวของคุณให้ยกเลิกการเลือกตัวเลือกนี้และลองอีกครั้ง ถ้าหน้ายังไม่ได้โหลดก็ไม่สามารถฝังตัวสำหรับเหตุผลด้านความปลอดภัยเว็บ",
            "embedProtocolWarning3": "ในฐานะที่เป็นทางเลือกในการเพิ่มการเชื่อมโยงในการเล่าเรื่องของคุณเพื่อเปิดหน้าเว็บในแท็บเบราว์เซอร์ใหม่. ${linkText}",
            "linkText": "เรียนรู้เพิ่มเติม."
          },
          "placeholder": "${https://}... or ${http://}... or ${<iframe>}",
          "uploadErrors": {
            "generic": "สิ่งที่ผิดพลาดกับที่อยู่ที่ป้อน กรุณาลองอีกครั้ง.",
            "imageOnly1": "คุณต้องใช้ภาพในส่วนหนึ่งของเรื่องนี้",
            "imageOnly2": "โปรดให้การเชื่อมโยงไปยังรูปภาพ (.jpg, .png, .gif) หรือเลือกภาพจาก ${ArcGIS}, ${Flickr}, ${Google+}, หรือ ${Unsplash}.",
            "imageAndVideo1": "คุณต้องใช้ภาพหรือวิดีโอในส่วนหนึ่งของเรื่องนี้",
            "imageAndVideo2": "โปรดให้การเชื่อมโยงไปยังรูปภาพ (.jpg, .png, .gif) หรือวิดีโอบน ${YouTube} หรือ ${Vimeo}, หรือเลือกภาพจาก ${ArcGIS}, ${Flickr}, ${Google+}, หรือ ${Unsplash}.",
            "badFormat": "ลิงก์ไปยังไฟล์ที่คุณต้องการเพิ่มมีรูปแบบไม่ถูกต้อง",
            "inaccessible": "ไฟล์ที่คุณพยายามเพิ่มหายไปหรือไม่สามารถเข้าถึงได้",
            "tryAgain": "กรุณาตรวจสอบที่อยู่และลองอีกครั้ง.",
            "mediaTypes": {
              "VIDEO": "วิดีโอ",
              "IMAGE": "ภาพ",
              "generic": "สื่อ"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "อีเมล์ หรือ ${Picasa}/${Google+} ไอดี",
          "helpText": "คุณสามารถเพิ่มรูปภาพอัปโหลดไปยัง ${Picasa} หรือ ${Google+} เพื่อเล่าเรื่องราวของคุณ.${helpLinkText} เกี่ยวกับการใช้ภาพที่เก็บไว้ในของคุณ ${Google} บัญชีในเรื่องราวของคุณ.",
          "helpLinkText": "เรียนรู้เพิ่มเติม",
          "cannotFindUser": "ไม่พบผู้ใช้ ${username}. กรุณาลองอีกครั้ง."
        },
        "unsplash": {
          "placeholder": "ค้นหาภาพถ่าย",
          "aboutText": "${Unsplash} เป็นคอลเลกชัน curated ของฟรีภาพที่มีคุณภาพสูง",
          "copyrightText": "ภาพถ่ายทั้งหมดที่ถูกเผยแพร่ใน ${Unsplash} ได้รับใบอนุญาตภายใต้ ${CC0} ใบอนุญาต ค้นหาข้อมูลเพิ่มเติม ${moreInfoLink}.",
          "moreInfoLink": "ที่นี่"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} บัญชี",
            "text": "ทั้งหมด ${Flickr}"
          },
          "placeholders": {
            "user": "ค้นหาบัญชี",
            "userText": "ค้นหาบัญชีนี้สำหรับภาพถ่าย",
            "text": "ค้นหาภาพถ่าย"
          },
          "errors": {
            "cannotFindUser": "ไม่พบผู้ใช้ ${username}.",
            "noUserPhotos": "${username} ไม่ได้มีภาพสาธารณะใด ๆ",
            "didYouMean": "คุณหมายถึง ${username}?",
            "generalUserError": "สิ่งที่ผิดพลาดเมื่อค้นหาผู้ใช้ ${username}."
          },
          "licenses": {
            "licenseLabel": "ใบอนุญาต: ",
            "public": "โดเมนสาธารณะ",
            "commercial": "OK สำหรับใช้ในเชิงพาณิชย์",
            "nonCommercial": "OK สำหรับที่ไม่ใช่เชิงพาณิชย์ใช้",
            "reserved": "สงวนลิขสิทธิ์",
            "any": "ใบอนุญาตใด ๆ"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "เรื่องนี้",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "พอร์ทัล",
            "myOrg": "${orgname} องค์กร",
            "myContent": "เนื้อหาของฉัน"
          },
          "createContent": {
            "or": "หรือ",
            "dragAndDrop": "วางภาพ (s) ที่นี่",
            "uploadImage": "เรียกดูภาพ (s)",
            "agolInfo": "รูปภาพจะถูกจัดเก็บในบัญชี ArcGIS ของคุณและสามารถเข้าถึงได้ภายในเรื่องราวของคุณเท่านั้น",
            "saveBeforeUpload": "เมื่อคุณบันทึกเรื่องนี้คุณสามารถอัปโหลดภาพไปยัง ArcGIS ที่นี่",
            "fileTypesImage": "ประเภทไฟล์ที่รองรับ: .png, .jpeg, jpg, .gif .bmp"
          },
          "filterAndSort": {
            "webmap": "เว็บแมพ",
            "webscene": "เว็บซ๊น",
            "image": "รูปภาพ",
            "date": "วันที่",
            "sortByDate": "เรียงตามวันที่",
            "title": "ชื่อ",
            "sortByTitle": "จัดเรียงตามชื่อ",
            "views": "จำนวนผู้ชม",
            "search": "ค้นหาด้วยคำหลักหรือรหัส"
          }
        }
      }
    }
  }
});