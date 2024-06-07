        try{
            var damageImg=[document.getElementById("damage1"),document.getElementById("damage2"),document.getElementById("damage3"),document.getElementById("damage4"),document.getElementById("damage5")]

            var key=[{name:"air",color:"green",strength:0,cost:0,type:0,Icolor:"none",push:false,blast:1,buy:false,img:document.getElementById("air"),rotate:false},//0
            {name:"dirt",color:"brown",strength:10,cost:1,type:1,Icolor:"none",push:true,blast:0.1,buy:true,img:document.getElementById("dirt"),rotate:false},//1
            {name:"stone",color:"grey",strength:50,cost:5,type:1,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("stone"),rotate:false},//2
            {name:"deep stone",color:"#575757",strength:100,cost:15,type:1,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("deepstone"),rotate:false},//3
            {name:"obsidian",color:"black",strength:1000,cost:1000,type:1,Icolor:"none",push:false,blast:1,buy:true,img:document.getElementById("obsidian"),rotate:false},//4
            {name:"voidsteel",color:"#700045",strength:10000,cost:10000,type:1,Icolor:"none",push:false,blast:1,buy:true,img:document.getElementById("void"),rotate:false},//5
            {name:"bunker block",color:"#445057",strength:25,cost:1000,type:1,Icolor:"none",push:false,blast:0,buy:true,img:document.getElementById("bunker"),rotate:false},//6
            {name:"wire",color:"black",strength:1,cost:1,type:2,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("wire"),rotate:false},//7
            {name:"wire-on",color:"#0bff0b",strength:1,cost:1,type:2,Icolor:"none",push:true,blast:1,buy:false,img:document.getElementById("wire-on"),rotate:false},//8
            {name:"core",color:"#0aff0a",strength:50,cost:25,type:3,Icolor:"none",push:true,blast:5,buy:true,img:document.getElementById("core"),rotate:false},//9
            {name:"light",color:"yellow",strength:35,cost:5,type:4,Icolor:"none",push:true,blast:2,buy:true,img:document.getElementById("light"),rotate:false},//10
            {name:"light-off",color:"grey",strength:35,cost:5,type:4,Icolor:"none",push:true,blast:2,buy:false,img:document.getElementById("light-off"),rotate:false},//11
            {name:"repeater",color:"white",strength:10,cost:10,type:5,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("rep-off"),rotate:true},//12
            {name:"repeater-on",color:"white",strength:10,cost:10,type:5,Icolor:"none",push:true,blast:1,buy:false,img:document.getElementById("rep-on"),rotate:true},//13
            {name:"inverter",color:"grey",strength:10,cost:10,type:6,Icolor:"black",push:true,blast:1,buy:true,img:document.getElementById("inv-off"),rotate:true},//14
            {name:"inverter-on",color:"grey",strength:10,cost:10,type:6,Icolor:"red",push:true,blast:1,buy:false,img:document.getElementById("inv-on"),rotate:true},//15
            {name:"miniBan",color:"red",strength:50,cost:500,type:7,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("miniban"),rotate:false},//16
            {name:"miniBan-off",color:"#690000",strength:50,cost:500,type:7,Icolor:"none",push:true,blast:1,buy:false,img:document.getElementById("minibanoff"),rotate:false},//17
            {name:"end",color:"#ff1212",strength:25,cost:1500,type:8,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("end"),rotate:false},//18
            {name:"end-off",color:"#4d0d0d",strength:25,cost:1500,type:8,Icolor:"none",push:true,blast:1,buy:false,img:document.getElementById("end-off"),rotate:false},//19
            {name:"stone gen",color:"#9c9c9c",strength:25,cost:100,type:10,Icolor:"#00eaff",push:true,blast:1,buy:true,img:document.getElementById("stonegen"),rotate:true},//20
            {name:"deepstone gen",color:"#363636",strength:150,cost:2000,type:10,Icolor:"#00eaff",push:true,blast:1,buy:true,img:document.getElementById("deepgen"),rotate:true},//21
            {name:"spikes",color:"#635a58",strength:10,cost:10,type:11,Icolor:"none",push:true,blast:0.8,buy:true,img:document.getElementById("spikes"),rotate:false},//22
            {name:"spawn",color:"#75ffe8",strength:50,cost:50,type:12,Icolor:"none",push:false,blast:0.1,buy:true,img:document.getElementById("respawn"),rotate:false},//23
            {name:"spawn-act",color:"#75ffe8",strength:50,cost:50,type:3,Icolor:"none",push:false,blast:0.1,buy:false,img:document.getElementById("respawnact"),rotate:false},//24
            {name:"water",color:"blue",strength:5,cost:10,type:13,Icolor:"none",push:true,blast:0.01,buy:true,img:document.getElementById("water"),rotate:false},//25
            {name:"block detector",color:"#91666e",strength:25,cost:100,type:14,Icolor:"black",push:true,blast:1,buy:true,img:document.getElementById("blockdetect"),rotate:true},//26
            {name:"block detector-on",color:"#91666e",strength:25,cost:100,type:14,Icolor:"#0dff00",push:true,blast:1,buy:false,img:document.getElementById("blockdetecton"),rotate:true},//27
            {name:"killzone",color:"#ff002b",strength:25,cost:200,type:15,Icolor:"none",push:true,blast:1,buy:true,img:document.getElementById("killzone"),rotate:true},//28
            {name:"killzone-off",color:"#5e2a2a",strength:25,cost:200,type:15,Icolor:"none",push:true,blast:1,buy:false,img:document.getElementById("killzone-off"),rotate:true},//29
            {name:"pearl trap",color:"#2b2d40",strength:50,cost:200,type:1,Icolor:"black",push:true,blast:1,buy:true,img:document.getElementById("pearltrap"),rotate:true},//30
            {name:"pearl trap loaded",color:"#2b2d40",strength:50,cost:200,type:1,Icolor:"blue",push:true,blast:1,buy:false,img:document.getElementById("pearltrapon"),rotate:true},//31
            {name:"pusher",color:"#877820",strength:50,cost:50,type:9,Icolor:"blue",push:true,blast:1,buy:true,img:document.getElementById("piston"),rotate:true},
            {name:"puller",color:"#5b7a1d",strength:50,cost:50,type:16,Icolor:"blue",push:true,blast:1,buy:true,img:document.getElementById("puller"),rotate:true},
            {name:"switch",color:"#848f6f",strength:10,cost:5,type:1,Icolor:"blue",push:true,blast:1,buy:true,img:document.getElementById("switch"),rotate:false},
            {name:"switch on",color:"#848f6f",strength:10,cost:5,type:3,Icolor:"blue",push:true,blast:1,buy:false,img:document.getElementById("switchon"),rotate:false},
            {name:"player detector",color:"#000742",strength:50,cost:800,type:17,Icolor:"blue",push:true,blast:1,buy:true,img:document.getElementById("playerdetect"),rotate:false},
            {name:"player detector on",color:"#000742",strength:50,cost:800,type:17,Icolor:"blue",push:true,blast:1,buy:false,img:document.getElementById("playerdetecton"),rotate:false},
            {name:"worldspawn",color:"#bd0000",strength:0,cost:0,type:0,Icolor:"blue",push:true,blast:1,buy:true},
            {name:"cell",color:"#2586a1",strength:0,cost:0,type:0,Icolor:"blue",push:true,blast:1,buy:true}]

            var sel=1

            var NotEditSel=0
            var NotEditMax=6

            window.addEventListener('beforeunload', function (e) {
                e.preventDefault();
                e.returnValue = '';
            });

            //multi perlin library
            //Credit: https://github.com/joeiddon/perlin
            //Modified to have more noise layers
            var perlin=[]
            for(var a2=0; a2<2;a2++){
                perlin.push({
                    rand_vect: function(){
                        let theta = Math.random() * 2 * Math.PI;
                        return {x: Math.cos(theta), y: Math.sin(theta)};
                    },
                    dot_prod_grid: function(x, y, vx, vy){
                        let g_vect;
                        let d_vect = {x: x - vx, y: y - vy};
                        if (this.gradients[[vx,vy]]){
                            g_vect = this.gradients[[vx,vy]];
                        } else {
                            g_vect = this.rand_vect();
                            this.gradients[[vx, vy]] = g_vect;
                        }
                        return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
                    },
                    smootherstep: function(x){
                        return 6*x**5 - 15*x**4 + 10*x**3;
                    },
                    interp: function(x, a, b){
                        return a + this.smootherstep(x) * (b-a);
                    },
                    seed: function(){
                        this.gradients = {};
                        this.memory = {};
                    },
                    get: function(x, y) {
                        if (this.memory.hasOwnProperty([x,y]))
                            return this.memory[[x,y]];
                        let xf = Math.floor(x);
                        let yf = Math.floor(y);
                        //interpolate
                        let tl = this.dot_prod_grid(x, y, xf,   yf);
                        let tr = this.dot_prod_grid(x, y, xf+1, yf);
                        let bl = this.dot_prod_grid(x, y, xf,   yf+1);
                        let br = this.dot_prod_grid(x, y, xf+1, yf+1);
                        let xt = this.interp(x-xf, tl, tr);
                        let xb = this.interp(x-xf, bl, br);
                        let v = this.interp(y-yf, xt, xb);
                        this.memory[[x,y]] = v;
                        return v;
                    }
                })
            }
            for(var i=0; i<perlin.length;i++){
                perlin[i].seed();
            }
            //End Perlin Library
            //Syntax:
            // Get Noise
            //  perlin[n].get(x/divider,y/divider)
            // Reset Layer
            //  perlin[n].seed()


            //saving
            function download(filename, text) {
                if(filename!=""&&filename!=null){
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                    element.setAttribute('download', filename);

                    element.style.display = 'none';
                    document.body.appendChild(element);

                    element.click();

                    document.body.removeChild(element);
                }
            }

            //loading
            function LoadFile() {
                const [file] = document.getElementById("fileloader").files;
                const reader = new FileReader();

                reader.addEventListener(
                    "load",
                    () => {
                    // this will then display a text file
                    if(reader.result.includes("|.|")){
                        game.world.load(reader.result)
                    }else{
                        alert("Invalid File")
                    }
                    },
                    false,
                );

                if (file) {
                    reader.readAsText(file);
                }
            }


            //Generates a random number between min and max
            function rand(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
            //finds the distance between point (x1,y1) and (x2,y2)
            function dist(x1,y1,x2,y2){
                return parseFloat(Math.sqrt(((x1-x2)**2)+((y1-y2)**2)))
            }

            class World{
                constructor(worldsize,divider){
                    this.worldsize=worldsize
                    this.divider=divider
                    this.world=[]
                    for(var i =0; i<this.worldsize; i++){
                        this.world.push([])
                    }
                    for(var x=0; x<this.world.length; x++){
                        for(var y=0; y<this.worldsize; y++){
                            //[block type,block strength,energy,rotation]
                            this.world[x].push([0,0,0,0])
                        }
                    }
                }
                regen(worldsize){
                    if(worldsize+""=="NaN"){
                        game.ui=-2
                        return
                    }
                    if(worldsize>5000){
                        alert("Worldsize Clipped to Maximum of 5000")
                        worldsize=5000
                    }
                    if(worldsize<10){
                        alert("Worldsize Clipped to Minimum of 10")
                        worldsize=10
                    }
                    //worldsize+=3
                    game.startX=Math.round(worldsize/2)
                    game.startY=Math.round(worldsize/2)
                    game.player.x=game.startX-0.5
                    game.player.y=game.startY-0.5
                    game.player.spawnX=game.startX
                    game.player.spawnY=game.startY
                    game.cellX=Math.round(worldsize/2)+1
                    game.cellY=Math.round(worldsize/2)+1


                    this.worldsize=worldsize
                    this.world=[]
                    for(var i =0; i<this.worldsize; i++){
                        this.world.push([])
                    }
                    for(var x=0; x<this.world.length; x++){
                        for(var y=0; y<this.worldsize; y++){
                            //[block type,block strength,energy,rotation]
                            this.world[x].push([0,0,0,0])
                        }
                    }

                    game.cam.light=[]
                    for(var i =0; i<worldsize; i++){
                        game.cam.light.push([])
                    }
                    for(var x=0; x<game.cam.light.length; x++){
                        for(var y=0; y<worldsize; y++){
                            game.cam.light[x].push(0)
                        }
                    }
                }
                save(name,descript){
                    var text=name+"|.|"+descript+"|.|"+game.startX+","+game.startY+"|.|"+game.cellX+","+game.cellY+"|.|"+this.worldsize+"|.|"
                    for(var x=0;x<this.world.length;x++){
                        if(x!=0){
                            text+="["
                        }
                        for(var y=0;y<this.world[x].length;y++){
                            if(y!=0){
                                text+="("
                            }
                            text+=this.world[x][y][0]+","+this.world[x][y][3]
                        }
                    }
                    return text
                }
                load(text){
                    var data=text.split("|.|")
                    game.name=data[0]
                    game.des=data[1]
                    if(game.ui==-1){
                        game.isPlay=1
                    }
                    this.regen(data[4])
                    game.startX=parseInt(data[2].split(",")[0])
                    game.startY=parseInt(data[2].split(",")[1])
                    game.player.x=game.startX-0.5
                    game.player.y=game.startY-0.5
                    game.player.spawnX=game.startX
                    game.player.spawnY=game.startY
                    game.cellX=parseInt(data[3].split(",")[0])
                    game.cellY=parseInt(data[3].split(",")[1])
                    var list=data[5].split("[")
                    for(var i=0;i<list.length;i++){
                        list[i]=list[i].split("(")
                    }
                    for(var x=0;x<list.length;x++){
                        for(var y=0;y<list.length;y++){
                            list[x][y]=list[x][y].split(",")
                        }
                    }
                    for(var x=0;x<this.world.length;x++){
                        for(var y=0;y<this.world[x].length;y++){
                            this.world[x][y]=[list[x][y][0],key[list[x][y][0]].strength,0,list[x][y][1]]
                        }
                    }
                    game.calculateCost()
                    game.ui=0
                }
            }
            class Camera{
                constructor(x,y,worldsize,render,lightsize,ctx){
                    this.x=x
                    this.y=y
                    this.midX=0
                    this.midY=0
                    this.render=render
                    this.lightsize=lightsize
                    this.ctx=ctx
                    this.light=[]
                    for(var i =0; i<worldsize; i++){
                        this.light.push([])
                    }
                    for(var x=0; x<this.light.length; x++){
                        for(var y=0; y<worldsize; y++){
                            this.light[x].push(0)
                        }
                    }
                    this.rain=[]
                    this.rainDx=2
                    this.rainDy=5
                }
                square(x,y,r,c){
                    this.ctx.fillStyle=c
                    this.ctx.fillRect(x-r,y-r,r*2,r*2)
                }
                circle(x,y,r,c){
                    this.ctx.fillStyle = c;
                    this.ctx.beginPath();
                    this.ctx.arc(x,y, r, 0, 2 * Math.PI);
                    this.ctx.fill();
                }
                circleStroke(x,y,r,c,t){
                    this.ctx.strokeStyle = c;
                    this.ctx.lineWidth = t;
                    this.ctx.beginPath();
                    this.ctx.arc(x,y, r, 0, 2 * Math.PI);
                    this.ctx.stroke();
                }
                line(x1,y1,x2,y2,width,color){
                    this.ctx.strokeStyle = color;
                    this.ctx.lineWidth = width;
                    this.ctx.beginPath();
                    this.ctx.moveTo(x1,y1);
                    this.ctx.lineTo(x2,y2);
                    this.ctx.stroke();
                }
                image(image, x, y, angle){
                    //y+=25
                    var TO_RADIANS = Math.PI/180; 
                    // save the current co-ordinate system 
                    // before we screw with it
                    this.ctx.save(); 

                    // move to the middle of where we want to draw our image
                    this.ctx.translate(x, y);

                    // rotate around that point, converting our 
                    // angle from degrees to radians 
                    this.ctx.rotate(angle * TO_RADIANS);

                    // draw it up and to the left by half the width
                    // and height of the image 
                    this.ctx.drawImage(image, -(25/2), -(25/2),25,25);

                    // and restore the co-ords to how they were when we began
                    this.ctx.restore(); 
                }
                button(x,y,width,height,color,text,textCol,select){
                    if(color=="white"){
                        textCol="black"
                    }
                    this.ctx.fillStyle=color
                    this.ctx.fillRect(x-width/2,y-height/2,width,height)
                    this.ctx.fillStyle=textCol
                    if(text.length>12){
                        this.ctx.font = "10px Comic Sans MS";
                    }else{
                        this.ctx.font = "15px Comic Sans MS";
                    }
                    this.ctx.textAlign = "center";
                    this.ctx.textBaseline = "middle";
                    this.ctx.fillText(text,x,y)
                    if(clicked&&curX>x-width/2&&curX<x+width/2&&curY>y-height/2&&curY<y+height/2){
                        sel=select
                        game.ui=0
                        clicked=false
                    }else{
                        return false
                    }
                }
                activeButton(x,y,width,height,color,text,textCol){
                    if(color=="black"&&curX>x-width/2&&curX<x+width/2&&curY>y-height/2&&curY<y+height/2){
                        text="> "+text+" <"
                    }
                    this.ctx.fillStyle=color
                    this.ctx.fillRect(x-width/2,y-height/2,width,height)
                    this.ctx.fillStyle=textCol
                    this.ctx.font = "25px Courier New";
                    this.ctx.textAlign = "center";
                    this.ctx.textBaseline = "middle";
                    this.ctx.fillText(text,x,y)
                    if(clicked&&curX>x-width/2&&curX<x+width/2&&curY>y-height/2&&curY<y+height/2){
                        clicked=false
                        return true
                    }else{
                        return false
                    }
                }
                updateLight(src){
                    var loss=1
                    for(var x=this.x-this.lightsize;x<this.x+this.lightsize+1;x++){
                        for(var y=this.y-this.lightsize;y<this.y+this.lightsize+1;y++){
                            if(x<this.light.length-1&&y<this.light.length-1&&x>1&&y>1){
                                this.light[x][y]=0
                            }
                        }
                    }
                    for(var i=0;i<src.length;i++){
                        this.light[src[i][0]][src[i][1]]=src[i][2]
                        this.light[src[i][0]+1][src[i][1]]=src[i][2]-1
                        this.light[src[i][0]-1][src[i][1]]=src[i][2]-1
                        this.light[src[i][0]][src[i][1]+1]=src[i][2]-1
                        this.light[src[i][0]][src[i][1]-1]=src[i][2]-1
                    }
                    for(var a=0;a<10;a++){
                        for(var x=this.x-this.lightsize;x<this.x+this.lightsize+1;x++){
                            for(var y=this.y-this.lightsize;y<this.y+this.lightsize+1;y++){
                                if(x<this.light.length-1&&y<this.light.length-1&&x>1&&y>1){
                                    if(this.light[x][y]!=0&&(key[game.world.world[x][y][0]].type==0)){
                                        if(this.light[x+1][y]<this.light[x][y]-loss){
                                            this.light[x+1][y]=this.light[x][y]-loss
                                        }
                                        if(this.light[x-1][y]<this.light[x][y]-loss){
                                            this.light[x-1][y]=this.light[x][y]-loss
                                        }
                                        if(this.light[x][y+1]<this.light[x][y]-loss){
                                            this.light[x][y+1]=this.light[x][y]-loss
                                        }
                                        if(this.light[x][y-1]<this.light[x][y]-loss){
                                            this.light[x][y-1]=this.light[x][y]-loss
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                run(isRain,time,src,lowHealth){
                    //convert mouse from local to global
                    game.GlobalCurX=((curX-Canvas.width/2)/25-this.midX/50)+this.x
                    game.GlobalCurY=((curY-Canvas.height/2)/25-this.midY/50)+this.y

                    //clear the screen
                    this.ctx.clearRect(0,0,Canvas.width,Canvas.height)

                    //draw the world
                    for(var x=-this.render;x<this.render+1;x++){
                        for(var y=-this.render;y<this.render+1;y++){
                            if(x+this.x<game.world.world.length-1&&y+this.y<game.world.world.length-1&&x+this.x>1&&y+this.y>1){

                                //draws the color of the ground block
                                if(key[game.world.world[x+this.x][y+this.y][0]].img==null){
                                    this.square((x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,13*(game.world.world[x+this.x][y+this.y][1]/key[game.world.world[x+this.x][y+this.y][0]].strength),key[game.world.world[x+this.x][y+this.y][0]].color)
                                }else{
                                    if(key[game.world.world[x+this.x][y+this.y][0]].rotate){
                                        this.image(key[game.world.world[x+this.x][y+this.y][0]].img,(x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,[90,270,180,0][game.world.world[x+this.x][y+this.y][3]])//[90,270,180,0]
                                    }else{
                                        this.image(key[game.world.world[x+this.x][y+this.y][0]].img,(x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,90)
                                    }
                                }
                                if(game.world.world[x+this.x][y+this.y][1]<key[game.world.world[x+this.x][y+this.y][0]].strength){
                                    if(4-Math.round((game.world.world[x+this.x][y+this.y][1]/key[game.world.world[x+this.x][y+this.y][0]].strength)*4)<5){
                                        this.image(damageImg[4-Math.round((game.world.world[x+this.x][y+this.y][1]/key[game.world.world[x+this.x][y+this.y][0]].strength)*4)],(x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,0)
                                    }
                                    if(dist(x+this.x,y+this.y,game.player.x,game.player.y)>2){
                                        game.world.world[x+this.x][y+this.y][1]+=0.01
                                    }
                                }
                                if(x+this.x==game.startX&&y+this.y==game.startY){
                                    this.square((x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,9,"#bd0000")
                                }
                                if(x+this.x==game.cellX&&y+this.y==game.cellY){
                                    this.square((x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,9,"#2586a1")
                                }
                                if(game.world.world[x+this.x][y+this.y][1]<0){
                                    game.world.world[x+this.x][y+this.y]=[0,0,0,0]
                                }
                            }
                        }
                    }
                    for(var i=0;i<game.entity.length;i++){
                        game.entity[i].draw(this,(game.entity[i].x-this.x+10)*25+this.midX/2,(game.entity[i].y-this.y+10)*25+this.midY/2)
                        game.entity[i].run(i)
                    }

                    game.player.draw(this,(game.player.x-this.x+10)*25+this.midX/2,(game.player.y-this.y+10)*25+this.midY/2)

                    this.FollowPlayer(0)
                    
                    //rain
                    if(isRain){
                        for(var a=0;a<10;a++){
                            this.rain.push([rand(-Canvas.width,Canvas.width*2),-3])
                        }
                    }
                    for(var i=0;i<this.rain.length;i++){
                        this.rain[i][0]+=this.rainDx
                        this.rain[i][1]+=this.rainDy
                        this.line(this.rain[i][0]+this.rainDx*3,this.rain[i][1]+this.rainDy*3,this.rain[i][0]-this.rainDx*3,this.rain[i][1]-this.rainDy*3,2,"#0048ff")
                        if(this.rain[i][1]<-5||this.rain[i][1]>Canvas.height+5){
                            this.rain.splice(i,1)
                        }
                    }

                    //lighting
                    this.updateLight(src)
                    if(this.rain.length>1000){
                        if(rand(0,100)!=0){
                            for(var x=-this.render;x<this.render+1;x++){
                                for(var y=-this.render;y<this.render+1;y++){
                                    if(x+this.x<game.world.world.length-1&&y+this.y<game.world.world.length-1&&x+this.x>1&&y+this.y>1){
                                        this.ctx.globalAlpha=(Math.cos(time/10000)+4)/6-(this.light[x+this.x][y+this.y]/10)
                                        if(this.ctx.globalAlpha>0&&this.ctx.globalAlpha<1){
                                            this.square((x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,13,"#00000f")
                                        }
                                        this.ctx.globalAlpha=1
                                    }
                                }
                            }
                        }
                    }else{
                        for(var x=-this.render;x<this.render+1;x++){
                            for(var y=-this.render;y<this.render+1;y++){
                                if(x+this.x<game.world.world.length-1&&y+this.y<game.world.world.length-1&&x+this.x>1&&y+this.y>1){
                                    this.ctx.globalAlpha=0.5+(1+Math.cos(time/10000))/4-(this.light[x+this.x][y+this.y]/10)
                                    //if(game.edit){
                                    //    this.ctx.globalAlpha-=0.3
                                    //}
                                    if(this.ctx.globalAlpha>0&&this.ctx.globalAlpha<1){
                                        this.square((x+9.5)*25+this.midX/2,(y+9.5)*25+this.midY/2,13,"black")
                                    }
                                    this.ctx.globalAlpha=1
                                }
                            }
                        }
                    }

                    //low helth graphic
                    if(lowHealth){
                        this.ctx.globalAlpha = (1+Math.cos(time/100))/4;
                        this.ctx.fillStyle="red"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.globalAlpha = 1;
                    }

                    if(game.ui==-1){//start
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "white";
                        this.ctx.font = "50px Courier New";
                        this.ctx.fillText("Prison_Crafter", Canvas.width/2, 100);
                        this.ctx.font = "25px Courier New";
                        this.ctx.fillText("Created By Brent Gronfur", Canvas.width/2, 180);
                        if(this.activeButton(Canvas.width/2, 280,150,50,"black","Craft","white")){
                            game.ui=-2
                        }
                        if(this.activeButton(Canvas.width/2, 350,150,50,"black","Escape","white")){
                            document.getElementById("fileloader").click()
                            document.getElementById("button").click()
                        }
                    }
                    if(game.ui==-2){//craft menu
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "white";
                        this.ctx.font = "50px Courier New";
                        this.ctx.fillText("Prison_Crafter", Canvas.width/2, 100);
                        this.ctx.font = "35px Courier New";
                        this.ctx.fillText("Craft", Canvas.width/2, 180);
                        if(this.activeButton(Canvas.width/2, 280,150,50,"black","New Prison","white")){
                            game.ui=0
                            game.world.regen(parseInt(prompt("Worldsize?",100))+3)
                        }
                        if(this.activeButton(Canvas.width/2, 350,150,50,"black","Load Prison","white")){
                            document.getElementById("fileloader").click()
                            document.getElementById("button").click()
                        }
                        if(this.activeButton(Canvas.width/2, 425,150,50,"black","back","white")){
                            game.ui=-1
                        }
                    }
                    if(game.isPlay!=0){//play menu
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "white";
                        this.ctx.font = "40px Courier New";
                        this.ctx.fillText(game.name, Canvas.width/2, 120);
                        this.ctx.font = "20px Courier New";
                        this.ctx.fillText(game.des, Canvas.width/2, 180);
                        if(this.activeButton(Canvas.width/2, 280,150,50,"black","Play","white")){
                            game.ui=0
                            game.changeWorldPlay()
                            game.edit=false
                            game.isPlay=0
                        }
                    }

                    if(game.ui==1){//edit mode invintory
                        this.ctx.globalAlpha = 0.5
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.globalAlpha = 1;
                        var x=0
                        var y=100
                        for(var i=0;i<key.length;i++){
                            if(key[i].buy){
                                x+=100
                                if(x>400){
                                    x=100
                                    y+=50
                                }
                                this.button(x,y,100,50,key[i].color,key[i].name+" $"+key[i].cost,"white",i)
                            }
                        }
                    }
                    if(game.ui==2){//death screen
                        this.ctx.globalAlpha = 0.5
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.globalAlpha = 1;
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "red";
                        this.ctx.font = "50px Courier New";
                        this.ctx.fillText("You Died", Canvas.width/2, 100);
                        if(this.activeButton(Canvas.width/2, 250,150,50,"red","Respawn","white")){
                            game.ui=0
                        }
                    }
                    if(game.ui==3){//ban screen
                        this.ctx.globalAlpha = 0.5
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.globalAlpha = 1;
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "red";
                        this.ctx.font = "55px Courier New";
                        this.ctx.fillText("Game Over", Canvas.width/2, 100);
                        this.ctx.font = "25px Courier New";
                        this.ctx.fillText("You were banned", Canvas.width/2, 150);
                        if(this.activeButton(Canvas.width/2-75, 250,140,50,"red","Restart","white")){
                            game.ui=0
                            game.player.x=game.startX-0.5
                            game.player.y=game.startY-0.5
                            game.changeWorldPlay()
                        }
                        if(this.activeButton(Canvas.width/2+75, 250,140,50,"red","Edit","white")){
                            game.ui=0
                            game.edit=true
                        }
                    }
                    if(game.ui==4){//win screen
                        this.ctx.globalAlpha = 0.5
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(0,0,Canvas.width,Canvas.height)
                        this.ctx.globalAlpha = 1;
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "white";
                        this.ctx.font = "55px Courier New";
                        this.ctx.fillText("Escaped", Canvas.width/2, 100);
                        this.ctx.font = "25px Courier New";
                        this.ctx.fillText("Time: "+Math.round(game.timer*100)/100, Canvas.width/2, 150);
                        if(this.activeButton(Canvas.width/2-75, 250,140,50,"#000000","Replay","white")){
                            game.ui=0
                            game.player.x=game.startX-0.5
                            game.player.y=game.startY-0.5
                            game.changeWorldPlay()
                        }
                        if(this.activeButton(Canvas.width/2+75, 250,140,50,"#000000","Edit","white")){
                            game.ui=0
                            game.edit=true
                        }
                    }

                    if(game.edit&&game.ui>-1&&!game.isPlay){
                        this.ctx.textAlign = "left";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillStyle = "yellow";
                        this.ctx.font = "30px Courier New";
                        this.ctx.fillText("$"+game.price, 20, 20);

                        if(this.activeButton(50,Canvas.height-20,100,50,"red","Play","white")){
                            game.ui=0
                            game.mission=0
                            game.player.x=game.startX-0.5
                            game.player.y=game.startY-0.5
                            if(game.edit){
                                game.changeWorldPlay()
                                game.edit=false
                            }else{
                                game.changeWorldEdit()
                                game.edit=true
                            }
                        }
                        if(this.activeButton(150,Canvas.height-20,100,50,"green","Test","white")){
                            game.ui=0
                            game.mission=-1
                            if(game.edit){
                                game.changeWorldPlay()
                                game.edit=false
                            }else{
                                game.changeWorldEdit()
                                game.edit=true
                            }
                        }
                        if(this.activeButton(275,Canvas.height-20,150,50,"blue","Inventory","white")){
                            if(game.ui==0){
                                game.ui=1
                            }else{
                                game.ui=0
                            }
                        }
                        if(this.activeButton(Canvas.width-50,Canvas.height-20,100,50,"grey","Save","white")){
                            if(confirm("Save Your Prison?")){
                                var name=prompt('Name Your Prison',game.name)
                                download(name,game.world.save(name,prompt("Give Your Prison A Description",game.des)))
                            }
                        }
                        if(this.activeButton(Canvas.width-50,20,100,40,"#000000","Menu","white")){
                            if(confirm("Return to Menu?\nYour progress will be lost if unsaved")){
                                game.ui=-1
                            }
                        }
                    }

                    if(!game.edit){
                        this.ctx.fillStyle="black"
                        this.ctx.fillRect(Canvas.width-121,19,102,17)
                        this.ctx.fillStyle="red"
                        this.ctx.fillRect(Canvas.width-120,20,game.player.hp*10,10)
                        this.ctx.fillStyle="green"
                        this.ctx.fillRect(Canvas.width-120,30,game.player.food*10,5)
                        for(var i=0;i<NotEditMax+1;i++){
                            this.square(20+i*15,50,5,"grey")
                        }
                        this.square(20+NotEditSel*15,50,5,"white")
                        this.ctx.fillStyle="white"
                        this.ctx.font = "15px Courier New";
                        this.ctx.textAlign = "center";
                        this.ctx.textBaseline = "middle";
                        this.ctx.fillText(["Fist","Heal","Pearl","Pickaxe","Star Charge","Dirt","Power"][NotEditSel],50,25)
                        this.ctx.textAlign = "left";
                        this.ctx.fillText("Time: "+Math.round(game.timer*100)/100,10,Canvas.height-15)
                        this.ctx.textAlign = "right";
                        this.ctx.fillText(["Get Captured","Break Into The Cell","Reach World Spawn"][game.mission],Canvas.width-10,Canvas.height-15)
                    }

                    //Draw cursor
                    this.ctx.fillStyle="white"
                    this.ctx.fillRect(curX-5,curY-1,10,2)
                    this.ctx.fillRect(curX-1,curY-5,2,10)
                }
                FollowPlayer(follow){
                    //moving the camera
                    if(game.player.x>this.x-this.midX/50){
                        this.midX-=2
                        if(game.edit){
                            this.midX-=1
                        }
                        if(speed){
                            this.midX-=2
                        }
                    }
                    if(game.player.y>this.y-this.midY/50){
                        this.midY-=2
                        if(game.edit){
                            this.midY-=1
                        }
                        if(speed){
                            this.midY-=2
                        }
                    }
                    if(game.player.x<this.x-this.midX/50){
                        this.midX+=2
                        if(game.edit){
                            this.midX+=1
                        }
                        if(speed){
                            this.midX+=2
                        }
                    }
                    if(game.player.y<this.y-this.midY/50){
                        this.midY+=2
                        if(game.edit){
                            this.midY+=1
                        }
                        if(speed){
                            this.midY+=2
                        }
                    }
                    if(dist(game.player.x,game.player.y,this.x,this.y)>8){
                        this.x=Math.round(game.player.x)
                        this.y=Math.round(game.player.y)
                    }
                    if(this.midX>=50){
                        this.x-=1
                        this.midX=0
                    }
                    if(this.midX<0){
                        this.x+=1
                        this.midX=50
                    }
                    if(this.midY>=50){
                        this.y-=1
                        this.midY=0
                    }
                    if(this.midY<0){
                        this.y+=1
                        this.midY=50
                    }
                }
            }
            class Game{
                constructor(){
                    this.cam=new Camera(250,250,500,10,15,document.getElementById("Canvas").getContext("2d"))
                    this.world=new World(500,100)
                    this.tempWorld=[]
                    this.player=new Player(250,250)
                    this.entity=[]
                    this.GlobalCurX=0
                    this.GlobalCurY=0
                    this.time=28000
                    this.navmesh=[]
                    this.edit=true
                    this.ui=-1
                    this.price=0
                    this.src=[]

                    this.startX=250
                    this.startY=250
                    this.cellX=255
                    this.cellY=255
                    this.banstop=100

                    this.tech=true

                    this.isPlay=0

                    this.name=""
                    this.des=""

                    this.timer=0
                    this.mission=0
                }
                run(){
                    //this.generateNavMeshToPlayer()
                    //this.time+=1
                    this.cam.run(false,this.time,this.src,false)

                    //controls
                    if(this.ui==0){
                        if(this.mission==0){
                            NotEditMax=2
                            if(NotEditSel>NotEditMax){
                                NotEditSel=NotEditMax
                            }
                        }else{
                            if(this.mission==2){
                                NotEditMax=1
                                if(NotEditSel>NotEditMax){
                                    NotEditSel=NotEditMax
                                }
                            }else{
                                NotEditMax=6
                            }
                        }
                        if(Math.round(this.player.x+0.5)==this.startX&&Math.round(this.player.y+0.5)==this.startY){
                            if(this.mission==2){
                                this.ui=4
                                this.changeWorldEdit()
                            }
                        }else{
                            if(!this.edit){
                                this.timer+=0.01
                            }
                        }
                        this.player.run()
                        if(!this.edit&&Math.round(this.player.x+0.5)==this.cellX&&Math.round(this.player.y+0.5)==this.cellY){
                            if(this.mission==0){
                                this.world.world[this.player.spawnX][this.player.spawnY][0]=9
                                this.player.x=this.startX-0.5
                                this.player.y=this.startY-0.5
                                this.player.spawnX=this.startX
                                this.player.spawnY=this.startY
                                this.timer=0
                                this.mission=1
                            }else{
                                if(this.mission==1){
                                    this.mission=2
                                }
                            }
                        }
                        if(Rclicked&&this.edit){
                            if(key[sel].name=="worldspawn"){
                                this.startX=Math.round(this.GlobalCurX+0.5)
                                this.startY=Math.round(this.GlobalCurY+0.5)
                                this.player.spawnX=this.startX
                                this.player.spawnY=this.startY
                            }else{
                                if(key[sel].name=="cell"){
                                    this.cellX=Math.round(this.GlobalCurX+0.5)
                                    this.cellY=Math.round(this.GlobalCurY+0.5)
                                }else{
                                    this.world.world[Math.round(this.GlobalCurX+0.5)][Math.round(this.GlobalCurY+0.5)]=[sel,key[sel].strength,0,rot]
                                }
                            }
                            //this.calculateCost()
                        }
                        if(clicked&&this.edit){
                            this.world.world[Math.round(this.GlobalCurX+0.5)][Math.round(this.GlobalCurY+0.5)]=[0,0,0,0]
                            //this.calculateCost()
                        }
                        if(Rclicked&&!this.edit){
                            var x=this.player.x//Math.round(this.player.x+0.5)
                            var y=this.player.y//Math.round(this.player.y+0.5)
                            var dir=Math.atan2((Math.round(this.GlobalCurY+0.5)) - y, (Math.round(this.GlobalCurX+0.5)) - x)
                            for(var i=0;i<6;i++){
                                x+=Math.cos(dir)*0.5
                                y+=Math.sin(dir)*0.5
                                if(key[this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]].type==12){
                                    this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]=24
                                    this.player.spawnX=Math.round(x+0.5)
                                    this.player.spawnY=Math.round(y+0.5)
                                    break;
                                }
                                if(key[this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]].color=="#848f6f"){
                                    if(this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]==34){
                                        this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]=35
                                    }else{
                                        this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]=34
                                    }
                                    Rclicked=false
                                    break
                                }
                                if(key[this.world.world[Math.round(x+0.5)][Math.round(y+0.5)][0]].type!=0){
                                    break;
                                }
                            }
                            x=this.player.x//Math.round(this.player.x+0.5)
                            y=this.player.y//Math.round(this.player.y+0.5)
                            if(NotEditSel==2){//pearl
                                this.entity.push(new pearl(x,y,dir))
                                Rclicked=false
                            }
                            if(NotEditSel==3){//pickaxe
                                x=Math.round(this.player.x+0.5)
                                y=Math.round(this.player.y+0.5)
                                dir=Math.atan2((Math.round(this.GlobalCurY+0.5)) - y, (Math.round(this.GlobalCurX+0.5)) - x)
                                for(var i=0;i<10;i++){
                                    x+=Math.cos(dir)*0.5
                                    y+=Math.sin(dir)*0.5
                                    if(key[this.world.world[Math.round(x)][Math.round(y)][0]].type!=0){
                                        this.world.world[Math.round(x)][Math.round(y)][1]-=2
                                        break;
                                    }
                                }
                            }
                            if(NotEditSel==1){//food
                                this.player.hp=10
                                this.player.food=10
                            }
                            if(NotEditSel==4){//star charge
                                this.entity.push(new star(x,y,dir))
                                Rclicked=false
                            }
                            if(NotEditSel==5){//dirt
                                x=Math.round(this.player.x+0.5)
                                y=Math.round(this.player.y+0.5)
                                dir=Math.atan2((Math.round(this.GlobalCurY+0.5)) - y, (Math.round(this.GlobalCurX+0.5)) - x)
                                for(var i=0;i<10;i++){
                                    x+=Math.cos(dir)*0.5
                                    y+=Math.sin(dir)*0.5
                                    if(key[this.world.world[Math.round(x)][Math.round(y)][0]].type!=0){
                                        x-=Math.cos(dir)*0.5
                                        y-=Math.sin(dir)*0.5
                                        this.world.world[Math.round(x)][Math.round(y)]=[1,key[1].strength,0,0]
                                        break;
                                    }
                                }
                                Rclicked=false
                            }
                            if(NotEditSel==6){//core
                                x=Math.round(this.player.x+0.5)
                                y=Math.round(this.player.y+0.5)
                                dir=Math.atan2((Math.round(this.GlobalCurY+0.5)) - y, (Math.round(this.GlobalCurX+0.5)) - x)
                                for(var i=0;i<10;i++){
                                    x+=Math.cos(dir)*0.5
                                    y+=Math.sin(dir)*0.5
                                    if(key[this.world.world[Math.round(x)][Math.round(y)][0]].type!=0){
                                        x-=Math.cos(dir)*0.5
                                        y-=Math.sin(dir)*0.5
                                        this.world.world[Math.round(x)][Math.round(y)]=[9,key[9].strength,0,0]
                                        break;
                                    }
                                }
                                Rclicked=false
                            }
                        }
                        if(clicked&&!this.edit){
                            var x=Math.round(this.player.x+0.5)
                            var y=Math.round(this.player.y+0.5)
                            var dir=Math.atan2((Math.round(this.GlobalCurY+0.5)) - y, (Math.round(this.GlobalCurX+0.5)) - x)
                            for(var i=0;i<6;i++){
                                x+=Math.cos(dir)*0.5
                                y+=Math.sin(dir)*0.5
                                if(key[this.world.world[Math.round(x)][Math.round(y)][0]].type!=0){
                                    this.world.world[Math.round(x)][Math.round(y)][1]-=0.1
                                    break;
                                }
                            }
                        }
                        if(!this.edit&&this.tech){
                            this.runTech()
                        }
                        if(this.banstop>-5){
                            this.banstop-=1
                        }
                        this.tech=!this.tech
                    }else{
                        u=false
                        d=false
                        r=false
                        l=false
                    }
                }
                runTech(){
                    this.src=[]
                    var changes=[]
                    for(var x=1;x<this.world.world.length-1;x++){
                        for(var y=1;y<this.world.world.length-1;y++){
                            if(this.world.world[x][y][2]>0){
                                this.world.world[x][y][2]-=1
                            }
                        }
                    }
                    for(var x=1;x<this.world.world.length-1;x++){
                        for(var y=1;y<this.world.world.length-1;y++){
                            if(key[this.world.world[x][y][0]].type==2){//wire
                                if(this.world.world[x][y][2]>this.world.world[x+1][y][2]){
                                    changes.push([x+1,y,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x-1][y][2]){
                                    changes.push([x-1,y,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x][y+1][2]){
                                    changes.push([x,y+1,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x][y-1][2]){
                                    changes.push([x,y-1,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>0){
                                    this.src.push([x,y,2])
                                    this.world.world[x][y][0]=8
                                }else{
                                    this.world.world[x][y][0]=7
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==3){//power
                                this.world.world[x][y][2]=20
                                if(this.world.world[x][y][2]>this.world.world[x+1][y][2]){
                                    changes.push([x+1,y,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x-1][y][2]){
                                    changes.push([x-1,y,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x][y+1][2]){
                                    changes.push([x,y+1,this.world.world[x][y][2]-1])
                                }
                                if(this.world.world[x][y][2]>this.world.world[x][y-1][2]){
                                    changes.push([x,y-1,this.world.world[x][y][2]-1])
                                }
                                this.src.push([x,y,5])
                            }
                            if(key[this.world.world[x][y][0]].type==4){//light
                                if(this.world.world[x][y][2]>0){
                                    this.world.world[x][y][0]=10
                                    this.src.push([x,y,10])
                                }else{
                                    this.world.world[x][y][0]=11
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==5){//repeater
                                this.world.world[x][y][0]=12
                                if(this.world.world[x][y][3]==0){
                                    if(this.world.world[x-1][y][2]>0){
                                        changes.push([x+1,y,15])
                                        this.world.world[x][y][0]=13
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(this.world.world[x+1][y][2]>0){
                                        changes.push([x-1,y,15])
                                        this.world.world[x][y][0]=13
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(this.world.world[x][y-1][2]>0){
                                        changes.push([x,y+1,15])
                                        this.world.world[x][y][0]=13
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(this.world.world[x][y+1][2]>0){
                                        changes.push([x,y-1,15])
                                        this.world.world[x][y][0]=13
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==6){//inverter
                                this.world.world[x][y][0]=14
                                if(this.world.world[x][y][3]==0){
                                    if(this.world.world[x-1][y][2]==0){
                                        changes.push([x+1,y,15])
                                        this.world.world[x][y][0]=15
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(this.world.world[x+1][y][2]==0){
                                        changes.push([x-1,y,15])
                                        this.world.world[x][y][0]=15
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(this.world.world[x][y-1][2]==0){
                                        changes.push([x,y+1,15])
                                        this.world.world[x][y][0]=15
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(this.world.world[x][y+1][2]==0){
                                        changes.push([x,y-1,15])
                                        this.world.world[x][y][0]=15
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==7){//miniban
                                if(this.world.world[x][y][2]>0){
                                    this.world.world[x][y][0]=16
                                    this.src.push([x,y,5])
                                    if(dist(x,y,this.player.x+0.5,this.player.y+0.5)<5){
                                        if(this.banstop<0){
                                            this.ui=3
                                            this.changeWorldEdit()
                                        }
                                    }
                                }else{
                                    this.world.world[x][y][0]=17
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==8){//end
                                if(this.world.world[x][y][2]>0){
                                    this.world.world[x][y][0]=18
                                    if(this.banstop<0){
                                        this.ui=3
                                        this.changeWorldEdit()
                                    }
                                }else{
                                    this.world.world[x][y][0]=19
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==9){//piston
                                if(this.world.world[x][y][3]==0){
                                    if(this.world.world[x-1][y][2]>0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x+i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x+i][y][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x+i+1][y]=[...this.world.world[x+i][y]]
                                                this.world.world[x+i][y]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(this.world.world[x+1][y][2]>0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x-i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x-i][y][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x-i-1][y]=[...this.world.world[x-i][y]]
                                                this.world.world[x-i][y]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(this.world.world[x][y-1][2]>0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x][y+i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y+i][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x][y+i+1]=[...this.world.world[x][y+i]]
                                                this.world.world[x][y+i]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(this.world.world[x][y+1][2]>0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x][y-i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y-i][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x][y-i-1]=[...this.world.world[x][y-i]]
                                                this.world.world[x][y-i]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==16){//puller
                                if(this.world.world[x][y][3]==0){
                                    if(this.world.world[x-1][y][2]>0){
                                        var move=0
                                        for(var i=2;i<10;i++){
                                            if(key[this.world.world[x+i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x+i][y][0]].push){
                                                break
                                            }
                                            move+=1
                                        }
                                        if(key[this.world.world[x+1][y][0]].type==0){
                                            for(var i=1;i<move+1;i++){
                                                this.world.world[x+i][y]=[...this.world.world[x+i+1][y]]
                                                this.world.world[x+i+1][y]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(this.world.world[x+1][y][2]>0){
                                        var move=0
                                        for(var i=2;i<10;i++){
                                            if(key[this.world.world[x-i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x-i][y][0]].push){
                                                break
                                            }
                                            move+=1
                                        }
                                        if(key[this.world.world[x-1][y][0]].type==0){
                                            for(var i=1;i<move+1;i++){
                                                this.world.world[x-i][y]=[...this.world.world[x-i-1][y]]
                                                this.world.world[x-i-1][y]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(this.world.world[x][y-1][2]>0){
                                        var move=0
                                        for(var i=2;i<10;i++){
                                            if(key[this.world.world[x][y+i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y+i][0]].push){
                                                break
                                            }
                                            move+=1
                                        }
                                        if(key[this.world.world[x][y+1][0]].type==0){
                                            for(var i=1;i<move+1;i++){
                                                this.world.world[x][y+i]=[...this.world.world[x][y+i+1]]
                                                this.world.world[x][y+i+1]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(this.world.world[x][y+1][2]>0){
                                        var move=0
                                        for(var i=2;i<10;i++){
                                            if(key[this.world.world[x][y-i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y-i][0]].push){
                                                break
                                            }
                                            move+=1
                                        }
                                        if(key[this.world.world[x][y-1][0]].type==0){
                                            for(var i=1;i<move+1;i++){
                                                this.world.world[x][y-i]=[...this.world.world[x][y-i-1]]
                                                this.world.world[x][y-i-1]=[0,0,0,0]
                                            }
                                        }
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==10){//stone generator
                                if(this.world.world[x][y][3]==0){
                                    if(this.world.world[x-1][y][2]>0&&rand(0,50)==0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x+i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x+i][y][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x+i+1][y]=[...this.world.world[x+i][y]]
                                                if(key[this.world.world[x][y][0]].strength>50){
                                                    this.world.world[x+i][y]=[3,key[3].strength,0,0]
                                                }else{
                                                    this.world.world[x+i][y]=[2,key[2].strength,0,0]
                                                }
                                            }
                                        }
                                        if(key[this.world.world[x+1][y][0]].type==0){
                                            if(key[this.world.world[x][y][0]].strength>50){
                                                this.world.world[x+1][y]=[3,key[3].strength,0,0]
                                            }else{
                                                this.world.world[x+1][y]=[2,key[2].strength,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(this.world.world[x+1][y][2]>0&&rand(0,50)==0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x-i][y][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x-i][y][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x-i-1][y]=[...this.world.world[x-i][y]]
                                                if(key[this.world.world[x][y][0]].strength>50){
                                                    this.world.world[x-i][y]=[3,key[3].strength,0,0]
                                                }else{
                                                    this.world.world[x-i][y]=[2,key[2].strength,0,0]
                                                }
                                            }
                                        }
                                        if(key[this.world.world[x-1][y][0]].type==0){
                                            if(key[this.world.world[x][y][0]].strength>50){
                                                this.world.world[x-1][y]=[3,key[3].strength,0,0]
                                            }else{
                                                this.world.world[x-1][y]=[2,key[2].strength,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(this.world.world[x][y-1][2]>0&&rand(0,50)==0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x][y+i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y+i][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x][y+i+1]=[...this.world.world[x][y+i]]
                                                if(key[this.world.world[x][y][0]].strength>50){
                                                    this.world.world[x][y+i]=[3,key[3].strength,0,0]
                                                }else{
                                                    this.world.world[x][y+i]=[2,key[2].strength,0,0]
                                                }
                                            }
                                        }
                                        if(key[this.world.world[x][y+1][0]].type==0){
                                            if(key[this.world.world[x][y][0]].strength>50){
                                                this.world.world[x][y+1]=[3,key[3].strength,0,0]
                                            }else{
                                                this.world.world[x][y+1]=[2,key[2].strength,0,0]
                                            }
                                        }
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(this.world.world[x][y+1][2]>0&&rand(0,50)==0){
                                        var move=0
                                        for(var i=1;i<15;i++){
                                            if(key[this.world.world[x][y-i][0]].type==0){
                                                break
                                            }
                                            if(!key[this.world.world[x][y-i][0]].push){
                                                move=0
                                                break
                                            }
                                            move+=1
                                        }
                                        if(move<13){
                                            for(var i=move;i>0;i--){
                                                this.world.world[x][y-i-1]=[...this.world.world[x][y-i]]
                                                if(key[this.world.world[x][y][0]].strength>50){
                                                    this.world.world[x][y-i]=[3,key[3].strength,0,0]
                                                }else{
                                                    this.world.world[x][y-i]=[2,key[2].strength,0,0]
                                                }
                                            }
                                        }
                                        if(key[this.world.world[x][y-1][0]].type==0){
                                            if(key[this.world.world[x][y][0]].strength>50){
                                                this.world.world[x][y-1]=[3,key[3].strength,0,0]
                                            }else{
                                                this.world.world[x][y-1]=[2,key[2].strength,0,0]
                                            }
                                        }
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==11){//spikes
                                if(dist(x,y,this.player.x+0.5,this.player.y+0.5)<0.8&&rand(0,2)==0){
                                    this.player.hp-=1
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==14){//block detector
                                this.world.world[x][y][0]=26
                                if(this.world.world[x][y][3]==0){
                                    if(key[this.world.world[x+1][y][0]].type!=0){
                                        this.world.world[x-1][y][2]=15
                                        this.world.world[x][y][0]=27
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    if(key[this.world.world[x-1][y][0]].type!=0){
                                        this.world.world[x+1][y][2]=15
                                        this.world.world[x][y][0]=27
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    if(key[this.world.world[x][y+1][0]].type!=0){
                                        this.world.world[x][y-1][2]=15
                                        this.world.world[x][y][0]=27
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    if(key[this.world.world[x][y-1][0]].type!=0){
                                        this.world.world[x][y+1][2]=15
                                        this.world.world[x][y][0]=27
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==15){//killzone
                                if(this.world.world[x][y][2]>0){
                                    this.world.world[x][y][0]=28
                                    this.src.push([x,y,8])
                                    if(dist(x,y,this.player.x+0.5,this.player.y+0.5)<5){
                                        this.player.hp-=1
                                    }
                                }else{
                                    this.world.world[x][y][0]=29
                                }
                            }
                            if(this.world.world[x][y][0]==24){//respawn
                                if(!(this.player.spawnX==x&&this.player.spawnY==y)){
                                    this.world.world[x][y][0]=23
                                }
                            }
                            if(this.world.world[x][y][0]==30){
                                for(var i=0;i<this.entity.length;i++){
                                    if(this.entity[i].type=="pearl"&&dist(x,y,this.entity[i].x+0.5,this.entity[i].y+0.5)<1){
                                        this.entity.splice(i,1)
                                        this.world.world[x][y][0]=31
                                    }
                                }
                            }
                            if(this.world.world[x][y][0]==31){
                                if(this.world.world[x][y][3]==0){
                                    this.world.world[x+1][y][2]=5
                                    if(this.world.world[x-1][y][2]>0){
                                        var close=10
                                        var pos=[0,0]
                                        for(var x2=-2;x2<3;x2++){
                                            for(var y2=-2;y2<3;y2++){
                                                if(key[this.world.world[x+x2][y+y2][0]].type==0){
                                                    if(dist(x+x2,y+y2,x,y)<close){
                                                        close=dist(x+x2,y+y2,x,y)
                                                        pos=[x2,y2]
                                                    }
                                                }
                                            }
                                        }
                                        if(close!=10){
                                            this.player.x=x+pos[0]-0.5
                                            this.player.y=y+pos[1]-0.5
                                        }else{
                                            this.player.x=x
                                            this.player.y=y
                                        }
                                        this.world.world[x][y][0]=30
                                    }
                                }
                                if(this.world.world[x][y][3]==1){
                                    this.world.world[x-1][y][2]=5
                                    if(this.world.world[x+1][y][2]>0){
                                        var close=10
                                        var pos=[0,0]
                                        for(var x2=-2;x2<3;x2++){
                                            for(var y2=-2;y2<3;y2++){
                                                if(key[this.world.world[x+x2][y+y2][0]].type==0){
                                                    if(dist(x+x2,y+y2,x,y)<close){
                                                        close=dist(x+x2,y+y2,x,y)
                                                        pos=[x2,y2]
                                                    }
                                                }
                                            }
                                        }
                                        if(close!=10){
                                            this.player.x=x+pos[0]-0.5
                                            this.player.y=y+pos[1]-0.5
                                        }else{
                                            this.player.x=x
                                            this.player.y=y
                                        }
                                        this.world.world[x][y][0]=30
                                    }
                                }
                                if(this.world.world[x][y][3]==2){
                                    this.world.world[x][y+1][2]=5
                                    if(this.world.world[x][y-1][2]>0){
                                        var close=10
                                        var pos=[0,0]
                                        for(var x2=-2;x2<3;x2++){
                                            for(var y2=-2;y2<3;y2++){
                                                if(key[this.world.world[x+x2][y+y2][0]].type==0){
                                                    if(dist(x+x2,y+y2,x,y)<close){
                                                        close=dist(x+x2,y+y2,x,y)
                                                        pos=[x2,y2]
                                                    }
                                                }
                                            }
                                        }
                                        if(close!=10){
                                            this.player.x=x+pos[0]-0.5
                                            this.player.y=y+pos[1]-0.5
                                        }else{
                                            this.player.x=x
                                            this.player.y=y
                                        }
                                        this.world.world[x][y][0]=30
                                    }
                                }
                                if(this.world.world[x][y][3]==3){
                                    this.world.world[x][y-1][2]=5
                                    if(this.world.world[x][y+1][2]>0){
                                        var close=10
                                        var pos=[0,0]
                                        for(var x2=-2;x2<3;x2++){
                                            for(var y2=-2;y2<3;y2++){
                                                if(key[this.world.world[x+x2][y+y2][0]].type==0){
                                                    if(dist(x+x2,y+y2,x,y)<close){
                                                        close=dist(x+x2,y+y2,x,y)
                                                        pos=[x2,y2]
                                                    }
                                                }
                                            }
                                        }
                                        if(close!=10){
                                            this.player.x=x+pos[0]-0.5
                                            this.player.y=y+pos[1]-0.5
                                        }else{
                                            this.player.x=x
                                            this.player.y=y
                                        }
                                        this.world.world[x][y][0]=30
                                    }
                                }
                            }
                            if(key[this.world.world[x][y][0]].type==17){//player detector
                                this.world.world[x][y][0]=36
                                if(dist(x,y,this.player.x+0.5,this.player.y+0.5)<5){
                                    this.world.world[x][y][2]=15
                                    this.world.world[x][y][0]=37
                                }else{
                                    if(this.mission==1){
                                        if(dist(x,y,this.cellX,this.cellY)<5){
                                            this.world.world[x][y][2]=15
                                            this.world.world[x][y][0]=37
                                        }
                                    }
                                }
                            }
                        }
                    }
                    for(var i=0;i<changes.length;i++){
                        if(changes[i][2]>this.world.world[changes[i][0]][changes[i][1]][2]){
                            this.world.world[changes[i][0]][changes[i][1]][2]=changes[i][2]
                        }
                    }
                }
                calculateCost(){
                    this.price=0
                    for(var x=0;x<this.world.world.length;x++){
                        for(var y=0;y<this.world.world[x].length;y++){
                            this.price+=key[this.world.world[x][y][0]].cost
                        }
                    }
                }
                generateNavMeshToPlayer(){
                    var place=0
                    var tx=this.player.x
                    var ty=this.player.y
                    var dist=25
                    try{
                    var pathMap=[]
                    for(var i=0;i<50;i++){
                        pathMap.push([])
                    }
                    for(var x=0;x<pathMap.length;x++){
                        for(var y=0;y<50;y++){
                            pathMap[x].push(0)
                            if(key[game.world.world[x][y][0]].type!=0){
                                pathMap[x][y]=-1
                            }
                        }
                    }
                    place++
                    pathMap[Math.round(tx)][Math.round(ty)]=dist
                    for(var a=0;a<dist+2;a++){
                        for(var x=2;x<pathMap.length-2;x++){
                            for(var y=2;y<pathMap[x].length-2;y++){
                                if(x>0&&x<pathMap.length&&y>0&&y<pathMap[x].length){
                                    if(pathMap[x+1][y]<pathMap[x][y]-1&&pathMap[x+1][y]!=-1){
                                        pathMap[x+1][y]=pathMap[x][y]-1
                                    }
                                    if(pathMap[x-1][y]<pathMap[x][y]-1&&pathMap[x-1][y]!=-1){
                                        pathMap[x-1][y]=pathMap[x][y]-1
                                    }
                                    if(pathMap[x][y+1]<pathMap[x][y]-1&&pathMap[x][y+1]!=-1){
                                        pathMap[x][y+1]=pathMap[x][y]-1
                                    }
                                    if(pathMap[x][y-1]<pathMap[x][y]-1&&pathMap[x][y-1]!=-1){
                                        pathMap[x][y-1]=pathMap[x][y]-1
                                    }
                                }else{
                                    alert("err")
                                }
                            }
                        }
                    }
                    place++

                    this.navmesh=pathMap
            
                    }catch(error){
                        alert(error)
                    }
                }
                changeWorldPlay(){
                    this.tempWorld=[]
                    for(var i=0;i<this.world.world.length;i++){
                        this.tempWorld.push([])
                    }
                    for(var x=0;x<this.world.world.length;x++){
                        for(var y=0;y<this.world.world.length;y++){
                            this.world.world[x][y][2]=0
                            this.tempWorld[x].push([...this.world.world[x][y]])
                        }
                    }

                    this.src=[]
                    for(var x=0;x<this.cam.light.length;x++){
                        for(var y=0;y<this.cam.light.length;y++){
                            this.cam.light[x][y]=0
                        }
                    }

                    this.timer=0
                    if(this.mission!=-1){
                        this.mission=0
                    }

                    this.banstop=100
                    this.player.spawnX=this.startX
                    this.player.spawnY=this.startY
                    this.player.hp=10
                    this.player.food=10
                }
                changeWorldEdit(){
                    this.entity=[]

                    for(var x=0;x<this.world.world.length;x++){
                        for(var y=0;y<this.world.world.length;y++){
                            this.world.world[x][y]=[...this.tempWorld[x][y]]
                            this.world.world[x][y][2]=0
                        }
                    }

                    this.src=[]
                    for(var x=0;x<this.cam.light.length;x++){
                        for(var y=0;y<this.cam.light.length;y++){
                            this.cam.light[x][y]=0
                        }
                    }
                }
            }
            class Player{
                constructor(x,y){
                    this.x=x
                    this.y=y
                    this.hp=10
                    this.food=10
                    this.spawnX=x
                    this.spawnY=y
                }
                run(){
                    if(u){
                        this.y-=0.02
                        if(speed){
                            this.y-=0.02
                        }
                        if(game.edit){
                            this.y-=0.01
                        }
                        if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                            this.y+=0.02
                            if(speed){
                                this.y+=0.02
                            }
                        }
                    }
                    if(d){
                        this.y+=0.02
                        if(speed){
                            this.y+=0.02
                        }
                        if(game.edit){
                            this.y+=0.01
                        }
                        if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                            this.y-=0.02
                            if(speed){
                                this.y-=0.02
                            }
                        }
                    }
                    if(r){
                        this.x+=0.02
                        if(speed){
                            this.x+=0.02
                        }
                        if(game.edit){
                            this.x+=0.01
                        }
                        if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                            this.x-=0.02
                            if(speed){
                                this.x-=0.02
                            }
                        }
                    }
                    if(l){
                        this.x-=0.02
                        if(speed){
                            this.x-=0.02
                        }
                        if(game.edit){
                            this.x-=0.01
                        }
                        if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                            this.x+=0.02
                            if(speed){
                                this.x+=0.02
                            }
                        }
                    }
                    if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                        if(rand(0,100)==0){
                            this.hp-=1
                        }
                        if(this.x-Math.round(this.x)>Math.round(this.x)-this.x){
                            this.x-=0.1
                        }else{
                            this.x+=0.1
                        }
                    }
                    if(!(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==0||key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type==13)&&!game.edit){
                        if(rand(0,100)==0){
                            this.hp-=1
                        }
                        if(this.y-Math.round(this.y)>Math.round(this.y)-this.y){
                            this.y-=0.1
                        }else{
                            this.y+=0.1
                        }
                    }
                    if(!game.edit){
                        this.food-=0.001
                        if(this.food<0){
                            this.food=0
                            if(rand(0,100)==0){
                                this.hp-=1
                            }
                        }
                    }else{
                        this.hp=10
                        this.food=10
                    }
                    if(this.x<5||this.y<5||this.x>game.world.world.length-5||this.y>game.world.world[0].length-5){
                        this.hp=-1
                    }
                    if(this.hp<0){
                        var close=10
                        var best=[0,0]
                        for(var x=-3;x<4;x++){
                            for(var y=-3;y<4;y++){
                                if(key[game.world.world[this.spawnX+x][this.spawnY+y][0]].type==0){
                                    if(dist(x,y,0,0)<close){
                                        close=dist(x,y,0,0)
                                        best=[x,y]
                                    }
                                }
                            }
                        }
                        if(close==10||key[game.world.world[this.spawnX][this.spawnY][0]].type==0){
                            this.spawnX=game.startX
                            this.spawnY=game.startY
                        }
                        this.x=this.spawnX+best[0]-0.5
                        this.y=this.spawnY+best[1]-0.5
                        this.hp=10
                        this.food=10
                        game.ui=2
                    }
                }
                draw(cam,x,y){
                    cam.square(x,y,10,"red")
                }
            }
            class pearl{
                constructor(x,y,d){
                    this.type="pearl"
                    this.x=x
                    this.y=y
                    this.d=d
                    this.age=1000
                    this.x+=Math.cos(this.d)*0.6
                    this.y+=Math.sin(this.d)*0.6
                }
                run(i){
                    this.x+=Math.cos(this.d)*0.1
                    this.y+=Math.sin(this.d)*0.1
                    if(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type!=0){
                        this.x-=Math.cos(this.d)*0.1
                        this.y-=Math.sin(this.d)*0.1
                        game.player.x=this.x
                        game.player.y=this.y
                        game.entity.splice(i,1)
                    }
                    if(this.x<5||this.y<5||this.x>game.world.world.length-5||this.y>game.world.world[0].length-5||this.age<0){
                        game.entity.splice(i,1)
                    }
                    this.age-=1
                }
                draw(cam,x,y){
                    cam.circle(x,y,5,"#0000ff")
                }
            }
            class star{
                constructor(x,y,d){
                    this.x=x
                    this.y=y
                    this.d=d
                    this.age=500
                    this.type="star"
                }
                run(index){
                    this.x+=Math.cos(this.d)*0.1
                    this.y+=Math.sin(this.d)*0.1
                    if(key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].type!=0){
                        for(var i=0;i<100;i++){
                            game.entity.push(new Ray(this.x,this.y,i+rand(-10,10)*0.1,10))
                        }
                        game.entity.splice(index,1)
                    }
                    if(this.x<5||this.y<5||this.x>game.world.world.length-5||this.y>game.world.world[0].length-5||this.age<0){
                        game.entity.splice(i,1)
                    }
                    this.age-=1
                }
                draw(cam,x,y){
                    cam.circle(x,y,5,"yellow")
                }
            }
            class Ray{
                constructor(x,y,dir,power){
                    this.x=x
                    this.y=y
                    this.d=dir
                    this.power=power
                    this.age=10
                }
                run(i){
                    this.x+=Math.cos(this.d)*0.5
                    this.y+=Math.sin(this.d)*0.5
                    if((this.power*key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].blast)-game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][1]>-1){
                        game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][1]=-1
                        this.power-=game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][1]/key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].blast
                    }else{
                        game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][1]-=(this.power*key[game.world.world[Math.round(this.x+0.5)][Math.round(this.y+0.5)][0]].blast)
                        this.power=-1
                    }
                    if(this.power<0){
                        game.entity.splice(i,1)
                    }
                    if(this.x<10||this.y<10||this.x>game.world.world.length-10||this.y>game.world.world[0].length-10||this.age<0){
                        game.entity.splice(i,1)
                    }
                    this.age-=1
                }
                draw(cam,x,y){
                    cam.ctx.globalAlpha=1
                    cam.circle(x,y,15,"white")
                    cam.ctx.globalAlpha=1
                }
            }
            var game=new Game()
            var issafe=false
            function Run(){
                try{
                    game.run()
                }catch(er){
                    if(!issafe){
                        if(confirm("A Fatal Error Has Occured\n"+er+"\nAttempt To Save Prison Before Refreash?")){
                            try{
                                if(!game.edit){
                                    game.changeWorldEdit()
                                }
                                download("Error Backup",game.world.save("Error Backup","Backup Save File"))
                            }catch(err){
                                alert("Backup Save Failed/n"+err)
                            }
                        }
                        issafe=true
                    }
                    alert("Close Are Reopen Tab To Fix. If The Error Presists, Contact bgronfur@gmail.com")
                }
            }
            var curX=0
            var curY=0
            var clicked=false
            var Rclicked=false
            function coordinate(event) {
                curX=event.clientX
                curY=event.clientY
            }
            function Click(event){
                if(event.button==0){
                    clicked=true
                }
                if(event.button==2){
                    Rclicked=true
                }
            }
            var r=false;
            var l=false;
            var d=false;
            var u=false;
            var speed=false;

            var rot=0

            $(document).keydown(function(event) {
                if (event.keyCode === 38||event.keyCode === 87) {
                    u=true
                    rot=3
                }
                if (event.keyCode === 40||event.keyCode === 83) {
                    d=true
                    rot=2
                }
                if (event.keyCode === 37||event.keyCode === 65) {
                    l=true
                    rot=1
                }
                if (event.keyCode === 39||event.keyCode === 68) {
                    r=true
                    rot=0
                }
                if (event.keyCode === 32) {
                    speed=true
                }
                if (event.keyCode === 16&&!game.edit) {
                    NotEditSel+=1
                    if(NotEditSel>NotEditMax){
                        NotEditSel=0
                    }
                }
                if (event.keyCode === 17&&!game.edit) {
                    NotEditSel-=1
                    if(NotEditSel<0){
                        NotEditSel=NotEditMax
                    }
                }
            });
            $(document).keyup(function(event) {
                if (event.keyCode === 38||event.keyCode === 87) {
                    u=false
                }
                if (event.keyCode === 40||event.keyCode === 83) {
                    d=false
                }
                if (event.keyCode === 37||event.keyCode === 65) {
                    l=false
                }
                if (event.keyCode === 39||event.keyCode === 68) {
                    r=false
                }
                if (event.keyCode === 32) {
                    speed=false
                }
                if (event.keyCode === 69) {
                    game.ui=0
                    if(game.edit){
                        game.mission=-1
                        game.changeWorldPlay()
                        game.edit=false
                    }else{
                        game.changeWorldEdit()
                        game.edit=true
                    }
                }
            });

            let Inter = setInterval(Run, 1)
        }catch(e){
            alert("Start Error: "+e)
        }
