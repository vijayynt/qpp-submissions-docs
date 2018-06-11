"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/qpp-submissions-docs/index.html","9078c3bdc11f376296914700f183d0a9"],["/qpp-submissions-docs/static/css/main.32844af6.css","45f34344e0eaea80f4810345c01715e3"],["/qpp-submissions-docs/static/js/main.0c22de88.js","427b947c97b6f8cb5180190646c71848"],["/qpp-submissions-docs/static/media/Bitter-Bold.21c58d74.ttf","21c58d749d8fc57d9897bc9cccdc9b7f"],["/qpp-submissions-docs/static/media/Bitter-Bold.9efe74f3.eot","9efe74f309c7ba82a61ff03327f3bf21"],["/qpp-submissions-docs/static/media/Bitter-Bold.b786d169.woff","b786d169390a1d0acac51045cbf78c2f"],["/qpp-submissions-docs/static/media/Bitter-Bold.fc1844c7.woff2","fc1844c778ae7b225b282ecb5efa8ff3"],["/qpp-submissions-docs/static/media/Bitter-Italic.18853b8c.eot","18853b8c4438ca1b310e8877ce325133"],["/qpp-submissions-docs/static/media/Bitter-Italic.58093e86.ttf","58093e86d36ba0cbc6e47f76748e2070"],["/qpp-submissions-docs/static/media/Bitter-Italic.75fb25c1.woff2","75fb25c17e1848550052b1efb07107e1"],["/qpp-submissions-docs/static/media/Bitter-Italic.f09ccd61.woff","f09ccd6102ce34fc359dba6ed0e5501d"],["/qpp-submissions-docs/static/media/Bitter-Regular.0078d318.woff2","0078d31897ce38a60c0017770552fe91"],["/qpp-submissions-docs/static/media/Bitter-Regular.12b71a42.eot","12b71a42b9b263b8e859a226bf4df3fd"],["/qpp-submissions-docs/static/media/Bitter-Regular.22c8272f.woff","22c8272ff9c0af3f05b76c7cf93e116d"],["/qpp-submissions-docs/static/media/Bitter-Regular.c99f7ae5.ttf","c99f7ae5952f464b2119c58157abf51b"],["/qpp-submissions-docs/static/media/FontAwesome.0d2717cd.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/qpp-submissions-docs/static/media/OpenSans-Bold-webfont.3c4dc405.woff2","3c4dc405a2fb4cfd4c8c04e9155a3db0"],["/qpp-submissions-docs/static/media/OpenSans-Bold-webfont.6a13b444.woff","6a13b444647bac755a03da311b0633e2"],["/qpp-submissions-docs/static/media/OpenSans-Bold-webfont.8bb31d27.eot","8bb31d277e63b3d03253dd5060c74e93"],["/qpp-submissions-docs/static/media/OpenSans-Bold-webfont.bf0b1c03.ttf","bf0b1c035c98563b62c8e427d1ec0926"],["/qpp-submissions-docs/static/media/OpenSans-Italic-webfont.318b4f41.woff2","318b4f4140a3518cb54b2d416c01a641"],["/qpp-submissions-docs/static/media/OpenSans-Italic-webfont.346b43cf.ttf","346b43cf85bdc059069d1a83d308a034"],["/qpp-submissions-docs/static/media/OpenSans-Italic-webfont.9487423d.eot","9487423dc35bf8a541354926e95e7598"],["/qpp-submissions-docs/static/media/OpenSans-Italic-webfont.c0de58fc.woff","c0de58fc662222308ea9a1e43031c415"],["/qpp-submissions-docs/static/media/OpenSans-Regular-webfont.33ec9bca.eot","33ec9bca49d30244ff5e1bae261afd36"],["/qpp-submissions-docs/static/media/OpenSans-Regular-webfont.467063b1.woff","467063b18b4823e9fc4f645b6a0b19ee"],["/qpp-submissions-docs/static/media/OpenSans-Regular-webfont.cb95bc69.ttf","cb95bc691478b7f108a1127710c1aa4a"],["/qpp-submissions-docs/static/media/OpenSans-Regular-webfont.e3b01381.woff2","e3b013811489b74c41521d426a11992e"],["/qpp-submissions-docs/static/media/OpenSans-Semibold-webfont.80744a04.ttf","80744a049a00b14a200ab18d3ca0c8d6"],["/qpp-submissions-docs/static/media/OpenSans-Semibold-webfont.8e80acc0.woff","8e80acc061be9580f1c03bed43855e27"],["/qpp-submissions-docs/static/media/OpenSans-Semibold-webfont.aebd17d5.woff2","aebd17d58f1ccdebd1b806290b6a864d"],["/qpp-submissions-docs/static/media/OpenSans-Semibold-webfont.d543421f.eot","d543421f6d099c83a80f2920c6718645"],["/qpp-submissions-docs/static/media/Rubik-Bold.87b4e0d5.ttf","87b4e0d5acc5093dfca4c4355b809749"],["/qpp-submissions-docs/static/media/Rubik-Light.1dc94b26.ttf","1dc94b26c8096522ad604c88d6c44a1e"],["/qpp-submissions-docs/static/media/Rubik-Medium.394a3b33.ttf","394a3b3371914d7a65e80ff82ae35f78"],["/qpp-submissions-docs/static/media/Rubik-Regular.6c980940.ttf","6c980940392587c8d7d325c07965ebda"],["/qpp-submissions-docs/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/qpp-submissions-docs/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/qpp-submissions-docs/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/qpp-submissions-docs/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/qpp-submissions-docs/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/qpp-submissions-docs/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/qpp-submissions-docs/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/qpp-submissions-docs/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/qpp-submissions-docs/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/qpp-submissions-docs/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=s),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,t,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var t=new URL(s).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,s){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],t=e[1],a=new URL(s,self.location),c=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!s.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(s){if(!s.ok)throw new Error("Request for "+t+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(t,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!s.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),s=urlsToCacheKeys.has(t));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/qpp-submissions-docs/index.html",self.location).toString(),s=urlsToCacheKeys.has(t)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});