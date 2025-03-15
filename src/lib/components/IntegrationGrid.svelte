<script>
    const versionControlSystems = [
      {
        name: "GitHub",
        icon: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
        active: true,
        soon: false,
        color: "text-white"
      },
      {
        name: "Bitbucket",
        icon: '<svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"> <circle cx="512" cy="512" r="512" style="fill:#0052cc"/> <path d="M272.6 281.9c-9-.1-16.5 7.1-16.6 16.2 0 1 0 1.9.2 2.9l69.6 422.6c1.8 10.6 11 18.5 21.8 18.6h334c8.1.1 15.1-5.8 16.4-13.8L767.8 301c1.5-8.9-4.6-17.3-13.5-18.8-1-.2-1.9-.2-2.8-.2l-478.9-.1zm293.2 305.4H459.1l-28.8-150.7h161.3l-25.8 150.7z" style="fill:#fff"/> </svg>',
        active: true,
        soon: false,
        color: "text-white"
      },
      {
        name: "GitLab",
        icon: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>',
        active: false,
        soon: true,
        color: "text-white"
      },
    ];
  
    const issueTrackers = [
      {
        name: "Jira",
        icon: '<path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.488V1.005A1.001 1.001 0 0 0 23.013 0z"/>',
        active: true,
        soon: false,
        color: "text-blue-400"
      },
      {
        name: "GitHub Issues",
        icon: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
        active: true,
        soon: false,
        color: "text-white"
      },
      {
        name: "Linear",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 512 512"><path fill="url(#a)" d="M0 0h512v512H0z"/><g filter="url(#b)" opacity=".8"><path fill="#fff" d="M346.112 342.268c1.674 1.674 4.369 1.77 6.112.168 58.502-53.763 61.2-148.753 4.505-205.448-56.694-56.695-151.684-53.996-205.447 4.505-1.602 1.743-1.506 4.439.168 6.113l194.662 194.662Z" shape-rendering="crispEdges" style="mix-blend-mode:multiply"/></g><g filter="url(#c)" opacity=".3"><path fill="url(#d)" d="M346.112 342.268c1.674 1.674 4.369 1.77 6.112.168 58.502-53.763 61.2-148.753 4.505-205.448-56.694-56.695-151.684-53.996-205.447 4.505-1.602 1.743-1.506 4.439.168 6.113l194.662 194.662Z"/></g><g filter="url(#e)" opacity=".3"><path fill="url(#f)" d="M261.607 324.792c2.441-1.434 2.844-4.786.912-6.855L126.121 171.95c-2.018-2.16-5.535-1.831-7.017.727a148.996 148.996 0 0 0-6.49 12.537c-.774 1.688-.389 3.673.926 4.984l137.088 136.598a4.513 4.513 0 0 0 4.985.944c2.702-1.176 4.021-1.79 5.994-2.948Z"/></g><path fill="url(#g)" d="M357.358 374.306c1.758 1.758 4.581 1.866 6.416.189a163.595 163.595 0 0 0 5.316-5.081c62.547-62.547 62.547-163.956 0-226.504-62.548-62.547-163.957-62.547-226.504 0a163.595 163.595 0 0 0-5.081 5.316c-1.677 1.835-1.569 4.658.189 6.416l219.664 219.664Z"/><path fill="url(#h)" d="M357.358 374.306c1.758 1.758 4.581 1.866 6.416.189a163.595 163.595 0 0 0 5.316-5.081c62.547-62.547 62.547-163.956 0-226.504-62.548-62.547-163.957-62.547-226.504 0a163.595 163.595 0 0 0-5.081 5.316c-1.677 1.835-1.569 4.658.189 6.416l219.664 219.664Z"/><path fill="url(#i)" d="M336.333 394.672c2.627-1.528 3.024-5.118.875-7.267L124.595 174.792c-2.149-2.149-5.739-1.752-7.267.875a158.87 158.87 0 0 0-7.119 13.725c-.811 1.771-.41 3.852.968 5.229l206.201 206.202c1.378 1.378 3.459 1.779 5.23.968a158.87 158.87 0 0 0 13.725-7.119Z"/><path fill="url(#j)" d="M336.333 394.672c2.627-1.528 3.024-5.118.875-7.267L124.595 174.792c-2.149-2.149-5.739-1.752-7.267.875a158.87 158.87 0 0 0-7.119 13.725c-.811 1.771-.41 3.852.968 5.229l206.201 206.202c1.378 1.378 3.459 1.779 5.23.968a158.87 158.87 0 0 0 13.725-7.119Z"/><path fill="url(#k)" d="M286.659 413.348c3.619-.707 4.86-5.136 2.253-7.743L106.395 223.088c-2.607-2.607-7.036-1.366-7.743 2.253a160.813 160.813 0 0 0-2.502 18.462 4.666 4.666 0 0 0 1.366 3.654l167.027 167.027a4.667 4.667 0 0 0 3.654 1.366 160.834 160.834 0 0 0 18.462-2.502Z"/><path fill="url(#l)" d="M286.659 413.348c3.619-.707 4.86-5.136 2.253-7.743L106.395 223.088c-2.607-2.607-7.036-1.366-7.743 2.253a160.813 160.813 0 0 0-2.502 18.462 4.666 4.666 0 0 0 1.366 3.654l167.027 167.027a4.667 4.667 0 0 0 3.654 1.366 160.834 160.834 0 0 0 18.462-2.502Z"/><path fill="url(#m)" d="M217.031 411.577c4.45 1.107 7.201-4.155 3.959-7.398L107.821 291.01c-3.243-3.242-8.504-.491-7.398 3.959 6.784 27.279 20.838 53.121 42.163 74.445 21.324 21.324 47.166 35.379 74.445 42.163Z"/><path fill="url(#n)" d="M217.031 411.577c4.45 1.107 7.201-4.155 3.959-7.398L107.821 291.01c-3.243-3.242-8.504-.491-7.398 3.959 6.784 27.279 20.838 53.121 42.163 74.445 21.324 21.324 47.166 35.379 74.445 42.163Z"/><path stroke="#fff" stroke-opacity=".5" stroke-width="5" d="M362.088 372.649c-.816.746-2.119.733-2.963-.111L139.462 152.875c-.844-.844-.857-2.147-.111-2.963a160.661 160.661 0 0 1 5.003-5.234c61.571-61.57 161.397-61.57 222.968 0 61.571 61.571 61.571 161.397 0 222.968a160.661 160.661 0 0 1-5.234 5.003Zm-26.648 16.523c1.038 1.038.786 2.67-.364 3.34a156.562 156.562 0 0 1-13.51 7.006c-.794.364-1.761.197-2.42-.462L112.944 192.854c-.659-.659-.826-1.626-.462-2.42a156.562 156.562 0 0 1 7.006-13.51c.67-1.15 2.302-1.402 3.34-.364L335.44 389.172Zm-48.296 18.201c1.276 1.276.574 3.221-.964 3.521a158.269 158.269 0 0 1-18.175 2.463 2.167 2.167 0 0 1-1.694-.64L99.283 245.689a2.167 2.167 0 0 1-.64-1.694 158.313 158.313 0 0 1 2.463-18.175c.3-1.538 2.245-2.24 3.521-.964l182.517 182.517Zm-67.922-1.426c.81.81.812 1.735.464 2.391-.333.63-1.007 1.072-2.052.813-26.85-6.678-52.286-20.51-73.28-41.505-20.995-20.994-34.827-46.43-41.505-73.28-.259-1.045.183-1.719.813-2.052.656-.348 1.581-.346 2.391.464l113.169 113.169Z" style="mix-blend-mode:soft-light"/><defs><linearGradient id="a" x1="256" x2="256" y1="0" y2="512" gradientUnits="userSpaceOnUse"><stop stop-color="#2D2E31"/><stop offset="1" stop-color="#0F1012"/></linearGradient><linearGradient id="d" x1="256.306" x2="256.306" y1="95.332" y2="379.492" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#C5C5C5"/></linearGradient><linearGradient id="f" x1="178.365" x2="178.365" y1="167.248" y2="351.126" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#C5C5C5"/></linearGradient><linearGradient id="g" x1="256" x2="256" y1="96" y2="416" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#CCC"/></linearGradient><linearGradient id="i" x1="256" x2="256" y1="96" y2="416" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#CCC"/></linearGradient><linearGradient id="k" x1="256" x2="256" y1="96" y2="416" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#CCC"/></linearGradient><linearGradient id="m" x1="256" x2="256" y1="96" y2="416" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#CCC"/></linearGradient><radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="matrix(0 320 -320 0 256 96)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".598" stop-color="#fff" stop-opacity="0"/></radialGradient><radialGradient id="j" cx="0" cy="0" r="1" gradientTransform="matrix(0 320 -320 0 256 96)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".598" stop-color="#fff" stop-opacity="0"/></radialGradient><radialGradient id="l" cx="0" cy="0" r="1" gradientTransform="matrix(0 320 -320 0 256 96)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".598" stop-color="#fff" stop-opacity="0"/></radialGradient><radialGradient id="n" cx="0" cy="0" r="1" gradientTransform="matrix(0 320 -320 0 256 96)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset=".598" stop-color="#fff" stop-opacity="0"/></radialGradient><filter id="b" width="295.583" height="295.582" x="126.135" y="66.88" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-5.12"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/><feBlend in2="BackgroundImageFix" mode="plus-lighter" result="effect1_dropShadow_14134_4654"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_14134_4654" result="shape"/></filter><filter id="c" width="267.583" height="267.582" x="140.135" y="86" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_14134_4654" stdDeviation="5"/></filter><filter id="e" width="171.522" height="177.592" x="102.218" y="160.522" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_14134_4654" stdDeviation="5"/></filter></defs></svg>',
        active: true,
        soon: false,
        color: "text-white"
      },
    ];
  </script>
  
  <div class="flex flex-col justify-center items-center mt-8 w-full">
    <div class="rounded-lg overflow-hidden bg-[#1C1E26] border border-[#2D2F39] w-full">
      <div class="bg-[#2D2F39] px-3 py-2 flex items-center">
        <div class="ml-2 text-sm font-medium text-gray-300">Supported Integrations</div>
      </div>
    
      <div class="p-4">
        <div class="mb-4">
          <h3 class="text-gray-300 text-sm font-medium mb-3">Version Control</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            {#each versionControlSystems as vcs}
              <div class="p-3 bg-[#2D2F39] rounded-lg flex items-center {vcs.active ? '' : 'opacity-60'} relative">
                <svg class="w-6 h-6 {vcs.color} mr-3" viewBox="0 0 24 24" fill="currentColor">
                  {@html vcs.icon}
                </svg>
                <span class="text-gray-200">{vcs.name}</span>
                {#if vcs.soon}
                  <span class="absolute top-0 right-0 bg-purple-600 text-xs px-1.5 py-0.5 rounded-bl-lg rounded-tr-lg text-white">Soon</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>
        
        <div>
          <h3 class="text-gray-300 text-sm font-medium mb-3">Issue Tracking</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            {#each issueTrackers as tracker}
              <div class="p-3 bg-[#2D2F39] rounded-lg flex items-center {tracker.active ? '' : 'opacity-60'} relative">
                <svg class="w-6 h-6 {tracker.color} mr-3" viewBox="0 0 24 24" fill="currentColor">
                  {@html tracker.icon}
                </svg>
                <span class="text-gray-200">{tracker.name}</span>
                {#if tracker.soon}
                  <span class="absolute top-0 right-0 bg-purple-600 text-xs px-1.5 py-0.5 rounded-bl-lg rounded-tr-lg text-white">Soon</span>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <div class="text-xs text-gray-500 mt-4">
      Seamlessly integrates with your existing tools
    </div>
  </div>