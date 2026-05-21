// Veridis Quo

setCpm(107/4)

// === melodic ===
let main = note("~ ~ ~ f4 e4 f4 d4 _ _ _ _ f4 c4 f4 b3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ e4 d4 e4 c4 _ _ _ _ e4 b3 e4 a3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~  f4 e4 f4 d4 _ _ _ _ f4 c4 f4 b3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ e4 d4 e4 c4 e4 b3 e4 a3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ ")
let last = note("~ ~ ~ f4 e4 f4 d4 _ _ _ _ f4 c4 f4 b3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ e4 d4 e4 c4 _ _ _ _ e4 b3 e4 a3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~  f4 e4 f4 d4 _ _ _ _ f4 c4 f4 b3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ e4 d4 e4 c4 e4 b3 e4 a3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ~ ~ ~ ")

$: seq([main, last, main, last])
.s("gm_pad_warm")
.slow(32)
.gain(1.5)
.sustain(0.9)
._pianoroll()

// === baseline ===
$: note("<[d3, f3, a3] [d3, g3, b3] [e3, a3, c4] [[f3, a3, c4] [e3, a3, c4]]>")
.s("gm_synth_brass_2")
.gain(0.5)
.legato(1.02)

// === drum ===
$: s("<mfb512_bd ~ ~ ~>")
.gain(0.8)
.fast(16)

$: s("<~ ~ ~ ~ mfb512_sd ~ ~ ~ ~ ~ ~ ~ mfb512_sd ~ ~ ~>")
.gain(0.8)
.fast(16)



