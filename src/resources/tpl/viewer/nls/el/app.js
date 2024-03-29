﻿/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Αποθήκευση",
      "close": "Κλείσιμο"
    },
    "errors": {
      "noConfigName": "Δεν καθορίστηκε κάποια διαμόρφωση στο index.html > configOptions.story",
      "configFormatError": "Η διαμόρφωση που καθορίστηκε δεν ήταν δυνατό να φορτωθεί λόγω σφάλματος σύνταξης JSON.",
      "configNotFound": "Η διαμόρφωση που καθορίστηκε δεν βρέθηκε ή δεν ήταν δυνατό να φορτωθεί λόγω σφάλματος σύνταξης JSON.",
      "boxTitle": "Παρουσιάστηκε σφάλμα",
      "servedFromFile": "Η πρόσβαση στην εφαρμογή πρέπει να γίνει μέσω web διακομιστή. Για λεπτομέρειες, βλ. ${USER_GUIDE}.",
      "userGuide": "οδηγός χρήστη",
      "invalidConfig": "Μη έγκυρη διαμόρφωση",
      "invalidConfigNoApp": "Το αναγνωριστικό της διαδικτυακής χαρτογραφικής εφαρμογής δεν καθορίζεται στο index.html.",
      "invalidConfigNoAppDev": "Δεν έχει καθοριστεί το αναγνωριστικό ή ο web χάρτης της διαδικτυακής χαρτογραφικής εφαρμογής στις παραμέτρους του URL (?appid= ή ?webmap=). Στη λειτουργία ανάπτυξης, η διαμόρφωση appid και webmap στο αρχείο index.html παραβλέπονται.",
      "unspecifiedConfigOwner": "Δεν έχει διαμορφωθεί εξουσιοδοτημένος κάτοχος.",
      "invalidConfigOwner": "Ο κάτοχος της αφήγησης δεν είναι εξουσιοδοτημένος.",
      "invalidConfignoOAuth": "Αυτή η αφήγηση απαιτεί έλεγχο ταυτότητας. Διαμορφώστε ένα ArcGIS OAuth ID στο index.html ή μετατρέψτε την αφήγηση σε δημόσια.",
      "invalidApp": "Αυτή η αφήγηση δεν ήταν δυνατό να φορτωθεί.",
      "appLoadingFail": "Υπήρξε κάποιο πρόβλημα, το {TPL_NAME} δεν φορτώθηκε σωστά.",
      "notConfiguredDesktop": "Η αφήγηση δεν έχει διαμορφωθεί ακόμη.",
      "notConfiguredMobile": "Το Εργαλείο δημιουργίας {TPL_NAME} δεν υποστηρίζεται σε αυτό το μέγεθος προβολής. Αν είναι δυνατό, αλλάξτε το μέγεθος του προγράμματος περιήγησης για πρόσβαση στο Εργαλείο δημιουργίας ή δημιουργήστε την αφήγησή σας σε μια συσκευή με μεγαλύτερη οθόνη.",
      "notConfiguredMobile2": "Περιστρέψτε τη συσκευή σας στον οριζόντιο προσανατολισμό για να χρησιμοποιήσετε το Εργαλείο δημιουργίας {TPL_NAME}.",
      "notAuthorized": "Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτήν την αφήγηση.",
      "notAuthorizedBuilder": "Δεν έχετε εξουσιοδότηση για τη χρήση του Εργαλείου δημιουργίας {TPL_NAME}.",
      "noViewerIE": "Αυτή η αφήγηση δεν υποστηρίζεται σε Internet Explorer έκδοσης προηγούμενης της ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Επιχειρείτε να προβάλετε αυτήν την αφήγηση χρησιμοποιώντας ένα παλαιότερο, μη υποστηριζόμενο πρόγραμμα περιήγησης. Ενδέχεται κάποια στοιχεία να μη λειτουργούν ή να παρουσιαστούν άλλα, μη αναμενόμενα προβλήματα. Προτείνουμε να αναβαθμίσετε σε Internet Explorer 11 ή να χρησιμοποιήσετε κάποιο άλλο πρόγραμμα περιήγησης, όπως το Chrome.",
      "noViewerIE3": "Στα τέλη του 2017, δεν θα είναι δυνατή πλέον η φόρτωση αυτής της αφήγησης στο συγκεκριμένο πρόγραμμα περιήγησης. Τότε θα πρέπει να χρησιμοποιήσετε ένα υποστηριζόμενο πρόγραμμα περιήγησης για να προβάλετε αυτή την αφήγηση.",
      "upgradeBrowser": "Ενημερώστε το πρόγραμμα περιήγησης που χρησιμοποιείτε",
      "mapLoadingFail": "Υπήρξε κάποιο πρόβλημα, ο χάρτης δεν φορτώθηκε σωστά.",
      "signOut": "Έξοδος",
      "builderSupportFirefox": "Τώρα πια το εργαλείο δημιουργίας Story Map Cascade υποστηρίζει το πρόγραμμα περιήγησης Firefox!<br><br>Η έκδοση για σύνταξη αφηγήσεων μέσω του Cascade στο Firefox είναι προς το παρόν δοκιμαστική. Δοκιμάστε την και αν τυχόν αντιμετωπίσετε κάποιο πρόβλημα, αναφέρετέ το στην υπηρεσία ${ESRI-SUPPORT} ή ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Οι αφηγήσεις Cascade μπορούν να προβληθούν σε οποιοδήποτε σύγχρονο πρόγραμμα περιήγησης στον Ιστό, Εργαλείο δημιουργίας Story Map Cascade υποστηρίζεται μόνο στα προγράμματα ${CHROME}, ${SAFARI} και ${FIREFOX}.<br><br>Αν με βάση τις ανάγκες σας το Εργαλείο δημιουργίας Cascade πρέπει να μπορεί να υποστηρίζει κάποιο διαφορετικό πρόγραμμα περιήγησης, αποταθείτε στην υπηρεσία ${ESRI-SUPPORT} ή ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Το Εργαλείο δημιουργίας Story Map Cascade δεν υποστηρίζεται σε iPad. Οι αφηγήσεις Cascade που δημιουργείτε και κοινοποιείτε θα λειτουργούν σε iPad.",
      "launchBuilder": "Εκκίνηση Εργαλείου δημιουργίας Cascade",
      "notAgain": "Να μην εμφανιστεί ξανά.",
      "sorry": "Προσοχή:",
      "nonOwnerOrgUrl": "Το %TPL_NAME% στο οποίο επιχειρείτε να αποκτήσετε πρόσβαση δεν προέρχεται από τη διεύθυνση URL που καταχωρίσατε.",
      "nonOwnerOrgProceedToGeneric": "Μετάβαση σε %HREF%",
      "advanced": "Για προχωρημένους"
    },
    "mobileWarning": {
      "message1": "Έχετε διαβάσει την έκδοση αυτής της αφήγησης για κινητές συσκευές. Για την πλήρη έκδοση, με εμπλουτισμένα στοιχεία πολυμέσων, δοκιμάστε τη σε επιτραπέζιο υπολογιστή.",
      "email": "Αποστολή συνδέσμου προς αυτή την αφήγηση μέσω ηλεκτρονικού ταχυδρομείου"
    },
    "cover": {
      "iosEmbedLink": "Πατήστε για να διαβάσετε το πλήρες αφήγημα"
    },
    "media": {
      "captionPlaceholder": "Η λεζάντα σας εδώ...",
      "loadingError": "Δυστυχώς, αυτό το περιεχόμενο δεν είναι προσβάσιμο",
      "explore": "Εξερεύνηση",
      "exploreMap": "Εξερεύνηση χάρτη",
      "exploreStop": "Διακοπή εξερεύνησης",
      "sceneNotSupported": "Δυστυχώς, αυτός ο 3D χάρτης δεν υποστηρίζεται στη συσκευή σας.",
      "loading1": "Φόρτωση...",
      "loading2": "Φόρτωση χάρτη...",
      "videoPlayPause": "αναπαραγωγή/παύση",
      "videoMuteUnmute": "σίγαση/αναίρεση σίγασης"
    },
    "headerFromCommon": {
      "defaultTagline": "Ένα ${STORY_MAP}",
      "share": "Κοινοποίηση ή εκτύπωση",
      "tooltipAutoplayDisabled": "Αυτή η επιλογή δεν είναι διαθέσιμη στη λειτουργία αυτόματης αναπαραγωγής"
    },
    "shareFromCommon": {
      "copy": "Αντιγραφή",
      "copied": "Αντιγράφηκε",
      "open": "Άνοιγμα",
      "embed": "Ενσωμάτωση σε ιστοσελίδα",
      "embedExplain": "Χρησιμοποιήστε τον παρακάτω HTML κώδικα για να ενσωματώσετε την αφήγηση σε μια ιστοσελίδα.",
      "size": "Μέγεθος (πλάτος/ύψος):",
      "autoplayLabel": "Λειτουργία αυτόματης αναπαραγωγής",
      "autoplayExplain1": "Η λειτουργία αυτόματης αναπαραγωγής θα συνεχίζει στην αφήγησή σας σε τακτικά διαστήματα. Αυτό είναι ιδανικό για τις οθόνες καταστημάτων ή δημόσιας προβολής, αλλά σημειώστε ότι σε άλλες περιπτώσεις, ενδέχεται να είναι δυσκολότερη η ανάγνωση της αφήγησης. Αυτή η δυνατότητα δεν υποστηρίζεται σε μικρές οθόνες.",
      "autoplayExplain2": "Όταν αυτή η λειτουργία είναι ενεργή υπάρχουν στοιχεία ελέγχου για την αναπαραγωγή/παύση της αφήγησης και τη ρύθμιση της ταχύτητας πλοήγησης.",
      "linksupdated": "Οι σύνδεσμοι ενημερώθηκαν!"
    },
    "theme": {
      "lightLabel": "Ανοιχτό",
      "darkLabel": "Σκούρο"
    },
    "autoplay": {
      "speedFast": "Γρήγορα",
      "speedMedium": "Μεσαία ταχύτητα",
      "speedSlow": "Αργά"
    },
    "bannerNotification": {
      "learnMore": "Μάθετε περισσότερα",
      "close": "Κλείσιμο",
      "dontShowAgain": "Να μην εμφανιστεί ξανά το μήνυμα"
    },
    "embedBar": {
      "share": "Κοινοποίηση",
      "fullScreen": "Πλήρης οθόνη",
      "exitFullScreen": "Έξοδος από τη λειτουργία πλήρους οθόνης",
      "enlarge": "Μεγέθυνση",
      "newTab": "Άνοιγμα σε νέα καρτέλα",
      "tagline": "Ένα story map",
      "twitter": "Κοινοποίηση στο Twitter",
      "facebook": "Κοινοποίηση στο Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Προτού εκτυπώσετε, περιμένετε να φορτωθεί ολόκληρη η αφήγηση.",
      "printNotes": "Αν η σελίδα αργεί να φορτωθεί ή αν ορισμένα πολυμέσα δεν εμφανίζονται, δοκιμάστε να αντικαταστήσετε τα ζωντανά πολυμέσα με εικόνες ή να εκτυπώσετε μικρότερη σειρά ενοτήτων. Για άριστα αποτελέσματα ίσως χρειαστεί να ενεργοποιήσετε την εκτύπωση στοιχείων στο παρασκήνιο μέσω των ρυθμίσεων εκτύπωσης στο πρόγραμμα περιήγησής σας.",
      "printOptions": "Επιλογές",
      "makeTextBlack": "Να γίνει όλο το κείμενο μαύρο",
      "showLinks": "Εμφάνιση διευθύνσεων URL συνδέσμων",
      "useAltMedia": "Αντικατάσταση ζωντανών πολυμέσων με εικόνες αν υπάρχουν διαθέσιμες",
      "pageBreaks": "Ξεκινήστε κάθε ενότητα σε νέα σελίδα",
      "printRange": "Εκτύπωση τμήματος αυτής της αφήγησης",
      "sectionStart": "Ενότητες:",
      "go": "Εφαρμογή",
      "reset": "Επαναφορά στη συνολική αφήγηση",
      "print": "Εκτύπωση"
    },
    "page": {
      "appTagline": "Η αφήγηση αυτή εκπονήθηκε μέσω ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade της Esri",
      "readItOnline": "Διαβάστε την στην ιστοσελίδα ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Ενότητα ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Ιστότοπος:",
      "videoLabel": "Βίντεο:",
      "audioLabel": "Ήχος:"
    },
    "licenseChange2018": {
      "noAccess": "Ο λογαριασμός σας (%USER_NAME%) δεν διαθέτει άδεια χρήσης για άνοιγμα Story Map που δεν είναι δημόσιο. Ζητήστε από τον διαχειριστή του οργανισμού σας να σας εκχωρήσει τύπο χρήστη που να περιλαμβάνει Story Map ή πρόσθετη άδεια χρήσης για Βασικές Εφαρμογές."
    }
  }
});