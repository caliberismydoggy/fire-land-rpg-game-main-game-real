@namespace
class SpriteKind:
    NPC = SpriteKind.create()
    monster1 = SpriteKind.create()
    monster2 = SpriteKind.create()
    monster4 = SpriteKind.create()
    monster3 = SpriteKind.create()
    monster5 = SpriteKind.create()
    monster6 = SpriteKind.create()
    monster7 = SpriteKind.create()
    monster8 = SpriteKind.create()
    monster9 = SpriteKind.create()
    monster10 = SpriteKind.create()
    monster11 = SpriteKind.create()
    monster12 = SpriteKind.create()

def on_overlap_tile(sprite1211, location1111):
    global level
    if level == 12:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(24, 24))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile91, on_overlap_tile)

def on_overlap_tile2(sprite12112, location11112):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            Cave1
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 2
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile83, on_overlap_tile2)

def on_overlap_tile3(sprite12113, location11113):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            23456567
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 10
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile76, on_overlap_tile3)

def on_on_overlap(sprite, otherSprite):
    if otherSprite == treehouse_guy:
        
        def on_throttle():
            treehouse_guy.say_text("\"You have found the secret tree house!\"", 1000, False)
        timer.throttle("action", 1000, on_throttle)
        
    if otherSprite == mySprite3:
        
        def on_throttle2():
            mySprite3.say_text("\"Hey there Carl\"", 1000, False)
        timer.throttle("action", 1000, on_throttle2)
        
    if otherSprite == fish_NPC:
        
        def on_throttle3():
            fish_NPC.say_text("\"Zoom!\"", 1000, False)
        timer.throttle("action", 1000, on_throttle3)
        
    if otherSprite == dog_NPC:
        
        def on_throttle4():
            dog_NPC.say_text("\"woof\"", 1000, False)
        timer.throttle("action", 1000, on_throttle4)
        
    if otherSprite == princess_NPC:
        
        def on_throttle5():
            princess_NPC.say_text("\"goodmorning carl\"", 1000, False)
        timer.throttle("action", 1000, on_throttle5)
        
    if otherSprite == purple_girl_NPC:
        
        def on_throttle6():
            purple_girl_NPC.say_text("\"hope you live!\"", 1000, False)
        timer.throttle("action", 1000, on_throttle6)
        
    if otherSprite == blue_dog_NPC:
        
        def on_throttle7():
            blue_dog_NPC.say_text("\"Bark\"", 1000, False)
        timer.throttle("action", 1000, on_throttle7)
        
    if otherSprite == cat_NPC:
        
        def on_throttle8():
            cat_NPC.say_text("\"meow\"", 1000, False)
        timer.throttle("action", 1000, on_throttle8)
        
    if otherSprite == wizardess_NPC:
        
        def on_throttle9():
            wizardess_NPC.say_text("\"Have a good day\"", 1000, False)
        timer.throttle("action", 1000, on_throttle9)
        
    if otherSprite == chill_guy_NPC:
        
        def on_throttle10():
            chill_guy_NPC.say_text("\"Why hello there!\"", 1000, False)
        timer.throttle("action", 1000, on_throttle10)
        
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_overlap_tile4(sprite12114, location11114):
    global level, monster52
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            White Van van
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 4
        monster52 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster5)
        tiles.place_on_random_tile(monster52, sprites.dungeon.floor_light0)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile87, on_overlap_tile4)

def on_overlap_tile5(sprite12115, location11115):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            White Van van van on van pls van on fortnite
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 16
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile25, on_overlap_tile5)

def on_overlap_tile6(sprite12116, location11116):
    global level, monster122
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            bouncy house but normal
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 17
        monster122 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster12)
        tiles.place_on_random_tile(monster32, myTiles.tile88)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile81, on_overlap_tile6)

def on_overlap_tile7(sprite12117, location11117):
    global level
    if level == 2:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(36, 46))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile14, on_overlap_tile7)

def on_overlap_tile8(sprite12118, location11118):
    global level
    if level == 10:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(76, 45))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile47, on_overlap_tile8)

def on_overlap_tile9(sprite12119, location11119):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            Cave0
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 6
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile84, on_overlap_tile9)

def on_overlap_tile10(sprite121110, location111110):
    global level, monster22
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            house on house near house
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 14
        monster22 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster2)
        tiles.place_on_random_tile(monster22, myTiles.tile88)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile75, on_overlap_tile10)

def on_overlap_tile11(sprite121111, location111111):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            House7
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 3
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile71, on_overlap_tile11)

def on_overlap_tile12(sprite121112, location111112):
    global level
    if level == 4:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(45, 49))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile29, on_overlap_tile12)

def on_overlap_tile13(sprite121113, location111113):
    global level
    if level == 5:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(50, 38))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile99, on_overlap_tile13)

def on_overlap_tile14(sprite121114, location111114):
    global level, monster_1
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            cavey cave near cave
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 12
        monster_1 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster1)
        tiles.place_on_random_tile(monster_1, myTiles.tile33)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile85, on_overlap_tile14)

def on_overlap_tile15(sprite121115, location111115):
    global level
    if level == 16:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(8, 29))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile95, on_overlap_tile15)

def on_overlap_tile16(sprite121116, location111116):
    global level, treehouse_guy
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            Tree House
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(8, 7))
        level = 5
        treehouse_guy = sprites.create(img("""
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
                """),
            SpriteKind.NPC)
        tiles.place_on_tile(treehouse_guy, tiles.get_tile_location(4, 9))
scene.on_overlap_tile(SpriteKind.player, myTiles.tile28, on_overlap_tile16)

def on_overlap_tile17(sprite121117, location111117):
    global level
    if level == 14:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(34, 56))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile93, on_overlap_tile17)

def on_overlap_tile18(sprite121118, location111118):
    global level
    if level == 13:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(51, 13))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile92, on_overlap_tile18)

def on_overlap_tile19(sprite121119, location111119):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            Building office
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 11
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile26, on_overlap_tile19)

def on_overlap_tile20(sprite121120, location111120):
    global level
    if level == 15:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(51, 22))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile94, on_overlap_tile20)

def on_overlap_tile21(sprite121121, location111121):
    global level
    if level == 6:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(55, 58))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile41, on_overlap_tile21)

def on_overlap_tile22(sprite121122, location111122):
    global level
    if level == 3:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(67, 23))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile22, on_overlap_tile22)

def on_overlap_tile23(sprite121123, location111123):
    global level
    if level == 17:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(28, 32))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile97, on_overlap_tile23)

def on_overlap_tile24(sprite121124, location111124):
    global level
    if level == 11:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(14, 14))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile54, on_overlap_tile24)

def on_overlap_tile25(sprite121125, location111125):
    global level
    if level == 5:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(50, 38))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile37, on_overlap_tile25)

def on_overlap_tile26(sprite121126, location111126):
    global level, monster32
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            Cabin
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 15
        monster32 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster3)
        tiles.place_on_random_tile(monster32, myTiles.tile56)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile27, on_overlap_tile26)

def setOverworldSprites():
    global mySprite3, fish_NPC, dog_NPC, princess_NPC, purple_girl_NPC, blue_dog_NPC, cat_NPC, wizardess_NPC, chill_guy_NPC
    mySprite3 = sprites.create(assets.image("""
        karl
        """), SpriteKind.NPC)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(37, 30))
    animation.run_movement_animation(mySprite3,
        animation.animation_presets(animation.bobbing),
        2000,
        True)
    fish_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(fish_NPC, tiles.get_tile_location(70, 15))
    animation.run_movement_animation(fish_NPC,
        animation.animation_presets(animation.wave_left),
        2000,
        True)
    dog_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(dog_NPC, tiles.get_tile_location(30, 50))
    animation.run_movement_animation(dog_NPC,
        animation.animation_presets(animation.shake),
        2000,
        True)
    princess_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(princess_NPC, tiles.get_tile_location(45, 15))
    animation.run_movement_animation(princess_NPC,
        animation.animation_presets(animation.wave_left),
        2000,
        True)
    purple_girl_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(purple_girl_NPC, tiles.get_tile_location(65, 50))
    animation.run_movement_animation(purple_girl_NPC,
        animation.animation_presets(animation.ease_up),
        2000,
        True)
    blue_dog_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    scaling.scale_to_percent(blue_dog_NPC,
        50,
        ScaleDirection.UNIFORMLY,
        ScaleAnchor.MIDDLE)
    tiles.place_on_tile(blue_dog_NPC, tiles.get_tile_location(15, 15))
    animation.run_movement_animation(blue_dog_NPC,
        animation.animation_presets(animation.bobbing),
        2000,
        True)
    cat_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(cat_NPC, tiles.get_tile_location(40, 55))
    animation.run_movement_animation(cat_NPC,
        animation.animation_presets(animation.parachute_left),
        2000,
        True)
    wizardess_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(wizardess_NPC, tiles.get_tile_location(23, 30))
    animation.run_movement_animation(wizardess_NPC,
        animation.animation_presets(animation.bobbing),
        2000,
        True)
    chill_guy_NPC = sprites.create(img("""
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
            """),
        SpriteKind.NPC)
    tiles.place_on_tile(chill_guy_NPC, tiles.get_tile_location(70, 30))
    animation.run_movement_animation(chill_guy_NPC,
        animation.animation_presets(animation.shake),
        2000,
        True)

def on_overlap_tile27(sprite121127, location111127):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            og og og cave
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 13
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile86, on_overlap_tile27)

def on_overlap_tile28(sprite121128, location111128):
    global level, monster42
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            White House pls work
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 5
        monster42 = sprites.create(assets.image("""
                flame sprite
                """),
            SpriteKind.monster4)
        tiles.place_on_random_tile(monster42, myTiles.tile88)
scene.on_overlap_tile(SpriteKind.player, myTiles.tile23, on_overlap_tile28)

def on_overlap_tile29(sprite121129, location111129):
    global level
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            bruh
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(12, 41))
        level = 0
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile96, on_overlap_tile29)

def on_overlap_tile30(sprite121130, location111130):
    global level
    if level == 0:
        tiles.set_current_tilemap(tilemap("""
            House0
            """))
        tiles.place_on_tile(mySprite, tiles.get_tile_location(7, 13))
        level = 1
        setOverworldSprites()
scene.on_overlap_tile(SpriteKind.player, myTiles.tile72, on_overlap_tile30)

monster42: Sprite = None
monster_1: Sprite = None
monster22: Sprite = None
monster32: Sprite = None
monster122: Sprite = None
monster52: Sprite = None
chill_guy_NPC: Sprite = None
wizardess_NPC: Sprite = None
cat_NPC: Sprite = None
blue_dog_NPC: Sprite = None
purple_girl_NPC: Sprite = None
princess_NPC: Sprite = None
dog_NPC: Sprite = None
fish_NPC: Sprite = None
mySprite3: Sprite = None
treehouse_guy: Sprite = None
mySprite: Sprite = None
level = 0
level = 0
mySprite = sprites.create(assets.image("""
        Carl The Flame
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
scene.camera_follow_sprite(mySprite)
tiles.set_current_tilemap(tilemap("""
    bruh
    """))
mySprite.x += 600
mySprite.y += 490
setOverworldSprites()
monster62 = sprites.create(assets.image("""
        flame sprite
        """),
    SpriteKind.monster6)
tiles.place_on_random_tile(monster62, myTiles.tile1)
monster82 = sprites.create(assets.image("""
        flame sprite
        """),
    SpriteKind.monster8)
tiles.place_on_random_tile(monster82, myTiles.tile1)
monster92 = sprites.create(assets.image("""
        flame sprite
        """),
    SpriteKind.monster9)
tiles.place_on_random_tile(monster92, myTiles.tile1)
monster102 = sprites.create(assets.image("""
        flame sprite
        """),
    SpriteKind.monster10)
tiles.place_on_random_tile(monster102, myTiles.tile1)
monster112 = sprites.create(assets.image("""
        flame sprite
        """),
    SpriteKind.monster11)
tiles.place_on_random_tile(monster112, myTiles.tile1)

def on_on_update():
    if level != 0:
        sprites.destroy(mySprite3)
        sprites.destroy(fish_NPC)
        sprites.destroy(dog_NPC)
        sprites.destroy(princess_NPC)
        sprites.destroy(purple_girl_NPC)
        sprites.destroy(blue_dog_NPC)
        sprites.destroy(wizardess_NPC)
        sprites.destroy(cat_NPC)
        sprites.destroy(chill_guy_NPC)
        sprites.destroy(monster_1)
    if level != 5:
        sprites.destroy(treehouse_guy)
game.on_update(on_on_update)

def on_forever():
    mySprite.say_text(level)
forever(on_forever)
