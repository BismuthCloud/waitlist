<script>
    import { onMount } from 'svelte';
    
    // Props
    export let pythonCode = `
  # pip install bismuthsdk
  # Importing a repository 
  from bismuthsdk import BismuthClient, apply_diff
  api = BismuthClient(api_key=os.environ["BISMUTH_API_KEY"])

  # Given a local repository, load_project will import and upload code to Bismuth as necessary
  # This enables Bismuth to analyze, test, and search your code during codegen
  project = api.load_project(local_repo_dir)

  # Search the repository for a specific query
  print(project.get_branch("main").search("query", top=3))

  # Generate changes for a branch
  diff = project.get_branch("main").generate(
      "change test.py to say goodbye world",
      local_changes={},  # path -> contents for locally modified files
      start_locations=None,  # Optional list of Location objects for the agent to start from
      session=None,  # Optional session name to preserve messages and context between generate() calls
  )
  print(diff)

  # Apply the changes to the local repository
  apply_diff(local_repo_dir, diff)
    `;
    
    export let typescriptCode = `
  // npm install bismuthsdk
  // Importing a repository
  import { BismuthClient, applyDiff } from "bismuthsdk";
  const api = new BismuthClient({
    apiKey: process.env.BISMUTH_API_KEY,
  });

  // Given a local repository, loadProject will import and upload code to Bismuth as necessary
  // This enables Bismuth to analyze, test, and search your code during codegen
  const project = await api.loadProject(repoDir); 

  // Search the repository for a specific query
  const results = await project.getBranch("main").search("query", 3);

  // Generate changes for a branch
  const diff = await branch.generate("change test.py to say goodbye world", {
    localChanges: {},  // path -> contents for locally modified files
    startLocations: undefined,  // Optional list of Location objects for the agent to start from
    session: undefined, // Optional session name to preserve messages and context between generate() calls
  });
  console.log(diff);

  // Apply the changes to the local repository
  await applyDiff(exampleDir, diff);
    `;
    
    let activeTab = 'typescript';
    let tsCodeElement;
    let pyCodeElement;
    
    function setActiveTab(tab) {
      activeTab = tab;
      
      // Re-run Prism highlighting after tab switch
      setTimeout(() => {
        if (window.Prism) {
          if (activeTab === 'typescript' && tsCodeElement) {
            Prism.highlightElement(tsCodeElement);
          } else if (activeTab === 'python' && pyCodeElement) {
            Prism.highlightElement(pyCodeElement);
          }
        }
      }, 0);
    }
    
    onMount(() => {
      if (window.Prism) {
        if (tsCodeElement) Prism.highlightElement(tsCodeElement);
        if (pyCodeElement) Prism.highlightElement(pyCodeElement);
      }
    });
  </script>
  
  <div class="rounded-lg overflow-hidden bg-[#1C1E26] border border-[#2D2F39] w-full lg:w-[600px] min-w-[400px]">
    <div class="bg-[#2D2F39] px-3 py-2 flex items-center">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div class="ml-3 text-sm text-gray-400">bismuth-sdk-example</div>
    </div>
    
    <div class="border-b border-[#2D2F39]">
      <div class="flex">
        <button 
          class={`px-4 py-2 text-sm font-medium ${activeTab === 'typescript' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
          on:click={() => setActiveTab('typescript')}
        >
          TypeScript
        </button>
        <button 
          class={`px-4 py-2 text-sm font-medium ${activeTab === 'python' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
          on:click={() => setActiveTab('python')}
        >
          Python
        </button>
      </div>
    </div>
    
    <div class="relative" style="height: 350px; width: 100%;">
      <div class="absolute inset-0 p-4 {activeTab === 'typescript' ? 'block' : 'hidden'}">
        <pre class="text-gray-300 text-sm overflow-auto h-full"><code bind:this={tsCodeElement} class="language-javascript">{typescriptCode}</code></pre>
      </div>
      <div class="absolute inset-0 p-4 {activeTab === 'python' ? 'block' : 'hidden'}">
        <pre class="text-gray-300 text-sm overflow-auto h-full"><code bind:this={pyCodeElement} class="language-python">{pythonCode}</code></pre>
      </div>
    </div>
  </div>