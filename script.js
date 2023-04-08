const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a mdeia screen, pass video to element, user presses START to show video screen
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

