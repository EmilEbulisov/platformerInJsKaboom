kaboom({
    width: 1280,
    heigth: 720
})

loadSprite('backLayer1', 'assets/background_layer_1.png')
loadSprite('backLayer2', 'assets/background_layer_2.png')
loadSprite('backLayer3', 'assets/background_layer_3.png')


add([
    sprite('backLayer1'),
    fixed(),
    scale(4)
])
add([
    sprite('backLayer1'),
    fixed(),
    pos(1280, 0),
    scale(4)
])
add([
    sprite('backLayer2'),
    fixed(),
    scale(4)
])
add([
    sprite('backLayer2'),
    fixed(),
    pos(1280, 0),
    scale(4)
])
add([
    sprite('backLayer3'),
    fixed(),
    scale(4)
])
add([
    sprite('backLayer3'),
    fixed(),
    pos(1280, 0),
    scale(4)
])