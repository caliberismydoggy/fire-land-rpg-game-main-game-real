namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (treehouse_guy == otherSprite) {
        timer.throttle("action", 1000, function () {
            mySprite.sayText("\"You have found the secret tree house!\"", 1000, false)
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
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`NPC spawn`)
        mySprite.setPosition(128, 98)
        level = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`warp`, function (sprite, location) {
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level11 main map`)
        mySprite.x += 600
        mySprite.y += 490
        level = 1
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
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`Tree House`)
        level = 2
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
let treehouse_guy: Sprite = null
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`carl`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level11 main map`)
mySprite.x += 600
mySprite.y += 490
level = 1
let mySprite3 = sprites.create(assets.image`karl`, SpriteKind.NPC)
mySprite3.setPosition(37 * 16, 30 * 16)
game.onUpdate(function () {
    if (level != 1) {
        sprites.destroy(mySprite3)
    }
    if (level == 1) {
        sprites.destroy(treehouse_guy)
    }
})
