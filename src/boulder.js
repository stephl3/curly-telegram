import Util from './util';
import MovingObject from './moving_object';
import Metapod from './metapod';

class Boulder extends MovingObject {
  constructor(options) {
    super(options);
    // this.shadowPos = [
    //   this.pos[0] + this.width / 2,
    //   this.pos[1] + this.height * 1.2
    // ];
    // this.shadowSize = [this.width / 2, this.height / 5];
  }

  draw(ctx) {
    super.draw(ctx);
  }

  drawShadow(ctx) {
    const [shadowSX, shadowSY] = this.shadowPos;
    const [shadowWidth, shadowHeight] = this.shadowSize;
    ctx.beginPath();
    ctx.fillStyle = "rgba(41, 41, 41, 0.7)";
    ctx.ellipse(
      shadowSX, shadowSY,
      shadowWidth, shadowHeight,
      0, Math.PI * 2, false
    );
    ctx.fill();
  }

  move(timeDelta) {
    if (this.pos[1] < -600) {
      this.width *= 1.5;
      this.height *= 1.5;
      this.vel = [0, 16];
      switch (this.idx) {
        case 0:
          this.pos[0] = this.game.dimensionX * (1 / 8) - 60
          break;
        case 1:
          this.pos[0] = this.game.dimensionX * (3 / 8) - 60
          break;
        case 2:
          this.pos[0] = this.game.dimensionX * (5 / 8) - 60
          break;
        case 3:
          this.pos[0] = this.game.dimensionX * (7 / 8) - 60
          break;
        default:
          break;
      }
    }
    super.move(timeDelta);
  }

  collideWith(metapod) {
    if (metapod.hardened) {
      this.break();
      return true;
    } else if (!metapod.hardened) {
      metapod.smash();
      return true;
    }
    return false;
  }

  break() {

  }
};

export default Boulder;