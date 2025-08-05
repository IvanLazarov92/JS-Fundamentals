function rotationCalculation(bandName, albumName, songName) {
  const singleRotation = 2.5;
  const songDuration =
    (albumName.length * bandName.length * songName.length) / 2;
  const rotationsCount = Math.ceil(songDuration / singleRotation);

  console.log(`The plate was rotated ${rotationsCount} times.`);
}

rotationCalculation("Black Sabbath", "Paranoid", "War Pigs");
