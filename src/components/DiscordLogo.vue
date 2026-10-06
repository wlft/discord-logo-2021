<template>
  <svg
    ref="discordLogoRootElement"
    :color="discordcolor"
    :fill="discordfill"
    :width="width"
    :height="height"
    class="discord-logo-container"
    viewBox="0 0 48 48"
  >
    <rect
      width="100%"
      height="100%"
      fill="currentfill"
    />
    <foreignObject
      v-if="background !== 'none'"
      style="width:100%; height:100%"
    >
      <body xmlns="http://www.w3.org/1999/xhtml">
        <canvas
          id="discordCanvas"
          ref="canvas"
        />
      </body>
    </foreignObject>
    <defs>
      <g>
        <defs>
          <path
            id="discord-def-face"
            fill="currentcolor"
            transform="translate(2 2) scale(1.8333)"
            d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"
          />
          <g id="discord-def-face-eyes">
            <path
              id="discord-def-face-left-eye"
              fill="currentfill"
              transform="translate(2 2) scale(1.8333)"
              d="M8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189z"
            />
            <path
              id="discord-def-face-right-eye"
              fill="currentfill"
              transform="translate(2 2) scale(1.8333)"
              d="M15.9948 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
            />
          </g>
        </defs>
        <g :id="discordFaceID"> <!--id="discordLogoID"-->
          <use href="#discord-def-face" />
          <g id="discord-logo-eyes">
            <mask id="mask-right-eye-wink">
              <ellipse
                fill="#FFFFFF"
                ry="15"
                rx="15"
                cy="39.37"
                cx="35.82"
              />
              <ellipse
                fill="#000000"
                ry="15"
                rx="15"
                cy="40.17"
                cx="34.82"
              />
            </mask>
            <mask id="mask-eyes-angry">
              <rect
                height="48"
                width="48"
                y="0"
                x="0"
                fill="#FFFFFF"
              />
              <rect
                transform="rotate(45 24,14.87)"
                height="24"
                width="24"
                y="2.87"
                x="12"
                fill="#000000"
              />
            </mask>
            <g class="discord-eyes" />
          </g>
        </g>
        <mask id="mask-outer-layer">
          <rect
            width="100%"
            height="100%"
            fill="#FFFFFF"
          />
          <circle
            r="42%"
            cx="50%"
            cy="50%"
            fill="#000000"
          />
        </mask>
        <mask id="mask-middle-layer">
          <rect
            width="100%"
            height="100%"
            fill="#000000"
          />
          <circle
            r="43%"
            cx="50%"
            cy="50%"
            fill="#FFFFFF"
          />
          <circle
            r="32%"
            cx="50%"
            cy="50%"
            fill="#000000"
          />
        </mask>
        <mask id="mask-inner-layer">
          <rect
            width="100%"
            height="100%"
            fill="#000000"
          />
          <circle
            r="32%"
            cx="50%"
            cy="50%"
            fill="#FFFFFF"
          />
        </mask>
      </g>
    </defs>
    <g class="discord-logo" />
    <a
      v-if="customLink"
      :href="customLink"
    >
      <rect
        width="100%"
        height="100%"
        fill-opacity="0"
      />
    </a>
    <animate
      v-if="isRainbow"
      fill="freeze"
      dur="4000ms"
      begin="0s"
      values="#DA7272;#DABF72;#A6DA72;#72DA8C;#72DADA;#728CDA;#A672DA;#DA72C0;#DA7272"
      calMode="linear"
      attributeName="color"
      repeatCount="indefinite"
    />
  </svg>
</template>

<script>
// Each logo on the page needs its own <use> target.
let instanceCount = 0

export default {
//TODO: add animationStyle and angry/wink discord logo via JavaScript! (define a root element, get ID from there)
  name: 'DiscordLogo',
	props: {
		width: {
			type: Number,
			default: 300
		},
		height: {
			type: Number,
			default: 300
		},
		discordcolor: {
      type: String,
      default: '#5865F2'
		},
    discordfill: {
      type: String,
      default: '#23272A'
    },
    customLink: {
      type: String,
      default: ''
    },
    animationStyle: {
      type: String,
      default: 'swirl'  //swirl rotateX rotateY shake softshake
    },
    isRainbow: {
      type: Boolean,
      default: false
    },
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    },
    background: {
      type: String,
      default: 'none'
    }
	},
  data () {
    return {
      discordFaceID: 'discordFaceID' + instanceCount++,
      canvas: '',
      ctx: '',
      frames: 0,
      RAF: null
    }
  },
  watch: {
    animationStyle: function () {
      this.updateAnimation();
    },
    discordEyes: function () {
      this.updateEyes();
    },
    background: function () {
      this.wireUpCanvas()
    }
  },
  mounted() {
    this.update()
    this.wireUpCanvas()
  },
  beforeUnmount() {
    if (this.RAF !== null) cancelAnimationFrame(this.RAF)
  },
  methods: {
    update: function() {
      this.updateAnimation();
      this.updateEyes();
    },
    updateAnimation: function () {
      this.$nextTick(function () {
        var svgns = "http://www.w3.org/2000/svg";
        var xlinkns = "http://www.w3.org/1999/xlink";
        var discordLogoRootElement = this.$refs.discordLogoRootElement
        var discordLogo = discordLogoRootElement.getElementsByClassName("discord-logo")[0]
        while (discordLogo.firstChild) {
          discordLogo.removeChild(discordLogo.firstChild);
        }
        discordLogo.setAttribute("class", "discord-logo " + this.animationStyle + "-animation");
        var useElement = document.createElementNS(svgns, "use");
        useElement.setAttribute("class", "discord-original");
        useElement.setAttributeNS(xlinkns, "href", "#" + this.discordFaceID);
        discordLogo.appendChild(useElement)
        if (this.animationStyle == "swirl") {
          ["inner", "middle", "outer"].map(function(item) {
            var useElement = document.createElementNS(svgns, "use");
            useElement.setAttribute("class", "discord-" + item + "-layer");
            useElement.setAttributeNS(xlinkns, "href", "#" + this.discordFaceID);
            useElement.setAttribute("mask", "url(#mask-" + item + "-layer)");
            discordLogo.appendChild(useElement)
          }, this)
        }
      })
    },
    updateEyes: function() {
      this.$nextTick(function () {
        var svgns = "http://www.w3.org/2000/svg";
        var xlinkns = "http://www.w3.org/1999/xlink";
        var discordLogoRootElement = this.$refs.discordLogoRootElement
        var discordEyesSVG = discordLogoRootElement.getElementsByClassName("discord-eyes")[0]
        while (discordEyesSVG.firstChild) {
          discordEyesSVG.removeChild(discordEyesSVG.firstChild);
        }
        if (this.discordEyes == "angry") {
          const useElement = document.createElementNS(svgns, "use");
          useElement.setAttributeNS(xlinkns, "href", "#discord-def-face-eyes");
          useElement.setAttribute("mask", "url(#mask-eyes-angry)");
          discordEyesSVG.appendChild(useElement);
        }
        else if (this.discordEyes == "wink") {
          const leftEye = document.createElementNS(svgns, "use");
          leftEye.setAttributeNS(xlinkns, "href", "#discord-def-face-left-eye");
          discordEyesSVG.appendChild(leftEye);
          const rightEye = document.createElementNS(svgns, "use");
          rightEye.setAttributeNS(xlinkns, "href", "#discord-def-face-right-eye");
          rightEye.setAttribute("mask", "url(#mask-right-eye-wink)");
          discordEyesSVG.appendChild(rightEye);
        }
        else if (this.discordEyes == "none") {
          const useElement = document.createElementNS(svgns, "use");
          useElement.setAttributeNS(xlinkns, "href", "#discord-def-face-eyes");
          discordEyesSVG.appendChild(useElement);
        }
        // "noeyes" draws nothing.
      })
    },
    wireUpCanvas () {
      if(this.RAF !== null) cancelAnimationFrame(this.RAF)
      this.RAF = null
      if(this.background !== 'none') {
        this.$nextTick(function () {
          this.canvas = this.$refs.canvas
          this.ctx = this.canvas.getContext('2d')
          this.draw()
        });
      }
    },
    draw () {
      let t=this.frames/200
      let s, i, X, Z = 0, j, p, w, W, V
      let r=q=>this.ctx[q?"lineTo":"moveTo"](w+(X-7)/Z*w*2,2/Z*w)
      switch(this.background) {
        case 'starfield':
          this.canvas.style.width = "50px"
          this.canvas.style.height = "50px"
          this.canvas.width = 250
          this.canvas.height = 250
          this.ctx.fillStyle="#fffa"
          for(let j=250, w=100; j--;){
            Z=1-(j*j/w+this.frames/100)%1
            s = 1 + Math.pow(3*(1-Z),2)
            this.ctx.beginPath()
            this.ctx.arc(w+(99-j%199)/Z,100+(99-j*j*7%198)/Z,s,0,7)
            this.ctx.fill()
          }
        break;
        case 'grid':
          this.canvas.style.width = "50px"
          this.canvas.style.height = "50px"
          this.canvas.width = 250
          this.canvas.height = 250
          this.ctx.strokeStyle="#fff4"
          w=120,i=200,t=this.frames/70,X=0
          for(;i--;this.ctx.lineWidth=0.5+8/(1+Z),r(Z++),r(X--),this.ctx.stroke())this.ctx.beginPath(),X=(i+Math.sin(t)*4)%14,Z=1+(i/14|0)-t*5%1,r()
        break;
        case 'rush':
          this.canvas.style.width = "50px"
          this.canvas.style.height = "50px"
          this.canvas.width = 250
          this.canvas.height = 250
          this.ctx.fillStyle="#fff3"
          W=120,j=10
          for(;--j;)for(let i=16;i--;this.ctx.fillRect(W+Math.sin(p=.39*i+j/8-6.03*V-Math.sin(t*2)*3)/Z*W-s/2,120+Math.cos(p)/Z*W-s/2,s,s))Z=.5+j/2-t*6+(V=(t*6)|0),s=200/(1+Z)/(1+Z)/(1+Z)
        break;
      }
      this.frames++;
      this.RAF = requestAnimationFrame(this.draw)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* discrd logo */
.discord-logo {
  transform: scale(0.7);
  transform-origin: 24px 24px;
}

/* ROTATEY animation */
.discord-logo.rotateY-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .rotateY-animation .discord-original, .animated .rotateY-animation .discord-original {
  transform: rotateY(180deg);
}

/* ROTATEX animation */
.discord-logo.rotateX-animation .discord-original {
  transition: transform 300ms linear;
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .rotateX-animation .discord-original, .animated .rotateX-animation .discord-original {
  transform: rotateX(360deg);
}

/* SHAKE animation */
.discord-logo.shake-animation .discord-original {
}
.discord-logo-container:hover .shake-animation .discord-original, .animated .shake-animation .discord-original {
  animation-name:shake;
  animation-duration:100ms;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite
}
@keyframes shake
{
  2% {transform:translate(.5px, 1.5px) rotate(1.5deg)}
  4% {transform:translate(.5px, 1.5px) rotate(1.5deg)}
  6% {transform:translate(-1.5px, -1.5px) rotate(-.5deg)}
  8% {transform:translate(.5px, -.5px) rotate(.5deg)}
  10% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  12% {transform:translate(2.5px, 1.5px) rotate(-.5deg)}
  14% {transform:translate(-1.5px, 2.5px) rotate(-.5deg)}
  16% {transform:translate(-.5px, .5px) rotate(.5deg)}
  18% {transform:translate(.5px, 2.5px) rotate(1.5deg)}
  20% {transform:translate(-.5px, -.5px) rotate(.5deg)}
  22% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  24% {transform:translate(-1.5px, -1.5px) rotate(.5deg)}
  26% {transform:translate(2.5px, -.5px) rotate(-.5deg)}
  28% {transform:translate(1.5px, -.5px) rotate(.5deg)}
  30% {transform:translate(.5px, .5px) rotate(-.5deg)}
  32% {transform:translate(-1.5px, .5px) rotate(-.5deg)}
  34% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  36% {transform:translate(-.5px, -.5px) rotate(1.5deg)}
  38% {transform:translate(-1.5px, -1.5px) rotate(.5deg)}
  40% {transform:translate(-1.5px, 1.5px) rotate(1.5deg)}
  42% {transform:translate(.5px, -1.5px) rotate(1.5deg)}
  44% {transform:translate(.5px, .5px) rotate(.5deg)}
  46% {transform:translate(-1.5px, -1.5px) rotate(1.5deg)}
  48% {transform:translate(.5px, -1.5px) rotate(.5deg)}
  50% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  52% {transform:translate(-.5px, 2.5px) rotate(-.5deg)}
  54% {transform:translate(.5px, .5px) rotate(.5deg)}
  56% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  58% {transform:translate(2.5px, .5px) rotate(.5deg)}
  60% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  62% {transform:translate(1.5px, -.5px) rotate(-.5deg)}
  64% {transform:translate(1.5px, -1.5px) rotate(1.5deg)}
  66% {transform:translate(1.5px, -1.5px) rotate(-.5deg)}
  68% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  70% {transform:translate(1.5px, -1.5px) rotate(1.5deg)}
  72% {transform:translate(1.5px, 1.5px) rotate(-.5deg)}
  74% {transform:translate(-.5px, 1.5px) rotate(1.5deg)}
  76% {transform:translate(1.5px, 2.5px) rotate(.5deg)}
  78% {transform:translate(-.5px, .5px) rotate(.5deg)}
  80% {transform:translate(-1.5px, 2.5px) rotate(.5deg)}
  82% {transform:translate(.5px, 2.5px) rotate(-.5deg)}
  84% {transform:translate(2.5px, -.5px) rotate(.5deg)}
  86% {transform:translate(1.5px, .5px) rotate(.5deg)}
  88% {transform:translate(-.5px, -1.5px) rotate(-.5deg)}
  90% {transform:translate(1.5px, -.5px) rotate(1.5deg)}
  92% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  94% {transform:translate(2.5px, .5px) rotate(-.5deg)}
  96% {transform:translate(.5px, 2.5px) rotate(.5deg)}
  98% {transform:translate(2.5px, -1.5px) rotate(1.5deg)}
  0%,100% {transform:translate(0, 0) rotate(0)}
}

/* SOFTSHAKE animation */
.discord-logo.softshake-animation .discord-original {
  transform-origin: 24px 24px;
}
.discord-logo-container:hover .softshake-animation .discord-original, .animated .softshake-animation .discord-original {
  animation: softshake 2000ms linear forwards;
}
@keyframes softshake
{
  0%,66%,100% {transform:rotate( 0deg)}
   3% {transform:rotate(-18.0deg)}
   6% {transform:rotate( 14.4deg)}
   9% {transform:rotate(-11.5deg)}
  12% {transform:rotate( 9.21deg)}
  15% {transform:rotate(-7.37deg)}
  18% {transform:rotate( 5.89deg)}
  21% {transform:rotate(-4.71deg)}
  24% {transform:rotate( 3.77deg)}
  27% {transform:rotate(-3.02deg)}
  30% {transform:rotate( 2.41deg)}
  33% {transform:rotate(-1.93deg)}
  36% {transform:rotate( 1.54deg)}
  39% {transform:rotate(-1.23deg)}
  42% {transform:rotate( 0.99deg)}
  45% {transform:rotate(-0.79deg)}
  48% {transform:rotate( 0.63deg)}
  51% {transform:rotate(-0.50deg)}
  54% {transform:rotate( 0.40deg)}
  57% {transform:rotate(-0.32deg)}
  60% {transform:rotate( 0.25deg)}
  63% {transform:rotate(-0.20deg)}
}

/* SWIRL animation */
.discord-logo.swirl-animation .discord-outer-layer {
  transition: transform 800ms cubic-bezier(0.7, 1, 0.7, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-outer-layer, .animated .swirl-animation .discord-outer-layer {
  transform: scale(1.5) rotate(360deg);
}
.discord-logo.swirl-animation .discord-middle-layer {
  transition: transform 800ms cubic-bezier(0.5, 1, 0.5, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-middle-layer, .animated .swirl-animation .discord-middle-layer {
  transform: scale(1.4) rotate(360deg);
}
.discord-logo.swirl-animation .discord-inner-layer {
  transition: transform 800ms cubic-bezier(0.3, 1, 0.3, 1);
  transform-origin: 50% 50%;
}
.discord-logo-container:hover .swirl-animation .discord-inner-layer, .animated .swirl-animation .discord-inner-layer {
  transform: scale(1.3) rotate(360deg);
}
.discord-logo.swirl-animation .discord-original {
  transition: visibility 0ms;
  transition-delay: 800ms;
}
.discord-logo-container:hover .swirl-animation .discord-original, .animated .swirl-animation .discord-original {
  visibility: hidden;
  transition-delay: 0ms;
}
foreignObject{
  width: 100%;
  height: 100%;
}
</style>
