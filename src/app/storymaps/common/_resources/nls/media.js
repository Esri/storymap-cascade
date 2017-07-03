/*eslint quotes:[2, 'double'] */
define({
  root: ({
    mediaPicker: {
      browseToggle: {
        urls: "Link to Content",
        urls_short: "Link",
        contentType: {
          error: "No authorized media.",
          imageOnly: "In this part of the story, you can add an image.",
          imageAndVideo: "In this part of the story, you can add an image or a video.",
          imageVideoWebpage: "In this part of the story, you can add an image, a video, or a webpage."
        }
      },
      browsePanel: {
        providers: {
          searchingFor: "Searching for \"${searchterm}\"...", // context: Searching for "fireworks"...
          searchedFor: "Search results for \"${searchterm}\"", // context: Search results for "fireworks"
          albumsOf: "${username}'s albums", // context: "John's albums". possessive.
          noPhotosFound: "No photos matched your search. Please try again.",
          noItemsFound: "No items matched your search. Please try again.",
          noItemsInThisStory: "No content from ArcGIS has been added to this story yet.",
          limitReached: "Showing 100 items. If you didn't find what you need, try a keyword search.",
          galleryItems: {
            uploadError: "Sorry, this item failed to upload."
          },
          agol: {
            remove1: "Delete this unused image from your ArcGIS account.",
            remove2: "(You'll need to upload it again if you decide to use it later.)",
            removeFailed: "Remove this inaccessible image from this list.",
            modified: "Modified ${date}",
            uploaded: "Uploaded ${date}",
            contentByAuthor: "${contentType} by ${author}" // context: "Webmap by John Smith".
          },
          googlePhotos: {
            searchAndBrowse: "Browse photos on ${Picasa} or ${Google+}"
          },
          flickr: {
            photostream: "Photostream",
            searchAndBrowse: "Search and browse photos on ${Flickr}"
          },
          unsplash: {
            searchAndBrowse: "Search photos on ${Unsplash}",
            photoBy: "Photo by ${username}",
            userLink: "Go to ${username}'s ${Unsplash} page"
          },
          urlContent: {
            uploadHeaders: {
              generic: "Link to content on the web",
              imageOnly: "Link to an image on the web",
              imageAndVideo: "Link to an image or video on the web"
            },
            linkText: {
              imageOnly: "In the box above, you can link directly to photos.",
              imageAndVideo1: "In the box above, you can paste links or iframe code for videos from ${YouTube} and ${Vimeo}.",
              imageAndVideo2: "You can also link directly to photos.",
              imageVideoWebpage1: "In the box above, you can paste links or iframe code for videos from ${YouTube} and ${Vimeo}.",
              imageVideoWebpage2: "You can also link directly to photos, web pages, or web applications.",
              ender: "When possible, use secure (https) links."
            },
            embedProtocol: {
              embedProtocolLabel: "Load page over a secure connection (https)",
              embedProtocolWarning1: "If this page does not load in your story, it can't be embedded for web security reasons.",
              embedProtocolWarning2: "If this page does not load in your story, uncheck this option and try again. If the page still does not load, it can't be embedded for web security reasons.",
              embedProtocolWarning3: "As an alternative, add a link in your narrative to open the page in a new browser tab. ${linkText}",
              linkText: "Learn More."
            },
            placeholder: "${https://}... or ${http://}... or ${<iframe>}",
            uploadErrors: {
              generic: "Something went wrong with the address entered. Please try again.",
              imageOnly1: "You must use an image in this part of the story.",
              imageOnly2: "Please provide a link to an image (.jpg, .png, .gif), or choose an image from ${ArcGIS}, ${Flickr}, ${Google+}, or ${Unsplash}.",
              imageAndVideo1: "You must use an image or video in this part of the story.",
              imageAndVideo2: "Please provide a link to an image (.jpg, .png, .gif) or a video on ${YouTube} or ${Vimeo}, or choose an image from ${ArcGIS}, ${Flickr}, ${Google+}, or ${Unsplash}.",
              badFormat: "The link to the file you are trying to add is formatted incorrectly.",
              inaccessible: "The file you are trying to add is missing or not accessible.",
              tryAgain: "Please check the address and try again.",
              mediaTypes: {
                VIDEO: "video",
                IMAGE: "image",
                generic: "media"
              }
            }
          }
        },
        sidePanel: {
          googlePhotos: {
            placeholder: "Email or ${Picasa}/${Google+} ID",
            helpText: "You can add photos uploaded to ${Picasa} or ${Google+} to your story. ${helpLinkText} about using images stored in your ${Google} account in your stories.",
            helpLinkText: "Learn more",
            cannotFindUser: "Cannot find user ${username}. Please try again."
          },
          unsplash: {
            placeholder: "Search for photos",
            aboutText: "${Unsplash} is a curated collection of free, high-quality photos.",
            copyrightText: "All photos published on ${Unsplash} are licensed under the ${CC0} License. Find more information ${moreInfoLink}.",
            moreInfoLink: "here"
          },
          flickr: {
            searchType: {
              account: "${Flickr} Account",
              text: "All ${Flickr}"
            },
            placeholders: {
              user: "Search for account",
              userText: "Search this account for photos",
              text: "Search for photos"
            },
            errors: {
              cannotFindUser: "Cannot find user ${username}.",
              noUserPhotos: "${username} does not have any public photos.",
              didYouMean: "Did you mean ${username}?",
              generalUserError: "Something went wrong when searching for user ${username}."
            },
            licenses: {
              licenseLabel: "License: ",
              public: "Public Domain",
              commercial: "OK for Commercial Use",
              nonCommercial: "OK for Non-Commercial Use",
              reserved: "All Rights Reserved",
              any: "Any License"
            }
          },
          agol: {
            searchLocation: {
              thisStory: "This Story",
              agol: "ArcGIS Online",
              portalArcGIS: "Portal for ArcGIS",
              portal: "Portal",
              myOrg: "${orgname} Organization",
              myContent: "My Content"
            },
            createContent: {
              or: "OR",
              dragAndDrop: "Drop image(s) here",
              uploadImage: "Browse for image(s)",
              agolInfo: "Images will be stored in your ArcGIS account and accessible only inside your story.",
              saveBeforeUpload: "Once you save this story, you can upload images to ArcGIS here.",
              fileTypesImage: "Supported file types: .png, .jpeg, .jpg, .gif, .bmp"
            },
            filterAndSort: {
              webmap: "Web Map",
              webscene: "Web Scene",
              image: "Image",
              date: "Date",
              sortByDate: "Sort by date",
              title: "Title",
              sortByTitle: "Sort by title",
              views: "Views",
              search: "Search by keyword or ID"
            }
          }
        }
      }
    }
  }),
  "ar": 1,
  "bs": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hi": 1,
  "hr": 1,
  "id": 1,
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
