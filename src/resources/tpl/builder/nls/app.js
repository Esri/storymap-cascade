define({
	root: ({
		builder: {
			dialog: {
				apply: "Apply",
				close: "Close"
			},
			header: {
				defaultTagline: "A ${STORY_MAP}",
				sharingNotAvailable: "This is not available until you share the story",
				edit: "Edit"
			},
			headerConfig: {
				toggles: {
					bookmarks: "Bookmarks",
					logoSharing: "Logo & Sharing"
				},
				bookmarks: {
					title: "Section",
					bookmark: "Bookmark",
					intro: "Bookmarks are links to story sections that are shown in the header. Creating concise bookmarks for the main sections of your story helps readers get oriented.",
					sequentialDefault: "Sequential section (no text found)",
					immersiveDefault: "Immersive section (no text found)",
					titleDefault: "Title section (no text found)",
					coverDefault: "Cover section (no text found)",
					coverAppendage: "(Cover)"
				},
				logoSharing: {
					logo: "Logo",
					logoButton: "Use ${ESRI} Logo",
					logoLink: "Logo link",
					logoUploadProgress: "Logo upload in progress",
					logoUploadSuccess: "Logo uploaded successfully",
					logoUploadError: "Logo upload failed, switching back to ${ESRI} logo",
					customHeaderText: "Tagline",
					taglineLinkDisabledTooltip: "Enter a tagline to enable the link",
					link: "Tagline link",
					enableSocialSharing: "Display sharing button"
				}
			},
			builderPanel: {
				coverLabel: "Cover",
				creditsLabel: "Credits",
				betaFeedback: "Beta feedback",
				betaNote: "${APP_NAME} is in beta. Please let us know what you think or if something is not working as you expected.",
				notSharedNote: "Your story isn't shared, only you can see it",
				organizationWarning: "To ensure this story can be seen by others when shared with your organization, you must also share its maps, scenes, layers, or apps with your organization using the check story button below.",
				publicWarning: "To ensure this story can be seen by others when shared publicly, you must also share its maps, scenes, layers, or apps publicly using the check story button below.",
				addTitleNote: "Add a title for your story on the cover to save",
				saveError: "There was an error saving your story.",
				duplicate: "Duplicate",
				organize: "Organize",
				done: "Done"
			},
			immersiveViewPanel: {
				transition: "Transition",
				fade: "Fade",
				fadeSlow: "Fade Slow",
				swipeVertical: "Swipe Vertical",
				swipeHorizontal: "Swipe Horizontal",
				none: "None",
				disabledConsecutiveSameMedia: "Not available when consecutive views use the same media",
				disabledTooltipMap: "To use this transition the visible layers in both views must be different and the other map properties must be the same",
				disabledConsecutiveSameMap: "Not available when consecutive views use the same map",
				disabledNotInBeta: "Not available in beta",
				disabledNonConsecutive: "Not available as there is another occurence of this media that is non consecutive",
				addMedia: "Add media"
			},
			mediaConfig: {
				tabs: {
					appearance: "Appearance",
					manage: "Manage",
					size: "Size",
					background: "Background"
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
					noSlides: "No slides available."
				},
				sectionAppearance: {
					layout: "Layout",
					theme: "Theme"
				},
				size: {
					small: "Small",
					medium: "Medium",
					large: "Large"
				},
				background: {
					noCrop: "Do not crop image",
					mostImportantPart: "Choose the most important point",
					cropExplanationImmersive: "Select a point on the image to choose how your image will be cropped at different screen sizes. The point you select will always be visible. Check the box below if your media needs to be fully visible.",
					cropExplanation: "Select a point on the image to choose how your image will be cropped at different screen sizes. The point you select will always be visible.",
					color: "Color",
					previews: "Previews"
				}
			},
			imageGallery: {
				reachedLimit: "Only four images are allowed in a row. To start a new row, add another image below.",
				addImage: "Add another image to this row"
			},
			cover: {
				titlePrompt: "Enter your story title...",
				subtitlePrompt: "Scroll down to get started or enter an optional subtitle",
				mediaPlaceholder: "Add your image or video",
				saveError: "Save failed, you already have an item with this title"
			},
			credits: {
				warning: "Both fields must be filled out",
				content: "Content...",
				source: "Source...",
				linkPrompt: "Optional link...",
				introductionPlaceholder: "Enter an optional introduction to your credits section..."
			},
			immersive: {
				titleConfig: {
					theme: "Theme"
				}
			},
			media: {
				captionPlaceholder: "Your caption here..."
			}
    }
  }),
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
