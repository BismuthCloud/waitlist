<script lang="ts">
    export const csr = true;
    export const ssr = false;
    import TableOfContents from '$lib/components/TableOfContents.svelte';
 
    import AnimatedBackgroundWrapper from '$lib/components/AnimatedBackgroundWrapper.svelte';
    import Terminal from '$lib/components/Terminal.svelte';
    import Chat from '$lib/components/Chat.svelte';
    import '$lib/vendor/css/normalize.css';
    import '$lib/vendor/css/webflow.css';
    import '$lib/vendor/css/bismuthos.webflow.css';
    import '../../../app.css';
    import { onMount } from 'svelte';
    import logo from '$lib/images/bismuthos-logo.svg';

    const tocItems = [
    {
        id: "getting-started",
        text: "Getting Started with Bismuth",
        level: 1,
    },
    {
        id: "installation",
        text: "Installation",
        level: 2,
        children: [
            {
                id: "quick-installation",
                text: "Quick Installation",
                level: 3,
            },
            {
                id: "installation-options",
                text: "Installation Options",
                level: 3,
            }
        ]
    },
    {
        id: "initial-setup",
        text: "Initial Setup",
        level: 2,
        children: [
            {
                id: "authentication",
                text: "Authentication",
                level: 3,
            },
            {
                id: "billing",
                text: "Billing",
                level: 3,
            }
        ]
    },
    {
        id: "working-with-chat",
        text: "Working with the Chat Interface",
        level: 2,
        children: [
            {
                id: "starting-a-chat-session",
                text: "Starting a Chat Session",
                level: 3,
            },
            {
                id: "effective-communication",
                text: "Effective Communication",
                level: 3,
            },
            {
                id: "chat-commands",
                text: "Chat Commands",
                level: 3,
            }
        ]
    },
    {
        id: "sample-project-tutorial",
        text: "Sample Project Tutorial",
        level: 2,
        children: [
            {
                id: "setting-up-sample-project",
                text: "Setting Up the Sample Project",
                level: 3,
            },
            {
                id: "importing-the-project-to-bismuth",
                text: "Importing the Project to Bismuth",
                level: 3,
            },
            {
                id: "adding-a-feature",
                text: "Adding a Feature",
                level: 3,
            },
            {
                id: "fixing-a-bug",
                text: "Fixing a Bug",
                level: 3,
            }
        ]
    },
    {
        id: "project-management",
        text: "Project Management",
        level: 2,
        children: [
            {
                id: "importing-projects-management",
                text: "Importing Projects",
                level: 3,
            }
        ]
    },
    {
        id: "managing-your-workspace",
        text: "Managing Your Workspace",
        level: 2
    }
];

// Track active section
let activeId = '';

onMount(() => {
    // Optional: Add intersection observer to highlight active section
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeId = entry.target.id;
                }
            });
        },
        { threshold: 0.5 }
    );

    // Observe all section headings
    document.querySelectorAll('h1[id], h2[id], h3[id]').forEach((heading) => {
        observer.observe(heading);
    });

    return () => observer.disconnect();
});


    let termContentLong = `# Basic import
biscli import path/to/repo

# Import with file upload (recommended)
biscli import path/to/repo --upload

# Import with specific branch
biscli import path/to/repo --branch develop
`

let chatCommands = `
/help           Show available commands and usage information
/status         Check the current repository and Bismuth's status
/clear          Clear the chat history
/feedback       Send feedback or report issues
/quit           Exit the chat interface (or press Esc)`

let usefullCommands = `
/help     - Get information about available commands
/feedback - Send feedback or report bugs`
   </script>
   
      <div class="navigation-row px-6">
        <div class="navigation-left">
          <a href="#" class="navigation-logo-link w-inline-block"><img loading="lazy" src={logo} alt="" class="navigation-logo"></a>
          <nav role="navigation" class="navigation-menu w-nav-menu">
            <div class="navigation-links">
              <a href="/pair-programming" class="navigation-link w-nav-link">Back to Pair Programming</a>
            </div>
          </nav>
        </div>
        <div class="navigation-right">
          <div class="navigation-menu-button w-nav-button">
            <div class="w-icon-nav-menu"></div>
          </div>

          <div class="z-10">
					<a 
						href="https://discord.gg/bismuthai" 
						target="_blank" 
						rel="noopener noreferrer" 
						class="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-colors"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor" class="w-4 h-4">
							<path d="M197.33,81.39a160.61,160.61,0,0,0-42.4-13.13.81.81,0,0,0-.86.41,110.44,110.44,0,0,0-4.86,10,147.47,147.47,0,0,0-44.4,0,110.44,110.44,0,0,0-4.86-10,.84.84,0,0,0-.86-.41,160.13,160.13,0,0,0-42.4,13.13.76.76,0,0,0-.35.3C21.66,123.08,10.83,163.66,14.73,203.83a.67.67,0,0,0,.25.46,162.47,162.47,0,0,0,48.86,24.7.84.84,0,0,0,.91-.3,115.52,115.52,0,0,0,10-16.26.82.82,0,0,0-.45-1.14,107.39,107.39,0,0,1-15.32-7.3.83.83,0,0,1-.08-1.38c1-.75,2-1.53,2.93-2.32a.81.81,0,0,1,.85-.11c31,14.11,64.46,14.11,95.13,0a.81.81,0,0,1,.86.11c.95.79,1.93,1.57,2.94,2.32a.83.83,0,0,1-.07,1.38,100.92,100.92,0,0,1-15.32,7.3.83.83,0,0,0-.44,1.14,129.57,129.57,0,0,0,10,16.26.83.83,0,0,0,.91.3,161.79,161.79,0,0,0,49-24.7.84.84,0,0,0,.25-.46c4.53-44.66-7.6-83.92-32.12-118.14A.67.67,0,0,0,197.33,81.39ZM85.34,175.16c-10.73,0-19.55-9.85-19.55-21.93s8.68-21.93,19.55-21.93,19.68,9.85,19.55,21.93C104.89,165.31,96.21,175.16,85.34,175.16Zm85.33,0c-10.73,0-19.55-9.85-19.55-21.93s8.68-21.93,19.55-21.93,19.68,9.85,19.55,21.93C190.22,165.31,181.4,175.16,170.67,175.16Z"/>
						</svg>
						Discord
					</a>
				</div>
        </div>
      </div>
   <AnimatedBackgroundWrapper animationType="WAVES">
    <section class="section-regular !max-w-full !overflow-x-hidden pr-0">
      <div class="container-large !mx-auto !px-4">
        <div class="flex gap-8">
        <aside class="fixed top-4  hidden lg:block w-64 h-screen overflow-y-auto border-divider mt-16">
          <TableOfContents items={tocItems} {activeId} />
        </aside>
        <div class="container-small w-full">
          <h1 class="display-heading center text-center">Getting Started with <span class="text-span">Bismuth</span></h1>
          <p class="paragraph-x-large text-color-gray-500 text-center">Follow this guide to quickly set up and start using Bismuth your AI pair programmer that deeply understands your project.</p>
  
          <div class="content-wrapper mt-12">
            <h2 class="h2-heading" id="installation">Installation</h2>
            <p class="paragraph-x-large text-color-gray-500">You can install Bismuth using the installation script or by installing the CLI directly. The installation script provides the easiest way to get started and includes an interactive quickstart guide.</p>
  
            <h3 class="h3 mt-8" id="quick-installation">Quick Installation</h3>
            <p class="paragraph-x-large text-color-gray-500">Install using the quick installation script:</p>
            <Terminal content="npx bismuthcli install" />
            <br />
  
            <p class="paragraph-x-large text-color-gray-500">By default, this installs to ~/bin or ~/.local/bin. You can customize the installation directory:</p>
            <Terminal content="npx bismuthcli --dir /custom/path" />
            <br />
  
            <p class="paragraph-x-large text-color-gray-500">The installer will:</p>
            <p class="paragraph-x-large text-color-gray-500">1. Download the appropriate binary for your platform (supported platforms include macOS arm64/x64 and Linux arm64/x64)</p>
            <p class="paragraph-x-large text-color-gray-500">2. Add the installation directory to your PATH if needed (modifying .zshrc/.zprofile or .bashrc/.bash_profile as appropriate)</p>
            <p class="paragraph-x-large text-color-gray-500">3. Launch the interactive quickstart guide (can be disabled with --no-quickstart)</p>
  
            <h3 class="h3 mt-8" id="installation-options">Installation Options</h3>
            <p class="paragraph-x-large text-color-gray-500">The installer supports several options:</p>
            
            <div class="options-table mt-4">
              <div class="option-row">
                <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">--dir</code>
                <p class="paragraph-x-large text-color-gray-500">Installation directory (default: ~/bin or ~/.local/bin)</p>
              </div>
              
              <div class="option-row">
                <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">--cli-version</code>
                <p class="paragraph-x-large text-color-gray-500">Specific version to install (default: LATEST)</p>
              </div>
              
              <div class="option-row">
                <code class="bg-pink-50 text-pink-600 px-2 py-1 rounded">--no-quickstart</code>
                <p class="paragraph-x-large text-color-gray-500">Skip the interactive quickstart guide</p>
              </div>
            </div>
  
            <h2 class="h2-heading mt-12" id="initial-setup">Initial Setup</h2>
            <p class="paragraph-x-large text-color-gray-500">After installation, you'll need to authenticate with the Bismuth platform and either try our sample project or import your own repository.</p>
  
            <h3 class="h3 mt-8" id="authentication">Authentication</h3>
            <p class="paragraph-x-large text-color-gray-500">Log in to the Bismuth platform:</p>
            <Terminal content="biscli login" />
            <br />
  
            <h3 class="h3 mt-8" id="billing">Billing</h3>
            <p class="paragraph-x-large text-color-gray-500">After logging in, the CLI will check your available credits. New accounts start with 100 credits. If you need more credits, you can purchase them using:</p>
            <Terminal content="biscli billing refill" />
            <br />

 <h2 class="h2-heading mt-12" id="working-with-chat">Working with the Chat Interface</h2>
          <p class="paragraph-x-large text-color-gray-500">The chat interface is your primary way of interacting with Bismuth. Understanding how to use it effectively will help you get the most out of Bismuth's capabilities.</p>

          <h3 class="h3 mt-8" id="starting-a-chat-session">Starting a Chat Session</h3>
          <p class="paragraph-x-large text-color-gray-500">You can start a chat session for any imported repository using the chat command. Bismuth will load the repository's context and be ready to help with your codebase:</p>
          <Terminal content="biscli chat --repo path/to/your/repo" />

          <p class="paragraph-x-large text-color-gray-500">During the chat session, Bismuth maintains an understanding of your entire codebase, allowing it to make informed suggestions and modifications. When you request changes, Bismuth considers the full context of your code, including dependencies, related files, and existing patterns.</p>

          <h3 class="h3 mt-8" id="effective-communication">Effective Communication with Bismuth</h3>
          <p class="paragraph-x-large text-color-gray-500">When working with Bismuth, it's helpful to be specific about what you want to achieve. Consider these examples of effective requests:</p>

          <div class="example-wrapper bg-gray-50 rounded-lg p-6 my-4">
            <p class="paragraph-x-large text-color-gray-500 font-semibold">Adding Features:</p>
            <p class="paragraph-x-large text-color-gray-500">"Can you add input validation to the user registration form? All fields should be required, emails should be properly formatted, and passwords should be at least 8 characters with one number and special character."</p>
            
            <p class="paragraph-x-large text-color-gray-500 font-semibold mt-4">Fixing Bugs:</p>
            <p class="paragraph-x-large text-color-gray-500">"The user profile page throws a 404 error when accessing it directly via URL, but works fine when navigating from other pages. Can you investigate what's causing this?"</p>
            
            <p class="paragraph-x-large text-color-gray-500 font-semibold mt-4">Code Improvements:</p>
            <p class="paragraph-x-large text-color-gray-500">"This API endpoint is getting slow with larger datasets. Can you optimize the database queries and add pagination?"</p>
          </div>

          <h3 class="h3 mt-8" id="chat-commands">Chat Commands</h3>
          <p class="paragraph-x-large text-color-gray-500">The chat interface provides several commands to help you manage your session:</p>

          <Terminal content={chatCommands} shellPrompt=''/>
          <br />


            <h2 class="h2-heading mt-8" id="sample-project-tutorial">Sample Project Tutorial</h2>
          <p class="paragraph-x-large text-color-gray-500">The sample project is a great way to understand how Bismuth works in practice. It walks you through adding features and fixing bugs in a simple TODO application. This tutorial uses approximately 50 credits, giving you a hands-on experience with Bismuth's capabilities while leaving credits for your own projects.</p>

          <h3 class="h3 mt-6" id="setting-up-sample-project">Setting Up the Sample Project</h3>
          <p class="paragraph-x-large text-color-gray-500">First, clone and set up the sample TODO application:</p>
            <Terminal content="git clone https://github.com/BismuthCloud/quickstart-sample quickstart-sample && cd quickstart-sample && npm install && npm run dev" />

          <p class="paragraph-x-large text-color-gray-500">Once the development server is running, you'll see a simple TODO application in your browser. This application provides basic task management functionality that we'll enhance with Bismuth's help.</p>

          <h3 class="h3 mt-6" id="importing-the-project-to-bismuth">Importing the Project to Bismuth</h3>
          <p class="paragraph-x-large text-color-gray-500">Now that the project is running, let's import it to Bismuth. The --upload flag ensures Bismuth has access to all necessary files:</p>
          <Terminal content="biscli import './quickstart-sample' --upload" />

          <h3 class="h3 mt-6" id="adding-a-feature">Adding a Feature with Bismuth</h3>
          <p class="paragraph-x-large text-color-gray-500">Let's enhance the TODO app by adding due dates to tasks. Open the Bismuth chat interface:</p>
          <Terminal content="biscli chat --repo './quickstart-sample'" />
          <br />

          <p class="paragraph-x-large text-color-gray-500">In the chat interface, request the new feature with this detailed prompt:</p>
          <br />

          <Chat messages={[
            {
            author: "You",
            content: "Hey Bismuth, I need you to add the ability to set due dates on tasks. The date set on a task should be shown in a smaller font and must be on a new line below the title. If a task is past its due date, the task title should be shown in red. Also make sure the date selection box is the same height as the title input and has the same padding.",
            }
          ]} copyable={true}/>
          <br />

          <p class="paragraph-x-large text-color-gray-500">Bismuth will now:</p>
          <p class="paragraph-x-large text-color-gray-500">1. Analyze your request and plan the implementation</p>
          <p class="paragraph-x-large text-color-gray-500">2. Review the existing codebase to understand the current structure</p>
          <p class="paragraph-x-large text-color-gray-500">3. Generate and test the necessary changes</p>
          <p class="paragraph-x-large text-color-gray-500">4. Present you with a diff of the proposed changes</p>

          <p class="paragraph-x-large text-color-gray-500">When Bismuth shows you the diff, review the changes and press 'y' to accept them. The changes will be automatically applied to your codebase.</p>
          <br />

          <h3 class="h3 mt-6" id="fixing-a-bug">Fixing a Bug with Bismuth</h3>
          <p class="paragraph-x-large text-color-gray-500">Next, we'll experience how Bismuth helps fix bugs. We'll introduce a simple bug and then ask Bismuth to help us fix it:</p>

          <p class="paragraph-x-large text-color-gray-500">1. Open src/App.tsx in your editor</p>
          <p class="paragraph-x-large text-color-gray-500">2. Find the handleToggleTask function (around line 27)</p>
          <p class="paragraph-x-large text-color-gray-500">3. Delete the line containing: saveTasks(updatedTasks);</p>

          <p class="paragraph-x-large text-color-gray-500">This creates a bug where task completion states aren't persisted. Ask Bismuth to investigate:</p>
          <Chat messages={[
            {
            author: "You",
            content: "It looks like task toggle state is not saved between page refreshes. Can you double check the saving logic in App.tsx?",
            }
          ]} copyable={true}/>
          <br />

          <p class="paragraph-x-large text-color-gray-500">
            Bismuth will analyze the issue, identify the missing save call, and propose a fix. Review the diff and accept it by pressing 'y' to restore the persistence functionality.
            <br />
            <br />
            Check that everything works and then this concludes the sample project tutorial.
            <br />
            <br />
            You've now experienced how Bismuth can help you add features and fix bugs in your codebase.

            The next section will cover project management commands to help you maintain a clean and organized workspace including cleaning up the sample project.
          </p>

          <br />
          <h2 class="h2-heading mt-12" id="project-management">Project Management</h2>
          <p class="paragraph-x-large text-color-gray-500">Bismuth provides several commands to help you manage your projects effectively. Understanding these commands will help you maintain a clean and organized workspace.</p>

          <h3 class="h3 mt-8" id="importing-projects-management">Importing Projects</h3>
          <p class="paragraph-x-large text-color-gray-500">When importing a project, you have several options to control how Bismuth interacts with your codebase:</p>
          <Terminal content={termContentLong}/>
          <br />

          <p class="paragraph-x-large text-color-gray-500">The --upload flag is recommended as it ensures Bismuth has access to all necessary files, including those that might be ignored by version control but are important for understanding the project context.</p>
          <h2 class="h2-heading mt-12" id="managing-your-workspace">Managing Your Workspace</h2>
          <p class="paragraph-x-large text-color-gray-500">Once you've completed the sample project tutorial, you can clean up your workspace by removing it from Bismuth:</p>

          <Terminal content="biscli project delete quickstart-sample" />
          <br />

          <p class="paragraph-x-large text-color-gray-500">Bismuth can be used with many types of projects beyond JavaScript frontends. You can use it to refactor Java webservers, write Python backends, or even create utility programs in C.</p>

          <p class="paragraph-x-large text-color-gray-500">To start working with your own project, import it to Bismuth:</p>
          <Terminal content="biscli import path/to/your/repo" />
          <br />

          <p class="paragraph-x-large text-color-gray-500 mt-8">Remember these helpful commands while working with Bismuth:</p>
          <Terminal content={usefullCommands} shellPrompt=''/>
          <br />
        </div>
        </div>
      </div>
    </div>
  </section>
</AnimatedBackgroundWrapper>
<style>
  .border-divider {
        border-right: 1px solid #e5e7eb;
        /* Adjust padding since we're using fixed positioning */
        padding-right: 1.5rem;
        /* Optional: Add a subtle shadow for depth */
        box-shadow: 1px 0 0 rgba(0, 0, 0, 0.05);
    }

    /* Add styles to handle scrolling within the fixed sidebar */
    aside {
        /* Prevent sidebar from scrolling with page */
        overflow-y: auto;
        /* Add some space at the bottom to prevent content from being cut off */
        padding-bottom: 2rem;
        left: 1rem;
        /* Ensure the scrollbar doesn't cause horizontal scrolling */
        scrollbar-gutter: stable;
    }

    /* Style the scrollbar for better visual integration */
    aside::-webkit-scrollbar {
        width: 6px;
    }

    aside::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, 0.5);
        border-radius: 3px;
    }

    aside::-webkit-scrollbar-track {
        background: transparent;
    }

    .content-wrapper {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  
    code {
      font-family: 'Fira Code', monospace;
      background-color: rgba(236, 72, 153, 0.1);
      color: #ec4899;
      padding: 0.2em 0.4em;
      border-radius: 0.25rem;
    }
  
    .code-wrapper {
      overflow-x: auto;
      font-family: 'Fira Code', monospace;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  
    .code-wrapper pre {
      margin: 0;
      padding: 1rem;
    }
  
    .code-wrapper code {
      background: none;
      color: inherit;
      padding: 0;
    }
  
    .options-table {
      display: grid;
      gap: 1rem;
      margin: 1.5rem 0;
    }
  
    .option-row {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      align-items: center;
    }
  
    .example-wrapper {
      border-left: 4px solid #ec4899;
    }
  
    h2.h2-heading {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }
  
    h3.h3 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  
    .paragraph-x-large {
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  
    .text-span {
      background: linear-gradient(to right, #ec4899, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>