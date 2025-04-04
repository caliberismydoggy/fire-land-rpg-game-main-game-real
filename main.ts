namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const monster1 = SpriteKind.create()
    export const monster2 = SpriteKind.create()
    export const monster4 = SpriteKind.create()
    export const monster3 = SpriteKind.create()
    export const monster5 = SpriteKind.create()
    export const monster6 = SpriteKind.create()
    export const monster7 = SpriteKind.create()
    export const monster8 = SpriteKind.create()
    export const monster9 = SpriteKind.create()
    export const monster10 = SpriteKind.create()
    export const monster11 = SpriteKind.create()
    export const monster12 = SpriteKind.create()
    export const monster13 = SpriteKind.create()
    export const monster14 = SpriteKind.create()
    export const monster14c = SpriteKind.create()
    export const monster15 = SpriteKind.create()
    export const monster16 = SpriteKind.create()
    export const button = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster8, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`building office`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Building office`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 11
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster14, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`House7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 3
        setOverworldSprites()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster11, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster8, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave0`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Cave1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 2
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cabin`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Cabin`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 15
        monster3 = sprites.create(assets.image`flame sprite`, SpriteKind.monster3)
        tiles.placeOnRandomTile(monster3, assets.tile`brick floor`)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster3)
    }
    if (spriteutils.distanceBetween(mySprite, monster3) < 100) {
        monster3.follow(mySprite, -10)
    } else {
        monster3.follow(null)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house 4`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`White House pls work`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 5
        monster4 = sprites.create(assets.image`flame sprite`, SpriteKind.monster4)
        tiles.placeOnRandomTile(monster4, assets.tile`myTile60`)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster4)
    }
    if (spriteutils.distanceBetween(mySprite, monster4) < 100) {
        monster4.follow(mySprite, -10)
    } else {
        monster4.follow(null)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Van`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`White Van van van on van pls van on fortnite`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 16
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`og og og cave`, function (sprite1211, location1111) {
    if (level == 13) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(51, 13))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster3, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster10, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house13`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`house on house near house`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 14
        monster2 = sprites.create(assets.image`flame sprite`, SpriteKind.monster2)
        tiles.placeOnRandomTile(monster2, assets.tile`myTile60`)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster2)
    }
    if (spriteutils.distanceBetween(mySprite, monster2) < 100) {
        monster2.follow(mySprite, -10)
    } else {
        monster2.follow(null)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house5`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`23456567`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 10
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster16, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster2, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`reddddddddddddddddd`, function (sprite1211, location1111) {
    if (level == 10) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(76, 45))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`use me pls`, function (sprite1211, location1111) {
    if (level == 11) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 14))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`big big red big big`, function (sprite1211, location1111) {
    if (level == 12) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(24, 24))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster2, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster9, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave4`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`og og og cave`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 13
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`blue`, function (sprite1211, location1111) {
    if (level == 14) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(34, 56))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster9, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster4, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster12, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(statusbar.spriteAttachedTo())
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave1`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Cave0`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 6
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster1, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster6, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster1, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster7, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite1211, location1111) {
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 46))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Cave3`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`cavey cave near cave`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 12
        monster_1 = sprites.create(assets.image`flame sprite`, SpriteKind.monster1)
        tiles.placeOnTile(monster_1, tiles.getTileLocation(8, 11))
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster_1)
    }
    if (spriteutils.distanceBetween(mySprite, monster_1) < 100) {
        monster_1.follow(mySprite, -10)
    } else {
        monster_1.follow(null)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`RED with more red`, function (sprite1211, location1111) {
    if (level == 6) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(55, 58))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cabby in cabbbbbbin`, function (sprite1211, location1111) {
    if (level == 15) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(51, 22))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster4, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`White van van color red for warp`, function (sprite1211, location1111) {
    if (level == 4) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(45, 49))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house1`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`House0`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 1
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster6, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster5, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`huggggg van 1`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`White Van van`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 4
        monster5 = sprites.create(assets.image`flame sprite`, SpriteKind.monster5)
        tiles.placeOnRandomTile(monster5, sprites.dungeon.floorLight0)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster5)
    }
    if (spriteutils.distanceBetween(mySprite, monster5) < 100) {
        monster5.follow(mySprite, -10)
    } else {
        monster5.follow(null)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster10, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`my tile 34567`, function (sprite1211, location1111) {
    if (level == 5) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 38))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`reddddddddddddddddddd`, function (sprite1211, location1111) {
    if (level == 17) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(28, 32))
        level = 0
        setOverworldSprites()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`van 567876543`, function (sprite1211, location1111) {
    if (level == 16) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 29))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster7, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster12, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button, function (sprite, otherSprite) {
    if (otherSprite == treehouse_button) {
        treehouse_button.sayText("\"You have found the secret button for the tree house!\"", 1000, false)
        sprites.destroy(treehouse_button)
        tiles.setTileAt(tiles.getTileLocation(21, 49), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(21, 50), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(22, 50), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(23, 50), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(23, 49), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(21, 48), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(23, 48), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(21, 49), false)
        tiles.setWallAt(tiles.getTileLocation(21, 50), false)
        tiles.setWallAt(tiles.getTileLocation(22, 50), false)
        tiles.setWallAt(tiles.getTileLocation(23, 50), false)
        tiles.setWallAt(tiles.getTileLocation(23, 49), false)
        tiles.setWallAt(tiles.getTileLocation(21, 48), false)
        tiles.setWallAt(tiles.getTileLocation(23, 48), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`White House pls work`, function (sprite1211, location1111) {
    if (level == 5) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 38))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster15, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster14, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster5, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`RED power`, function (sprite1211, location1111) {
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(67, 23))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster3, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`Tree House`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 7))
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
        tiles.placeOnTile(treehouse_guy, tiles.getTileLocation(4, 9))
        treehouse_button = sprites.create(assets.image`button`, SpriteKind.button)
        tiles.placeOnTile(treehouse_button, tiles.getTileLocation(50, 52))
        mySprite.z = 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster11, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster16, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -15
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`red lol red`, function (sprite1211, location1111) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`bruh`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 41))
        level = 0
        setOverworldSprites()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.monster15, function (sprite, otherSprite) {
    life += 1
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`house10`, function (sprite1211, location1111) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`bouncy house but normal`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 13))
        level = 17
        monster12 = sprites.create(assets.image`flame sprite`, SpriteKind.monster12)
        tiles.placeOnRandomTile(monster12, assets.tile`myTile60`)
        statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
        statusbar.setColor(5, 12)
        statusbar.value = 100
        statusbar.attachToSprite(monster12)
    }
    if (spriteutils.distanceBetween(mySprite, monster12) < 100) {
        monster12.follow(mySprite, -10)
    } else {
        monster12.follow(null)
    }
})
let monster12: Sprite = null
let monster5: Sprite = null
let monster_1: Sprite = null
let monster2: Sprite = null
let monster4: Sprite = null
let monster3: Sprite = null
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
let score = 0
let life = 0
let treehouse_button: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let level = 0
level = 0
mySprite = sprites.create(assets.image`Carl The Flame`, SpriteKind.Player)
controller.moveSprite(mySprite, 110, 110)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`bruh`)
mySprite.x += 600
mySprite.y += 490
setOverworldSprites()
let monster6 = sprites.create(assets.image`flame sprite`, SpriteKind.monster6)
tiles.placeOnRandomTile(monster6, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster6)
let monster8 = sprites.create(assets.image`flame sprite`, SpriteKind.monster8)
tiles.placeOnRandomTile(monster8, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster8)
let monster9 = sprites.create(assets.image`flame sprite`, SpriteKind.monster9)
tiles.placeOnRandomTile(monster9, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster9)
let monster10 = sprites.create(assets.image`flame sprite`, SpriteKind.monster10)
tiles.placeOnRandomTile(monster10, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster10)
let monster11 = sprites.create(assets.image`flame sprite`, SpriteKind.monster11)
tiles.placeOnRandomTile(monster11, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster11)
let monster14 = sprites.create(assets.image`flame sprite`, SpriteKind.monster14)
tiles.placeOnRandomTile(monster14, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster14)
let monster15 = sprites.create(assets.image`flame sprite`, SpriteKind.monster15)
tiles.placeOnRandomTile(monster15, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster15)
let monster16 = sprites.create(assets.image`flame sprite`, SpriteKind.monster16)
tiles.placeOnRandomTile(monster16, assets.tile`myTileloluse`)
statusbar = statusbars.create(15, 2, StatusBarKind.EnemyHealth)
statusbar.setColor(5, 12)
statusbar.value = 100
statusbar.attachToSprite(monster16)
let Key_0 = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 e e e 7 7 7 7 7 7 7 7 
    7 7 7 7 7 e 7 e e e e e e 7 7 7 
    7 7 7 7 7 e 7 e e 7 7 e 7 7 7 7 
    7 7 7 7 7 e e e 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
tiles.placeOnTile(Key_0, tiles.getTileLocation(0, 0))
let number_of_keys = 0
tiles.placeOnTile(Key_0, tiles.getTileLocation(0, 0))
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
treehouse_button = sprites.create(assets.image`button`, SpriteKind.button)
tiles.placeOnTile(treehouse_button, tiles.getTileLocation(50, 52))
mySprite.z = 1
game.onUpdate(function () {
    if (level != 0) {
        sprites.destroy(mySprite3)
        sprites.destroy(fish_NPC)
        sprites.destroy(dog_NPC)
        sprites.destroy(princess_NPC)
        sprites.destroy(purple_girl_NPC)
        sprites.destroy(blue_dog_NPC)
        sprites.destroy(wizardess_NPC)
        sprites.destroy(cat_NPC)
        sprites.destroy(chill_guy_NPC)
    }
    if (level != 5) {
        sprites.destroy(treehouse_guy)
    }
    if (level != 12) {
        sprites.destroy(monster_1)
    }
    if (level != 0) {
        sprites.destroy(monster10)
        if (level != 0) {
            sprites.destroy(monster11)
        }
        if (level != 17) {
            sprites.destroy(monster12)
        }
        if (level != 14) {
            sprites.destroy(monster2)
        }
        if (level != 15) {
            sprites.destroy(monster3)
        }
        if (level != 5) {
            sprites.destroy(monster4)
        }
        if (level != 4) {
            sprites.destroy(monster5)
        }
        if (level != 0) {
            sprites.destroy(monster6)
        }
        if (level != 0) {
            sprites.destroy(monster8)
        }
        if (level != 0) {
            sprites.destroy(monster9)
        }
        if (level != 0) {
            sprites.destroy(monster14)
        }
        if (level != 0) {
            sprites.destroy(monster15)
        }
        if (level != 0) {
            sprites.destroy(monster16)
        }
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, monster10) < 100) {
        monster10.follow(mySprite, -10)
    } else {
        monster10.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster9) < 100) {
        monster9.follow(mySprite, -5)
    } else {
        monster9.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster6) < 100) {
        monster6.follow(mySprite, -5)
    } else {
        monster6.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster8) < 100) {
        monster8.follow(mySprite, -10)
    } else {
        monster8.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster11) < 100) {
        monster11.follow(mySprite, -5)
    } else {
        monster11.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster14) < 100) {
        monster14.follow(mySprite, -10)
    } else {
        monster14.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster15) < 100) {
        monster15.follow(mySprite, -10)
    } else {
        monster15.follow(null)
    }
    if (spriteutils.distanceBetween(mySprite, monster16) < 100) {
        monster16.follow(mySprite, -10)
    } else {
        monster16.follow(null)
    }
})
