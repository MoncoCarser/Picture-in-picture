# Picture-in-picture
Possibility to have picture in picture mode.

If user has a video playing on another web site, when having this web page open, user can show the video separately in picture-in-picture mode.


const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media screen, pass video to element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// Catch errors
		console.log("whoos, error here:", error)
	}
}

button.addEventListener("click", async () => {
	//  Disable Button
	button.disabled = true;
	// Start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset Button
	button.disabled = false;
});

// On load
selectMediaStream();
