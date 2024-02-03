kaboom({
    width: 1280,
    heigth: 720
})

loadSprite('backLayer1', 'assets/background_layer_1.png')
loadSprite('backLayer2', 'assets/background_layer_2.png')
loadSprite('backLayer3', 'assets/background_layer_3.png')

loadSpriteAtlas('assets/oak_woods_tileset.png', {
    'platform-pol': { 
        x: 25, y: 0,
        width: 24,
        height: 24
    },
    'pustoy-pol': { 
        x: 25, y: 25,
        width: 24,
        height: 24
    },
    'leviy-kray': { 
        x: 120, y: 72,
        width: 24,
        height: 24
    },
    'praviy-kray': { 
        x: 168, y: 72,
        width: 24,
        height: 24
    },
    



})
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

const map = addLevel([
    '3                                                     3',
    '3                                                     3',
    '3   012                  012                  012     3',
    '3        012                                          3',
    '3                                   012               3',
    '3   012              012                              3',
    '3             012                                     3',
    ' 333333                      012           012        3',
    ' 333333                                               3',
    ' 333333   012                                         3',
    ' 33333333333333333333333333333333333333333333333333333 ',
    ' 33333333333333333333333333333333333333333333333333333 '
], {
    tileWidth: 24,
    tileHeight: 24,
    tiles: {
        0: () => [
            sprite('platform-pol'),
            area(),
            body({isStatic: true})
        ],
        1: () => [
            sprite('pustoy-pol'),
            area(),
            body({isStatic: true})
        ],
        2: () => [
            sprite('leviy-kray'),
            area(),
            body({isStatic: true})
        ],
        3: () => [
            sprite('praviy-kray'),
            area(),
            body({isStatic: true})
        ],
        
    }
})

map.use(scale(4))