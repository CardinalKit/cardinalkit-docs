<template><div><h1 id="alternative-authentication-methods" tabindex="-1"><a class="header-anchor" href="#alternative-authentication-methods" aria-hidden="true">#</a> Alternative Authentication Methods</h1>
<p>By default, CardinalKit uses Sign in with Apple or Email and Password Login. If you are interested in using passwordless login, keep on reading.</p>
<h2 id="setting-up-dynamic-links" tabindex="-1"><a class="header-anchor" href="#setting-up-dynamic-links" aria-hidden="true">#</a> Setting up Dynamic Links</h2>
<p>Dynamic links, the process which enables your users to access your application and authenticate themselves simply by clicking on a link sent to them via email, is a common choice for research apps.</p>
<h2 id="_1-add-relevant-ids-to-firebase" tabindex="-1"><a class="header-anchor" href="#_1-add-relevant-ids-to-firebase" aria-hidden="true">#</a> 1. Add Relevant IDs to Firebase</h2>
<p>The first step is to add your Apple Team ID and a random App Store ID to Firebase settings. This informations is required to use dynamic links.</p>
<p>You can find your Team ID in your Apple Developer Account Membership Details. This link will get you to your &quot;Membership Details&quot;, just scroll down to Team ID and copy it down.</p>
<p>Go to your Firebase &quot;Project Settings&quot; by clicking the gear icon in the top left and scroll down to the &quot;Your Apps&quot; subsection. Click the pencil icon next to &quot;App Store ID&quot; and &quot;Team ID&quot; and change them to appropriate values. Under App Store ID, use 292922029.</p>
<p><img src="@source/1-cardinalkit-app/images/1.gif" alt="drawing" width="650"/><br /></p>
<h2 id="_2-create-and-whitelist-a-dynamic-link" tabindex="-1"><a class="header-anchor" href="#_2-create-and-whitelist-a-dynamic-link" aria-hidden="true">#</a> 2. Create and Whitelist a Dynamic Link</h2>
<p>Now we can create a dynamic link. Navigate to the &quot;Dynamic Links&quot; section in Firebase either from the main page or by the scrolling down on the panel on the left side. Create a new URL prefix.</p>
<p>Firebase will allow to use your own URL but for this project, just type in your project name (or some unique variant) and choose the URL appended by &quot;.page.link&quot; recommended by Firebase. Once you get a link, write it down for later.</p>
<p><img src="@source/1-cardinalkit-app/images/2.gif" alt="drawing" width="650"/><br /></p>
<p>Navigate to the Authentication tab from earlier and whitelist your unique dynamic link prefix that you just created. Click &quot;Add Domain&quot; under the header Authorized Domains and type in your prefix.</p>
<p><img src="@source/1-cardinalkit-app/images/3.gif" alt="drawing" width="650"/><br /></p>
<p>There will be a link appended by &quot;firebase.app&quot; in the Authorized Domains category. Write this link down for later. Copy this link, navigate to the Dynamic Links tab, and create a new dynamic link using that firebase.app link as the &quot;Deep Link URL&quot;. Name the link &quot;Open App&quot;. To define iOS link behavior, select “Open the deep link in your iOS App” and select your App Bundle ID from drop down. We can ignore the next two steps (Android link creation and marketing) and jump straight to generating the link.</p>
<p><img src="@source/1-cardinalkit-app/images/5.gif" alt="drawing" width="650"/><br /></p>
<h2 id="_3-set-up-dynamic-links-in-xcode" tabindex="-1"><a class="header-anchor" href="#_3-set-up-dynamic-links-in-xcode" aria-hidden="true">#</a> 3. Set up Dynamic Links in Xcode</h2>
<p>Let's go back into Xcode and set up our app to interpret our dynamic links. Under the &quot;Signing &amp; Capabilities&quot; tab of the app replace the existing Associated Domain with &quot;applinks:[your-link].page.link&quot; There should only be one Associated Domain at the end.</p>
<p><img src="@source/1-cardinalkit-app/images/6.gif" alt="drawing" width="650"/><br /></p>
<p>Head over to the &quot;Info&quot; tab of the App and scroll down to the bottom. Open up &quot;URL Types&quot; and enter your App Bundle ID under URL Schemes. Under Identifier, write something unique like your Bundle ID + &quot;.firebase&quot;.</p>
<p><img src="@source/1-cardinalkit-app/images/7.gif" alt="drawing" width="650"/><br /></p>
<p>Open up the &quot;CKStudyUser.swift&quot; file in &quot;CardinalKit-Example&quot; &gt; &quot;Components&quot; &gt; &quot;Account&quot;. Change the actionCodeSettings.url URL on line 79 to match the &quot;firebase.app&quot; link that you found earlier in the Authorized Domains section in Firebase.</p>
<p><img src="@source/1-cardinalkit-app/images/8.gif" alt="drawing" width="650"/><br /></p>
<p>We need to also edit the &quot;Info.plist&quot; file &quot;CardinalKit-Example&quot; &gt; &quot;Supporting Files&quot;. Under the &quot;FirebaseDynamicLinksCustomDomains&quot;, make sure there is only 1 domain: your page.link prefix domain from earlier.</p>
<p><img src="@source/1-cardinalkit-app/images/9.gif" alt="drawing" width="650"/><br /></p>
</div></template>
