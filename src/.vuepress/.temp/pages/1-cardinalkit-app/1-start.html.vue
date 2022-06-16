<template><div><h1 id="create-a-new-cardinalkit-app" tabindex="-1"><a class="header-anchor" href="#create-a-new-cardinalkit-app" aria-hidden="true">#</a> Create a New CardinalKit App</h1>
<p><img src="@source/1-cardinalkit-app/images/doctors.svg" alt="drawing" width="250"/><br /></p>
<h2 id="_1-install-xcode-and-cocoapods" tabindex="-1"><a class="header-anchor" href="#_1-install-xcode-and-cocoapods" aria-hidden="true">#</a> 1. Install Xcode and Cocoapods</h2>
<p>iOS apps are natively built in Xcode, an app available on the Apple Mac App Store. Download the most recent version of Xcode available, if you have not already. We recommend having at least Xcode v13.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>To find your Xcode version, you can type <code v-pre>system_profiler SPDeveloperToolsDataType</code> in the terminal.</p>
</div>
<p>You will also need to install <a href="https://cocoapods.org/" target="_blank" rel="noopener noreferrer">Cocoapods<ExternalLinkIcon/></a>, a package manager for iOS apps, by running the following command in your terminal (if you don't already have it).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo gem install cocoapods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you have homebrew installed on your Mac, alternative you can also run:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>brew install cocoapods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-download-the-template-project" tabindex="-1"><a class="header-anchor" href="#_2-download-the-template-project" aria-hidden="true">#</a> 2. Download the Template Project</h2>
<p>Our open-source project is available <a href="https://github.com/cardinalkit/cardinalkit" target="_blank" rel="noopener noreferrer">on our Github<ExternalLinkIcon/></a>. If you are familiar with Git, you can clone the project to your Mac in your terminal as follows:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://github.com/CardinalKit/CardinalKit.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, you can also download the project as a zip file by clicking &quot;Code&quot; &gt; &quot;Download Zip&quot;. If that doesn't work, <a href="https://github.com/CardinalKit/CardinalKit/archive/main.zip" target="_blank" rel="noopener noreferrer">click here<ExternalLinkIcon/></a>. to download the file directly.</p>
<img src="@source/1-cardinalkit-app/images/github.png" alt="drawing" width="750"/>
<h2 id="_3-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_3-install-dependencies" aria-hidden="true">#</a> 3. Install Dependencies</h2>
<p>In your terminal, navigate to the folder where your template project files were downloaded. Change to the 'CardinalKit-Example' subfolder, where the template app is located and run 'pod install' to install dependencies via CocoaPods. This process may take a few minutes.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd CardinalKit-Example
pod install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-open-the-project-in-xcode" tabindex="-1"><a class="header-anchor" href="#_4-open-the-project-in-xcode" aria-hidden="true">#</a> 4. Open the Project in Xcode</h2>
<p>Now open the CardinalKit project folder in Finder.</p>
<p>Navigate to the &quot;CardinalKit.xcworkspace&quot; file located in the &quot;CardinalKit-Example&quot; folder. You should see something like this. Open the &quot;CardinalKit.xcworkspace&quot; file. Xcode should automatically launch with the project open. This is a sample app that you will customize to meet your needs. Xcode will start indexing your project and will display Indexing | Processing Files for a few minutes in the top bar. You don't need to wait for this process to complete in order to continue with this guide.</p>
<img src="@source/1-cardinalkit-app/images/folder.png" alt="drawing" width="450"/>
<p>If a pop-up indicating that you opened a file downloaded from online appears, select &quot;Open&quot;.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>At some point during this process, the project may ask to request a part of your keychain with a chain of intrusive popups. In this case, type in your password and click &quot;Always Allow&quot;. Xcode and this project is entirely local so this is safe.</p>
</div>
<img src="@source/1-cardinalkit-app/images/downloaded.png" alt="drawing" width="450"/>
<h2 id="_5-configure-the-project" tabindex="-1"><a class="header-anchor" href="#_5-configure-the-project" aria-hidden="true">#</a> 5. Configure the Project</h2>
<p>Click on the main root project in the sidebar and change the iOS bundle ID and team to match your project.</p>
<p>Remember the bundle ID for later since it will be needed to connect your database to the app. It should be of the format &quot;com.[TEAM-NAME].[PROJECT-NAME]&quot;. Write down this bundle ID for later as it will be crucial in setting up the database component of the app.</p>
<img src="@source/1-cardinalkit-app/images/bundle.png" alt="drawing" width="450"/>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you get a status message that states &quot;Unable to log in with account '[YOUR EMAIL]'&quot; or &quot;No profiles for '[YOUR BUNDLE ID]' were found&quot;, don't worry as your app should still compile and you should continue with this guide.</p>
</div>
<p>Once that is complete, your &quot;Signing and Capabilities&quot; page should look like this (with your team and project names):</p>
<p><img src="@source/1-cardinalkit-app/images/updated_bundle.png" alt="drawing" width="450"/><br /></p>
<h2 id="_6-wait-for-reindexing-to-complete" tabindex="-1"><a class="header-anchor" href="#_6-wait-for-reindexing-to-complete" aria-hidden="true">#</a> 6. Wait for Reindexing to Complete</h2>
<p>Xcode takes a while to open a project. Wait until Xcode is finished indexing the project. At the top of Xcode, there will be light blue progress bar showing this. Once it is complete, and no red errors pop up, we can run the project. This can take anywhere from 5 to 10 minutes.</p>
<img src="@source/1-cardinalkit-app/images/indexing.png" alt="drawing" width="750"/>
<h2 id="_7-test-your-app" tabindex="-1"><a class="header-anchor" href="#_7-test-your-app" aria-hidden="true">#</a> 7. Test Your App</h2>
<p>Specify the target for deployment. Select either your phone (if it is plugged in) or pick a device to simulate (we recommend iPhone 11 and iOS 14 or greater). Press the &quot;Play&quot; button, shown below to run the app in the simulator. The first time you build the app, it will take 5 to 10 minutes due to it having to load all of the frameworks for the first time.</p>
<p>When the simulator boots up and opens up the app, you may be faced with a white screen for a few seconds to a minute. This is normal for the simulator on the first run of the app. Your project may show several warnings indicated by a yellow triangle &quot;⚠️&quot; but that is fine.</p>
<img src="@source/1-cardinalkit-app/images/set_target.png" alt="drawing" width="750"/>
<p>If your app is now up and running, continue onto the <a href="/cardinalkit-docs/1-cardinalkit-app/2-setup.html">next section</a> to set up the cloud infrastructure for your app.</p>
</div></template>
