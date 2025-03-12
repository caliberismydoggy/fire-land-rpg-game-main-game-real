namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
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
    if (otherSprite == Mysprite4) {
        timer.throttle("action", 1000, function () {
            Mysprite4.sayText("\"Zoom!\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite5) {
        timer.throttle("action", 1000, function () {
            Mysprite5.sayText("\"woof\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite6) {
        timer.throttle("action", 1000, function () {
            Mysprite6.sayText("\"goodmorning carl\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite7) {
        timer.throttle("action", 1000, function () {
            Mysprite7.sayText("\"hope you live!\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite8) {
        timer.throttle("action", 1000, function () {
            Mysprite8.sayText("\"Bark\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite9) {
        timer.throttle("action", 1000, function () {
            Mysprite9.sayText("\"meow\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite10) {
        timer.throttle("action", 1000, function () {
            Mysprite10.sayText("\"Have a good day\"", 1000, false)
        })
    }
    if (otherSprite == Mysprite11) {
        timer.throttle("action", 1000, function () {
            Mysprite11.sayText("\"Why hello there!\"", 1000, false)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house5`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house10`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house9`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house2`, function (sprite, location) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`warp`, function (sprite, location) {
    if (level == 5) {
        tiles.setCurrentTilemap(tilemap`level11 main map`)
        mySprite.x += 600
        mySprite.y += 490
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house7`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cabin`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cabin`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house6`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house13`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave1`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house1`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house3`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave3`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Van`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`White Van`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
function setOverworldSprites2 () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`building office`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Building office`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house11`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 4`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house8`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
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
    Mysprite4 = sprites.create(img`
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
    tiles.placeOnRandomTile(Mysprite4, sprites.castle.tileGrass2)
    animation.runMovementAnimation(
    Mysprite4,
    animation.animationPresets(animation.waveLeft),
    2000,
    true
    )
    Mysprite5 = sprites.create(img`
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
    tiles.placeOnTile(Mysprite5, tiles.getTileLocation(30, 50))
    animation.runMovementAnimation(
    Mysprite5,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
    Mysprite6 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite6,
    animation.animationPresets(animation.waveLeft),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite6, tiles.getTileLocation(45, 15))
    Mysprite7 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite7,
    animation.animationPresets(animation.easeUp),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite7, tiles.getTileLocation(65, 50))
    Mysprite8 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite8,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite8, tiles.getTileLocation(15, 15))
    Mysprite9 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite9,
    animation.animationPresets(animation.parachuteLeft),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite9, tiles.getTileLocation(40, 55))
    Mysprite10 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite10,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite10, tiles.getTileLocation(23, 30))
    Mysprite11 = sprites.create(img`
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
    animation.runMovementAnimation(
    Mysprite11,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
    tiles.placeOnTile(Mysprite11, tiles.getTileLocation(70, 30))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave0`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave4`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Cave`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`huggggg van 1`, function (sprite, location) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`White Van`)
        mySprite.setPosition(125, 79)
        level = 2
    }
})
let Mysprite11: Sprite = null
let Mysprite10: Sprite = null
let Mysprite9: Sprite = null
let Mysprite8: Sprite = null
let Mysprite7: Sprite = null
let Mysprite6: Sprite = null
let Mysprite5: Sprite = null
let Mysprite4: Sprite = null
let mySprite3: Sprite = null
let treehouse_guy: Sprite = null
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`carl`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
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
        sprites.destroy(Mysprite4)
    }
    if (level != 0) {
        sprites.destroy(Mysprite5)
    }
    if (level != 0) {
        sprites.destroy(Mysprite6)
    }
    if (level != 0) {
        sprites.destroy(Mysprite7)
    }
    if (level != 0) {
        sprites.destroy(Mysprite8)
    }
    if (level != 0) {
        sprites.destroy(Mysprite9)
    }
    if (level != 0) {
        sprites.destroy(Mysprite10)
    }
    if (level != 0) {
        sprites.destroy(Mysprite11)
    }
})
