/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4e9da526be39ede7e098.js"
  },
  {
    "url": "framework-a38040c4749cf445737f.js"
  },
  {
    "url": "app-d1173eb960369c776214.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "84a0f029d8e9bfe73540ca592b85a510"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "polyfill-68528c3be76e45e09e78.js"
  },
  {
    "url": "styles.22ec855d56f3587fc08b.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "d3a78f1f547d688dafab540ea9def2e743b23750-72b3a6e0ad2146c99148.js"
  },
  {
    "url": "component---src-templates-tags-list-template-js-e95bbfdf0bf1fa651710.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "776216194542d879c7f3010af506e30e"
  },
  {
    "url": "page-data/sq/d/2052939023.json",
    "revision": "38d11d403e4f2e4662be11d98555d135"
  },
  {
    "url": "page-data/sq/d/251939775.json",
    "revision": "cc5f2a1c4f641eb73a175f25d4dc3b8c"
  },
  {
    "url": "page-data/sq/d/401334301.json",
    "revision": "b4863644222b103a28d329170c2531f2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "930a2e9a6e70ed06feff0eeec95d3a65"
  },
  {
    "url": "component---src-templates-categories-list-template-js-e4de52e83278652e27c5.js"
  },
  {
    "url": "page-data/categories/page-data.json",
    "revision": "2ba4f3e8fd0b4e1f2e86ae58ddd1a4b1"
  },
  {
    "url": "component---src-templates-cv-template-js-719c7664bda467cd0bc1.js"
  },
  {
    "url": "page-data/cv/page-data.json",
    "revision": "9a1181f38e25168c1024a39d6efea6a9"
  },
  {
    "url": "component---src-templates-not-found-template-js-27d377dc28e43d2fc11d.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "86aa696998e7c04d0cb298aa4f3f4eb9"
  },
  {
    "url": "component---src-templates-post-template-js-aaf90dda43d385957012.js"
  },
  {
    "url": "page-data/posts/bounded-context/page-data.json",
    "revision": "44c4f918214e3e8f8d8953d1910c3d5f"
  },
  {
    "url": "page-data/posts/connect-datadog-apm-to-docker-swarm/page-data.json",
    "revision": "630c8a2120cda605e4246df9976a3051"
  },
  {
    "url": "page-data/posts/create-docker-network-for-datadog/page-data.json",
    "revision": "7673ff8b577b54b8c0ee205b4f36935c"
  },
  {
    "url": "page-data/posts/create-gatsby-github-pages-blog/page-data.json",
    "revision": "7dcee0a8d5734b21b751e7528d4bc6ad"
  },
  {
    "url": "page-data/posts/datadog-monitor-slack-notifications/page-data.json",
    "revision": "ca6cf9b60b87614d8fea43997ea8e414"
  },
  {
    "url": "page-data/posts/docker-swarm-php-fpm-nginx-metrics/page-data.json",
    "revision": "d172e91e9e589e36d815a1d801c2f56f"
  },
  {
    "url": "page-data/posts/implementing-solid-and-onion-architecture-nodejs-typescript-and-inversifyjs/page-data.json",
    "revision": "3afedee66dd7e3748698d316e6c09958"
  },
  {
    "url": "page-data/posts/symfony-messenger-in-laravel/page-data.json",
    "revision": "a20b4f71ffab72cc5e5bd38db67c2d66"
  },
  {
    "url": "page-data/posts/the-clean-architecture/page-data.json",
    "revision": "4ba68a6d46b9375c3dbd2564d9129d7e"
  },
  {
    "url": "component---src-templates-page-template-js-2e67a5152b3285a2afd5.js"
  },
  {
    "url": "page-data/pages/as-privacy-policy/page-data.json",
    "revision": "43977e85dd3ac90404600685ebabb551"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "11c45390226c733c3fdb1aa62c25114c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-d1173eb960369c776214.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
