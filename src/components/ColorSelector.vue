<template>
  <div class="buttons">
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#5865F2"
      discordcolor="#FFFFFF"
      @click="setColor('#5865F2','#FFFFFF') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#5865F2"
      discordcolor="#23272A"
      @click="setColor('#5865F2','#23272A') + setRainbow(false)"
    /><br>
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#FFFFFF"
      discordcolor="#5865F2"
      @click="setColor('#FFFFFF','#5865F2') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#FFFFFF"
      discordcolor="#23272A"
      @click="setColor('#FFFFFF','#23272A') + setRainbow(false)"
    /><br>
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#23272A"
      discordcolor="#5865F2"
      @click="setColor('#23272A','#5865F2') + setRainbow(false)"
    />
    <DiscordLogo
      class="button"
      :discord-eyes="discordEyes"
      :animation-style="animationStyle"
      :custom-link="customLink"
      :width="size"
      :height="size"
      discordfill="#23272A"
      discordcolor="#FFFFFF"
      @click="setColor('#23272A','#FFFFFF') + setRainbow(false)"
    />
  </div>
</template>

<script>
import DiscordLogo from '../components/DiscordLogo.vue'

export default {
  name: 'ColorSelector',
  components: {
    DiscordLogo
  },
  props: {
    customLink: {
      type: String,
      default: ''
    },
    animationStyle: {
      type: String,
      default: 'swirl'
    },
    discordEyes: {
      type: String,
      default: 'none' //none wink angry noeyes
    }
  },
  emits: ['colorChange', 'rainbowChange'],
  data () {
    return {
      size: 48,
      colors: {
        discordcolor: '#FFFFFF',
        discordfill: '#5865F2',
      }
    }
  },
  computed: {
  },
	methods: {
    setColor: function (backgroundColor, textColor) {
      this.colors.discordcolor = textColor,
      this.colors.discordfill = backgroundColor
      this.$emit('colorChange', this.colors);
		},
    setRainbow: function (value) {
      this.$emit('rainbowChange', value);
		}
  }
}
</script>
<style>
.buttons {
  display: inline-block;
  position:relative;
  bottom: 60px;
}
.buttons .button {
  padding: 2px;
}
</style>
