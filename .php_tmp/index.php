<!DOCTYPE html>
<html lang="en" class="has-brand-image">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes">

  <?php
  $meta_author = '';
  $meta_url = '';
  $meta_title = '';
  $meta_description = '';
  $meta_keywords = '';
  $meta_img_src = '';
  // 
  $meta_twitter_creator = '@';
  ?>

  <!--Meta SEO -->
  <?php include 'src/parts/head-seo.php'; ?>

  <!--App Theme -->
  <?php include 'src/parts/head-app-theming.php'; ?>

  <!--Favicon-->
  <?php include 'src/parts/head-favicon.php'; ?>

  <!-- RSS -->
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/atom.xml">

  <!-- Resets -->
  <style type="text/css">
    <?php include 'src/styles/cell_reset.css'; ?>
  </style>

  <!--Imports-->
  <style type="text/css">
    <?php include 'var_mercury.css'; ?>
  </style>
  <link rel="stylesheet" href="styles.css" />

</head>

<body>
  <main>
    <div id="loop" aria-hidden="true" focusable="false">
      <div class="overlay"></div>
      <figure class="cell video self cover cover-full self-c-h bleed">
        <div class="media">
          <video class="custom" autoplay playsinline loop preload disablePictureInPicture>
            <source src="public/video/loop.mp4" type="video/mp4" />
          </video>
        </div>
      </figure>
    </div>



    <section id="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 165">

        <g fill="#02122e" class="animate">
          <path d="M54.5,115.5h-15l-22,27h-8l-3,11h3l-7,9h15l5-9h9l-3,9h14l2-9h5l3-11h-5L54.5,115.5z M36,145l-8.5-0.5 L40,130L36,145z"></path>
          <path d="M48.5 162.5 61.5 115.5 77.5 115.5 77.5 135.5 78.5 135.5 84.5 115.5 97.5 115.5 83.5 162.5 68.5 162.5 68.5 140.5 67.5 140.5 62.5 162.5z"></path>
          <path d="M237.5 115.5 251.5 115.5 237.5 162.5 223.5 162.5z"></path>
          <path d="M106.5 162.5 121.5 115.5 138.5 115.5 138.5 131.5 148.5 115.5 165.5 115.5 151.5 162.5 135.5 162.5 144 138 130.5 155.5 128 138 121.5 162.5z"></path>
          <path d="M192.5,115.5h-11l-15,27h-8l-3,11h3l-4,9h12l4-9h10v9h12v-9h6v-11h-6V115.5z M185.5,144.5h-11l11-16V144.5 z"></path>
          <path d="M201.5 115.5 234.5 115.5 232 125 221 125 211.5 162.5 197.5 162.5 209 125 198 125z"></path>
          <path d="M102.5 115.5 116.5 115.5 102.5 162.5 88.5 162.5z"></path>
          <path d="M254.5,115.5h14l-2,25l14-25h12l-26,47c0,0-12,1-12,0S254.5,115.5,254.5,115.5z"></path>
          <path d="M297.5,115.5l-15,47h31l2-11L297,151l2-9h18l2-8c0,0-15,0-15-1s2-9,2-9s18,1,18,0s2-9,2-9L297.5,115.5z"></path>
        </g>
        <g fill="#e64ba9" class="space">
          <path d="M363.5,130.3l2-12.3c0,0-25.5-9.4-31,8.5c-4.5,14.7,6.5,16.6,9.5,17.5s4,8.5-5,9.5 s-14.5-6.2-14.5-6.2v11.4c0,0,6.3,6.5,20.5,3.3c17-3.8,14-19,14-19s0.1-6.9-11-9.5C344,132.7,349.5,117,363.5,130.3z"></path>
          <path d="M389.3,116.5L370,117l-12.5,45.5L373,162c0,0,5-19,5-20c0-1,19,3.4,23-9.4 c0-0.1,0.1-0.3,0.1-0.4C403.5,124.4,397.5,116.5,389.3,116.5z M378,134l3-9c3.3,0,9-1,9,4C390,135,381.3,134,378,134z"></path>
          <path d="M428.5,115.5h-11l-15,27h-8l-3,11h3l-4,9h12l4-9h10v9h12v-9h6v-11h-6V115.5z M421.5,144.5 h-11l11-16V144.5z"></path>
          <path d="M469.5,127.5l3-11c0,0-28.6-7.7-35,21c-6,27,21,25,21,25l3-11c0,0-17,4-12.5-12.5 C454,120.5,469.5,127.5,469.5,127.5z"></path>
          <path d="M477.5,115.5l-14,47h30l3-11h-18l3-9h17l3-9h-17c0-1,2.5-9.5,2.5-9.5s18.5-0.5,18,0 s2.5-8.5,2.5-8.5H477.5z"></path>
        </g>
        <path d="M307,95.1l-74.5,0.5c-0.8,0-1.5-0.2-1.5-1V93h-16c0,0-2.5,13.5,11.5,13.5 c0,0,86.1,0.2,86.7,0.2c2.3-0.2,8,0.3,11.3-11.2c2-6.9,3.9-16.5,4.7-20.3c0.4-2,0.5-4,0.3-5.9c-0.4-3.6-2-8.2-7.5-8.2l-29.7,0 c-0.4,0-0.7-0.3-0.7-0.7c-0.1-1.3-0.1-3.8-0.1-3.8c0-2.1-3.2-4-5.3-4h-35.7v-37h62.8c1.2,0,2.2,1,2.2,2.2v30.8c0,0,13,1,13.5-5.5 c0.5-6,0-32.1,0.1-32.5c0.2-2-0.2-8.5-12.1-8.5c-14,0-71,0-71,0s-9.5,0.5-9.5,10.5v44.2c0,2.3,0.8,4.6,2.5,6.3 c1.8,1.8,4.5,3.5,8.5,3.5c0,0,32,0.1,32,0.2c-0.1,1-0.2,5.8,6,5.8c5,0,19,0,27,0.3l0,0c2.3,0.2,2.9,2,3,4.1l0,0 c0.1,2.1-3,11.2-3,11.2c-0.5,1.3-1,2.6-1.4,3.9C310.5,93.8,309.8,94.6,307,95.1z" fill="#46927c" class="shadow"></path>
        <path d="M308,95.1l-74.5,0.5c-0.8,0-1.5-0.2-1.5-1V93h-16c0,0-2.5,13.5,11.5,13.5c0,0,86.1,0.2,86.7,0.2 c2.3-0.2,8,0.3,11.3-11.2c2-6.9,3.9-16.5,4.7-20.3c0.4-2,0.5-4,0.3-5.9c-0.4-3.6-2-8.2-7.5-8.2l-29.7,0c-0.4,0-0.7-0.3-0.7-0.7 c-0.1-1.3-0.1-3.8-0.1-3.8c0-2.1-3.2-4-5.3-4h-35.7v-37h62.8c1.2,0,2.2,1,2.2,2.2v30.8c0,0,13,1,13.5-5.5c0.5-6,0-32.1,0.1-32.5 c0.2-2-0.2-8.5-12.1-8.5c-14,0-71,0-71,0s-9.5,0.5-9.5,10.5v44.2c0,2.3,0.8,4.6,2.5,6.3c1.8,1.8,4.5,3.5,8.5,3.5c0,0,32,0.1,32,0.2 c-0.1,1-0.2,5.8,6,5.8c5,0,19,0,27,0.3l0,0c2.3,0.2,2.9,2,3,4.1l0,0c0.1,2.1-3,11.2-3,11.2c-0.5,1.3-1,2.6-1.4,3.9 C311.5,93.8,310.8,94.6,308,95.1z" style="fill: #091834;" class="s"></path>

        <path fill="#E62065" d="M253.5 98.5H290.5V103.5H253.5z"></path>
        <path fill="#E62065" d="M306.5 92.5 233.5 92.5 239.5 74.5 312.5 74.5z"></path>
        <circle cx="284.5" cy="58.5" r="2" fill="#E62065"></circle>
        <g fill="pink">
          <path d="M251.5,49.5v-34h62.8c1.2,0,2.2,1,2.2,2.2v30.8c0,0,13,1,13.5-5.5 c0.5-6,0-32.1,0.1-32.5c0.2-2-0.2-8.5-12.1-8.5c-14,0-71,0-71,0s-9.5,0.5-9.5,10.5v37H251.5z" opacity=".25"></path>
        </g>
        <g fill="#ff5270">
          <path d="M286.5,58.5L286.5,58.5c-1.3-0.6-2.7-0.6-4,0l0,0c0-1.1,0.9-2,2-2 S286.5,57.4,286.5,58.5z"></path>
          <path d="M253.5 98.5H290.5V99.5H253.5z"></path>
          <path d="M244.5 79.6 239.5 79.6 240.5 77 245.5 77z"></path>
          <path d="M251.5 79.5 246.5 79.5 247.5 76.5 252.5 76.5z"></path>
          <path d="M258.5 79.5 253.5 79.5 254.5 76.5 259.5 76.5z"></path>
          <path d="M265.5 79.5 260.5 79.5 261.5 76.5 266.5 76.5z"></path>
          <path d="M272.5 79.5 267.5 79.5 268.5 76.5 273.5 76.5z"></path>
          <path d="M279.5 79.5 274.5 79.5 275.5 76.5 280.5 76.5z"></path>
          <path d="M286.5 79.5 281.5 79.5 282.5 76.5 287.5 76.5z"></path>
          <path d="M293.5 79.5 288.5 79.5 289.5 76.5 294.5 76.5z"></path>
          <path d="M300.5 79.5 295.5 79.5 296.5 76.5 301.5 76.5z"></path>
          <path d="M307.5 79.5 302.5 79.5 303.5 76.5 308.5 76.5z"></path>
          <path d="M242.5 84.5 237.5 84.5 238.5 81.5 243.5 81.5z"></path>
          <path d="M249.5 84.5 244.5 84.5 245.5 81.5 250.5 81.5z"></path>
          <path d="M256.5 84.5 251.5 84.5 252.5 81.5 257.5 81.5z"></path>
          <path d="M263.5 84.5 258.5 84.5 259.5 81.5 264.5 81.5z"></path>
          <path d="M270.5 84.5 265.5 84.5 266.5 81.5 271.5 81.5z"></path>
          <path d="M277.5 84.5 272.5 84.5 273.5 81.5 278.5 81.5z"></path>
          <path d="M284.5 84.5 279.5 84.5 280.5 81.5 285.5 81.5z"></path>
          <path d="M291.5 84.5 286.5 84.5 287.5 81.5 292.5 81.5z"></path>
          <path d="M298.5 84.5 293.5 84.5 294.5 81.5 299.5 81.5z"></path>
          <path d="M305.5 84.5 300.5 84.5 301.5 81.5 306.5 81.5z"></path>
          <path d="M241.5 89.5 236.5 89.5 237.5 86.5 242.5 86.5z"></path>
          <path d="M248.5 89.5 243.5 89.5 244.5 86.5 249.5 86.5z"></path>
          <path d="M255.5 89.5 250.5 89.5 251.5 86.5 256.5 86.5z"></path>
          <path d="M262.5 89.5 257.5 89.5 258.5 86.5 263.5 86.5z"></path>
          <path d="M269.5 89.5 264.5 89.5 265.5 86.5 270.5 86.5z"></path>
          <path d="M276.5 89.5 271.5 89.5 272.5 86.5 277.5 86.5z"></path>
          <path d="M283.5 89.5 278.5 89.5 279.5 86.5 284.5 86.5z"></path>
          <path d="M290.5 89.5 285.5 89.5 286.5 86.5 291.5 86.5z"></path>
          <path d="M297.5 89.5 292.5 89.5 293.5 86.5 298.5 86.5z"></path>
          <path d="M304.5 89.5 299.5 89.5 300.5 86.5 305.5 86.5z"></path>
        </g>
        <path fill="none" d="M0 0H510V165H0z"></path>
      </svg>
      <div class="rte">
        <span class="tag">We Create Stylized Art</span>
      </div>
      <section id="network">

        <!-- <div class="h5"><button>About</button></div> -->
        <div class="links">
          <!-- <a target="_blank" class="txt" href="#">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path fill="none" d="M0 0H256V256H0z" />
              <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.9v.9a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8,20,20,0,1,0-20-20,8,8,0,0,1-16,0,36,36,0,1,1,44,35.1Z" />
            </svg>
          </i>
          <span class="srt">about</span>
        </a> -->

          <?php $email = 'info@animativespace.com'; ?>
          <a class="email txt" href="mailto:<?php echo $email ?>">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256">
                <path fill="none" d="M0 0H256V256H0z" />
                <path fill="#02122e" d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z" />
              </svg>
            </i>
            <span class="srt">email</span>
          </a>

          <a target="_blank" class="txt" href="https://www.artstation.com/animativespace">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="32" height="32" viewBox="0 0 32 32">
                <path d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16z" fill="#e64ba9" />
                <g fill="#02122e">
                  <path d="m6.8 20.6 1.6 2.8c.3.6 1 1.1 1.7 1.1h10.7l-2.2-3.8-11.8-.1z" />
                  <path d="M25.9 20.6c0-.4-.1-.7-.3-1l-6.3-11c-.3-.6-1-1-1.7-1h-3.3L24 24.4l1.5-2.7c.3-.5.4-.7.4-1.1z" />
                  <path d="m17 17.8-4.3-7.5-4.3 7.5z" />
                </g>
              </svg>
            </i>
            <span class="srt">artstation</span>
          </a>

          <a target="_blank" class="txt" href="https://www.instagram.com/animativespace">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="56.6" height="56.6" viewBox="0 0 56.6 56.6">
                <circle cx="28.3" cy="28.3" r="28.3" fill="#e64ba9" />
                <path d="M20 10.3h16.6c5.3 0 9.7 4.4 9.7 9.7v16.6c0 5.3-4.4 9.7-9.7 9.7H20c-5.3 0-9.7-4.4-9.7-9.7V20c-.1-5.3 4.3-9.7 9.7-9.7zm18 6.3c1.1 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1zm-9.7 1.9c5.4 0 9.9 4.5 9.9 9.8 0 5.4-4.5 9.8-9.8 9.8h-.1c-5.3 0-9.7-4.4-9.7-9.8-.1-5.3 4.3-9.8 9.7-9.8zm0 3.3c3.6 0 6.6 2.9 6.6 6.5s-2.9 6.6-6.5 6.6h-.1c-3.5 0-6.5-2.9-6.5-6.6 0-3.5 2.9-6.5 6.5-6.5zm-8.2-8.4h16.5c3.7 0 6.7 3 6.7 6.7v16.4c0 3.7-3 6.7-6.7 6.7H20.1c-3.7 0-6.7-3-6.7-6.7V20.1c-.1-3.7 3-6.7 6.7-6.7z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#02122e" />
              </svg>
            </i>
            <span class="srt">instagram</span>
          </a>

          <a target="_blank" class="txt" href="https://www.linkedin.com/company/animativespace/">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="56.6" height="56.6" viewBox="0 0 56.6 56.6">
                <path d="M56.6 28.3c0 15.6-12.7 28.3-28.3 28.3S0 43.9 0 28.3 12.7 0 28.3 0s28.3 12.7 28.3 28.3z" fill="#e64ba9" />
                <path d="M12.6 22.6H19V44h-6.4V22.6zm3.1-10.8c2.1 0 3.9 1.7 3.9 3.9 0 2.1-1.7 3.9-3.9 3.9-2.1 0-3.8-1.7-3.8-3.9.1-2.2 1.7-3.9 3.8-3.9zm7 10.8H29v3c1.3-2 3.5-3.2 6.1-3.2h1.7c4 0 7.2 3.3 7.2 7.2V44h-6.3V32.4c-.1-2.4-1.7-4.3-4.2-4.3-2.4 0-4.5 1.9-4.6 4.3V44h-6.3V22.6z" fill="#02122e" />
              </svg>
            </i>
            <span class="srt">linkedin</span>
          </a>

          <a target="_blank" class="txt" href="https://www.youtube.com/channel/UCceSEbSH_z68eQ4xE28ItOw">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="56.6" height="56.6" viewBox="0 0 56.6 56.6">
                <circle cx="28.3" cy="28.3" r="28.3" fill="#e64ba9" />
                <path d="M45.4 21.3c-.5-4-2.6-4.7-6.6-5-3.5-.3-7.4-.4-10.4-.4s-7 .1-10.4.4c-4 .3-6.1 1-6.6 5-.2 1.8-.3 4.3-.3 6.9s.1 5.1.3 6.9c.5 4.1 2.6 4.7 6.6 5 3.4.3 7.4.4 10.4.4s7-.1 10.4-.4c4-.3 6-.9 6.6-5 .3-1.8.4-4.3.4-6.9s-.2-5-.4-6.9zM24.8 33.5V23l9.1 5.2-9.1 5.3z" fill="#02122e" />
              </svg>
            </i>
            <span class="srt">youtube</span>
          </a>

          <a target="_blank" class="txt" href="https://www.twitter.com/animativespace">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 56.6 56.6">
                <path fill="#e64ba9" fill-rule="evenodd" d="M56.6,28.3c0,15.6-12.7,28.3-28.3,28.3S0,43.9,0,28.3S12.7,0,28.3,0S56.6,12.7,56.6,28.3z" clip-rule="evenodd" />
                <path fill="#02122e" fill-rule="evenodd" d="M28.6,23.3C27.2,16,36,11.6,41.2,16.9c0,0,2.3-0.7,4.4-2c0,0-0.7,2.5-3.3,4.1 c0,0,2.8-0.4,4-1.1c0,0-1.2,2.5-3.4,3.4C44.1,38.2,26,48.4,11.3,40c0,0,7.2,0.4,10.3-3.2c0,0-4.5,0.4-6.7-5c0,0,1.7,0.7,3.3-0.2 c0,0-5.2-0.8-5.7-7.1c0,0,1.7,1.3,3.5,0.8c0,0-5.8-3.4-2.5-9.7C13.6,15.8,19.8,23.6,28.6,23.3L28.6,23.3z" clip-rule="evenodd" />
              </svg>
            </i>
            <span class="srt">twitter</span>
          </a>

        </div>
        <!-- <button class="video-time"><span class="value"></span></button> -->

      </section>
    </section>
  </main>

  <script>
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
      get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
      }
    });

    const isReadyScript = (event) => {

      // 
      function changeVolume(video, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          video.volume = progress * (end - start) + start;
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }

      // 
      const dream = document.querySelector('#loop');
      const mark = document.querySelector('#noise');
      const video = dream.querySelector('video');

      if (!video) return;

      video.muted = false;
      video.volume = 0;
      video.play();

    }
    document.addEventListener("DOMContentLoaded", isReadyScript);
  </script>

  <script type="module" src="js/index.js"></script>
  <script id="__bs_script__">
    //<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.3'><\/script>".replace("HOST", location.hostname));
    //]]>
  </script>
</body>

</html>