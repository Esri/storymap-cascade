/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  root: ({
    builder: {
      dialog: {
        apply: "Apply",
        close: "Close"
      },
      header: {
        sharingNotAvailable: "This is not available until you share the story",
        edit: "Edit"
      },
      headerConfig: {
        toggles: {
          bookmarks: "Bookmarks",
          logoSharing: "Logo & Sharing",
          theme: "Appearance"
        },
        bookmarks: {
          title: "Section",
          bookmark: "Bookmark",
          intro: "Bookmarks are links to story sections that are shown in the header. Creating concise bookmarks for the main sections of your story helps readers get oriented.",
          sequentialDefault: "Narrative section (no text found)",
          immersiveDefault: "Immersive section (no text found)",
          titleDefault: "Title section (no text found)",
          coverDefault: "Cover section (no text found)",
          coverAppendage: "(Cover)"
        },
        logoSharing: {
          logo: "Logo",
          logoButton: "Use ${ESRI} Logo",
          useOrgLogo: "Use my organization's logo",
          useOrgLogoHelp: "Use the logo provided by your administrator",
          logoLink: "Logo link",
          logoUploadProgress: "Logo upload in progress",
          logoUploadSuccess: "Logo uploaded successfully",
          logoUploadError: "Logo upload failed, switching back to ${ESRI} logo",
          customHeaderText: "Tagline",
          taglineLinkDisabledTooltip: "Enter a tagline to enable the link",
          link: "Tagline link",
          enableSocialSharing: "Display sharing button"
        },
        appearance: {
          themeLabel: "Theme",
          fontLabel: "Fonts",
          previewLabel: "Preview",
          fontsTitleLabel: "Titles",
          fontsBodyLabel: "Body",
          // the two below are just filler texts in pseudo-latin. They don't mean anything.
          // Just needs to be changed for non-latin-based alphabets, but should still be filler, non-meaningful text.
          // http://generator.lorem-ipsum.info/ has many but not all languages.
          loremTitle: "Lorem Ipsum",
          loremBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
        }
      },
      share: {
        btnPrivate: "Private",
        btnOrg: "Organization",
        btnPublic: "Public",
        btnEveryone: "Everyone"
      },
      builderPanel: {
        builderNamePrefix: "", //App title is "Cascade Builder", Cascade is not translated. This prefix string is included in case a translation of "Builder" requires words that preceed the untranslated "Cascade"
        builderNameSuffix: "Builder", //See previous note
        buttonSaving: "Saving",
        buttonSaved: "Saved",
        buttonError: "Save failed",
        buttonShare: "Share",
        buttonSettings: "Settings",
        settingsLogoError: "Your logo has an issue. Click to learn more.",
        buttonHelp: "Get Help or Submit Feedback on GeoNet",
        buttonPreview: "View Story",
        buttonHealth: "Health Report",
        manageStories: "Manage My Stories",
        closeWithPendingChange: "Are you sure to want to confirm this action? Your changes will be lost.",
        coverLabel: "Cover",
        creditsLabel: "Credits",
        betaFeedback: "Feedback",
        betaNote: "Please let us know what you think about ${APP_NAME} or if something is not working as you expected.",
        notSharedNote: "Your story isn't shared, only you can see it",
        organizationWarning: "To ensure this story can be viewed by others you must also share its scenes, scene layers, and embedded apps with your organization. Maps and map layers are shared automatically.",
        publicWarning: "To ensure this story can be viewed by others you must also share its scenes, scene layers, and embedded apps with Everyone. Maps and map layers are shared automatically.",
        addTitleNote: "Add a title on the cover to save",
        saveError: "There was an error saving your story.",
        duplicate: "Duplicate",
        organize: "Organize",
        done: "Done",
        invite: "As you build your story, the sections will appear here...",
        mystoriestooltip: "Cascade Builder alerts you to issues in your story and helps you fix them. Scenes and embedded apps are not checked, so please check those manually."
      },
      immersiveViewPanel: {
        transition: "Transition",
        chooseTransition: "Choose Transition",
        fade: "Fade",
        fadeSlow: "Fade Slow",
        swipeVertical: "Swipe Vertical",
        swipeHorizontal: "Swipe Horizontal",
        none: "None",
        disabledConsecutiveSameMedia: "Not available when consecutive views use the same media",
        disabledTooltipMap: "To use this transition the visible layers in both views must be different and the other map properties must be the same",
        disabledConsecutiveSameMap: "Not available when consecutive views use the same map",
        disabledNotInBeta: "Not available when consecutive views use the same map",
        disabledNonConsecutive: "Not available as there is another occurence of this media that is non consecutive",
        addMedia: "Add media",
        invite: "As you build your immersive section, the views will appear here..."
      },
      mediaConfig: {
        tabs: {
          appearance: "Appearance",
          manage: "Manage",
          size: "Size",
          background: "Background",
          mobile: "Mobile",
          issues: "Issues",
          fixIssues: "Fix Issues"
        },
        manage: {
          changeMedia: "Change media",
          edit: "Edit",
          editAside: "Opens in a new browser tab. After saving your edits, save and reload this story to see your changes.",
          remove: "Remove",
          altTextPlaceholder: "Add a description of this media for visually impaired readers...",
          altTextHelptip: "Alternative text is a description of visual media used by assistive technologies such as screen reader software. This is optional but recommended to meet web accessibility guidelines such as WCAG and Section 508."
        },
        appearance: {
          homeView: "Initial view",
          audio: "Audio",
          on: "On",
          muted: "Muted",
          volumeAside: "The video will autoplay when a reader arrives at this view. If you mute the sound, the reader will not be able to enable it.",
          view: "View",
          resetLocation: "Reset Location",
          resetLayers: "Reset Layers",
          clearPopup: "Clear Pop-Up",
          interaction: "Interaction",
          interactionDisabled: "Interaction Disabled",
          buttonToEnable: "Button to Enable",
          interactionEnabled: "Interaction Enabled",
          interactionAside: "*Touch devices will show an interaction button.",
          slide: "Slide",
          noSlides: "No slides available.",
          mapExtentPrompt: "Update the map to tell your story, click the checkmark to save the changes"
        },
        sectionAppearance: {
          layout: "Layout",
          theme: "Theme"
        },
        size: {
          small: "Small",
          medium: "Medium",
          large: "Large",
          noCrop: "Do not crop tall images",
          noCropTallTooltip: "Not cropping a tall image produces a dramatic effect for readers that requires scrolling to see the entire image."
        },
        background: {
          noCrop: "Do not crop",
          mostImportantPart: "Choose the most important point",
          cropExplanationImmersive: "Select a point on the image to choose how it will be cropped at different screen sizes. The point you select will always be visible. Check 'Do Not Crop' if your image needs to be fully visible.",
          cropExplanation: "Select a point on the image to choose how it will be cropped at different screen sizes. The point you select will always be visible.",
          color: "Color",
          previews: "Previews"
        },
        altMedia: {
          alternativeMedia: "Alternate Image for Mobile",
          explanation: "Some media are not supported or may not work well on mobile devices. Use this panel to specify an image that will be shown in place of this media when your story is viewed on a phone or tablet.",
          changeAltImage: "Change image",
          uploadAltImage: "Add alternate image"
        }
      },
      mediaPicker: {
        browseToggle: {
          urls: "Link to Content",
          urls_short: "Link",
          contentType: {
            error: "No authorized media.",
            imageOnly: "In this part of the story, you can add an image.",
            imageAndVideo: "In this part of the story, you can add an image or a video.",
            imageVideoWebpage: "In this part of the story, you can add audio, an image, a video, or a webpage."
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
              searchAndBrowse: "Search and browse photos on ${Flickr}",
              captionStarter: "Photo by ${USERNAME} on ${Flickr}"
            },
            unsplash: {
              searchAndBrowse: "Search photos on ${Unsplash}",
              photoBy: "Photo by ${username}",
              userLink: "Go to ${username}'s ${Unsplash} page",
              captionStarter: "Photo by ${USERNAME} on ${Unsplash}"
            },
            urlContent: {
              uploadHeaders: {
                generic: "Link to content on the web",
                imageOnly: "Link to an image on the web",
                imageAndVideo: "Link to an image or video on the web"
              },
              linkText: {
                imageOnly: "In the box above, you can link directly to a photo.",
                imageAndVideo1: "In the box above, you can paste a link or iframe code for a video on ${YouTube} or ${Vimeo}.",
                imageAndVideo2: "You can also link directly to a photo.",
                imageVideoWebpage1: "In the box above, you can paste a link or iframe code for web content like a dynamic chart or video on ${YouTube} or ${Vimeo}.",
                imageVideoWebpage2: "You can also link directly to a photo, video, audio file, web page, or web app.",
                ender: "Always use secure (https) links. If your content does not support https add a link to it in the text of your story so readers can view it in a new browser tab.",
                httpsError: "Link must begin with HTTPS"
              },
              embedProtocol: {
                embedProtocolLabel: "Load page over a secure connection (https)",
                embedProtocolWarning1: "If this page does not load in your story, it can't be embedded for web security reasons.",
                embedProtocolWarning2: "If this page does not load in your story, uncheck this option and try again. If the page still does not load, it can't be embedded for web security reasons.",
                embedProtocolWarning3: "As an alternative, add a link in your narrative to open the page in a new browser tab. ${linkText}",
                linkText: "Learn More."
              },
              placeholder: "${https://}... or ${<iframe>}",
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
            thirdPartyTerms: "By using a third-party service, you agree to its terms of service: ",
            googlePhotos: {
              placeholder: "Email or ${Picasa}/${Google+} ID",
              helpText: "You can add photos uploaded to ${Picasa} or ${Google+} to your story. ${helpLinkText} about using images stored in your ${Google} account in your stories.",
              helpLinkText: "Learn more",
              cannotFindUser: "Cannot find user ${username}. Please try again."
            },
            unsplash: {
              placeholder: "Search for photos",
              aboutText: "${Unsplash} is a curated collection of free, high-quality photos.",
              copyrightText: "All photos are licensed under the ${Unsplash} License. Find more information ${moreInfoLink}.",
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
                createNewMap: "Create a New Map",
                or: "OR",
                dragAndDropImage: "Drop images",
                dragAndDropImageAudio: "Drop images or audio",
                uploadButton: "Browse",
                agolInfo: "Uploaded images and audio will be accessible only within this story.",
                saveBeforeUpload: "Once you save this story, you can upload images and audio to ArcGIS here.",
                fileExtsImage: "Supported types: png, jpg, gif, bmp.",
                fileExtsImageAudio: "Supported types: png, jpg, gif, bmp, mp3.",
                maxSize: "Max 10 MB per file."
              },
              filterAndSort: {
                webmap: "Web Map",
                webscene: "Web Scene",
                image: "Image",
                audio: "Audio",
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
      },
      mapEditor: {
        dialogTitle: "Edit map",
        unauthorizedDomain: "You are not on an authorized domain to use the map editor",
        loading: "Please wait while the map editor is loading",
        saving: "Saving the map",
        success: "Map saved",
        cancelTitle: "Discard any unsaved changes?",
        errorSave: "Unable to save map. Please try again.",
        loadFail: "Sorry, the map editor cannot be loaded",
        close: "Close",
        save: "Save",
        confirm: "Yes, close map",
        deny: "No, keep working"
      },
      textEditor: {
        placeholder: {
          continueStory: "Continue your story here..."
        },
        blockAdd: {
          text: "Text",
          media: "Media",
          title: "Title",
          immersive: "Immersive"
        },
        link: {
          invite: "Paste or type a link..."
        },
        color: {
          choose: "choose",
          cancel: "cancel",
          clear: "Clear color"
        }
      },
      imageGallery: {
        addImage: "Add another image",
        moveBackward: "Move backward",
        moveForward: "Move forward"
      },
      cover: {
        titlePrompt: "Enter your story title...",
        subtitlePrompt: "Scroll down to get started or enter an optional subtitle",
        mediaPlaceholder: "Add your image or video",
        saveError: "Save failed, you already have an item with this title"
      },
      credits: {
        sectionInvite: "Add a credits section",
        warning: "Both fields must be filled out",
        content: "Content...",
        source: "Source...",
        linkPrompt: "Optional link...",
        introductionPlaceholder: "Enter an optional introduction to your credits section..."
      },
      immersive: {
        titleConfig: {
          theme: "Theme"
        },
        panelConfig: {
          position: "Position",
          theme: "Theme",
          size: "Size",
          background: "Background",
          layout: "Scrolling (for all panels)"
        }
      },
      title: {
        placeholder: "Enter a title..."
      },
      media: {
        mediaUpload: "Media upload in progress...",
        mediaUploadSuccess: "Media uploaded successfully",
        mediaUploadFail: "Media upload failed"
      },
      controller: {
        sectionOrganize: "You organized the sections",
        immersiveOrganize: "You organized the views",
        sectionDelete: "You deleted a section",
        viewDelete: "You deleted a view"
      },
      notification: {
        cancel: "Cancel",
        close: "Close",
        undo: "Undo"
      },
      sections: {
        sequence: "Narrative",
        immersive: "Immersive",
        title: "Title"
      },
      mediaErrors: {
        mediaTypes: {
          image: "image",
          audio: "audio",
          webmap: "map",
          webscene: "scene",
          video: "video",
          content: "content",
          webpage: "web page"
        },
        placeholders: {
          generic: "This content is not accessible.",
          deleted: "This item has been deleted.",
          inaccessible: "This content is not accessible.",
          unauthorized: "You are not authorized to view this content.",
          unshared: "This item is not shared the same as your story.",
          othersUnshared: "This item is not shared the same as your story.",
          subscriptionContent: "This map contains a subscriber layer.",
          premiumContent: "This map contains a premium layer.",
          secureService: "This map contains a secure layer."
        },
        contentIssues: {
          noAltImage: "Media May Not Work on Mobile",
          noAltImageUnsupported: "Media Not Supported on Mobile",
          noAltImageWarning: "Media May Not Work on Mobile",
          altImageBroken: "The alternate image defined for this media item is not accessible",
          httpMedia: "Insecure Media",
          httpContent: "Insecure Content"
        },
        contentWarnings: {
          noAltImage: "Be sure to test your story on mobile devices before sharing it. If this media does not work as expected, use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageUnsupported: "This media will not work on mobile devices. Use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageWarning: "Be sure to test your story on mobile devices before sharing it. If this media does not work as expected, use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageAlt: "This type of media is not supported or may not work well on mobile devices. On the mobile tab, provide an alternate image that will be shown when the story is viewed on a phone or tablet."
        },
        descriptions: {
          httpAudioUnfixable: "This audio does not support HTTPS. Remove it from your story or replace it with a link.",
          httpAudioUncheckable: "This audio has an insecure (HTTP) URL. Click the button below to try using an HTTPS URL for this audio. If that doesn’t work, remove the audio from your story or replace it with a hyperlink.",
          httpAudioFixable: "This audio has an insecure (HTTP) URL. Click the button below to use a secure HTTPS URL for this audio.",
          httpWebpageUnfixable: "This web page does not support HTTPS. Remove it from your story or replace it with a screenshot or link.",
          httpWebpageUncheckable: "This web page has an insecure (HTTP) URL. Click the button below to try using an HTTPS URL for this web page. If that doesn’t work, remove the web page from your story or replace it with a screenshot or hyperlink.",
          httpWebpageFixable: "This web page has an insecure (HTTP) URL. Click the button below to use a secure HTTPS URL for this web page.",
          httpVideoUnfixable: "This video does not support HTTPS. Remove it from your story or replace it with a screenshot or link.",
          httpVideoUncheckable: "This video has an insecure (HTTP) URL. Click the button below to try using an HTTPS URL for this video. If that doesn’t work, remove the video from your story or replace it with a screenshot or hyperlink.",
          httpVideoFixable: "This video has an insecure (HTTP) URL. Click the button below to use a secure HTTPS URL for this video.",
          httpImageUnfixable: "This image does not support HTTPS. Remove it from your story or replace it with a link.",
          httpImageUncheckable: "This image has an insecure (HTTP) URL. Click the button below to try using an HTTPS URL for this image. If that doesn’t work, remove the image from your story or replace it with a hyperlink.",
          httpImageFixable: "This image has an insecure (HTTP) URL. Click the button below to use a secure HTTPS URL for this image.",
          httpLayer: "This layer has an insecure (HTTP) URL.",
          inaccessibleLogo: "This logo is not accessible. Replace it with another image.",
          httpLogoUnfixable: "This logo does not support HTTPS. Replace it with another image.",
          httpLogoFixable: "This logo has an insecure (HTTP) URL. Use an HTTPS URL for the logo.",
          httpLogoUncheckable: "This logo has an insecure (HTTP) URL. Use an HTTPS URL for the logo, or replace it with another image."
        },
        tooltips: {
          httpAudioFixable: "Click the button to use a secure HTTPS URL for this audio.",
          httpAudioUncheckable: "Try using an HTTPS URL for this audio. If that doesn’t work, remove the audio from your story or replace it with a link.",
          httpWebpageFixable: "Click the button to use a secure HTTPS URL for this web page.",
          httpWebpageUncheckable: "Try using an HTTPS URL for this web page. If that doesn’t work, remove the web page from your story or replace it with a screenshot or link.",
          httpVideoFixable: "Click the button to use a secure HTTPS URL for this video.",
          httpVideoUncheckable: "Try using an HTTPS URL for this video. If that doesn’t work, remove the video from your story or replace it with a screenshot or link.",
          httpImageFixable: "Click the button to use a secure HTTPS URL for this image.",
          httpImageUncheckable: "Try using an HTTPS URL for this image. If that doesn’t work, remove the image from your story or replace it with a link.",
          httpLayerMyMap: "Visit the map's item page to update this layer to use HTTPS. If the layer cannot be updated, remove it from the map.",
          httpLayerNotMyMap: "Make a copy of the map and update this layer to use HTTPS. If the layer cannot be updated, remove it from the map.",
          clickLearnMore: "Click to learn more."
        },
        fixButtons: {
          agolItemPage: "Item Page",
          openTheMap: "Open Map",
          updateAudio: "Fix Audio URL",
          updateWebpages: "Fix Web Page URL",
          updateVideos: "Fix Video URL",
          updateImages: "Fix Image URL"
        },
        mapIssues: {
          fixButton: "Fix Issues",
          nofixButton: "Issues",
          mapLabel: "Map:",
          summaries: {
            unshared: "Unshared Content",
            othersUnshared: "Someone Else's Unshared Content",
            subscriptionContent: "Subscriber Content",
            premiumContent: "Premium Content",
            secureContent: "Secure Content",
            deleted: "Deleted Content",
            inaccessible: "Inaccessible Content",
            unauthorized: "Unauthorized Content"
          },
          descriptions: {
            unshared: "This content is not shared the same as your story.",
            othersUnshared: "This content is owned by someone else and not shared the same as your story.",
            othersUnsharedAuthorized: "This content is owned by someone else, but you are authorized to share it.",
            inaccessible: "This content is not accessible.",
            deleted: "This content has been deleted.",
            unauthorized: "You are not authorized to view this content.",
            popupFeatureLayer: "A tiled layer's pop-ups come from a feature layer that is not shared the same as your story.",
            subscriptionContent: "You must authorize subscriber content for public use.",
            premiumContent: "You must authorize premium content for public use.",
            secureService: "Secure content is not accessible to your readers.",
            missingItemWarning: "The item associated with this layer has been deleted."
          },
          tooltips: {
            unshared: "Click to learn more about sharing.",
            othersUnshared: "You do not have permissions to share content owned by others. Ask the owner to share it, remove the map from your story, or edit the map to remove the layers that aren't yours. Click to learn more about edting maps.",
            inaccessible: "Remove this map from your story or edit it to remove the inaccessible layers. Click to learn more about editing maps.",
            deleted: "Remove this map from your story or edit it to remove the missing layers. Click to learn more about editing maps.",
            unauthorized: "Remove this map from your story or edit it to remove the unauthorized layers. Click to learn more about editing maps.",
            popupFeatureLayer: "A tiled layer's pop-ups come from a feature layer that is not shared the same as your story.",
            subscriptionContent: "Subscriber content does not consume credits. Click to learn more.",
            premiumContent: "Credits will be charged to your organization each time someone views a premium layer in your story. Click to learn more.",
            secureService: "Remove the secure content from your story, or click to learn how to authorize secure content for use by others.",
            missingItemWarning: "This layer still works, but its symbols, pop-ups, or name may have changed. Confirm the layer appears as expected, or remove it from your story."
          },
          fixButtons: {
            share: "Share",
            hide: "Hide",
            authorize: "Authorize",
            remove: "Remove",
            help: "Get Help",
            ignore: "Ignore",
            confirm: "Confirm",
            edit: "Edit Map"
          },
          shareNotifications: {
            alsoSharedMapsAndLayers: "Some maps and layers were also shared.",
            alsoSharedMaps: "Some maps were also shared.",
            alsoSharedLayers: "Some layers were also shared.",
            sharedOthersContent: "You've used your administrative privileges to share someone else's content."
          }
        },
        storyHealth: {
          healthy: "No issues",
          notHealthy: "Fix issues",
          warnings: "See warnings"
        }
      },
      saveErrorSocial: {
        title: "Social media sharing",
        panel1: "Your story may not appear properly on social media as your ArcGIS web application item title is not the same as your story title.",
        panel1tooltip: "By defining a title, summary and thumbnail image, your story will look like this:",
        panel2: "Which title would you like to use on social media:",
        panel2q1: "Story title (recommended)",
        panel2q1tooltip: "By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized.",
        panel2q2: "Item title",
        panel3: "To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image.",
        panel4: "Do not warn me again for this story",
        save: "Save",
        mystories: "My Stories"
      },
      httpsTransitionMessage: {
        bannerMsg: "Important Message about Web Security and Story Maps",
        s1h1: "Esri is enhancing the security of Story Maps",
        s1p1: "Your Story Maps live on the web, and the web community is always working to establish and implement better security. HTTPS, which provides a secure connection for content transmitted over the internet, is emerging as the expected way to access web content. Most modern browsers now show warning messages when HTTP instead of HTTPS is used. Because of this emerging standard, we strongly recommend you use HTTPS links for authoring and sharing Story Maps, and only use HTTPS URLs when embedding web content or linking to images within a Story Map.",
        s1p2: "Practically speaking, this means a Story Map and all its content (including images, layers, embedded apps and websites) should be accessed using links that start with HTTPS rather than HTTP. This ensures the best experience for your readers because most web browsers will indicate that your stories are secure.",
        s2h1: "What do I need to do?",
        s2p1: "Esri is working to make this an easy transition for Story Map authors and readers. Tools are available now in Story Map builders and My Stories that help you find insecure content (HTTP) in your stories and provide recommendations for how to address it. Please check your stories for insecure content and update to HTTPS as soon as possible.",
        action1: "Close",
        action2: "Check my stories now",
        action3: "Learn more",
        floatingNotification: "This story contains insecure (HTTP) content. Please review and address these issues."
      }
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
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
  "hu": 1,
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
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
