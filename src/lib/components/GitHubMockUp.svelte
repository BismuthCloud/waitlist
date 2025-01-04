<script>
  const pullRequests = [
    {
      number: 128,
      title: 'Critical: Fixed memory overflow in image processing pipeline',
      mergedAt: '14 minutes ago',
      author: 'bismuth[bot]',
      status: 'merged',
      tasks: '6 of 6 tasks complete',
      labels: ['critical', 'security']
    },
    {
      number: 127,
      title: 'Security: Updated vulnerable dependencies in image processor',
      mergedAt: '2 hours ago',
      author: 'bismuth[bot]',
      status: 'merged',
      tasks: '5 of 5 tasks complete',
      labels: ['security', 'dependencies']
    },
    {
      number: 126,
      title: 'Fixed: Null pointer exception in image resize operation',
      mergedAt: '3 hours ago',
      author: 'bismuth[bot]',
      status: 'merged',
      tasks: '4 of 4 tasks complete',
      labels: ['bug']
    }
  ];
  </script>
 
  <div class="flex flex-col justify-center items-center mt-16">
  <div class="rounded-lg overflow-hidden bg-[#1C1E26] border border-[#2D2F39] w-full">
    <div class="bg-[#2D2F39] px-3 py-2 flex items-center">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div class="ml-3 text-sm text-gray-400">github.com/your-org/your-repo</div>
    </div>
  
    <div class="px-4 py-2">
      {#each pullRequests as pr}
        <div class="py-3 flex items-start gap-2 border-b border-[#2D2F39] last:border-0">
          <div class="text-purple-400 mt-1">
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
            </svg>
          </div>
          <div class="flex-1">
            <div class="flex items-baseline gap-1">
              <span class="font-semibold text-[15px] text-gray-200">
                {pr.title}
              </span>
              <span class="text-xs text-gray-500">#{pr.number}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1 flex items-center gap-2">
              <span class="inline-flex items-center gap-1">
                <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                </svg>
                Merged by <span class="text-purple-400 font-medium">bismuth[bot]</span>
              </span>
              <span class="text-green-400">{pr.tasks}</span>
            </div>
            <div class="mt-2 flex gap-2">
              {#each pr.labels as label}
                <span class="px-2 py-0.5 rounded-full text-xs bg-purple-900/30 text-purple-400 border border-purple-400/20 font-medium">
                  {label}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
  <div class="text-xs text-gray-500 mt-4">
        Example visualization
  </div>
  </div>