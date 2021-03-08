def on_overlap_tile(sprite, location):
    global Music
    music.stop_all_sounds()
    Music += -1
    tiles.set_tilemap(tilemap("""
        level_0
    """))
    tiles.place_on_tile(hero, tiles.get_tile_location(1, 23))
    scene.camera_follow_sprite(hero)
    pause(100)
    game.show_long_text("Those stupid viligers would not listen!",
        DialogLayout.BOTTOM)
    game.show_long_text("I told them that if they did not obey, I would have to burn the village.",
        DialogLayout.BOTTOM)
    game.show_long_text("Ah! A surviver!", DialogLayout.BOTTOM)
    tiles.place_on_tile(Gargus, tiles.get_tile_location(12, 23))
scene.on_overlap_tile(SpriteKind.player, myTiles.tile2, on_overlap_tile)

def on_overlap_tile2(sprite, location):
    global Music
    music.stop_all_sounds()
    Music += 1
    tiles.set_tilemap(tilemap("""
        level_1
    """))
    tiles.place_on_tile(hero, tiles.get_tile_location(14, 8))
scene.on_overlap_tile(SpriteKind.player, myTiles.tile3, on_overlap_tile2)

def on_up_pressed():
    animation.run_image_animation(hero,
        [img("""
                . . . . . . f f f f . . . . . . 
                        . . . . f f e e e e f f . . . . 
                        . . . f e e e f f e e e f . . . 
                        . . f f f f f 2 2 f f f f f . . 
                        . . f f e 2 e 2 2 e 2 e f f . . 
                        . . f e 2 f 2 f f 2 f 2 e f . . 
                        . . f f f 2 2 e e 2 2 f f f . . 
                        . f f e f 2 f e e f 2 f e f f . 
                        . f e e f f e e e e f e e e f . 
                        . . f e e e e e e e e e e f . . 
                        . . . f e e e e e e e e f . . . 
                        . . e 4 f f f f f f f f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f e e e e f f . . . . 
                        . . . f e e e f f e e e f . . . 
                        . . . f f f f 2 2 f f f f . . . 
                        . . f f e 2 e 2 2 e 2 e f f . . 
                        . . f e 2 f 2 f f f 2 f e f . . 
                        . . f f f 2 f e e 2 2 f f f . . 
                        . . f e 2 f f e e 2 f e e f . . 
                        . f f e f f e e e f e e e f f . 
                        . f f e e e e e e e e e e f f . 
                        . . . f e e e e e e e e f . . . 
                        . . . e f f f f f f f f 4 e . . 
                        . . . 4 f 2 2 2 2 2 e d d 4 . . 
                        . . . e f f f f f f e e 4 . . . 
                        . . . . f f f . . . . . . . . .
            """),
            img("""
                . . . . . . f f f f . . . . . . 
                        . . . . f f e e e e f f . . . . 
                        . . . f e e e f f e e e f . . . 
                        . . f f f f f 2 2 f f f f f . . 
                        . . f f e 2 e 2 2 e 2 e f f . . 
                        . . f e 2 f 2 f f 2 f 2 e f . . 
                        . . f f f 2 2 e e 2 2 f f f . . 
                        . f f e f 2 f e e f 2 f e f f . 
                        . f e e f f e e e e f e e e f . 
                        . . f e e e e e e e e e e f . . 
                        . . . f e e e e e e e e f . . . 
                        . . e 4 f f f f f f f f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f e e e e f f . . . . 
                        . . . f e e e f f e e e f . . . 
                        . . . f f f f 2 2 f f f f . . . 
                        . . f f e 2 e 2 2 e 2 e f f . . 
                        . . f e f 2 f f f 2 f 2 e f . . 
                        . . f f f 2 2 e e f 2 f f f . . 
                        . . f e e f 2 e e f f 2 e f . . 
                        . f f e e e f e e e f f e f f . 
                        . f f e e e e e e e e e e f f . 
                        . . . f e e e e e e e e f . . . 
                        . . e 4 f f f f f f f f e . . . 
                        . . 4 d d e 2 2 2 2 2 f 4 . . . 
                        . . . 4 e e f f f f f f e . . . 
                        . . . . . . . . . f f f . . . .
            """)],
        200,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global projectile
    if slash == 0:
        pause(100)
    if slash > 0:
        animation.run_image_animation(hero,
            [img("""
                    ........................
                                ....ffffff..............
                                ..ffeeeef2f.............
                                .ffeeeef222f............
                                .feeeffeeeef...cc.......
                                .ffffee2222ef.cdc.......
                                .fe222ffffe2fcddc.......
                                fffffffeeeffcddc........
                                ffe44ebf44ecddc.........
                                fee4d41fddecdc..........
                                .feee4dddedccc..........
                                ..ffee44e4dde...........
                                ...f222244ee............
                                ...f2222e2f.............
                                ...f444455f.............
                                ....ffffff..............
                                .....fff................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                """),
                img("""
                    ........................
                                .......fff..............
                                ....fffff2f.............
                                ..ffeeeee22ff...........
                                .ffeeeeee222ff..........
                                .feeeefffeeeef..........
                                .fffffeee2222ef.........
                                fffe222fffffe2f.........
                                fffffffffeeefff.....cc..
                                fefe44ebbf44eef...ccdc..
                                .fee4d4bbfddef..ccddcc..
                                ..feee4dddddfeecdddc....
                                ...f2222222eeddcdcc.....
                                ...f444445e44ddccc......
                                ...ffffffffeeee.........
                                ...fff...ff.............
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                """),
                img("""
                    .......ff...............
                                ....ffff2ff.............
                                ..ffeeeef2ff............
                                .ffeeeeef22ff...........
                                .feeeeffeeeef...........
                                .fffffee2222ef..........
                                fffe222ffffe2f..........
                                ffffffffeeefff..........
                                fefe44ebf44eef..........
                                .fee4d4bfddef...........
                                ..feee4dddee.c..........
                                ...f2222eeddeccccccc....
                                ...f444e44ddecddddd.....
                                ...fffffeeee.ccccc......
                                ..ffffffff...c..........
                                ..fff..ff...............
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                """),
                img("""
                    ....ffffff..............
                                ..ffeeeef2f.............
                                .ffeeeef222f............
                                .feeeffeeeef............
                                .ffffee2222ef...........
                                .fe222ffffe2f...........
                                fffffffeeefff...........
                                ffe44ebf44eef...........
                                fee4d41fddef............
                                .feee4ddddf.............
                                ..fdde444ef.............
                                ..fdde22ccc.............
                                ...eef22cdc.............
                                ...f4444cddc............
                                ....fffffcddc...........
                                .....fff..cddc..........
                                ...........cdc..........
                                ............cc..........
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                                ........................
                """)],
            100,
            False)
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . 8 . . . . . . . . . . . 
                            . . e e 8 1 1 1 1 1 1 1 1 1 . . 
                            . . e e 8 d d d d d d d . . . . 
                            . . . . 8 . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            hero,
            30,
            0)
        pause(100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_down_released():
    animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, hero)
    hero.set_image(img("""
        . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . .
    """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    animation.run_image_animation(hero,
        [img("""
                . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d e e e e e f . . . 
                        . . . f e 4 e d d 4 f . . . . . 
                        . . . f 2 2 e d d e f . . . . . 
                        . . f f 5 5 f e e f f f . . . . 
                        . . f f f f f f f f f f . . . . 
                        . . . f f f . . . f f . . . . .
            """)],
        200,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, hero)
    hero.set_image(img("""
        . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . .
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, hero)
    hero.set_image(img("""
        . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . .
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile3(sprite, location):
    global Music
    music.stop_all_sounds()
    Music += 1
    tiles.set_tilemap(tilemap("""
        level_2
    """))
    tiles.place_on_tile(hero, tiles.get_tile_location(1, 8))
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles10,
    on_overlap_tile3)

def on_right_pressed():
    animation.run_image_animation(hero,
        [img("""
                . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . f f e e 4 4 4 e f . . . 
                        . . . . . 4 d d e 2 2 2 f . . . 
                        . . . . . e d d e 2 2 2 f . . . 
                        . . . . . f e e f 4 5 5 f . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . . . . f f f . . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f f f . . . . 
                        . . . . f f e e e e f 2 f . . . 
                        . . . f f e e e e f 2 2 2 f . . 
                        . . . f e e e f f e e e e f . . 
                        . . . f f f f e e 2 2 2 2 e f . 
                        . . . f e 2 2 2 f f f f e 2 f . 
                        . . f f f f f f f e e e f f f . 
                        . . f f e 4 4 e b f 4 4 e e f . 
                        . . f e e 4 d 4 1 f d d e f . . 
                        . . . f e e e 4 d d d d f . . . 
                        . . . . 4 d d e 4 4 4 e f . . . 
                        . . . . e d d e 2 2 2 2 f . . . 
                        . . . . f e e f 4 4 5 5 f f . . 
                        . . . . f f f f f f f f f f . . 
                        . . . . . f f . . . f f f . . .
            """)],
        200,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, hero)
    hero.set_image(img("""
        . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . .
    """))
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    animation.run_image_animation(hero,
        [img("""
                . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . f f e 2 f f f f f f 2 e f f . 
                        . f f f f f e e e e f f f f f . 
                        . . f e f b f 4 4 f b f e f . . 
                        . . f e 4 1 f d d f 1 4 e f . . 
                        . . . f e 4 d d d d 4 e f e . . 
                        . . f e f 2 2 2 2 e d d 4 e . . 
                        . . e 4 f 2 2 2 2 e d d e . . . 
                        . . . . f 4 4 5 5 f e e . . . . 
                        . . . . f f f f f f f . . . . . 
                        . . . . f f f . . . . . . . . .
            """),
            img("""
                . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . .
            """),
            img("""
                . . . . . . . . . . . . . . . . 
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f e e 2 2 2 2 2 2 e f f . . 
                        . f f e 2 f f f f f f 2 e f f . 
                        . f f f f f e e e e f f f f f . 
                        . . f e f b f 4 4 f b f e f . . 
                        . . f e 4 1 f d d f 1 4 e f . . 
                        . . e f e 4 d d d d 4 e f . . . 
                        . . e 4 d d e 2 2 2 2 f e f . . 
                        . . . e d d e 2 2 2 2 f 4 e . . 
                        . . . . e e f 5 5 4 4 f . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . . . . f f f . . . .
            """)],
        200,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_overlap_tile4(sprite, location):
    global Music
    music.stop_all_sounds()
    Music += -1
    tiles.set_tilemap(tilemap("""
        level
    """))
    tiles.place_on_tile(hero, tiles.get_tile_location(38, 11))
scene.on_overlap_tile(SpriteKind.player, myTiles.tile1, on_overlap_tile4)

gargus_fight = 0
Gargus: Sprite = None
hero: Sprite = None
slash = 0
projectile: Sprite = None
Music = 3
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
pause(200)
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
pause(200)
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
pause(200)
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffff
        ffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffff
        fffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffff
        ffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffff
        fffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffff
        fffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffff
        ffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffff
        fffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffff
        fffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff
        fffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffff
        fffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffff
        fffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffff
        fffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        fffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff
        fffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff
        fffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        ffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff
        fffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff
        ffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff
        ffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffff
        fffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        ffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        ffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff
        fffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        ffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        ffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff
        fffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888888888fffffff888888888888888888888888888888888888888888ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(1000)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888881111188888888888888888888888888888888888888888888888888888888888888888888111111118888888888888
        8888888888888888888888888888888888888888888888888888888888888888811111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888888111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888888888888888888888888888888888888888888888888888888881111111188888888888888888888888888888888888888888888888888888888888888888888111111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111111111188888888
        8888888888111111111111188888888888888888888888888888888888888811111111188888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888888111111111888888888888888888888888888888111118888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111888888888888888
        8888888881111111111111188888888888888888881111188888888888881111111111888888888888888888888888888888111111888888888888888888888888888888888811111188888888888888
        8888888811111118888888888888888888888888881111188888888888811111111118888888888888888888888888888888111111888888888888888888881111188888888811111188888888888888
        8888888811111188888888888888888888888888881111188888888888111111111118888888888888888888888888888888111111888888888888888888881111118888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888888111111111188888888888888888888888888888888811111188888888888888888881111111888888811111188888888888888
        8888888111111188888888888888888888888888881111188888888881111111111188888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888881111111111888888888888888888888888888888888811111188888888888888888881111111188888881111188888888888888
        8888888111111888888888888888888888888888881111188888888811111111111888888888888888888888888888888888811111118888888888888888888111111118888881111188888888888888
        8888888111118888888888888888888888888888881111118888888811111111111888888888888888888888888888888888881111118888888888888888888811111118888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888888111111111118888888888888888888888888888888888881111118888888888888888888881111111888881111118888888888888
        8888888111111888888888888888888888888888881111118888881111111111188888888888888888888888888888888888888111118888888888888888888888111111188881111118888888888888
        8888888111111888888888888888888888888888888111118888881111111888888888888888888888888888888888888888888111118888888888888888888888111111188888111118888888888888
        8888888811111888888888888888888888888888888111118888811111118888888888888888888888888888888888811111188111118888888888888888888888811111118888111118888888888888
        8888888811111188888888888888888888888888888111118888811111118888888888888888111118888888888888111111188111118888888888888888888888811111111888111118888888888888
        8888888811111118888888888888888888888888888111118888811111188888888888888888111118888888888888111111188111118888888888888888888888881111111888111118888888888888
        8888888811111111888888888888888888888888888111118888111111188888888888888888111118888888888888111111188111118888888888888888888888881111111188111111888888888888
        8888888811111111188888888888888888888888888111111888111111888888888888888888111118888888888888111111188111118888888888888888888888888111111188111111888888888888
        8888888881111111111888888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888111111111118888888888888888888888111111881111111888888888888888888111111888888888888111111188111118888888888888888888888888811111118111111888888888888
        8888888888811111111111118888888888888888888111111811111118888888888888888888111111888888888888111111188111118888888888888888888888888881111111811111888888888888
        8888888888881111111111118888888888888888888811111811111118888888888888888888111111888888888888111111888111118888888888888888888888888881111111811111888888888888
        8888888888888111111111111888888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888881111111111188888888888888888811111111111188888888888888888888811111188888888888111111888111118888888888888888888888888888111111111111188888888888
        8888888888888888811111111188888888888888888811111111111888888888888888888888811111188888888888111111888111118888888888111111181111188888811111111111188888888888
        8888888888888888888111111118888888888888888811111111111888888888888888888888811111118888888888111111888111118888888111111111181111118888811111111111188888888888
        8888888888888888888811111118888888888888888811111111118888888888888888888888881111118888888888111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111888888888888888811111111118888888888888888888888881111118888888881111111888111118888888111111111181111118888881111111111188888888888
        8888888888888888888881111111188888888888888811111111188888888888888888888888881111118888888881111111888111118888881111111111181111111888888111111111118888888888
        8888888888888888888888111111188888888888888881111111188888888888888888888888888111111888888881111118888111118888881111111188881111111888888111111111118888888888
        8888888888888888888888111111118888888888888881111181111188888888888888888888888111111888888811111118888111118888881111118888881111111188888811111111118888888888
        8888888888888888888888811111118888888888888881111181111188888888888888888888888111111888888111111118888111118888811111118888888111111118888811111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888111111888888111111118888111118888811111188888881111111118888881111111118888888888
        8888888888888888888888881111118888888888888881111181111118888888888888888888888811111188881111111118888111118888811111188888881111111111888881111111118888888888
        8888888888888888888888888111118888888888888881111111111111888888888888888888888811111188811111111118888111118888811111188888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111111111111888888888888888888888811111188811111111118888111118888811111888888881111111111188888111111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888811111111111111111118888111118888811111888888881111111111118888811111111888888888
        8888888888888888888888888111111888888888888881111118111111188888888888888888888881111111111111111118888111118888811111888888811111111111111888811111111888888888
        8888888888888888888888888111111888888888888888111118811111188888888888888888888881111111111111111118888111118888811111188881111111181111111888811111111888888888
        8888888888888888888888888811111188888888888888111118811111118888888888888888888881111111111111111118888111118888811111118811111111181111111188881111111888888888
        8888888888888888888888888811111188888888888888111118881111118888888888888888888888111111111118111118888111118888811111111111111111188111111111181111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888881111111188111118888111118888811111111111111111888811111111188111111188888888
        8888888888888888888888888811111188888888888888111118881111111888888888888888888888888811111188111111888111118888881111111111111118888811111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888111111111111888888881111111188111111188888888
        8888888888888888888888888881111188888888888888111118888111111188888888888888888888888888888888111111888111118888888811111111118888888888111111188811111188888888
        8888888888888888888888888881111188888888888888111118888811111118888888888888888888888888888888111111888111118888888888888888888888888888888888888811111118888888
        8888888888888888888888888811111188888888888888111118888811111118888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888888811111188888888888888111118888881111111888888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8888888888888888888888111111111188888888888888111118888888111111188888888888888888888888888888811111888111118888888888888888888888888888888888888881111118888888
        8881111111111111111111111111111888888888888888111118888888111111188888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111111888888888888888111118888888811111118888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111111118888888888888888111118888888881111111888888888888888888888888888811111888111111888888888888888888888888888888888888888111118888888
        8881111111111111111111111188888888888888888888111118888888881111111888888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888111118888888
        8888888888888888888888888888888888888888888888111118888888888111111188888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888811111118888888888888888888888888811111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888881111118888888888888888888888888111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888811111888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888111118888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111118888888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111188888888888888811111118888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888111118888888888888888888111111111188888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111888888888111111188888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888111111111111111881111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888811111111111111111111111111888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888111111111111111111118888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888881111111111111111188888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888881111111111888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(200)
scene.set_background_image(img("""
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888885555588888888888888888888888888888888888888888888888888888888888888888888555555558888888888888
        8888888888888888888888888888888888888888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888888555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888888888888888888888888888888888888888888888888888888885555555588888888888888888888888888888888888888888888888888888888888888888888555555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555555555588888888
        8888888888555555555555588888888888888888888888888888888888888855555555588888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888888555555555888888888888888888888888888888555558888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555888888888888888
        8888888885555555555555588888888888888888885555588888888888885555555555888888888888888888888888888888555555888888888888888888888888888888888855555588888888888888
        8888888855555558888888888888888888888888885555588888888888855555555558888888888888888888888888888888555555888888888888888888885555588888888855555588888888888888
        8888888855555588888888888888888888888888885555588888888888555555555558888888888888888888888888888888555555888888888888888888885555558888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888888555555555588888888888888888888888888888888855555588888888888888888885555555888888855555588888888888888
        8888888555555588888888888888888888888888885555588888888885555555555588888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888885555555555888888888888888888888888888888888855555588888888888888888885555555588888885555588888888888888
        8888888555555888888888888888888888888888885555588888888855555555555888888888888888888888888888888888855555558888888888888888888555555558888885555588888888888888
        8888888555558888888888888888888888888888885555558888888855555555555888888888888888888888888888888888885555558888888888888888888855555558888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888888555555555558888888888888888888888888888888888885555558888888888888888888885555555888885555558888888888888
        8888888555555888888888888888888888888888885555558888885555555555588888888888888888888888888888888888888555558888888888888888888888555555588885555558888888888888
        8888888555555888888888888888888888888888888555558888885555555888888888888888888888888888888888888888888555558888888888888888888888555555588888555558888888888888
        8888888855555888888888888888888888888888888555558888855555558888888888888888888888888888888888855555588555558888888888888888888888855555558888555558888888888888
        8888888855555588888888888888888888888888888555558888855555558888888888888888555558888888888888555555588555558888888888888888888888855555555888555558888888888888
        8888888855555558888888888888888888888888888555558888855555588888888888888888555558888888888888555555588555558888888888888888888888885555555888555558888888888888
        8888888855555555888888888888888888888888888555558888555555588888888888888888555558888888888888555555588555558888888888888888888888885555555588555555888888888888
        8888888855555555588888888888888888888888888555555888555555888888888888888888555558888888888888555555588555558888888888888888888888888555555588555555888888888888
        8888888885555555555888888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888555555555558888888888888888888888555555885555555888888888888888888555555888888888888555555588555558888888888888888888888888855555558555555888888888888
        8888888888855555555555558888888888888888888555555855555558888888888888888888555555888888888888555555588555558888888888888888888888888885555555855555888888888888
        8888888888885555555555558888888888888888888855555855555558888888888888888888555555888888888888555555888555558888888888888888888888888885555555855555888888888888
        8888888888888555555555555888888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888885555555555588888888888888888855555555555588888888888888888888855555588888888888555555888555558888888888888888888888888888555555555555588888888888
        8888888888888888855555555588888888888888888855555555555888888888888888888888855555588888888888555555888555558888888888555555585555588888855555555555588888888888
        8888888888888888888555555558888888888888888855555555555888888888888888888888855555558888888888555555888555558888888555555555585555558888855555555555588888888888
        8888888888888888888855555558888888888888888855555555558888888888888888888888885555558888888888555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555888888888888888855555555558888888888888888888888885555558888888885555555888555558888888555555555585555558888885555555555588888888888
        8888888888888888888885555555588888888888888855555555588888888888888888888888885555558888888885555555888555558888885555555555585555555888888555555555558888888888
        8888888888888888888888555555588888888888888885555555588888888888888888888888888555555888888885555558888555558888885555555588885555555888888555555555558888888888
        8888888888888888888888555555558888888888888885555585555588888888888888888888888555555888888855555558888555558888885555558888885555555588888855555555558888888888
        8888888888888888888888855555558888888888888885555585555588888888888888888888888555555888888555555558888555558888855555558888888555555558888855555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888555555888888555555558888555558888855555588888885555555558888885555555558888888888
        8888888888888888888888885555558888888888888885555585555558888888888888888888888855555588885555555558888555558888855555588888885555555555888885555555558888888888
        8888888888888888888888888555558888888888888885555555555555888888888888888888888855555588855555555558888555558888855555588888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555555555555888888888888888888888855555588855555555558888555558888855555888888885555555555588888555555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888855555555555555555558888555558888855555888888885555555555558888855555555888888888
        8888888888888888888888888555555888888888888885555558555555588888888888888888888885555555555555555558888555558888855555888888855555555555555888855555555888888888
        8888888888888888888888888555555888888888888888555558855555588888888888888888888885555555555555555558888555558888855555588885555555585555555888855555555888888888
        8888888888888888888888888855555588888888888888555558855555558888888888888888888885555555555555555558888555558888855555558855555555585555555588885555555888888888
        8888888888888888888888888855555588888888888888555558885555558888888888888888888888555555555558555558888555558888855555555555555555588555555555585555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888885555555588555558888555558888855555555555555555888855555555588555555588888888
        8888888888888888888888888855555588888888888888555558885555555888888888888888888888888855555588555555888555558888885555555555555558888855555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888555555555555888888885555555588555555588888888
        8888888888888888888888888885555588888888888888555558888555555588888888888888888888888888888888555555888555558888888855555555558888888888555555588855555588888888
        8888888888888888888888888885555588888888888888555558888855555558888888888888888888888888888888555555888555558888888888888888888888888888888888888855555558888888
        8888888888888888888888888855555588888888888888555558888855555558888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888888855555588888888888888555558888885555555888888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8888888888888888888888555555555588888888888888555558888888555555588888888888888888888888888888855555888555558888888888888888888888888888888888888885555558888888
        8885555555555555555555555555555888888888888888555558888888555555588888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555555888888888888888555558888888855555558888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555555558888888888888888555558888888885555555888888888888888888888888888855555888555555888888888888888888888888888888888888888555558888888
        8885555555555555555555555588888888888888888888555558888888885555555888888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888555558888888
        8888888888888888888888888888888888888888888888555558888888888555555588888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888855555558888888888888888888888888855555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888885555558888888888888888888888888555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888855555888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888555558888888888888888888888885555555888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555558888888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555588888888888888855555558888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888555558888888888888888888555555555588888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555888888888555555588888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888555555555555555885555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888855555555555555555555555555888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888555555555555555555558888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888885555555555555555588888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888885555555555888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888822288888888888888888888888888888888888888888888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888
        8888822288822288888888888888888888888888888888888888888888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888
        8888822288822288888888888888888888888888888888888888888888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888
        8888822288888888888888888888888888888888888888888888222888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888822288888888888888888888888222888888888888888882222888888888888888888888888888882228888888888888888888222888888888888888888888888888888888888888888888888888
        8888822288888888888222222222888222888888888888888822222888888888888888822288888888882228888888888888888888222888888888888888888888888888888888888888888888888888
        8888822288888888882222222222888222888888888888888222228888888888888888822288888888882228888888888888888882222888888888888888888888888888222888888888888888888888
        8888822288888888882222222222888222888888882228888222288888888888888888822288888888822228888888888222888882222888888888888888888888888888222888888888888888888888
        8888822288822288822228822222888222888888222228888222888888888888888888822288888888822228888888888222888882228888888888888222222888888888222888888888888888888888
        8888822288822288822222222222288222888888222228888222288888888888888888822288888888822288888888888222888882228888888888822222222222288888222288888888888888888888
        8888822288822288822222222222288222888888222228888222222888888888888888822288888888822288888888888222888882228888888888822222222222288888222288888888888888888888
        8888822288822288822222222822288222888888882222888822222288888888888888822288888888822288888888888222888882228888888888822228822222288888822288888888888888888888
        8888822288822288822222288822288222222222222222222882222228888888888888822288888888822288888888888222822222222222222888222288882222288888822228888888888888888888
        8888822288822288888888888822288222222222222222222888822228888888888888822288888888822288888888888222822222222222222228222288822228888888222228888888888888888888
        8888822288822288888888888822288222222222222222222888882228888888888888822288888888222222288888888222822222222222222222222888222228888882222228888888888888888888
        8888822288822288888888888822288222222288888222888888882228888888888888822288888882222222222228888222888822288888822222222822222288888882222228888888888888888888
        8888822288822288888888888822288222822228888222288888822228888888888888822228888882222222222228888222888822288888888222228822222888822282222222888888888888888888
        8888822288822288888888888822288222822228888222288888222228888888888888822228888822228222222228888222888822288888888882228822228822222288222222888888888888888888
        8888822288822288888888882222288222882222888822288882222288888888888888882228888222228222222222888222888822288888888882228888882222222288822222888888888888888888
        8888888888822288888222222222288222882222888822288822222888888888888888882228882222288222222222888222888822288888888882222222222222222888882222288888888888888888
        8888888888822288882222222222288222888222888822288822228888888888888888882228222222888222228222888222888822288888888882222222222222888888888222288888888888888888
        8888888888822288882222222288888222888222888822288822288888888888888888882222222228888222228222888888888888888888888888222222222288888888888222228888888888888888
        8888888888888888882228888888888888888888888822288888888888888888888888882222222288888888888222888888888888888888888888888888888888888888888822228888888888888888
        8888888888888888888888888888888888888888888822288888888888888888888888888222228888888888888888888888888888888888888888888888888888888888888822228888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
"""))
pause(10000)
game.show_long_text("Press the A brutton to start!", DialogLayout.BOTTOM)
info.set_life(3)
scene.set_background_image(img("""
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
"""))
Music += -3
projectile = sprites.create_projectile_from_side(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 3 . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 . . . . . . . 
            . . . . . . . . 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    50,
    50)
Gargus_health = 5
slash = 0
hero = sprites.create(img("""
        . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . .
    """),
    SpriteKind.player)
house1 = sprites.create(img("""
        ...................fffffffffff..................
            ...............fffffeee22eeeeff.................
            ............ffff2e22e2e2eeeee2fffffff...........
            ........eeeeeeeeeeeeeefeeeeeeee22fffeff.........
            ......eeedeeeeeeeeeeeeffeeeeeeeeee2fffff........
            .fffeeeeedeeeeeeeeeeeeefeeeedeeeee22e2eeeeee....
            .ffeeeeeddeeeeeeeeeeeeefeeedeeeeeeeeeeeeeeeeff..
            feeeeeeedeeeeeeeeeeeeeeffeeddeeeeeeeddddeeeeeeee
            feeeeeedeeeeeeeeedeeedeeffeedeeeeeeeeeedddeeeeee
            feeeeeedeeeeeeeeedeedeeeefeeddeeeeeeeddeeeeeeeee
            2eeeeeeddeee22eeeeddeeee2feeedeeeeeeedddeeeeeeee
            2eeeeeeeddee22e22eeeeeee2feeddeeeeeeeeeedeeeeeee
            22622e2eeedeeeeeeeeeeeeeefeee2eeeeeeeeeeedeeeeee
            f26e22eeeeedeeeee22eeeeeefeee2ddeeeeeeeeedeeeeee
            f6222eeeeeedeeeee2eeeeeeefeee2ddeeeeeeeeeeeeeeee
            fceeeeeeeeeeefeeeeeeeeeeefeee2e22eedddeeeeeeeeef
            fceeeeeeeeeeefeeeeeeeedeefeee22eeeeeddeeeeeeeeef
            f6eeeeeeeeeeeefeeeeee2ddeeeee2222eeeedeeeeeee66f
            f6eeeeeeeeeeeefeeeeee2eedeeee22222eeeedeee22266f
            fceeeeeeeeeeeeffeeeeeedddeeee2e22eeeddeeeee22ccf
            fceeeeeeeeeeeeefeeeeddeeeeeeeee22eddeeeeeee226cf
            f622eeeeebeeeeeffeeedeeeeeeeeeefeddeeeeeeeee266f
            fee2eeedddbbeeeefeeedeeeeeeeeeefeedeeeeeeeeee66f
            feee22eeedebeeeeffeeedeeeeeeeeefeeddeeeeeeeeeccf
            feee22e2bdb2eeeeeffeeedeeeeeeefeee6eeeeeeeeeeecf
            fed2eebbcd662eeeeeffeedeeeeeeefee66eeeeeeeeeee6f
            fd2bbbe22deee2eeeeeffeeeeeeeeefeeeceeeeeeeeeee6f
            fdcbbbbbbdeeeeeeeeeeffeeeeeeefeeeeeeeeeeeeeeeecf
            fcdddddeeedbbeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeef
            f4444ddeeeddbeeeeeeeeeeeeeeefeeeeeeeeeeffeeeeeef
            f6cbdd44eeeedeeeeeeeedeeeeeffeeeeeeeeeeeffeeeeee
            f66cddceeeeedeeeeeeeedeeeeffeeeeeeeeeeeecffeeeee
            ff664edeeeebdeefeeeeede2ddffeeeeeeeedeee42ffeeee
            ff6eeedeeddddeffeeeeedd2defeeeeeeeeedeee22ffeeee
            ff6eedddddeeeffeeeeeeed2eeeeeeeeeeeeddeee2feeeee
            ff6eeddddeeeefeeeeeeedd222feeeeeeeeeededd2feeeee
            ff6eeeeeedbefeeeeeeeede22222feeeeeeeedef22feeeee
            feeeeeeeeefffeeeeeeeeddeffff222eeeeeedeceefeeeef
            eeeeeeeeeefeeeeee2eeeeddeeeeeee2eeeeedeeeefeeeef
            eeeeeeeeeffeee66e2eeeeedeeeeeeeeeeeeedeeeefeeeef
            eeeedeefffee222224dddddddeeeeeeeeeeedeeeeefeeeef
            fff66eefeeeeeeeeddddeeeeeeeeeeeeeedddeeeeefeeeef
            .ff64efeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeefeeef.
            ..ff4eeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeee..
            ...ffeeeeeeeeeeeeeeeeeeeeeeeefeeeedeeeeeeeeeee..
            ....f44eeeeeeeeeeeeeeeeeeeeee4ee66cdeeeeeeeeee..
            .....ffeeeeeeee6f4eeeeeeeeeee4ee66c444eeeeff....
            ......ffffeeeeefffeeeeeeefffffffffffffffffff....
    """),
    0)
house2 = sprites.create(img("""
        ....................eeeeeea8....................
            .................aaaeeeeeee8aaa.................
            ..............aaa8aaeeeeeeeeaa8aaa..............
            ...........8aa8aa888eeeeeeee888aa8aa8...........
            ........8eeeee8aa8aaeeeeedeeea8eeeee8888........
            .....aaa8eeeeee888aa8aeeeeddeeeeeeee8aa8aaa.....
            ...aa8888eeeeeeea8aa88eeeeeddeeeeeee8aa8888aa...
            eeeeeeea8eeeeeeee8aa8a8eeeedddeeeeee8aa8aa8aaccd
            eeeeeeeeeeeeeeeeeeaa8a8aeeeeeedeeeeeeeeeeeeeebcb
            eeeeeeeeeeeeeeeeeee88aeeeeeeeeedeeefeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeaeeeeefeeeeedeeefeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeefeeeeeeeeeeeee
            bceeeeeeeeeeeedeeeeeeeeeeefeeeeeeefeeeeeedeeeeee
            dbb88eeeeeeeeeddeeeeeeeeeeffeeeeeeaa8aeeedddeeee
            dbbaa8affeeeeeedeeeeeeeeeeeffeeee8aa88eeeeedeeee
            dccaa8afeeeeedddeeeffeeeaeeeffeee8aa8aeeeeddeeed
            bcbaaefeeeeddeeeeeeeff8aaeeeeffee8aa8eeeeedeebcb
            dbeeeffeeedeeeeeeeeeefeaeeeeeeeee8888eeeeddeabbd
            deeeefeeeedeeeeeeeeeeffeeeeeeeeee8aaeeeeede88bbd
            eeeeefeeeedeeeeeeeeeeefeeeeeeeeee8aaeeeeeeeaaccd
            eeeeeeeeeeedffeeeeeeeeffeeeeeeeee8aeeeeeee8aabcb
            eeeeeeeeeeedeffeeeeeeffeeeeeeeeee8eeeeeeee8aabbd
            eeeedeeeeeeeeefeeeeeffeedeeeeeeeefeeeeeeea8aabbd
            eeeeeddeeeeeeeffeeefeeeeedeeeeeeefeeeeeeea888ccd
            bcbaaddeeeeeeeeffeffeeeeedeeeeeeffeeeeeead8aabcb
            dbddd8aaeeeeeeeefffeeeeeedeeeeeefeeeeefeeddaabbd
            dbdaaccbbbbcccbeefeeeeeedefeeeeefeeeeefeddeeebbd
            dccdbbbbcccbdddbffeeeeeedeffeeefeeeeefeeeddeeecd
            ccccdcccbbbbbbeeeeeeeefedeeffeefeeeeffeeeedeeeee
            eeeedeeddddfdeeeeeeeeffedeeefefeeefffeeeeedeeeee
            eeeedeeedddfeeeeeeeeffeeedeeeffeeffeddeeeedeeeee
            eeeeeeeeecefeeeeeeeffffeedeeefeeffecccccceeeeeee
            eeeeeeeeeeefeeeeeeffeefeeedefeeef1cdddddeeeeeeee
            eeeeeeeeeefeeeeeeebeeeffeedefeefffcd8aaaeeeeeeee
            bbbeeeeeeefeeeeee3eeeeefffefeefeeffd88eeeeeeeeeb
            bbb8eeeeeefeeeeeeeeeeeeeefffeefeeedffeeeeeeeeeeb
            bbb8eeeeeefeeeeeeeeeeeeeeffeefeeeedefffeeeeeebbb
            bbb8eeeeefeeeeeeeeeeeeeeefeeefeeeddeeeffeeeeebbb
            bbbeeeeeeeeeeedddeeeeeeeffeefffddeeeeeefffee8bbb
            cbbeeeeeeeeeddeeeeeeeeeffeeefeffddeeeeeeeef38bbc
            cbbeeeeeee38dddeeeeeeeffeeeefeeeffddeeeeeeee8bbc
            ccbeeeeeebbeeeddeeeeeffeeeefeeeeeeffdeeeeeeeebcc
            .cbeeeeeedeeeeddeee3efeeeeefeeeeeeeffeeeeeeeebc.
            ..ceeeeeeeeeeedeeebeeeeeeefeeeeeeeeeeffeeeeeec..
            ...eeeeeeeeeedeee3beeeeeeefeeeeeeeeeeeffeeeee...
            ....bddeeeeeedeef3beeeeeee3beeeeeeeeeeedeeeee...
            .....bdeeeeeeeebf3beeeeee33b3eeeeeeeeeebbdb.....
            ......beeeeeeebbe3beeeeee33b33beeeeeeeeccb......
    """),
    0)
Gargus = sprites.create(img("""
        ........................
            ........................
            .ff..f..................
            ..ff.ff.................
            ...ff.ff................
            ....ff.f.fff............
            .....fffffff............
            .....f.ffffff...........
            ......f.ffffff..........
            .....f.f2ff2fff.........
            .....fffffffffff........
            ........1.1fffff........
            ...........ffff.ff......
            ff.........1ffff.f.....f
            ffffff.11.1.fff......fff
            ff....ffffffffffffffffff
            fff...fffffffff......fff
            fff....ffffffff.........
            ff....fffffffffff.......
            ff.....fffffffff........
            ff....ffffffffff........
            ......fffffffff.........
            .......fffffff..........
            .........11ff...........
    """),
    SpriteKind.enemy)
music.set_volume(100)
tiles.set_tilemap(tilemap("""
    level
"""))
tiles.place_on_tile(hero, tiles.get_tile_location(1, 24))
tiles.place_on_tile(house1, tiles.get_tile_location(26, 18))
tiles.place_on_tile(house2, tiles.get_tile_location(28, 4))
controller.move_sprite(hero, 100, 100)
scene.camera_follow_sprite(hero)

def on_forever():
    global Gargus_health
    if projectile.overlaps_with(Gargus):
        projectile.destroy()
        pause(100)
        Gargus_health += -1
forever(on_forever)

def on_forever2():
    pause(100)
    if Gargus_health == 0:
        Gargus.destroy()
        game.show_long_text("Thanks for playing the demo!", DialogLayout.BOTTOM)
forever(on_forever2)

def on_forever3():
    global slash, gargus_fight, Music
    if hero.overlaps_with(Gargus):
        if gargus_fight == 0:
            slash += 1
            gargus_fight = 1
            Music = 2
            tiles.set_tilemap(tilemap("""
                level_5
            """))
            tiles.place_on_tile(hero, tiles.get_tile_location(3, 11))
            tiles.place_on_tile(Gargus, tiles.get_tile_location(10, 11))
            hero.ay = 500
            Gargus.ay = 500
            pause(1000)
        else:
            if gargus_fight == 1:
                Music += 1
                info.change_life_by(-1)
                music.play_melody("B B A A G G F F ", 1000)
                Music += -1
                pause(1000)
forever(on_forever3)

def on_forever4():
    if Music == 0:
        pause(100)
        music.play_melody("G - F G - E F D ", 170)
        if Music == 0:
            pause(500)
            music.play_melody("G - F G - E F G ", 170)
            if Music == 0:
                pause(1000)
                pause(100)
                music.play_melody("G - F G - E F D ", 170)
                if Music == 0:
                    pause(500)
                    music.play_melody("G - F G - E F G ", 170)
                    if Music == 0:
                        pause(500)
                        music.play_melody("- - E F E F G F ", 170)
                        if Music == 0:
                            pause(1000)
                            music.play_melody("G - - - - C5 - C5 ", 170)
                            if Music == 0:
                                music.play_melody("- C5 - - - - - - ", 170)
                                pause(2000)
forever(on_forever4)

def on_forever5():
    if Music == 3:
        music.play_melody("- A - A - A - B ", 250)
        if Music == 3:
            music.play_melody("A G F E - E - E ", 250)
            if Music == 3:
                music.play_melody("A G F D - D - D ", 250)
                if Music == 3:
                    music.play_melody("A G F G - G - G ", 250)
                    if Music == 3:
                        for index in range(2):
                            if Music == 3:
                                music.play_melody("E E D D - E F E ", 250)
                                if Music == 3:
                                    music.play_melody("E F D C C - E - ", 250)
                                    if Music == 3:
                                        music.play_melody("E E C C - E F E ", 250)
                                        if Music == 3:
                                            music.play_melody("C - C - C C C C ", 250)
                        if Music == 3:
                            for index2 in range(2):
                                if Music == 3:
                                    music.play_melody("F - E - F G E F ", 250)
                                    if Music == 3:
                                        music.play_melody("E F E - C E F C ", 250)
                            if Music == 3:
                                music.play_melody("A A G G F E D E ", 250)
                                if Music == 3:
                                    music.play_melody("G G - G F G A C5 ", 250)
                                    pause(1000)
forever(on_forever5)

def on_forever6():
    if Music == 3:
        music.play_melody("- A - A - A - B ", 250)
        if Music == 3:
            music.play_melody("A G F E - E - E ", 250)
            if Music == 3:
                music.play_melody("A G F D - D - D ", 250)
                if Music == 3:
                    music.play_melody("A G F G - G - G ", 250)
                    if Music == 3:
                        for index3 in range(2):
                            if Music == 3:
                                music.play_melody("A A F F - A B A ", 250)
                                if Music == 3:
                                    music.play_melody("G A F E E - G - ", 250)
                                    if Music == 3:
                                        music.play_melody("A A F F - A B A ", 250)
                                        if Music == 3:
                                            music.play_melody("E - F - G F E A ", 250)
                        if Music == 3:
                            for index4 in range(2):
                                if Music == 3:
                                    music.play_melody("A - G - A B G A ", 250)
                                    if Music == 3:
                                        music.play_melody("G A G - F G A F ", 250)
                            if Music == 3:
                                music.play_melody("F F E E D C - C ", 250)
                                if Music == 3:
                                    music.play_melody("E - - E D E F A ", 250)
                                    pause(1000)
forever(on_forever6)

def on_forever7():
    if Music == 2:
        music.play_melody("E G E G E G E G ", 274)
        if Music == 2:
            music.play_melody("F A F A F A F A ", 274)
            if Music == 2:
                music.play_melody("E G E G E G E G ", 274)
                if Music == 2:
                    music.play_melody("F A F A F A F A ", 274)
                    pause(100)
                    if Music == 2:
                        music.play_melody("A G - F - A G F ", 274)
                        pause(1000)
forever(on_forever7)

def on_forever8():
    if Music == 2:
        music.play_melody("A G A G A G A G ", 274)
        if Music == 2:
            music.play_melody("B A B A B A B A ", 274)
            if Music == 2:
                music.play_melody("A G A G A G A G ", 274)
                if Music == 2:
                    music.play_melody("B A B A B A B A ", 274)
                    pause(100)
                    if Music == 2:
                        music.play_melody("F E - D - F E D ", 274)
                        pause(1000)
forever(on_forever8)

def on_forever9():
    if Music == 0:
        pause(100)
        music.play_melody("D - A - - C - - ", 170)
        if Music == 0:
            pause(500)
            music.play_melody("D - A - - C - E ", 170)
            if Music == 0:
                pause(1000)
                pause(100)
                music.play_melody("D - A - - C - - ", 170)
                if Music == 0:
                    pause(500)
                    music.play_melody("D - A - - C - E ", 170)
                    if Music == 0:
                        pause(500)
                        music.play_melody("G F - - - - - A ", 170)
                        if Music == 0:
                            pause(1000)
                            music.play_melody("D - - - - - G - ", 170)
                            if Music == 0:
                                music.play_melody("G - - - - - - - ", 170)
                                pause(2000)
forever(on_forever9)

def on_forever10():
    if Music == 0:
        pause(100)
        music.play_melody("B - - E - - - - ", 170)
        if Music == 0:
            pause(500)
            music.play_melody("B - - E - - - - ", 170)
            if Music == 0:
                pause(1000)
                pause(100)
                music.play_melody("B - - E - - - - ", 170)
                if Music == 0:
                    pause(500)
                    music.play_melody("B - - E - - - - ", 170)
                    if Music == 0:
                        pause(500)
                        music.play_melody("- - E F E F G F ", 170)
                        if Music == 0:
                            pause(1000)
                            music.play_melody("B - - - - - C5 - ", 170)
                            if Music == 0:
                                music.play_melody("C5 - - - - - - - ", 170)
                                pause(2000)
forever(on_forever10)

def on_forever11():
    pass
forever(on_forever11)

def on_forever12():
    pass
forever(on_forever12)

def on_forever13():
    while gargus_fight == 1:
        Gargus.set_velocity(20, 0)
        pause(1000)
        Gargus.set_velocity(-20, 0)
        pause(1000)
forever(on_forever13)
