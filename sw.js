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
    "url": "webpack-runtime-5e188ca04d642c197499.js"
  },
  {
    "url": "framework-a4620de0399b10c30110.js"
  },
  {
    "url": "app-ef3e1b90ab2fcd95f2fd.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "be5ce9c3e78b04f0772ce2548ff9f7b5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5a1ee105f05b3144b807.js"
  },
  {
    "url": "polyfill-78da944167c13338ef4c.js"
  },
  {
    "url": "styles.bf498983809caca8b3d0.css"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "d3a78f1f547d688dafab540ea9def2e743b23750-72b3a6e0ad2146c99148.js"
  },
  {
    "url": "component---src-templates-tags-list-template-js-81dcce268a871d47d5d7.js"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "0f31b8fa6825375f5a74ad007c28b3e0"
  },
  {
    "url": "page-data/sq/d/2052939023.json",
    "revision": "38d11d403e4f2e4662be11d98555d135"
  },
  {
    "url": "page-data/sq/d/251939775.json",
    "revision": "3a12771c4f3b01c8e6d7f52e6a7f1618"
  },
  {
    "url": "page-data/sq/d/401334301.json",
    "revision": "7bf566f38c4a893da0e481228ca18a69"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "bdf54613acd56bc89eb6b742f09f67d5"
  },
  {
    "url": "component---src-templates-categories-list-template-js-c99eca7fb9655967d6d2.js"
  },
  {
    "url": "page-data/categories/page-data.json",
    "revision": "04a4d6a1bd438b00870c671cac64465d"
  },
  {
    "url": "44934075e77211be33e4e2ec44abb32cb826714c-bfc0e22679f5bcf65c87.js"
  },
  {
    "url": "component---src-templates-cv-template-js-54133272e5582371be8f.js"
  },
  {
    "url": "page-data/cv/page-data.json",
    "revision": "9a1181f38e25168c1024a39d6efea6a9"
  },
  {
    "url": "component---src-templates-not-found-template-js-d60627b91340f73de727.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "86aa696998e7c04d0cb298aa4f3f4eb9"
  },
  {
    "url": "component---src-templates-post-template-js-b384c04dfa4ed642dbf6.js"
  },
  {
    "url": "page-data/posts/accelerate-centrifugo/page-data.json",
    "revision": "e07e475396c23cce7bf3f88a98a532b1"
  },
  {
    "url": "page-data/posts/bounded-context/page-data.json",
    "revision": "7d87e62c85ee8d56274463efa5c8f3e3"
  },
  {
    "url": "page-data/posts/connect-datadog-apm-to-docker-swarm/page-data.json",
    "revision": "ca63a7887c08a324cc0812af968a3118"
  },
  {
    "url": "page-data/posts/create-docker-network-for-datadog/page-data.json",
    "revision": "6856e83f0784154f2c1db25af4e55e28"
  },
  {
    "url": "page-data/posts/create-gatsby-github-pages-blog/page-data.json",
    "revision": "166f4929925e8d17f6a378bb05af2f50"
  },
  {
    "url": "page-data/posts/datadog-monitor-slack-notifications/page-data.json",
    "revision": "dc3a30011af90bf8d47d15ee7c1489c2"
  },
  {
    "url": "page-data/posts/docker-swarm-php-fpm-nginx-metrics/page-data.json",
    "revision": "88e9eba892fe43b7f590f85f3c31df4f"
  },
  {
    "url": "page-data/posts/flaresolverr-for-cloudflare/page-data.json",
    "revision": "35230042affd46699feb9945cedd17da"
  },
  {
    "url": "page-data/posts/flaresolverr-in-lambda/page-data.json",
    "revision": "44b4db6a1f921ad1ec6a81712d56fcb5"
  },
  {
    "url": "page-data/posts/implementing-solid-and-onion-architecture-nodejs-typescript-and-inversifyjs/page-data.json",
    "revision": "a50f894950437b61bd47122ce560336f"
  },
  {
    "url": "page-data/posts/mysql-index-typecast-issue/page-data.json",
    "revision": "a7520002e0bb6fcb021edb2c94c3b5e3"
  },
  {
    "url": "page-data/posts/repeatable-uuids/page-data.json",
    "revision": "6c7018363c23b678a24c6bfd842ca203"
  },
  {
    "url": "page-data/posts/symfony-messenger-in-laravel/page-data.json",
    "revision": "ab3bc953a85ea49afbf0cfb8cca6cd65"
  },
  {
    "url": "page-data/posts/the-clean-architecture/page-data.json",
    "revision": "fa865a92f2ec188f846c8af434da823f"
  },
  {
    "url": "component---src-templates-page-template-js-bdfc6c6141b848822b93.js"
  },
  {
    "url": "page-data/pages/as-privacy-policy/page-data.json",
    "revision": "b52125d09d07d6221230ae58d767f5dc"
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
  if (!resources || !(await caches.match(`/app-ef3e1b90ab2fcd95f2fd.js`))) {
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
