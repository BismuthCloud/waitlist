<script lang="ts">
    export let src: string | ImageMetadata;
    export let title = '';
    export let x = 0;
    export let y = 0;
    export let scale = 1;
  </script>
  
  <div class="terminal-container">
    <div class="title-bar">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      {#if title}
        <span class="title">{title}</span>
      {/if}
    </div>
    
    <div class="image-wrapper">
      <img 
        {src}
        alt={title}
        style="transform: translate({x}px, {y}px) scale({scale})"
      />
    </div>
  </div>
  
  <style>
    .terminal-container {
      background: #1C1B1F;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    .title-bar {
      background: #2D2B35;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  
    .dots {
      display: flex;
      gap: 6px;
    }
  
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #FF5F56;
    }
  
    .dot:nth-child(2) {
      background: #FFBD2E;
    }
  
    .dot:nth-child(3) {
      background: #27C93F;
    }
  
    .title {
      color: #8E8B96;
      font-size: 14px;
      margin-left: 4px;
    }
  
    .image-wrapper {
      position: relative;
      overflow: hidden;
    }
  
    img {
      max-width: 100%;
      display: block;
    }
  </style>