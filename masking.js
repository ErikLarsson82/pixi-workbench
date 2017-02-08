var app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

var container = new PIXI.Container();
container.x = app.renderer.width / 2;
container.y = app.renderer.height / 2;

var panda =  PIXI.Sprite.fromImage('required/assets/panda.png');
panda.anchor.set(0.5);

container.addChild(panda);

app.stage.addChild(container);

var thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = app.renderer.width / 2;
thing.y = app.renderer.height / 2;
thing.lineStyle(0);
thing.clear();
// my code
thing.beginFill(0xFFFFFF, 0.4);
thing.drawRect(0, 0, 100, 100);
thing.endFill();
// end of my code
thing.beginFill(0x8bc5ff, 0.4);
thing.moveTo(-120 + Math.sin(5) * 20, -100 + Math.cos(5)* 20);
thing.lineTo(120 + Math.cos(5) * 20, -100 + Math.sin(5)* 20);
thing.lineTo(120 + Math.sin(5) * 20, 100 + Math.cos(5)* 20);
thing.lineTo(-120 + Math.cos(5)* 20, 100 + Math.sin(5)* 20);
thing.rotation = 5 * 0.1;

container.mask = thing;

app.renderer.render(app.stage)
