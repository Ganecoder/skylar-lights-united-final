forever(function () {
    if (Music == 3) {
        music.playMelody("- A - A - A - B ", 250)
        if (Music == 3) {
            music.playMelody("A G F E - E - E ", 250)
            if (Music == 3) {
                music.playMelody("A G F D - D - D ", 250)
                if (Music == 3) {
                    music.playMelody("A G F G - G - G ", 250)
                    if (Music == 3) {
                        for (let index = 0; index < 2; index++) {
                            if (Music == 3) {
                                music.playMelody("E E E E - F G F ", 250)
                                if (Music == 3) {
                                    music.playMelody("E F D C C - E - ", 250)
                                    if (Music == 3) {
                                        music.playMelody("E E C C - E F E ", 250)
                                        if (Music == 3) {
                                            music.playMelody("F - G - A G F E ", 250)
                                        }
                                    }
                                }
                            }
                        }
                        if (Music == 3) {
                            for (let index = 0; index < 2; index++) {
                                if (Music == 3) {
                                    music.playMelody("F - E - F G E F ", 250)
                                    if (Music == 3) {
                                        music.playMelody("E F E - C D E D ", 250)
                                    }
                                }
                            }
                            if (Music == 3) {
                                music.playMelody("A A G G F E D E ", 250)
                                if (Music == 3) {
                                    music.playMelody("G G - G F G A C5 ", 250)
                                    pause(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 3) {
        music.playMelody("- A - A - A - B ", 250)
        if (Music == 3) {
            music.playMelody("A G F E - E - E ", 250)
            if (Music == 3) {
                music.playMelody("A G F D - D - D ", 250)
                if (Music == 3) {
                    music.playMelody("A G F G - G - G ", 250)
                    if (Music == 3) {
                        for (let index = 0; index < 2; index++) {
                            if (Music == 3) {
                                music.playMelody("A A G G - A B A ", 250)
                                if (Music == 3) {
                                    music.playMelody("A B G F F - A - ", 250)
                                    if (Music == 3) {
                                        music.playMelody("A A F F - A B A ", 250)
                                        if (Music == 3) {
                                            music.playMelody("C - C - C C C C ", 250)
                                        }
                                    }
                                }
                            }
                        }
                        if (Music == 3) {
                            for (let index = 0; index < 2; index++) {
                                if (Music == 3) {
                                    music.playMelody("B - A - B C5 A B ", 250)
                                    if (Music == 3) {
                                        music.playMelody("A B A - F A B F ", 250)
                                    }
                                }
                            }
                            if (Music == 3) {
                                music.playMelody("A A G G F E D E ", 250)
                                if (Music == 3) {
                                    music.playMelody("G G - G F G A C5 ", 250)
                                    pause(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f f e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . . f e e e e e e f . . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f f f f f f f f 4 . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    direction = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    Music = 0
    tiles.setTilemap(tilemap`level_7`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(27, 19))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (title < 1) {
        title += 1
    }
    if (slash == 0) {
        pause(100)
    }
    if (slash > 0) {
        if (destroy == 0) {
            if (direction == 4) {
                animation.runImageAnimation(
                skylar,
                [img`
                    ........................
                    ....ffffff..............
                    ..ffeeeeeef.............
                    .feeeeeeeeef............
                    .feeeeeeeeef...cc.......
                    .feeeeeeeeeef.cdc.......
                    .feeeeeeeeeefcddc.......
                    .feeee444444cddc........
                    .fe444bf444cddc.........
                    .fe4d41fdd4cdc..........
                    .feee4ddd4dccc..........
                    ..ffee4444dde...........
                    ...f888844ee............
                    ...f888888f.............
                    ...f888885f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    .......fff..............
                    ....fffeeef.............
                    ..ffeeeeeeeff...........
                    .feeeeeeeeeeef..........
                    .feeeeeeeeeeef..........
                    .feeeeeeeeeeeef.........
                    .feeeeeeeeeeeef.........
                    .feeee44444444f.....cc..
                    .fee444bbf4444f...ccdc..
                    .fee4d4bbfdd4f..ccddcc..
                    ..feee4dddddfeecdddc....
                    ...f8888888eeddcdcc.....
                    ...f888885e44ddccc......
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
                    `,img`
                    ........................
                    ....fffffff.............
                    ..ffeeeeeeef............
                    .feeeeeeeeeef...........
                    .feeeeeeeeeef...........
                    .feeeeeeeeeeef..........
                    .feeeeeeeeeeef..........
                    .feeeeeee4444f..........
                    .fee444bf4444f..........
                    .fee4d4bfdd4f...........
                    ..feee4ddd44.c..........
                    ...f888888ddeccccccc....
                    ...f888888ddecddddd.....
                    ...fffff5eee.ccccc......
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
                    `,img`
                    ....ffffff..............
                    ..ffeeeeeef.............
                    .feeeeeeeeef............
                    .feeeeeeeeef............
                    .feeeeeeeeeef...........
                    .feeeeeeeeeef...........
                    .feeee444444f...........
                    .fe444bf4444f...........
                    .fe4d41fdd4f............
                    .fe444ddddf.............
                    ..fdd44444f.............
                    ..fdde88ccc.............
                    ...eef88cdc.............
                    ...f8885cddc............
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
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
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
                    `, skylar, 100, 0)
                animation.runImageAnimation(
                projectile,
                assets.animation`anim0`,
                150,
                true
                )
                pause(100)
            }
            if (direction == 2) {
                animation.runImageAnimation(
                skylar,
                [img`
                    ........................
                    ........................
                    ..............ffffff....
                    .......cc....feeeeeeff..
                    .......cdc..feeeeeeeeef.
                    .......cddc.feeeeeeeeef.
                    ........cddcf44444eeeef.
                    .........cddc444fb444ef.
                    ..........cdc4ddf14d4ef.
                    ..........cccdeddd444ef.
                    ...........edd4e4444ff..
                    ............ee448888f...
                    .............f888888f...
                    .............f558888f...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ........................
                    ........................
                    ........................
                    .............fffffff....
                    ...........ffeeeeeeeff..
                    .........ffeeeeeeeeeeef.
                    .........ffeeeeeeeeeeef.
                    ..cc.....f4444444eeeeef.
                    ..cdcc...f4444fbb4444ef.
                    ..ccddcc..f4ddfbb4d44ef.
                    ....cdddceefddddd4444f..
                    .....ccdcddee8888888f...
                    ......cccdd44e588888f...
                    .........eeeeffffffff...
                    .............ff...fff...
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ........................
                    .............fffffff....
                    ............feeeeeeeff..
                    ...........feeeeeeeeeef.
                    ..........ffeeeeeeeeeef.
                    ..........feeeeeeeeeeef.
                    ..........f444444eeeeef.
                    ..........f4444fb4444ef.
                    ...........f4ddfb4d44ef.
                    ..........c.eeddd4444f..
                    ....ccccccceddee8888f...
                    .....dddddcedd44e888f...
                    ......ccccc.eeeefffff...
                    ..........c...ffffffff..
                    ...............ff..fff..
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ..............ffffff....
                    .............feeeeeeff..
                    ............feeeeeeeeef.
                    ............feeeeeeeeef.
                    ............feeeeeeeeef.
                    ............f44444eeeef.
                    ............f444fb444ef.
                    ............f4ddf14d4ef.
                    .............fdddd444ef.
                    .............f4444eddf..
                    .............ccc88eddf..
                    .............cdc88fee...
                    ............cddc8888f...
                    ...........cddcfffff....
                    ..........cddc..fff.....
                    ..........cdc...........
                    ..........cc............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 8 . . . . 
                    . . 1 1 1 1 1 1 1 1 1 8 e e . . 
                    . . . . d d d d d d d 8 e e . . 
                    . . . . . . . . . . . 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, skylar, -100, 0)
                animation.runImageAnimation(
                projectile,
                assets.animation`anim4`,
                150,
                true
                )
                pause(100)
            }
            if (direction == 3) {
                animation.runImageAnimation(
                skylar,
                [img`
                    ........................
                    ........................
                    ........................
                    ....ffffffff............
                    ...feeeeeeeef...........
                    ..feeeeeeeeeef..........
                    ..feeeeeeeeeef..........
                    ..fee444444eef..........
                    ..fe4bf44fb4ef..........
                    ..fe41fddf14ef..........
                    ..fe4ddddddef...........
                    ...f44444edd4e..........
                    ...4f8888edde...........
                    ...4f88cccee............
                    ....f88cdc8f............
                    ....fffddcff............
                    .....fddcff.............
                    ....cddc................
                    ....cdc.................
                    ....cc..................
                    ........................
                    ........................
                    ........................
                    ........................
                    `,img`
                    ........................
                    ........................
                    ........................
                    ........................
                    .....ffffff.............
                    ...ffeeeeeeff...........
                    ..feeeeeeeeeef..........
                    ..feeeeeeeeeef..........
                    ..feeeeeeeeeef..........
                    ..fee444444eef..........
                    ..fe4bf44fb4ef..........
                    ..fe41fddf14ef..........
                    ...f4ddddddef...........
                    ...4f88888f4e...........
                    ...4f88558f4e...........
                    ....ffffffdde...........
                    .....ffffedde...........
                    ..........ee............
                    .........ccc............
                    ........cc1cc...........
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    .........c1c............
                    `,img`
                    ........................
                    ........................
                    ....ffffffff............
                    ...feeeeeeeef...........
                    ..feeeeeeeeeef..........
                    ..feeeeeeeeeef..........
                    ..fee444444eef......ccc.
                    ..fe4bf44fb4ef.....cddc.
                    ..fe4bf44fb4ef....cddc..
                    ..fe4dddddd4ef..ccddc...
                    ..fe4ddddd4effeecddc....
                    ...f4444444f4eddccc.....
                    ...4f888888f1edde.......
                    ...4f888888f44ee........
                    ....f885588f............
                    ....ffffffff............
                    .....ff..ff.............
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `],
                150,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . e e . . . . . . . . 
                    . . . . . . e e . . . . . . . . 
                    . . . . . 8 8 8 8 . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 d . . . . . . . . 
                    . . . . . . 1 . . . . . . . . . 
                    . . . . . . 1 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, skylar, 0, 100)
                animation.runImageAnimation(
                projectile,
                assets.animation`anim6`,
                150,
                true
                )
                pause(100)
            }
            if (direction == 1) {
                animation.runImageAnimation(
                skylar,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f e e e e e e e e f . . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
                    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . f e e e e e e e e f . . . . 
                    . . f e e e e e e e e f . . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f d f . 
                    . . f e e e e e e e e e f b f . 
                    . . e f f f f f f f f 4 e b f . 
                    . . 4 f 8 8 8 8 8 e d d e c f . 
                    . . e f f f f f f e e 4 e e . . 
                    . . . f f f . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f . . . . . 
                    . . f e e e e e e e e f . . . . 
                    . . f e e e e e e e e f . . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . f e e e e e e e e e e f . . . 
                    . . f e e e e e e e e f . . . . 
                    . . 4 f f f f f f f f e . . . . 
                    . 4 d d e 8 8 8 8 8 f 4 . . . . 
                    . . 4 e e f f f f f f e . . . . 
                    . . . . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f e e e e e e e e f . . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
                    . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `],
                200,
                false
                )
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 1 . . . . . . 
                    . . . . . . . . . 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . . d 1 . . . . . . 
                    . . . . . . . 8 8 8 8 . . . . . 
                    . . . . . . . . e e . . . . . . 
                    . . . . . . . . e e . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, skylar, 0, -100)
                animation.runImageAnimation(
                projectile,
                assets.animation`anim8`,
                150,
                true
                )
                pause(100)
            }
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, skylar)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f e e e e e e f f . . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f 4 4 4 4 4 e e e e f . . . 
        . . f 4 4 4 f b 4 4 4 e f . . . 
        . . f 4 d d f 1 4 d 4 e f . . . 
        . . . f d d d d 4 4 4 e f . . . 
        . . . f 4 4 4 4 4 4 f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 5 5 8 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f e e e e e e f f . . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f e e e e e e e e e f . . . 
        . . f 4 4 4 4 4 e e e e f . . . 
        . . f 4 4 4 f b 4 4 4 e f . . . 
        . . f 4 d d f 1 4 d 4 e f . . . 
        . . . f d d d 4 4 4 4 f f . . . 
        . . . f 8 8 e d d 4 f . . . . . 
        . . . f 8 8 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    direction = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    Music = 10
    tiles.setTilemap(tilemap`level1`)
    tiles.setTilemap(tilemap`level_1`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(14, 8))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    Music = 4
    tiles.setTilemap(tilemap`level9`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(10, 18))
    tiles.placeOnTile(Gargus, tiles.getTileLocation(100, 100))
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, skylar)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, skylar)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    Music = 10
    tiles.setTilemap(tilemap`level1`)
    tiles.setTilemap(tilemap`level_2`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(1, 8))
    house1.setFlag(SpriteFlag.Invisible, true)
    house2.setFlag(SpriteFlag.Invisible, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    Music = 0
    tiles.setTilemap(tilemap`level`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(38, 11))
    house1.setFlag(SpriteFlag.Invisible, false)
    house2.setFlag(SpriteFlag.Invisible, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e e e f . . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e 4 4 4 4 4 f . . 
        . . . f e 4 4 4 b f 4 4 4 f . . 
        . . . f e 4 d 4 1 f d d 4 f . . 
        . . . f e 4 4 4 d d d d f . . . 
        . . . . f f 4 4 4 4 4 4 f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 8 8 8 f . . . 
        . . . . . f e e f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e e e f . . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e e e e e e f . . 
        . . . f e e e e 4 4 4 4 4 f . . 
        . . . f e 4 4 4 b f 4 4 4 f . . 
        . . . f e 4 d 4 1 f d d 4 f . . 
        . . . f e 4 4 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 4 f . . . 
        . . . . e d d e 8 8 8 8 f . . . 
        . . . . f e e f 8 8 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    direction = 4
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    Music = 4
    tiles.setTilemap(tilemap`level9`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(9, 1))
    tiles.placeOnTile(garb, tiles.getTileLocation(100, 100))
    quinn.setFlag(SpriteFlag.Invisible, true)
    garb.setFlag(SpriteFlag.Invisible, true)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, skylar)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    if (story < 2) {
        tiles.setTilemap(tilemap`level1`)
        tiles.setTilemap(tilemap`level_0`)
        Music = 0
        tiles.placeOnTile(skylar, tiles.getTileLocation(1, 23))
        scene.cameraFollowSprite(skylar)
        tiles.placeOnTile(Gargus, tiles.getTileLocation(12, 23))
        if (story == 0) {
            game.showLongText("Those stupid viligers would not listen!", DialogLayout.Bottom)
            game.showLongText("I told them that if they did not obey, I would have to burn the village.", DialogLayout.Bottom)
            game.showLongText("Ah! A surviver!", DialogLayout.Bottom)
        }
        story = 1
    }
    if (story >= 2) {
        Music = 0
        tiles.setTilemap(tilemap`level_7`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    skylar,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f e 4 d d d d d d 4 e f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 5 5 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f 4 4 d d d d 4 4 f . . . 
        . . f e f 8 8 8 8 e d d 4 . . . 
        . . e 4 f 8 8 8 8 e d d e . . . 
        . . . . f 8 8 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f e 4 d d d d d d 4 e f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . . 4 f 8 8 8 8 8 8 f 4 . . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . . 4 f 8 8 5 5 8 8 f 4 . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e 4 4 4 4 4 4 e e f . . 
        . . f e 4 b f 4 4 f b 4 e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f 4 4 d d d d 4 4 f . . . 
        . . . 4 d d e 8 8 8 8 f e f . . 
        . . . e d d e 8 8 8 8 f 4 e . . 
        . . . . e e f 5 5 8 8 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    direction = 3
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    destroy = 1
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    destroy = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    Music = 0
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(skylar, tiles.getTileLocation(6, 14))
    tiles.placeOnTile(garb, tiles.getTileLocation(8, 10))
    tiles.placeOnTile(quinn, tiles.getTileLocation(1, 1))
    garb.setFlag(SpriteFlag.Invisible, false)
    quinn.setFlag(SpriteFlag.Invisible, false)
})
let fight = 0
let Gargus: Sprite = null
let house2: Sprite = null
let house1: Sprite = null
let garb: Sprite = null
let quinn: Sprite = null
let skylar: Sprite = null
let slash = 0
let destroy = 0
let projectile: Sprite = null
let direction = 0
let Music = 0
let story = 0
let title = 0
title = 0
story = 0
Music = 3
if (title < 1) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(200)
    if (title < 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        pause(200)
        if (title < 1) {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
            pause(200)
            if (title < 1) {
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffff
                    ffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff
                    fffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffff
                    fffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff
                    ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    fffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffff
                    fffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    ffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff
                    fffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    ffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    ffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
                    fffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    ffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    ffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff
                    fffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffff
                    fffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999fffffff999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999ffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                pause(200)
                if (title < 1) {
                    scene.setBackgroundImage(img`
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                        `)
                    pause(1000)
                    if (title < 1) {
                        scene.setBackgroundImage(img`
                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                            999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                            999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                            9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                            9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                            9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                            999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                            999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                            999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                            999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            `)
                        pause(200)
                        scene.setBackgroundImage(img`
                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                            `)
                        if (title < 1) {
                            pause(200)
                            scene.setBackgroundImage(img`
                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                `)
                            if (title < 1) {
                                pause(200)
                                scene.setBackgroundImage(img`
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                    `)
                                if (title < 1) {
                                    pause(200)
                                    scene.setBackgroundImage(img`
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                        `)
                                    if (title < 1) {
                                        pause(200)
                                        scene.setBackgroundImage(img`
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            `)
                                        if (title < 1) {
                                            pause(200)
                                            scene.setBackgroundImage(img`
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                `)
                                            if (title < 1) {
                                                pause(200)
                                                scene.setBackgroundImage(img`
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                    `)
                                                if (title < 1) {
                                                    pause(200)
                                                    scene.setBackgroundImage(img`
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                        `)
                                                    if (title < 1) {
                                                        pause(200)
                                                        scene.setBackgroundImage(img`
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                            99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                            999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                            9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                            9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                            9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                            999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                            999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                            999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                            999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                            999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                            999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                            9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                            99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                            9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                            9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                            9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                            9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                            9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                            9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                            9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                            `)
                                                        if (title < 1) {
                                                            pause(200)
                                                            scene.setBackgroundImage(img`
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                                99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                                999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                                9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                                999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                                999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                                999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                                999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                                999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                                999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                `)
                                                            if (title < 1) {
                                                                pause(200)
                                                                scene.setBackgroundImage(img`
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff888888ffffff9999999999999999999999999999
                                                                    99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff88ffff9ffff88ffff99fffffffff99999999999ffffff99999999999fff88888888fffff999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8ffffff8fffff9fffff8ffff9ffff88ffff99fffff8fff9999999999ffffffff9999999999fff88fffff88ffff999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8fffff8fffff999ffff88fffffff88ffff999fff888fff9999999999ffffffff9999999999fff88fffff888fff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8fffff8ffff99999ffff8fffffff8fffff999fff888fff9999999999fff88ffff999999999fff88fffff88ffff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8ffff8ffff999999fffff8fffff88ffff9999fff888fff999999999ffff88ffff999999999fff88fffff8fffff999999999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff8fffffffff9999999ffff8fffff8ffff99999fff888fff999999999ffff888ffff99999999fff88fffff8ffff9999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff8fff8ffff999999999ffff8fff88ffff99999fff888fff99999999ffff8888fffff9999999fff88888888ffff9999999999999999999999999999
                                                                    999999999999999999999fff8888888888fff999fff88888ffff999999999fffff8888ffff999999fff888fff99999999ffff88888ffff9999999fff88888888ffff9999999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff88888fffff999999999fffff888ffff999999fff888fff9999999ffff8888888ffff999999fff888888888ffff999999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff888888ffff9999999999ffff88ffff9999999fff888fff9999999ffff8888888fffff99999fff888888888fffff99999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff88fff88ffff99999999fffff8fffff9999999fff888fff9999999fff888888888ffff99999fff88888fff88ffff99999999999999999999999999
                                                                    9999999999999999999999999999fff888fff999fff88ffff8fffff9999999ffff88ffff99999999fff888fff999999ffff8888fff888ffff9999fff88888ffff88ffff9999999999999999999999999
                                                                    9999999999999999999999999ffffff888fff999fff88ffff88fffff99999ffff88ffff999999999fff888fff999999ffff888fffff88ffff9999fff88888ffff88ffff9999999999999999999999999
                                                                    9999999999999999999999fffffffff888fff999fff888ffff88fffff999fffff88ffff999999999fff888fff99999ffff888ffffff888ffff999fff88888fffff88ffff999999999999999999999999
                                                                    999999999999999999999ffffffffff888fff999fff888fffff88ffff999ffff88ffff9999999999fff888fff99999ffff888ffffff888fffff99fff88888fffff88ffff999999999999999999999999
                                                                    999999999999999999999ffffff8888ffffff999fff888fffff888ffff9ffff888ffff9999999999fff888fff99999fff888fffffff8888ffff99fff88888ffffff88ffff99999999999999999999999
                                                                    999999999999999999999fff888ffffffffff999fff888ffffffffffff9ffff88ffff99999999999fff888fff9999ffff88ffffffff88fffffff9fff88888ffffff88fffff9999999999999999999999
                                                                    999999999999999999999fffffffffffffff9999fff888ffffffffffff9ffff8fffff99999999999fff888fff9999ffff8fffff9ffffffffffff9fff88888fffffff88ffff9999999999999999999999
                                                                    999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff88888fffffff8fffff9999999999999999999999
                                                                    999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                    9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                    99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                    9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                    9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                    9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                    9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                    9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                    9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                    9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888889999998889999988888888999888888889999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                    `)
                                                                if (title < 1) {
                                                                    pause(200)
                                                                    scene.setBackgroundImage(img`
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff99ffffffff999ffffffffff9fffffffff999999999999ffff999999999999ffffffffffffff99999999999999999999999999999
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9fffffffff999ffffffffff9fffffffff99999999999fffff999999999999fff555555ffffff9999999999999999999999999999
                                                                        99999999999999999999999ffffffffffffff999ffffffffffffffff9ffff55ffff9ffff55ffff99fffffffff99999999999ffffff99999999999fff55555555fffff999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5ffffff5fffff9fffff5ffff9ffff55ffff99fffff5fff9999999999ffffffff9999999999fff55fffff55ffff999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5fffff5fffff999ffff55fffffff55ffff999fff555fff9999999999ffffffff9999999999fff55fffff555fff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5fffff5ffff99999ffff5fffffff5fffff999fff555fff9999999999fff55ffff999999999fff55fffff55ffff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5ffff5ffff999999fffff5fffff55ffff9999fff555fff999999999ffff55ffff999999999fff55fffff5fffff999999999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff5fffffffff9999999ffff5fffff5ffff99999fff555fff999999999ffff555ffff99999999fff55fffff5ffff9999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff5fff5ffff999999999ffff5fff55ffff99999fff555fff99999999ffff5555fffff9999999fff55555555ffff9999999999999999999999999999
                                                                        999999999999999999999fff5555555555fff999fff55555ffff999999999fffff5555ffff999999fff555fff99999999ffff55555ffff9999999fff55555555ffff9999999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff55555fffff999999999fffff555ffff999999fff555fff9999999ffff5555555ffff999999fff555555555ffff999999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff555555ffff9999999999ffff55ffff9999999fff555fff9999999ffff5555555fffff99999fff555555555fffff99999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff55fff55ffff99999999fffff5fffff9999999fff555fff9999999fff555555555ffff99999fff55555fff55ffff99999999999999999999999999
                                                                        9999999999999999999999999999fff555fff999fff55ffff5fffff9999999ffff55ffff99999999fff555fff999999ffff5555fff555ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                        9999999999999999999999999ffffff555fff999fff55ffff55fffff99999ffff55ffff999999999fff555fff999999ffff555fffff55ffff9999fff55555ffff55ffff9999999999999999999999999
                                                                        9999999999999999999999fffffffff555fff999fff555ffff55fffff999fffff55ffff999999999fff555fff99999ffff555ffffff555ffff999fff55555fffff55ffff999999999999999999999999
                                                                        999999999999999999999ffffffffff555fff999fff555fffff55ffff999ffff55ffff9999999999fff555fff99999ffff555ffffff555fffff99fff55555fffff55ffff999999999999999999999999
                                                                        999999999999999999999ffffff5555ffffff999fff555fffff555ffff9ffff555ffff9999999999fff555fff99999fff555fffffff5555ffff99fff55555ffffff55ffff99999999999999999999999
                                                                        999999999999999999999fff555ffffffffff999fff555ffffffffffff9ffff55ffff99999999999fff555fff9999ffff55ffffffff55fffffff9fff55555ffffff55fffff9999999999999999999999
                                                                        999999999999999999999fffffffffffffff9999fff555ffffffffffff9ffff5fffff99999999999fff555fff9999ffff5fffff9ffffffffffff9fff55555fffffff55ffff9999999999999999999999
                                                                        999999999999999999999ffffffffffff9999999ffffffffffffffffff9fffffffff999999999999fffffffff9999fffffffff99ffffffffffff9fff55555fffffff5fffff9999999999999999999999
                                                                        999999999999999999999ffffffff99999999999fffffffff9ffffffff99fffffff9999999999999fffffffff9999ffffffff999fffffff999999fffffffffff9fffffffff9999999999999999999999
                                                                        9999999999999999999999999999999999999999fffffffff999999999999ffffff9999999999999fffffffff9999ffffffff9999999999999999fffffffffff9fffffffff9999999999999999999999
                                                                        99999999999999999999999999999999999999999999999999999999999999ffff999999999999999999999999999999999999999999999999999fffffffffff99fffff9999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888889999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888999
                                                                        9988899999988888888899988888888889999988899998889998888888889999888888888999999999999998889999988899988888999888988888888888998888888889988888888999888888888899
                                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888998888889999999888889999988899999999888999888889
                                                                        9988899999999988899999988899999999999988899998889999998889999999888999999999999999999998889999988899988888899888999998889999999998889999988899999999888999988889
                                                                        9988899999999988899999988899999999999988888888889999998889999999888999999999999999999998889999988899988888889888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899988889999988888888889999998889999999888888888999999999999998889999988899988888889888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988888888889999998889999999888888888999999999999998889999988899988898889888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988899998889999998889999999888888888999999999999998889999988899988898888888999998889999999998889999988888889999888999998889
                                                                        9988899999999988899999988899888888899988899998889999998889999999999999888999999999999998889999988899988898888888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                        9988899999999988899999988899998889999988899998889999998889999999999999888999999999999998889999988899988899888888999998889999999998889999988899999999888999998889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998889999988899988899988888999998889999999998889999988899999999888999988889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999998889999999998889999988899999999888999888889
                                                                        9988888899998888888899988888888889999988899998889999998889999999888888888999999999999998888888888899988899988888999888888889999998889999988888888999888888888899
                                                                        9999999999999999999999999999999999999999999999999999998889999999999999999999999999999999888888888899988899998889999888888889999998889999988888888999888888888999
                                                                        99999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999888888889999998889999988888888999888888889999
                                                                        9999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999
                                                                        9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999
                                                                        999999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999
                                                                        99999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        9999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999999
                                                                        99999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999999
                                                                        9999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        9999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111affffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        9faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff9999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111eeeeee444444444444444444444444444444eeeeeeeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e44444bbbbbfffff4444444444fffffbbbbb44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e4444411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddd11111e4444411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888411111fffffddddddddddfffff1111144444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888888888888888884dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888888888888888884dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeee44444dddddddddddddddddddddddddddddd44444eeeeefffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99
                                                                        ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeee44f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeee444f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeee444f4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeee44ef4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeef4444444444444444444444444444444444444444fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444eeeeeeeafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999
                                                                        ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        9ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        9fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff99999
                                                                        99fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888888888888888888888888fffffddddd44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999
                                                                        9999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        99999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999
                                                                        999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff888888888555555555555888888888fffff44444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999
                                                                        9999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999999
                                                                        99999999fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff99999999
                                                                        99999999ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999999
                                                                        99999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff999999999
                                                                        999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff9999999999
                                                                        9999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff9999999999
                                                                        9999999999ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff99999999999
                                                                        999999999999fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffff999999999999
                                                                        `)
                                                                    if (title < 1) {
                                                                        pause(10000)
                                                                        game.showLongText("Press the A brutton to start!", DialogLayout.Bottom)
                                                                        tiles.setTilemap(tilemap`level1`)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
info.setLife(3)
light.setBrightness(100)
direction = 0
Music += -3
projectile = sprites.createProjectileFromSide(img`
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
    `, 50, 50)
destroy = 0
let enemy_health = 10
slash = 0
skylar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f e e e e e e e e f . . . 
    . . f e e e e e e e e e e f . . 
    . . f e e e e e e e e e e f . . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . f e 4 b f 4 4 f b 4 e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . f e 4 d d d d d d 4 e f . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . 4 f 8 8 8 8 8 8 f 4 . . . 
    . . 4 d f 8 8 8 8 8 8 f d 4 . . 
    . . . 4 f 8 8 5 5 8 8 f 4 . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
quinn = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . . f e 1 7 4 4 7 1 e f . . . 
    . . . f e 1 f d d f 1 e f . . . 
    . . . f e 4 d d d d 4 e f . . . 
    . . f e f e 4 4 4 4 e f e f . . 
    . . . f 4 e a 3 3 a e 4 f . . . 
    . . . 4 d a 3 a a 3 a d 4 . . . 
    . . . . 4 3 3 a a 3 3 4 . . . . 
    . . . . . f f . . f f . . . . . 
    `, 0)
garb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 8 8 8 8 f . . . . . 
    . . . f f 8 8 8 8 8 8 f f . . . 
    . . f 8 8 8 8 8 8 8 8 8 8 f . . 
    . f 8 1 9 8 8 8 8 8 8 9 1 8 f . 
    . f 8 1 f 8 8 d d 8 8 f 1 8 f . 
    . . f 8 8 8 8 d d 8 8 8 8 f . . 
    . f 8 8 7 7 8 8 8 8 7 7 8 8 f . 
    f 8 8 8 7 7 7 8 8 7 8 7 8 8 8 f 
    f 8 8 f 7 7 7 7 7 8 7 7 f 8 8 f 
    f 8 8 8 7 7 7 7 7 7 7 7 8 8 8 f 
    . f 8 8 7 7 7 7 7 7 7 7 8 8 f . 
    . . f f f 7 7 f f 7 7 f f f . . 
    . . . . f f f . . f f . . . . . 
    `, 0)
quinn.setFlag(SpriteFlag.Invisible, true)
garb.setFlag(SpriteFlag.Invisible, true)
tiles.placeOnTile(garb, tiles.getTileLocation(100, 100))
house1 = sprites.create(img`
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
    `, 0)
house2 = sprites.create(img`
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
    `, 0)
Gargus = sprites.create(img`
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
    `, SpriteKind.Enemy)
music.setVolume(100)
tiles.setTilemap(tilemap`level`)
tiles.placeOnTile(skylar, tiles.getTileLocation(1, 24))
tiles.placeOnTile(house1, tiles.getTileLocation(26, 18))
tiles.placeOnTile(house2, tiles.getTileLocation(28, 4))
tiles.placeOnTile(quinn, tiles.getTileLocation(100, 100))
controller.moveSprite(skylar, 100, 100)
scene.cameraFollowSprite(skylar)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdate(function () {
    if (projectile.overlapsWith(Gargus)) {
        projectile.setPosition(62, 13)
        projectile.destroy()
        enemy_health += -1
        animation.runImageAnimation(
        Gargus,
        assets.animation`anim`,
        100,
        false
        )
    }
})
forever(function () {
    if (Music == 2) {
        music.playMelody("A G A G A G A G ", 274)
        if (Music == 2) {
            music.playMelody("B A B A B A B A ", 274)
            if (Music == 2) {
                music.playMelody("A G A G A G A G ", 274)
                if (Music == 2) {
                    music.playMelody("B A B A B A B A ", 274)
                    pause(100)
                    if (Music == 2) {
                        music.playMelody("F E - D - F E D ", 274)
                        pause(1000)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("D - A - - C - - ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("D - A - - C - E ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("D - A - - C - - ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("D - A - - C - E ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("G F - - - - - A ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("D - - - - - G - ", 170)
                            if (Music == 0) {
                                music.playMelody("G - - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (skylar.overlapsWith(Gargus)) {
        if (fight == 0) {
            if (story < 2) {
                slash += 1
                fight = 1
                Music = 2
                tiles.setTilemap(tilemap`level_5`)
                tiles.placeOnTile(skylar, tiles.getTileLocation(3, 3))
                tiles.placeOnTile(Gargus, tiles.getTileLocation(6, 3))
            }
        } else {
            if (fight == 1) {
                info.changeLifeBy(-1)
                music.playMelody("B B A A G G F F ", 1000)
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("G - F G - E F D ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("G - F G - E F G ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("G - F G - E F D ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("G - F G - E F G ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("- - E F E F G F ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("G - - - - C5 - C5 ", 170)
                            if (Music == 0) {
                                music.playMelody("- C5 - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 4) {
        music.playMelody("G G - - - - D D ", 300)
        if (Music == 4) {
            music.playMelody("F F - - - - E E ", 300)
            if (Music == 4) {
                music.playMelody("E D D - - A B B ", 300)
                if (Music == 4) {
                    music.playMelody("A G G - - F A A ", 300)
                    if (Music == 4) {
                        music.playMelody("E D D - - D F F ", 300)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 4) {
        music.playMelody("B B - - - - F F ", 300)
        if (Music == 4) {
            music.playMelody("A A - - - - G G ", 300)
            if (Music == 4) {
                music.playMelody("A G G - - F G G ", 300)
                if (Music == 4) {
                    music.playMelody("F E E - - D F F ", 300)
                    if (Music == 4) {
                        music.playMelody("G F F - - D A A ", 300)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (Music == 0) {
        pause(100)
        music.playMelody("B - - E - - - - ", 170)
        if (Music == 0) {
            pause(500)
            music.playMelody("B - - E - - - - ", 170)
            if (Music == 0) {
                pause(1000)
                pause(100)
                music.playMelody("B - - E - - - - ", 170)
                if (Music == 0) {
                    pause(500)
                    music.playMelody("B - - E - - - - ", 170)
                    if (Music == 0) {
                        pause(500)
                        music.playMelody("- - E F E F G F ", 170)
                        if (Music == 0) {
                            pause(1000)
                            music.playMelody("B - - - - - C5 - ", 170)
                            if (Music == 0) {
                                music.playMelody("C5 - - - - - - - ", 170)
                                pause(2000)
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (skylar.overlapsWith(quinn)) {
        tiles.placeOnTile(skylar, tiles.getTileLocation(1, 2))
        game.showLongText("You are really strong if you can take out enemies!", DialogLayout.Bottom)
        game.showLongText("Each one has a pattern you can follow to beat them!", DialogLayout.Bottom)
        game.showLongText("Make sure to make good use of it.", DialogLayout.Bottom)
    }
})
forever(function () {
    while (fight == 1) {
        if (story < 3) {
            Gargus.setVelocity(20, 0)
            pause(1000)
            Gargus.setVelocity(-20, 0)
            pause(1000)
        }
    }
})
forever(function () {
    if (enemy_health == 0) {
        if (story == 4) {
            garb.setFlag(SpriteFlag.Invisible, true)
            enemy_health = 20
            story = 5
            Music = 0
            fight = 0
            slash = 0
            tiles.setTilemap(tilemap`level2`)
            tiles.placeOnTile(skylar, tiles.getTileLocation(7, 10))
            tiles.placeOnTile(garb, tiles.getTileLocation(100, 100))
            tiles.placeOnTile(quinn, tiles.getTileLocation(1, 1))
        }
    }
})
forever(function () {
    if (enemy_health == 0) {
        if (story < 3) {
            Gargus.setFlag(SpriteFlag.Invisible, true)
            enemy_health = 20
            story = 3
            Music = 0
            fight = 0
            slash = 0
            tiles.setTilemap(tilemap`level_7`)
            tiles.placeOnTile(skylar, tiles.getTileLocation(13, 23))
            tiles.placeOnTile(Gargus, tiles.getTileLocation(100, 100))
            tiles.placeOnTile(garb, tiles.getTileLocation(100, 100))
        }
    }
})
forever(function () {
    if (Music == 2) {
        music.playMelody("E G E G E G E G ", 274)
        if (Music == 2) {
            music.playMelody("F A F A F A F A ", 274)
            if (Music == 2) {
                music.playMelody("E G E G E G E G ", 274)
                if (Music == 2) {
                    music.playMelody("F A F A F A F A ", 274)
                    pause(100)
                    if (Music == 2) {
                        music.playMelody("A G - F - A G F ", 274)
                        pause(1000)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (fight == 0) {
        garb.setVelocity(-50, 0)
        pause(1000)
        garb.setVelocity(50, 0)
        pause(1000)
    }
})
forever(function () {
    if (garb.overlapsWith(skylar)) {
        if (story == 3) {
            if (fight == 0) {
                info.setLife(3)
                tiles.setTilemap(tilemap`level_5`)
                Music = 2
                story = 4
                slash = 1
                fight = 2
                tiles.placeOnTile(quinn, tiles.getTileLocation(100, 100))
                tiles.placeOnTile(skylar, tiles.getTileLocation(4, 4))
                tiles.placeOnTile(garb, tiles.getTileLocation(4, 0))
            }
        }
    }
})
forever(function () {
    if (garb.overlapsWith(skylar)) {
        if (fight == 2) {
            if (story == 4) {
                music.playMelody("B B A A G G F F ", 1000)
                info.changeLifeBy(-1)
                pause(1000)
            }
        }
    }
})
forever(function () {
    if (fight == 2) {
        garb.setVelocity(-50, 0)
        pause(500)
        garb.setVelocity(50, 0)
        pause(1000)
        garb.setVelocity(-50, 0)
        pause(500)
        garb.setVelocity(0, 100)
        pause(500)
        garb.setVelocity(0, -60)
        pause(1000)
    }
})
forever(function () {
    if (garb.overlapsWith(projectile)) {
        if (story == 4) {
            animation.runImageAnimation(
            garb,
            assets.animation`myAnim0`,
            100,
            false
            )
            enemy_health += -1
            tiles.placeOnTile(projectile, tiles.getTileLocation(100, 100))
        }
    }
})
