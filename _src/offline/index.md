---
title: Offline
description: View pages on davidakennedy.com when you're offline.
eleventyNavigation:
  key: Offline
  parent: Home
layout: page
---

It looks like you're offline. Here are a few pages you can view while your connection is down.

- [Home page](/)
- [About page](/about/)
- [Blog archive](/blog/)
- [Projects page](/projects/)

<div id="offline-pages"></div>

<script>
  window.addEventListener("load", function () {
    // Have service work trim caches
    if (navigator.serviceWorker.controller != null) {
      // Trim Caches
      let worker = navigator.serviceWorker.controller;
      worker.postMessage({ command: "trimCaches" });
      // Populate Offline page, if necessary
      if (document.getElementById("offline-pages")) {
        let messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function (event) {
          if (event.data.offlinePages != null) {
            displayOfflinePages(event.data);
          }
        };
        worker.postMessage({ command: "getOfflinePages" }, [
          messageChannel.port2,
        ]);
      }
    }
  });

  function displayOfflinePages(data) {
    let offlineList = document.getElementById("offline-pages");
    let content = `<p>Some other pages you visited recently are available offline:</p>
                    <ul class="list-offline">`;
    let pages = data.offlinePages.sort(function (a, b) {
      return a.title > b.title ? 1 : b.title > a.title ? -1 : 0;
    });
    let excludePages = ["/", "about/", "blog/", "projects/", "offline/"];

    pages.forEach(function (page) {
      if (
        excludePages.indexOf(page.url) !== -1 ||
        excludePages.indexOf(page.url + "/") !== -1
      )
      return;

      let url = page.url;
      let title = page.title.replace(" | David A. Kennedy", "");
      content += `<li>
                  <a href="${url}">${title}</a><br>
                  </li>`;
    });
    content += `</ul>`;
    offlineList.innerHTML = content;
  }
</script>
