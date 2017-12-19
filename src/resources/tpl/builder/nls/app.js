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
      builderPanel: {
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
          remove: "Remove"
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
        imageUpload: "Image upload in progress...",
        imageUploadSuccess: "Image uploaded successfully",
        imageUploadFail: "Image upload failed"
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
          altImageBroken: "The alternate image defined for this media item is not accessible"
        },
        contentWarnings: {
          noAltImage: "Be sure to test your story on mobile devices before sharing it. If this media does not work as expected, use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageUnsupported: "This media will not work on mobile devices. Use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageWarning: "Be sure to test your story on mobile devices before sharing it. If this media does not work as expected, use the button below to add an alternate image that will be shown when the story is viewed on a phone or tablet.",
          noAltImageAlt: "This type of media is not supported or may not work well on mobile devices. On the mobile tab, provide an alternate image that will be shown when the story is viewed on a phone or tablet."
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
