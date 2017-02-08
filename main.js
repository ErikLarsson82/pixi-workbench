var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Graphics = PIXI.Graphics,
    PictureSprite = PIXI.extras.PictureSprite;

var app = new PIXI.Application(800, 600, { antialias: true });

    //graff = new Container(),
    //maskkk = new Container(),
    // renderer = autoDetectRenderer(256, 256, {antialias: true, transparent: false, resolution: 1});
document.body.appendChild(app.view);

var container = new Container();

var panda =  PIXI.Sprite.fromImage('required/assets/panda.png');
panda.anchor.set(0);

container.addChild(panda);
app.stage.addChild(container);
//console.log(app.stage)
//Create a container object called the `stage`
//var stage = new PIXI.Container();
// stage.displayList = new PIXI.DisplayList();

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// light.scale.x = 10;
// light.scale.y = 10;
//stage.addChild(graff);

loader
  .add("computer_display_empty.png")
  .add("light_cone.png")
  .add("black.png")
  .load(setup);

function addStar(stage, layer, zOrder, color) {
  var graphics = new Graphics();
  stage.addChild(graphics);
  graphics.beginFill(color); // Yellow
  graphics.drawPolygon([550, 100, // Starting x, y coordinates for the star
      570, 150, // Star is drawn in a clockwork motion
      630 + (Math.random() * 500), 155,
      585, 195,
      600 + (Math.random() * 500), 250,
      550, 220,
      500, 250 + (Math.random() * 500),
      515, 195,
      470 + (Math.random() * 500), 155,
      530, 150
  ]);
  // graphics.displayGroup = layer;
  graphics.zOrder = zOrder; //NOT WORKING
  graphics.endFill();
  graphics.blendMode = PIXI.BLEND_MODES.OVERLAY;
  return graphics;
}

function setup() {
  //renderer.backgroundColor = 0x22FF22;

  //var layer1 = new PIXI.DisplayGroup(0);
  //var layer2 = new PIXI.DisplayGroup(10);

  // var green = 0x53ff0f;
  // var orange = 0xffa808;
  // var purple = 0xde3bff;
  // var cyan = 0x59e1ff;

  // var back = new PIXI.Graphics();
  // back.beginFill(0x333333);
  // back.drawRect(0, 0, 400, 400);
  // back.displayGroup = layer1;
  // stage.addChild(back);

  // var thing2 = new PIXI.Graphics();
  // thing2.beginFill(0xFFFFFF);
  // thing2.drawRect(0, 0, 1920, 1080);
  // thing2.beginFill(0x000000);
  // thing2.drawRect(100, 100 * (Math.random() * 100), 50, 50);
  // thing2.drawRect(300, 100, 50, 50);
  //thing2.bounds = new PIXI.Rectangle(0,0,400,400);
  //thing2.displayGroup = layer1;
  //stage.addChild(thing2);

  //console.time('generateTexture');

  //var tex = renderer.generateTexture(thing2); // run whatever needs to be timed in between the statements

  //console.timeEnd('generateTexture');

  //var img = new PIXI.Sprite(tex);
  //thing2.scale.x = 2;
  //thing2.scale.y = 2;
  // img.x = 10;
  // img.y = 10;
  //img.displayGroup = layer2;
  //stage.addChild(img);
  // var black = new PictureSprite(resources["black.png"].texture);
  // black.x = 0;
  // black.y = 0;
  // stage.addChild(black);

  // var sprite = new PictureSprite(resources["light_cone.png"].texture);
  // sprite.x = 100;
  // sprite.y = 100;
  // stage.addChild(sprite);

  // var sprite2 = new PictureSprite(resources["light_cone.png"].texture);
  // sprite2.x = 150;
  // sprite2.y = 100;
  // stage.addChild(sprite2);
  //var texture = null;
  //var spriteMask = new PIXI.Sprite();

  // var stuff = new PIXI.Graphics();
  // function generate() {
  //   stuff.clear();
  //   stuff.beginFill(0xFFFFFF);
  //   stuff.drawRect(0, 0, 500, 500);
  //   stuff.beginFill(0x000000);
  //   stuff.drawRect(20, 20 + (Math.random() * 5), 20, 20);
  //   stuff.drawRect(120 + (Math.random() * 5), 120, 20, 20);
  //   //stuff.drawRect(300, 100, 50, 50);
  //   //texture && texture.destroy(true);
  //   //texture = renderer.generateTexture(stuff);
  //   //spriteMask.setTexture(texture);
  // }

  var stuff = new PIXI.Graphics();
  //stuff.clear();
  stuff.beginFill(0xFFFFFF, 0.4);
  stuff.drawRect(0, 0, 100, 100);
  stuff.endFill();
  stuff.beginFill(0x000000);
  stuff.drawRect(20, 20, 20, 20);
  stuff.endFill();
  //stuff.drawRect(120 + (Math.random() * 5), 120, 20, 20);
  app.stage.addChild(stuff);
  
  container.mask = stuff;

  // var purple = new PIXI.Graphics();
  // purple.x = 100;
  // purple.y = 100;
  // purple.beginFill(0xFF00FF);
  // purple.drawRect(0, 0, 400, 400);
  // //purple.displayGroup = layer2;
  // container.addChild(purple);
  //light.addChild(purple);

  // var thing3 = new PIXI.Graphics();
  // thing3.beginFill(0xFF00FF, 1);
  // thing3.drawRect(150, 100, 50, 50);
  // thing3.displayGroup = layer2;
  // stage.addChild(thing3);
  
  //var graphics3 = addStar(stage, layer2, 10, purple);
  //var graphics4 = addStar(stage, layer2, 2, cyan);
  
  // var graphics1 = addStar(stage, layer1, 5, green);
  // var graphics2 = addStar(stage, layer1, 3, orange);


  // var sprite = new PictureSprite(resources["computer_display_empty.png"].texture);
  // sprite.x = 200;
  // sprite.y = 200;
  // sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
  // stage.addChild(sprite);

  // var sprite2 = new PictureSprite(resources["computer_display_empty.png"].texture);
  // sprite2.x = 220;
  // sprite2.y = 220;
  // sprite2.blendMode = PIXI.BLEND_MODES.MULTIPLY;
  // stage.addChild(sprite2);

  // var sprite = new Sprite(resources["computer_display_empty.png"].texture);
  // sprite.y = 250;

  //renderer.blendModeManager.setBlendMode(PIXI.BLEND_MODES.NORMAL);
  //this.renderer.gl.blendFunc(PIXI.BLEND_MODES.NORMAL, PIXI.BLEND_MODES.HUE);

  // var blurFilter = new PIXI.filters.BlurFilter();
  // //blurFilter.blendMode = PIXI.BLEND_MODES.HUE;
  // //sprite.filters = [blurFilter];
  // sprite.blendMode = PIXI.BLEND_MODES.ADD;
  
  //var textureRendered = null;
  
  var pos = 0;
  var amount = 500;
  setInterval(function() {

    amount--;
    if (amount < 0) return;
    var now = performance.now();

    //generate() // run whatever needs to be timed in between the statements

    var later = performance.now();
    //console.log(later - now);
    pos = pos + 0.1;
    if (pos > 100) pos = 0;
    //purple.x = pos;
    app.renderer.render(app.stage);
  }, 16.6666)
}