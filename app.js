const drums = new Howl({
  src: ["./drums/drums.webm", "./drums/drums.mp3"],
  sprite: {
    clap: [0, 734.2630385487529],
    "closed-hihat": [2000, 355.8730158730157],
    crash: [4000, 1249.410430839002],
    kick: [7000, 521.2018140589568],
    "open-hihat": [9000, 922.0634920634918],
    snare: [11000, 543.5374149659857],
  },
});

drums.play("snare");
