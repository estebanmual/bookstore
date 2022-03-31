function circleProgressBar(id) {
  const progressCircle = document.getElementById(`circular-progress-${id.id}`);
  const progressEndValue = Number(document.getElementById(`progress-value-${id.id}`).textContent);

  let progressValue = 0;
  const speed = 20;

  const progress = setInterval(() => {
    progressValue += 1;
    progressCircle.style.background = `conic-gradient(
        #0290ff ${progressValue * 3.6}deg,
        #E8E8E8 ${progressValue * 3.6}deg
    )`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

export default circleProgressBar;
