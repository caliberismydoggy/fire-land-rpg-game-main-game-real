namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`house9`, function (sprite5, location4) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`huggggg van 1`, function (sprite24, location23) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`White Van van`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (otherSprite == treehouse_guy) {
        timer.throttle("action", 1000, function () {
            treehouse_guy.sayText("\"You have found the secret tree house!\"", 1000, false)
        })
    }
    if (otherSprite == mySprite3) {
        timer.throttle("action", 1000, function () {
            mySprite3.sayText("\"Hey there Carl\"", 1000, false)
        })
    }
    if (otherSprite == fish_NPC) {
        timer.throttle("action", 1000, function () {
            fish_NPC.sayText("\"Zoom!\"", 1000, false)
        })
    }
    if (otherSprite == dog_NPC) {
        timer.throttle("action", 1000, function () {
            dog_NPC.sayText("\"woof\"", 1000, false)
        })
    }
    if (otherSprite == princess_NPC) {
        timer.throttle("action", 1000, function () {
            princess_NPC.sayText("\"goodmorning carl\"", 1000, false)
        })
    }
    if (otherSprite == purple_girl_NPC) {
        timer.throttle("action", 1000, function () {
            purple_girl_NPC.sayText("\"hope you live!\"", 1000, false)
        })
    }
    if (otherSprite == blue_dog_NPC) {
        timer.throttle("action", 1000, function () {
            blue_dog_NPC.sayText("\"Bark\"", 1000, false)
        })
    }
    if (otherSprite == cat_NPC) {
        timer.throttle("action", 1000, function () {
            cat_NPC.sayText("\"meow\"", 1000, false)
        })
    }
    if (otherSprite == wizardess_NPC) {
        timer.throttle("action", 1000, function () {
            wizardess_NPC.sayText("\"Have a good day\"", 1000, false)
        })
    }
    if (otherSprite == chill_guy_NPC) {
        timer.throttle("action", 1000, function () {
            chill_guy_NPC.sayText("\"Why hello there!\"", 1000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Van`, function (sprite17, location16) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`White Van van`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite4, location3) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house6`, function (sprite10, location9) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house11`, function (sprite19, location18) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house7`, function (sprite8, location7) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house13`, function (sprite11, location10) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave3`, function (sprite16, location15) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave cave 1`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Tree House`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house5`, function (sprite2, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house2`, function (sprite6, location5) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave0`, function (sprite22, location21) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave cave 1`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave4`, function (sprite23, location22) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave cave 1`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 4`, function (sprite20, location19) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`warp`, function (sprite7, location6) {
    if (level == 5) {
        tiles.setCurrentTilemap(tilemap`level11 main map`)
        mySprite.x += 600
        mySprite.y += 490
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house8`, function (sprite21, location20) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite12, location11) {
    mySprite.setPosition(128, 98)
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Tree House`)
        level = 5
        treehouse_guy = sprites.create(img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.NPC)
        tiles.placeOnRandomTile(treehouse_guy, assets.tile`myTile48`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house1`, function (sprite14, location13) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        tiles.placeOnTile(dog_NPC, tiles.getTileLocation(12, 7))
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cabin`, function (sprite9, location8) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cabin`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave1`, function (sprite13, location12) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave cave 1`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`building office`, function (sprite18, location17) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Building office`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
function setOverworldSprites () {
    mySprite3 = sprites.create(assets.image`karl`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(37, 30))
    animation.runMovementAnimation(
    mySprite3,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    fish_NPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . c c c c . . . 
        . . . . . . . c c d d d d c . . 
        . . . . . c c c c c c d d c . . 
        . . . c c c 4 4 4 4 d c c c c c 
        . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
        . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
        f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
        f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
        f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
        . f 4 4 4 4 1 4 4 f 4 4 d f . . 
        . . f 4 4 1 4 c c 4 4 d f . . . 
        . . . f d 4 4 4 4 4 4 c f . . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(fish_NPC, tiles.getTileLocation(70, 15))
    animation.runMovementAnimation(
    fish_NPC,
    animation.animationPresets(animation.waveLeft),
    2000,
    true
    )
    dog_NPC = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(dog_NPC, tiles.getTileLocation(30, 50))
    animation.runMovementAnimation(
    dog_NPC,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
    princess_NPC = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(princess_NPC, tiles.getTileLocation(45, 15))
    animation.runMovementAnimation(
    princess_NPC,
    animation.animationPresets(animation.waveLeft),
    2000,
    true
    )
    purple_girl_NPC = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(purple_girl_NPC, tiles.getTileLocation(65, 50))
    animation.runMovementAnimation(
    purple_girl_NPC,
    animation.animationPresets(animation.easeUp),
    2000,
    true
    )
    blue_dog_NPC = sprites.create(img`
        bbbb........bbbb.................
        c99bb......bb99b.................
        c999bb....bb999c.................
        c9b99bccccb99b9c.................
        c9bb99bccb99bb9c.................
        c93b99999999b39c.................
        c93399999999339c.................
        c99399999999399c.................
        c99999991199999c.................
        c999ff91119ff99c........bbbbbb...
        c999ff91111ff99c.......c999999bb.
        c99991111111999c......c99999999b.
        c9991111fff1199c.....c9991119999b
        c999c11fff1199bc.....c9911111999b
        c999cc111111c9bc.....c911dd11199b
        c99999bb33cc99bcc....cbddbbd1199c
        c999999b33c99999bbccccbbdbbb1199c
        c9999999bb9999999999999999bb1999c
        c999911119999999999999999999b999c
        c999111111999999999999999999999c.
        c99911111119999999999999999999cc.
        c99111111119999999999999999999c..
        c99111111111999999999999999999c..
        cb9111111111999999999999999999c..
        .f9111111111999999999999999999c..
        .ff111111111999999999999999999c..
        ..fb11111111999999999999999999c..
        ...fb1111119999999111111999999c..
        ...fbbb11119999991111111199999c..
        ....fbbfffb9999ccccccccccb9999c..
        ....fbbf..f999c.....fbbf.c9999c..
        ....fbbf..f999c.....fbbf.cc9999c.
        ....fbbf..f99c.......fbf..cc999c.
        ....fbbf..f99c.......fbbf..cc99c.
        ....fbbf..f99c.......fbbf...c99c.
        ....fbbf..f99c......fbbbf...c99c.
        ...fbbbf..f99c......ffff....cb9c.
        ...fbbf..f999c.............c999c.
        ...ffff..f99cc.............c999c.
        .........fffc..............cccc..
        `, SpriteKind.NPC)
    scaling.scaleToPercent(blue_dog_NPC, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    tiles.placeOnTile(blue_dog_NPC, tiles.getTileLocation(15, 15))
    animation.runMovementAnimation(
    blue_dog_NPC,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    cat_NPC = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(cat_NPC, tiles.getTileLocation(40, 55))
    animation.runMovementAnimation(
    cat_NPC,
    animation.animationPresets(animation.parachuteLeft),
    2000,
    true
    )
    wizardess_NPC = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(wizardess_NPC, tiles.getTileLocation(23, 30))
    animation.runMovementAnimation(
    wizardess_NPC,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    chill_guy_NPC = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnTile(chill_guy_NPC, tiles.getTileLocation(70, 30))
    animation.runMovementAnimation(
    chill_guy_NPC,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`house3`, function (sprite15, location14) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house10`, function (sprite3, location2) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
let chill_guy_NPC: Sprite = null
let wizardess_NPC: Sprite = null
let cat_NPC: Sprite = null
let blue_dog_NPC: Sprite = null
let purple_girl_NPC: Sprite = null
let princess_NPC: Sprite = null
let dog_NPC: Sprite = null
let fish_NPC: Sprite = null
let mySprite3: Sprite = null
let treehouse_guy: Sprite = null
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`carl`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let MAP = [
tilemap`level11 main map`,
tilemap`House7 copy`,
tilemap`Cabin`,
tilemap`Building office`,
tilemap`Cave cave 1`,
tilemap`White Van van`,
tilemap`NPC spawn`,
tilemap`Tree House`,
tilemap`House1 copy0`,
tilemap`House6`,
tilemap`House2 copy0`,
tilemap`House3 copy0`,
tilemap`House4 copy0`,
tilemap`House5 copy0`,
tilemap`House6 copy0`,
tilemap`Cave cave cave`,
tilemap`Cave cave 4`,
tilemap`Cave0`,
tilemap`White Van0`
]
tiles.setCurrentTilemap(tilemap`level11 main map`)
mySprite.x += 600
mySprite.y += 490
level = 0
setOverworldSprites()
game.onUpdate(function () {
    if (level != 0) {
        sprites.destroy(mySprite3)
    }
    if (level != 5) {
        sprites.destroy(treehouse_guy)
    }
    if (level != 0) {
        sprites.destroy(fish_NPC)
    }
    if (level != 0) {
        sprites.destroy(dog_NPC)
    }
    if (level != 0) {
        sprites.destroy(princess_NPC)
    }
    if (level != 0) {
        sprites.destroy(purple_girl_NPC)
    }
    if (level != 0) {
        sprites.destroy(blue_dog_NPC)
    }
    if (level != 0) {
        sprites.destroy(cat_NPC)
    }
    if (level != 0) {
        sprites.destroy(wizardess_NPC)
    }
    if (level != 0) {
        sprites.destroy(chill_guy_NPC)
    }
})
