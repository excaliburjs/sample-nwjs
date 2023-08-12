import * as ex from 'excalibur';
import swordPath from './favicon.png';

const game = new ex.Engine({
    width: 800,
    height: 600,
    displayMode: ex.DisplayMode.FitScreenAndFill,
    suppressPlayButton: true
});

const image = new ex.ImageSource(swordPath, false, ex.ImageFiltering.Pixel)

const actor = new ex.Actor({
    width: 124,
    height: 124,
    pos: ex.vec(100, 100),
    vel: ex.vec(200, 100)
});
actor.graphics.use(image.toSprite());

actor.onPostUpdate = () => {
    const worldBounds = game.screen.getWorldBounds();
    if (actor.pos.x < worldBounds.left) {
        actor.vel.x = 200;
    }
    if (actor.pos.x > worldBounds.right) {
        actor.vel.x = -200;
    }
    if (actor.pos.y < worldBounds.top) {
        actor.vel.y = 100;
    }
    if (actor.pos.y > worldBounds.bottom) {
        actor.vel.y = -100;
    }
}

game.add(actor);

game.start(new ex.Loader([image]));