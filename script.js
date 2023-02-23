const btnEl = document.querySelector(".btn");
const videoContainerEl = document.querySelector(".video-container") ;
const closeBtn = document.querySelector(".fa-times");
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", () => {
	videoContainerEl.classList.remove("active")
})

closeBtn.addEventListener("click", ()=> {
	videoContainerEl.classList.add("active");
	videoEl.pause();
	videoEl.currentTime = 0;
})