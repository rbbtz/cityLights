let w = 750;
let t = 0;

function setup() {
  createCanvas(w, w);
  colorMode(HSB);
}

function draw() {
  t += 0.01; + 1.5;
  blendMode(BLEND);
  background(0, 0, 0, 0.3);
  blendMode(ADD);

  for (let y = w; y > 0; y -= 16) {
    for (let x = (y / 16 % 2) * 9; x < w; x += 18) {
      let N = noise(x / 99, y / 99, t);
      let T = tan(noise(x / w, y / w, t / 9) * 20 + t);
      let R = N * 9;

      //use a random hue value to create a smoothly changing color.
      fill(color(random(0, 360), 50, 100, T));
      circle(x + cos(R) * 9 / T, y + sin(R) * 9 / T, 5 / T);
    }
  }
}
