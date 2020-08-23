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
    "url": "webpack-runtime-eb5a056f84da1369763b.js"
  },
  {
    "url": "framework-a38040c4749cf445737f.js"
  },
  {
    "url": "app-b433f962f858b39f004f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "eaf3b87b2b8a957f7079ce901b0270df"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "polyfill-68528c3be76e45e09e78.js"
  },
  {
    "url": "styles.e65d860aa2df6e930900.css"
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
    "revision": "105ddbfdfc41f6723e9071209e2e8686"
  },
  {
    "url": "page-data/sq/d/2052939023.json",
    "revision": "38d11d403e4f2e4662be11d98555d135"
  },
  {
    "url": "page-data/sq/d/251939775.json",
    "revision": "07d75aea88e34dd411b0fc1e1d765b21"
  },
  {
    "url": "page-data/sq/d/401334301.json",
    "revision": "12153cfec3fd480baf276fc81117681e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d88adeacbdf2c150ac575baaae7001cc"
  },
  {
    "url": "component---src-templates-categories-list-template-js-e4de52e83278652e27c5.js"
  },
  {
    "url": "page-data/categories/page-data.json",
    "revision": "889c1f212ff66e624cc8a0df3733c823"
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
    "url": "component---src-templates-post-template-js-6901ec1eceac6af03646.js"
  },
  {
    "url": "page-data/posts/bounded-context/page-data.json",
    "revision": "3baaa530912719dbed3452aa77c0a9a3"
  },
  {
    "url": "page-data/posts/connect-datadog-apm-to-docker-swarm/page-data.json",
    "revision": "3fdd1f0ef7586cb3a629843fe4d405f6"
  },
  {
    "url": "page-data/posts/create-docker-network-for-datadog/page-data.json",
    "revision": "bd6e0678a5229dc918ed8a6533f3f8d7"
  },
  {
    "url": "page-data/posts/implementing-solid-and-onion-architecture-nodejs-typescript-and-inversifyjs/page-data.json",
    "revision": "716ee69b377e24796fe00f095b235357"
  },
  {
    "url": "page-data/posts/the-clean-architecture/page-data.json",
    "revision": "a8ba28ed0a93e37791ad79f11a320953"
  },
  {
    "url": "component---src-templates-page-template-js-2e67a5152b3285a2afd5.js"
  },
  {
    "url": "page-data/pages/as-privacy-policy/page-data.json",
    "revision": "a2643449b998a308934bf651a2c68e13"
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
  if (!resources || !(await caches.match(`/app-b433f962f858b39f004f.js`))) {
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
