namespace SpriteKind {
    export const Object = SpriteKind.create()
}
// This allows the ability to lose
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Tyrone.vy += -250
    Trampo.setKind(SpriteKind.Object)
    Trampo.x += Math.randomRange(-70, 70)
    Trampo.y += Math.randomRange(-50, -60)
    birdchase.follow(Tyrone)
})
// This allows the ability to win
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.splatter)
})
let Trampo: Sprite = null
let Tyrone: Sprite = null
let birdchase: Sprite = null
// u touch it u die
let bird = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . f f f 1 f f f 1 f f f . . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f f 
f f f f . . . . f f f f f f f f 
f f f . . . . . . . . . f f f f 
f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
bird.setPosition(300, 200)
// u touch it u die
let bird1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . f f f 1 f f f 1 f f f . . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f f 
f f f f . . . . f f f f f f f f 
f f f . . . . . . . . . f f f f 
f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
bird1.setPosition(400, 200)
// enemy that chases the player
birdchase = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . f f f 1 f f f 1 f f f . . . 
. f f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f . 
f f f f f f f f f f f f f f f f 
f f f f . . . . f f f f f f f f 
f f f . . . . . . . . . f f f f 
f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
birdchase.setPosition(400, 600)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 d d 9 9 9 9 d d d 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 d d d 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 
9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 
9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 
9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 d d d d d 9 9 9 d d d d 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 d d d 9 
9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 d d d d d 9 9 d d d d d 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 d d 9 9 
9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 d d d d d 9 9 d d d d d 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 d d 9 9 
9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 d d d 9 9 d d d d d 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 d d 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 d 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 d d d d d d d 9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 d d d d d d d d 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 d d d d d d d d d 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 d d d d d d d d d 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 
9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 
9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 
9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 
9 9 9 9 d d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 
9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 
9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 d d d 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d d 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 d d d d d d 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 d d d 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 e e e e 
e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
`)
// Added a black wall
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
// Added a brown wall
scene.setTile(14, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
Tyrone = sprites.create(img`
. . . . . . . . . . . . . . . . 
. f . f . f . f . f . f . f . . 
f f f f f f f f f f f f f f f . 
. f f e e e e e e e e e f f . . 
f f e e e e e e e e e e e f f . 
. e e e e e f e f e e e e e e . 
. . e e 5 e e e e e 5 e e e . . 
. . e e e 5 5 5 5 5 e e e e . . 
. . . e e e e e e e e e e . . . 
. . . . . e e e e e e . . . . . 
. . . . . . . d d . . . . . . . 
. . . . . . d d d d . . . . . . 
. . . e d d d d d d d d e . . . 
. . . . . . d d d d . . . . . . 
. . . . . . d d d d . . . . . . 
. . . . . 1 1 . . 1 1 . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(Tyrone)
Tyrone.setPosition(300, 400)
Tyrone.ay = 100
Trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 8 1 8 1 8 1 8 1 8 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
Trampo.setPosition(300, 520)
// another trampo
let trampo1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 8 1 8 1 8 1 8 1 8 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
trampo1.setPosition(400, 300)
// another trampo
let trampo2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 8 1 8 1 8 1 8 1 8 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
trampo2.setPosition(300, 700)
// another trampo
let trampo3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 8 1 8 1 8 1 8 1 8 1 7 1 f 
f 1 7 1 8 1 8 1 8 1 8 1 8 1 7 f 
f 7 1 7 1 7 1 7 1 7 1 7 1 7 1 f 
f 1 7 1 7 1 7 1 7 1 7 1 7 1 7 f 
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Object)
trampo3.setPosition(250, 700)
info.startCountdown(30)
game.onUpdate(function () {
    Tyrone.x += controller.dx()
})
