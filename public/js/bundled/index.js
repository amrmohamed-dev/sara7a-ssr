// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"j85dc":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e25379321b668792";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e2cbe538894779b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2VqTL":[function(require,module,exports,__globalThis) {
/* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _toastJs = require("./toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _authJs = require("./auth.js");
var _messageJs = require("./message.js");
var _otpUtilsJs = require("./otpUtils.js");
var _settingsJs = require("./settings.js");
const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const copyBtn = document.getElementById('copyBtn');
const forgotPasswordBtn = document.querySelector('.btn-sendOtp');
const verifyEmailBtn = document.querySelectorAll('.verifyEmailBtn');
const updatePasswordForm = document.querySelector('.form--update-password');
const userDataForm = document.querySelector('.form--user-data');
const addPhotoBtn = document.querySelector('#addPhotoBtn');
const sendMsgForm = document.querySelector('.form--send-msg');
const msgsSection = document.querySelector('.messages-section');
if (registerForm) registerForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const registerBtn = document.querySelector('.btn--register');
    registerBtn.textContent = 'Please wait....';
    registerBtn.disabled = true;
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const registeringStatus = await (0, _authJs.register)({
        username,
        name,
        email,
        password,
        passwordConfirm
    });
    if (registeringStatus) setTimeout(()=>{
        location.assign('/messages');
    }, 2000);
    else {
        registerBtn.disabled = false;
        registerBtn.textContent = 'Register';
    }
});
if (loginForm) loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const loginBtn = document.querySelector('.btn--login');
    loginBtn.textContent = 'Please wait....';
    loginBtn.disabled = true;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loggingStatus = await (0, _authJs.login)({
        email,
        password
    });
    if (loggingStatus) setTimeout(()=>{
        location.assign('/messages');
    }, 1500);
    else {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
    }
});
if (logoutBtn) logoutBtn.addEventListener('click', (0, _authJs.logout));
if (copyBtn) copyBtn.addEventListener('click', ()=>{
    const input = document.getElementById('profileLink');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(()=>copyBtn.textContent = 'Copy', 1500);
});
const sendOtpFlow = async (sendBtn, email, purpose)=>{
    const originalText = sendBtn.textContent;
    sendBtn.textContent = 'Sending....';
    sendBtn.disabled = true;
    const sendingStatus = await _otpUtilsJs.handleOtpSending(email, purpose);
    sendBtn.disabled = false;
    sendBtn.textContent = originalText;
    if (sendingStatus) {
        const otpModal = new bootstrap.Modal(document.getElementById('otpModal'));
        otpModal.show();
        let resendBtn = document.getElementById('resendOtpBtn');
        resendBtn.replaceWith(resendBtn.cloneNode(true));
        resendBtn = document.getElementById('resendOtpBtn');
        const countdownEl = document.getElementById('countdown');
        _otpUtilsJs.startCountdown(resendBtn, countdownEl);
        // Move between OTP inputs automatically & Paste OTP
        const inputs = document.querySelectorAll('.otp-input');
        _otpUtilsJs.handleEnterOtp(inputs);
        resendBtn.addEventListener('click', async ()=>{
            resendBtn.disabled = true;
            const sendingStatus = await _otpUtilsJs.handleOtpSending(email, purpose);
            if (sendingStatus) _otpUtilsJs.startCountdown(resendBtn, countdownEl);
            else {
                resendBtn.textContent = 'Resend OTP';
                resendBtn.disabled = false;
            }
        });
        // Verify OTP
        let verifyOtpBtn = document.getElementById('verifyOtpBtn');
        // remove oldest listeners
        verifyOtpBtn.replaceWith(verifyOtpBtn.cloneNode(true));
        verifyOtpBtn = document.getElementById('verifyOtpBtn');
        verifyOtpBtn.addEventListener('click', async ()=>{
            let allFilled = true;
            Array.from(inputs).forEach((input)=>{
                if (input.value.trim() === '') {
                    input.classList.add('is-invalid');
                    allFilled = false;
                } else input.classList.remove('is-invalid');
            });
            if (!allFilled) return;
            verifyOtpBtn.textContent = 'Verifying....';
            verifyOtpBtn.disabled = true;
            const otp = _otpUtilsJs.getOtpValue(inputs);
            const verifyingStatus = await _otpUtilsJs.handleOtpVerification(email, otp, purpose);
            verifyOtpBtn.textContent = 'Verify OTP';
            verifyOtpBtn.disabled = false;
            if (verifyingStatus) {
                otpModal.hide();
                if (purpose === 'Password Recovery') {
                    const resetModal = new bootstrap.Modal(document.getElementById('resetModal'));
                    resetModal.show();
                    //Reset Password
                    let resetPasswordForm = document.querySelector('.form--reset-password');
                    resetPasswordForm.replaceWith(resetPasswordForm.cloneNode(true));
                    resetPasswordForm = document.querySelector('.form--reset-password');
                    resetPasswordForm.addEventListener('submit', async (e)=>{
                        e.preventDefault();
                        const resetPasswordBtn = document.getElementById('resetPasswordBtn');
                        resetPasswordBtn.textContent = 'Resetting....';
                        resetPasswordBtn.disabled = true;
                        const resettingStatus = await _otpUtilsJs.handlePasswordReset(email, otp);
                        if (resettingStatus) setTimeout(()=>location.assign('/'), 1500);
                        else {
                            resetPasswordBtn.textContent = 'Reset Password';
                            resetPasswordBtn.disabled = false;
                        }
                    });
                } else await _otpUtilsJs.handleEmailVerification(otp);
            }
        });
    }
};
if (forgotPasswordBtn) forgotPasswordBtn.addEventListener('click', async ()=>{
    const emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
        emailInput.classList.add('is-invalid');
        emailInput.reportValidity();
        return;
    } else emailInput.classList.remove('is-invalid');
    const email = emailInput.value.trim();
    await sendOtpFlow(forgotPasswordBtn, email, 'Password Recovery');
});
if (verifyEmailBtn.length) {
    const toggleVerifyButtons = (state)=>{
        verifyEmailBtn.forEach((btn)=>{
            btn.disabled = state;
        });
    };
    verifyEmailBtn.forEach((btn)=>btn.addEventListener('click', async ()=>{
            toggleVerifyButtons(true);
            const email = btn.dataset.email.trim();
            await sendOtpFlow(btn, email, 'Email Confirmation');
            toggleVerifyButtons(false);
        }));
}
if (updatePasswordForm) updatePasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const updatePasswordBtn = document.querySelector('.btn--update-password');
    updatePasswordBtn.textContent = 'Updating....';
    const currentPassword = document.getElementById('current-password').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    updatePasswordBtn.disabled = true;
    const updatingStatus = await _settingsJs.updateSettings({
        currentPassword,
        password,
        passwordConfirm
    }, 'password');
    updatePasswordBtn.textContent = 'Update Password';
    if (updatingStatus) updatePasswordForm.reset();
    updatePasswordBtn.disabled = false;
});
if (userDataForm) userDataForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const saveDataBtn = document.querySelector('.btn--save-data');
    saveDataBtn.textContent = 'Updating....';
    const name = document.getElementById('name').value;
    const allowMessages = document.getElementById('allowMessages')?.checked ?? true;
    const showLastSeen = document.getElementById('showLastSeen')?.checked ?? true;
    saveDataBtn.disabled = true;
    const savingStatus = await _settingsJs.updateSettings({
        name,
        allowMessages,
        showLastSeen
    }, 'data');
    saveDataBtn.textContent = 'Save Changes';
    if (savingStatus) setTimeout(()=>location.reload(), 1100);
    else saveDataBtn.disabled = false;
});
if (addPhotoBtn) {
    const deletePhotoBtn = document.querySelector('#deletePhotoBtn');
    const savePhotoBtn = document.querySelector('#savePhotoBtn');
    const profilePhotoInput = document.querySelector('#profilePhotoInput');
    const profilePhotoPreview = document.querySelector('#profilePhotoPreview');
    let selectedPhotoFile = null;
    addPhotoBtn.addEventListener('click', ()=>profilePhotoInput.click());
    profilePhotoInput?.addEventListener('change', function() {
        const file = this.files[0];
        if (!file) return;
        selectedPhotoFile = file;
        const reader = new FileReader();
        reader.onload = ()=>{
            profilePhotoPreview.src = reader.result;
        };
        reader.readAsDataURL(file);
        addPhotoBtn.textContent = 'Change Photo';
        savePhotoBtn.classList.remove('d-none');
    });
    savePhotoBtn?.addEventListener('click', async ()=>{
        if (!selectedPhotoFile) return;
        savePhotoBtn.textContent = 'Uploading...';
        savePhotoBtn.disabled = true;
        if (deletePhotoBtn) deletePhotoBtn.disabled = true;
        addPhotoBtn.disabled = true;
        const uploadStatus = await _settingsJs.handleOneImage('PATCH', selectedPhotoFile);
        if (uploadStatus) setTimeout(()=>location.reload(), 1100);
        else {
            savePhotoBtn.textContent = 'Save Photo';
            savePhotoBtn.disabled = false;
            if (deletePhotoBtn) deletePhotoBtn.disabled = false;
            addPhotoBtn.disabled = false;
        }
    });
    deletePhotoBtn?.addEventListener('click', async ()=>{
        const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
        setModalContent('Delete Photo', `<strong>Are you sure you want to delete your profile photo?</strong><br/>This action cannot be undone.`);
        modal.show();
        let confirmDeletePhotoBtn = document.getElementById('confirmDeleteBtn');
        confirmDeletePhotoBtn.replaceWith(confirmDeletePhotoBtn.cloneNode(true));
        confirmDeletePhotoBtn = document.getElementById('confirmDeleteBtn');
        confirmDeletePhotoBtn?.addEventListener('click', async ()=>{
            modal.hide();
            deletePhotoBtn.textContent = 'Deleting...';
            deletePhotoBtn.disabled = true;
            if (savePhotoBtn) savePhotoBtn.disabled = true;
            if (addPhotoBtn) addPhotoBtn.disabled = true;
            const handlingStatus = await _settingsJs.handleOneImage('DELETE');
            if (handlingStatus) setTimeout(()=>location.reload(), 1100);
            else {
                deletePhotoBtn.textContent = 'Delete';
                deletePhotoBtn.disabled = true;
                if (savePhotoBtn) savePhotoBtn.disabled = true;
                if (addPhotoBtn) addPhotoBtn.disabled = true;
            }
        });
    });
    // Delete Account
    let deleteAccountBtn = document.getElementById('deleteAccountBtn');
    deleteAccountBtn.addEventListener('click', async ()=>{
        const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
        setModalContent('Delete Account', `<strong>Are you sure you want to delete your account?</strong><br/>This action will remove all your data permanently.`);
        modal.show();
        let confirmDeleteAccountBtn = document.getElementById('confirmDeleteBtn');
        confirmDeleteAccountBtn.replaceWith(confirmDeleteAccountBtn.cloneNode(true));
        confirmDeleteAccountBtn = document.getElementById('confirmDeleteBtn');
        confirmDeleteAccountBtn?.addEventListener('click', async ()=>{
            modal.hide();
            deleteAccountBtn.textContent = 'Deleting...';
            deleteAccountBtn.disabled = true;
            const deletingStatus = await _settingsJs.deleteAccount();
            if (deletingStatus) setTimeout(()=>{
                location.assign('/');
            }, 1300);
            else {
                confirmDeleteAccountBtn.disabled = false;
                deleteAccountBtn.disabled = false;
                deleteAccountBtn.textContent = 'Delete My Account';
            }
        });
    });
}
function setModalContent(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').innerHTML = message;
}
if (sendMsgForm) {
    const textarea = document.getElementById('msg');
    const remaining = document.getElementById('remaining');
    const updateCount = ()=>{
        const charsLeft = 500 - textarea.value.length;
        remaining.textContent = charsLeft;
        remaining.style.color = charsLeft < 50 ? 'red' : '#6c757d';
    };
    setTimeout(updateCount, 50);
    textarea.addEventListener('input', updateCount);
    const addImageBtn = document.querySelector('#addImageBtn');
    const msgImageInput = document.querySelector('#msgImageInput');
    const imagePreviewDiv = document.querySelector('#imagePreviewDiv');
    const previewImg = document.querySelector('#previewImg');
    const removeImageBtn = document.querySelector('#removeImageBtn');
    const originalAddImgText = addImageBtn.textContent;
    addImageBtn?.addEventListener('click', ()=>msgImageInput.click());
    msgImageInput?.addEventListener('change', ()=>{
        const file = msgImageInput.files[0];
        if (file) {
            previewImg.src = URL.createObjectURL(file);
            addImageBtn.textContent = 'Change Photo';
            imagePreviewDiv.classList.remove('d-none');
        }
    });
    removeImageBtn?.addEventListener('click', ()=>{
        msgImageInput.value = '';
        previewImg.src = '';
        addImageBtn.textContent = originalAddImgText;
        imagePreviewDiv.classList.add('d-none');
    });
    document.addEventListener('DOMContentLoaded', async ()=>{
        const switchBox = document.getElementById('anonSwitch');
        const checkbox = document.getElementById('anonymousCheckbox');
        const isLoggedIn = document.body.dataset.loggedIn === 'true';
        switchBox.addEventListener('click', ()=>{
            if (!isLoggedIn) return (0, _toastJsDefault.default)('error', 'You need to login first');
            checkbox.checked = !checkbox.checked;
            switchBox.classList.toggle('active', checkbox.checked);
        });
    });
    sendMsgForm?.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const switchBox = document.getElementById('anonSwitch');
        const anonymousCheckbox = document.getElementById('anonymousCheckbox');
        const isAnonymous = anonymousCheckbox.checked;
        const formData = new FormData(sendMsgForm);
        if (isAnonymous) formData.delete('sender');
        const sendMsgBtn = document.querySelector('.btn--send-msg');
        sendMsgBtn.textContent = 'Sending....';
        switchBox.classList.add('disabled-switch');
        sendMsgBtn.disabled = true;
        textarea.disabled = true;
        addImageBtn.disabled = true;
        if (removeImageBtn) removeImageBtn.disabled = true;
        const sendingStatus = await (0, _messageJs.sendMsg)(formData);
        sendMsgBtn.textContent = 'Send';
        switchBox.classList.remove('disabled-switch');
        sendMsgBtn.disabled = false;
        textarea.disabled = false;
        addImageBtn.disabled = false;
        if (removeImageBtn) removeImageBtn.disabled = false;
        if (sendingStatus) {
            textarea.value = '';
            addImageBtn.textContent = originalAddImgText;
            updateCount();
            imagePreviewDiv.classList.add('d-none');
            msgImageInput.value = '';
            previewImg.src = '';
        }
    });
}
if (msgsSection) {
    let deleteAllMsgsForm = document.querySelector('.form--deleteallmsgs');
    deleteAllMsgsForm.replaceWith(deleteAllMsgsForm.cloneNode(true));
    deleteAllMsgsForm = document.querySelector('.form--deleteallmsgs');
    deleteAllMsgsForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
        confirmDeleteModal.show();
        let confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
        confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));
        confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
        confirmDeleteBtn.addEventListener('click', async ()=>{
            const msgCards = document.querySelectorAll('.message-card');
            if (!msgCards.length) {
                (0, _toastJsDefault.default)('error', 'No messages to delete');
                return;
            }
            confirmDeleteBtn.disabled = true;
            confirmDeleteBtn.textContent = 'Deleting...';
            const overlay = document.getElementById('loadingAnim');
            overlay.classList.add('d-flex');
            confirmDeleteModal.hide();
            const deleteStatus = await (0, _messageJs.deleteAllMsgs)();
            if (deleteStatus) loadTabMessages('received');
            else {
                (0, _toastJsDefault.default)('error', 'Could not delete messages');
                overlay.classList.remove('d-flex');
            }
            confirmDeleteBtn.disabled = false;
            confirmDeleteBtn.textContent = 'Delete';
        });
    });
    // Sort Messages
    document.getElementById('sort').addEventListener('change', function() {
        loadTabMessages('received');
    });
    loadTabMessages('received');
    document.getElementById('received-tab').addEventListener('click', ()=>{
        loadTabMessages('received');
    });
    document.getElementById('fav-tab').addEventListener('click', ()=>{
        loadTabMessages('favourite');
    });
}
function attachCopyEvents() {
    let copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach((btn)=>{
        btn.replaceWith(btn.cloneNode(true));
    });
    copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
            navigator.clipboard.writeText(btn.dataset.text);
            btn.innerHTML = '<i class="fas fa-check text-success"></i> Copied!';
            setTimeout(()=>btn.innerHTML = '<i class="far fa-copy"></i> Copy', 1500);
        });
    });
}
function attachFavouriteEvents() {
    let favouriteForms = document.querySelectorAll('.fav-form');
    favouriteForms.forEach((form)=>{
        form.replaceWith(form.cloneNode(true));
    });
    favouriteForms = document.querySelectorAll('.fav-form');
    favouriteForms.forEach((form)=>{
        form.addEventListener('submit', async (e)=>{
            e.preventDefault();
            const msgId = form.dataset.msgid;
            const toggleStatus = await (0, _messageJs.toggleFavourite)({
                msgId
            });
            if (toggleStatus) {
                const icon = form.querySelector('i');
                icon.style.color = icon.style.color === 'rgb(241, 196, 15)' ? '#b8b8b8' : '#f1c40f';
            } else (0, _toastJsDefault.default)('error', 'Could not update favourite status');
        });
    });
}
function attachDeleteMsgEvents(type) {
    let deleteForms = document.querySelectorAll('.form--deleteonemsg');
    deleteForms.forEach((form)=>{
        form.replaceWith(form.cloneNode(true));
    });
    deleteForms = document.querySelectorAll('.form--deleteonemsg');
    deleteForms.forEach((form)=>{
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
            confirmDeleteModal.show();
            let confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
            confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));
            confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
            confirmDeleteBtn.addEventListener('click', async ()=>{
                const msgId = form.dataset.msgid;
                const card = form.closest('.message-card');
                card.querySelectorAll('button').forEach((btn)=>btn.disabled = true);
                const originalText = confirmDeleteBtn.textContent;
                const deleteBtn = card.querySelector('.btn-delete');
                deleteBtn.textContent = 'Deleting...';
                confirmDeleteBtn.disabled = true;
                card.classList.add('removing');
                confirmDeleteModal.hide();
                const deleteStatus = await (0, _messageJs.deleteOneMsg)({
                    msgId
                });
                if (!deleteStatus) {
                    card.classList.remove('removing');
                    confirmDeleteBtn.textContent = originalText;
                    confirmDeleteBtn.disabled = false;
                    card.querySelectorAll('button').forEach((btn)=>btn.disabled = false);
                    deleteBtn.textContent = 'Delete';
                    return;
                }
                card.remove();
                const countEls = document.querySelectorAll('#msgs-count');
                const countEl = type === 'favourite' ? countEls[1] : countEls[0];
                setTimeout(()=>{
                    const newCount = +countEl.textContent - 1;
                    countEl.textContent = newCount;
                    if (newCount === 0) loadTabMessages(type);
                }, 280);
                confirmDeleteBtn.textContent = originalText;
                confirmDeleteBtn.disabled = false;
            });
        });
    });
}
async function loadTabMessages(type) {
    const sortValue = document.getElementById('sort').value;
    const tabEl = document.getElementById(type);
    const overlay = document.getElementById('loadingAnim');
    const ctrls = document.getElementById('received-ctrls');
    ctrls.classList.toggle('d-none', type !== 'received');
    ctrls.classList.toggle('d-flex', type === 'received');
    overlay.classList.add('d-flex');
    try {
        const res = await fetch(`/messages?tab=${type}&sort=${sortValue}`);
        const html = await res.text();
        tabEl.innerHTML = html;
        attachFavouriteEvents();
        attachCopyEvents();
        attachDeleteMsgEvents(type);
    } catch (err) {
        (0, _toastJsDefault.default)('error', 'Could not load messages. Please try again later.');
    } finally{
        setTimeout(()=>{
            overlay.classList.remove('d-flex');
        }, 1000);
    }
}

},{"./auth.js":"4GNGB","./otpUtils.js":"jEkkX","./settings.js":"lJibV","./message.js":"dQrWs","@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR","./toast.js":"dCvBd"}],"4GNGB":[function(require,module,exports,__globalThis) {
/*eslint-disable*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "register", ()=>register);
parcelHelpers.export(exports, "login", ()=>login);
parcelHelpers.export(exports, "logout", ()=>logout);
parcelHelpers.export(exports, "sendOtp", ()=>sendOtp);
parcelHelpers.export(exports, "verifyOtp", ()=>verifyOtp);
parcelHelpers.export(exports, "resetPassword", ()=>resetPassword);
parcelHelpers.export(exports, "verifyEmail", ()=>verifyEmail);
var _toastJs = require("./toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
const baseUrl = '/api/v1/auth/';
const register = async (body)=>{
    try {
        const { username, name, email, password, passwordConfirm } = body;
        const response = await fetch(`${baseUrl}register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                name,
                email,
                password,
                passwordConfirm
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const login = async (body)=>{
    try {
        const { email, password } = body;
        const response = await fetch(`${baseUrl}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const logout = async ()=>{
    try {
        const response = await fetch(`${baseUrl}logout`);
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'Something went wrong');
        }
        location.assign('/login');
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
    }
};
const sendOtp = async (body)=>{
    try {
        const { email, purpose } = body;
        const response = await fetch(`${baseUrl}send-otp/${purpose}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message);
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const verifyOtp = async (body)=>{
    try {
        const { email, otp, purpose } = body;
        const response = await fetch(`${baseUrl}verify-otp/${purpose}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                otp,
                purpose
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message);
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const resetPassword = async (body)=>{
    try {
        const { email, otp, password, passwordConfirm } = body;
        const response = await fetch(`${baseUrl}reset-password`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                otp,
                password,
                passwordConfirm
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message);
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const verifyEmail = async (body)=>{
    try {
        const { otp } = body;
        const response = await fetch(`${baseUrl}verify-email`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp
            })
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message);
        (0, _toastJsDefault.default)('success', dataSend.message);
        setTimeout(()=>location.reload(), 1500);
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR","./toast.js":"dCvBd"}],"iOzeR":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dCvBd":[function(require,module,exports,__globalThis) {
/* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function showToast(type, message) {
    const isError = type === 'error';
    const icon = isError ? '!' : "\u2713";
    Toastify({
        text: `
      <div class="toast-content">
        <div class="toast-icon">${icon}</div>
        <div class="toast-text">${String(message ?? '')}</div>
      </div>
    `,
        duration: isError ? 4000 : 3500,
        gravity: 'top',
        position: 'right',
        close: true,
        escapeMarkup: false,
        stopOnFocus: false,
        className: isError ? 'app-toast--error' : 'app-toast--success',
        offset: {
            y: 40
        }
    }).showToast();
}
exports.default = showToast;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR"}],"jEkkX":[function(require,module,exports,__globalThis) {
/* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleEnterOtp", ()=>handleEnterOtp);
parcelHelpers.export(exports, "getOtpValue", ()=>getOtpValue);
parcelHelpers.export(exports, "handleOtpSending", ()=>handleOtpSending);
parcelHelpers.export(exports, "handleOtpVerification", ()=>handleOtpVerification);
parcelHelpers.export(exports, "handlePasswordReset", ()=>handlePasswordReset);
parcelHelpers.export(exports, "handleEmailVerification", ()=>handleEmailVerification);
parcelHelpers.export(exports, "startCountdown", ()=>startCountdown);
var _authJs = require("./auth.js");
const getOtpValue = (inputs)=>{
    const otp = Array.from(inputs).map((i)=>i.value).join('');
    return otp;
};
const handleEnterOtp = (inputs)=>{
    inputs.forEach((input, index)=>{
        input.addEventListener('paste', (e)=>{
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text').trim();
            if (/^\d{6}$/.test(pastedData)) {
                pastedData.split('').forEach((char, i)=>{
                    if (inputs[i]) inputs[i].value = char;
                });
                inputs[5].focus();
            }
        });
        input.addEventListener('input', (e)=>{
            const value = e.target.value.replace(/\D/g, '');
            e.target.value = value;
            if (e.target.value.length === 1 && index < inputs.length - 1) inputs[index + 1].focus();
        });
        input.addEventListener('keydown', (e)=>{
            if (e.key === 'Backspace' && index > 0 && !e.target.value) inputs[index - 1].focus();
        });
    });
};
const handleOtpSending = async (email, purpose)=>{
    return await (0, _authJs.sendOtp)({
        email,
        purpose
    });
};
const handleOtpVerification = async (email, otp, purpose)=>{
    return await (0, _authJs.verifyOtp)({
        email,
        otp,
        purpose
    });
};
const handlePasswordReset = async (email, otp)=>{
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    return await (0, _authJs.resetPassword)({
        email,
        otp,
        password,
        passwordConfirm
    });
};
const handleEmailVerification = async (otp)=>{
    await (0, _authJs.verifyEmail)({
        otp
    });
};
const startCountdown = (resendBtn, countdownEl)=>{
    let countdown = 60;
    resendBtn.disabled = true;
    countdownEl.textContent = `(${countdown})`;
    const countdownInterval = setInterval(()=>{
        countdown--;
        countdownEl.textContent = `(${countdown})`;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            resendBtn.disabled = false;
            countdownEl.textContent = '';
        }
    }, 1000);
};

},{"./auth.js":"4GNGB","@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR"}],"lJibV":[function(require,module,exports,__globalThis) {
/*eslint-disable*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSettings", ()=>updateSettings);
parcelHelpers.export(exports, "handleOneImage", ()=>handleOneImage);
parcelHelpers.export(exports, "deleteAccount", ()=>deleteAccount);
var _toastJs = require("./toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
const baseUrl = '/api/v1/users/me/';
const updateUserData = async (body)=>{
    const { name, allowMessages, showLastSeen } = body;
    const response = await fetch(baseUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            allowMessages,
            showLastSeen
        })
    });
    return response;
};
const updateUserPassword = async (body)=>{
    const { currentPassword, password, passwordConfirm } = body;
    const response = await fetch(`${baseUrl}update-password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            currentPassword,
            password,
            passwordConfirm
        })
    });
    return response;
};
const updateSettings = async (body, type)=>{
    try {
        const response = type === 'data' ? await updateUserData(body) : await updateUserPassword(body);
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', `${type.toUpperCase()} was updated successfully!`);
        return true;
    } catch (err) {
        if (err.message.includes('ref')) (0, _toastJsDefault.default)('error', 'Password and confirmation do not match');
        else (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const deleteAccount = async ()=>{
    try {
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'Something went wrong');
        }
        (0, _toastJsDefault.default)('success', `Your account was deleted successfully!`);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const handleOneImage = async (method, photo = null)=>{
    try {
        let formData;
        if (photo) {
            formData = new FormData();
            formData.append('avatar', photo);
        }
        const response = await fetch(`${baseUrl}photo`, {
            method,
            body: method === 'PATCH' ? formData : null
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR","./toast.js":"dCvBd"}],"dQrWs":[function(require,module,exports,__globalThis) {
/* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendMsg", ()=>sendMsg);
parcelHelpers.export(exports, "toggleFavourite", ()=>toggleFavourite);
parcelHelpers.export(exports, "deleteOneMsg", ()=>deleteOneMsg);
parcelHelpers.export(exports, "deleteAllMsgs", ()=>deleteAllMsgs);
var _toastJs = require("./toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
const baseUrl = '/api/v1/messages/';
const sendMsg = async (body)=>{
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', 'Your message sent successfully');
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const toggleFavourite = async (body)=>{
    try {
        const { msgId } = body;
        const response = await fetch(`/api/v1/messages/favourite/${msgId}`, {
            method: 'PATCH'
        });
        const dataSend = await response.json();
        if (!response.ok) throw new Error(dataSend.message || 'Something went wrong');
        (0, _toastJsDefault.default)('success', dataSend.message);
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const deleteOneMsg = async (body)=>{
    try {
        const { msgId } = body;
        const response = await fetch(`${baseUrl}${msgId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'Something went wrong');
        }
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};
const deleteAllMsgs = async ()=>{
    try {
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const errData = await response.json();
            throw new Error(errData.message || 'Something went wrong');
        }
        (0, _toastJsDefault.default)('success', 'All messages deleted successfully');
        return true;
    } catch (err) {
        (0, _toastJsDefault.default)('error', err.message);
        return false;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iOzeR","./toast.js":"dCvBd"}]},["j85dc","2VqTL"], "2VqTL", "parcelRequirea981", {})

//# sourceMappingURL=index.js.map
