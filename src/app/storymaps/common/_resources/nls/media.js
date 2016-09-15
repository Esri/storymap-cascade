define({
  root: {
    mediaPicker: {
      browseToggle: {
        arcGIS: "ArcGIS",
        flickr: "Flickr",
        googlePhotos: "Google+",
        unsplash: "Unsplash",
        urls: "Link to Content",
        urls_short: "Link",
        // the keys for contentType should match constants.contentType
        contentType: {
          error: 'No authorized media',
          starter: "In this part of the story, you can add ",
          listSeparator: ",",
          OR: 'or',
          IMAGE: 'an image',
          VIDEO: 'a video',
          WEBPAGE: 'a webpage',
          WEBMAP: 'a webmap',
          WEBSCENE: 'a webscene'
        }
      },
      browsePanel: {
        providers: {
          searchingFor: "Searching for",
          albumsOf: "Albums of", // Context: when displaying "Albums of [user]". Possessive.
          noPhotosFound: "No photos matched your search. Please try again.",
          noItemsFound: "No items matched your search. Please try again.",
          noItemsInThisStory: "No content from ArcGIS has been added to this story yet.",
          limitReached: "Showing 100 items. If you didn't find what you need, try a keyword search.",
          galleryItems: {
            uploadError: "Sorry, this item failed to upload",
          },
          agol: {
            remove1: "Delete this unused image from your ArcGIS account.",
            remove2: "(You'll need to upload it again if you decide to use it later.)",
            removeFailed: "Remove this inaccessible image from this list.",
            modified: "Modified ${date}", // context: "Modified 3/18/16"
            uploaded: "Uploaded ${date}", // context: "Uploaded 3/18/16"
            contentByAuthor: "${contentType} by ${author}" // context: "Webmap by John Smith".
          },
          googlePhotos: {
            searchAndBrowse: "Browse photos on Picasa or Google+"
          },
          flickr: {
            photostream: "Photostream",
            searchAndBrowse: "Search and browse photos on Flickr"
          },
          unsplash: {
            searchAndBrowse: "Search photos on Unsplash",
            photoBy: "Photo by ${username}", // username to be supplied by app
            userLink: "Go to ${username}'s Unsplash page"
          },
          urlContent: {
            uploadHeaders: {
              generic: "Link to content on the web",
              imageOnly: "Link to an image on the web",
              imageAndVideo: "Link to an image or video on the web"
            },
            linkText: {
              // context: full text for this section could be:
              // starter + hasVideo. listStarterWithAlso + <list of content types>. ender.
              // starter + listStarterWithoutAlso + <list of content types>. ender.
              starter: "In the box above,",
              hasVideo: "you can paste links or iframe code for videos from YouTube and Vimeo.",
              listStarterWithAlso: "You can also link directly to",
              listStarterWithoutAlso: "you can link directly to", // attaches directly to starter above
              listSeparator: ",",
              OR: 'or',
              IMAGE: 'photos',
              WEBPAGE: [
                'web pages',
                'web applications'
              ],
              ender: "When possible, use secure (https) links."
            },
            placeholder: "https://... or http://... or <iframe>",
            uploadErrors: {
              generic: "Something went wrong with the address entered. Please try again.",
              imageOnly: [
                "You must use an image in this part of the story.",
                 "Please provide a link to an image (.jpg, .png, .gif), or choose an image from ArcGIS, Flickr, or Google+."
              ],
              imageAndVideo: [
                "You must use an image or video in this part of the story.",
                "Please provide a link to an image (.jpg, .png, .gif) or a video on YouTube or Vimeo, or choose an image from ArcGIS, Flickr, or Google+."
              ],
              badFormat: 'The link to the ${media-type} you are trying to add is formatted incorrectly.',
              inaccessible: 'The ${media-type} you are trying to add is missing or not accessible.',
              tryAgain: 'Please check the address and try again.',
              mediaTypes: {
                VIDEO: 'video',
                IMAGE: 'image',
                generic: 'media'
              }
            }
          }
        },
        sidePanel: {
          googlePhotos: {
            brand1: "Picasa",
            brand2: "Google+",
            placeholder: "Email or Picasa/Google+ ID",
            helpText: "You can add photos uploaded to ${brand1} or ${brand2} to your story. ${helpLinkText} about using images stored in your Google account in your stories.",
            helpLinkText: "Learn more",
            cannotFindUser: "Cannot find user", // Context: "Cannot find user 'johnsmith'."
            tryAgain: "Please try again."
          },
          unsplash: {
            placeholder: "Search for photos",
            brand: "Unsplash",
            aboutText: "${brand} is a curated collection of free, high-quality photos.",
            copyrightText: "All photos published on ${brand} are licensed under ${copyrightLinkText}, which means you can copy, modify, distribute and use the photos for free (including for commercial purposes) without asking permission from, or providing attribution to, the photographer or Unsplash.",
            copyrightLinkText: "Creative Commons Zero"
          },
          flickr: {
            // tabs for search type
            searchType: {
              account: "Flickr Account",
              text: "All Flickr"
            },
            // placeholders for text search inputs
            placeholders: {
              user: "Search for account",
              userText: "Search this account for photos",
              text: "Search for photos"
            },
            // error/warning messages
            errors: {
              cannotFindUser: "Cannot find user", // Context: "Cannot find user 'johnsmith'. Did you mean 'John Smith'?"
              noUserPhotos: "does not have any public photos.", // Context: "'helloworld' does not have any public photos. Did you mean 'hello world'?"
              didYouMean: "Did you mean", // Context: "'johnsmith' does not have any public photos. Did you mean 'John Smith'?"
              generalUserError: "Something went wrong when searching for user"
            },
            // licenses
            licenses: {
              public: 'Public Domain',
              commercial: 'OK for Commercial Use',
              nonCommercial: 'OK for Non-Commercial Use',
              reserved: 'All Rights Reserved',
              any: 'Any License'
            }
          },
          agol: {
            searchLocation: {
              thisStory: "This Story",
              agol: "ArcGIS Online",
              myOrg: "Organization", // context: "<Org Name> Organization"
              myContent: "My Content"
            },
            createContent: {
              or: "OR",
              dragAndDrop: "Drop image(s) here",
              uploadImage: "Browse for image(s)",
              agolInfo: "Images will be stored in your ArcGIS account and accessible inside your story.",
              saveBeforeUpload: "Once you save this story, you can upload images to ArcGIS here.",
              fileTypes: "Supported file types:",
              listSeparator: ","
            },
            filterAndSort: {
              webmap: "Web Map",
              webscene: "Web Scene",
              image: "Image",
              date: "Date",
              title: "Title",
              views: "Views",
              search: "Search by keyword or ID"
            }
          }
        }
      }
    }
  },
  "ar": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nl": 1,
  "nb": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
