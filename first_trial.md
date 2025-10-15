stack(
  // Bass line with Euclidean rhythm
  note("c2")
    .euclid("<3 6 3>", "<8 16>")
    .fast(2)
    .s("sine")
    .add(note("[0 <12 24>]").fast(2))
    .decay(sine.range(0.2, 2))
    .room(0.5)
    .lpf(sine.slow(3).range(120, 400))
    .lpenv(rand.range(0.5, 4))
    .lpq(perlin.range(5, 12).fast(2))
    .distort(1)
    .fmi(4)
    .fmh(5.01)
    .gain(0.6)
    .delay(0.1),
  
  // Kick drum pattern
  s("bd bd bd bd")
    .bank("RolandTR909")
    .ply("<1 [1 [2 4]]>"),
  
  // Open hi-hat
  s("oh*4")
    .bank("RolandTR909")
    .speed(0.8)
    .decay("<0.02 0.05>".fast(2).add(saw.slow(8).range(0, 1)))
)
