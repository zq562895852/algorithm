// 从浏览器缓存淘汰策略和Vue的keep - alive学习LRU算法
// 1. 浏览器缓存淘汰策略
// 当我们打开一个网页时，例如 https://github.com/sisterAn/JavaScript-Algorithms ，它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。
// 其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。
// LRU （ Least Recently Used ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 如果数据最近被访问过，那么将来被访问的几率也更高 ，优先淘汰最近没有被访问到的数据。

//2. 在 keep-alive 缓存超过 max 时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 cache 对象用于保存缓存的组件实例及 key 值，keys 数组用于保存缓存组件的 key ，当 keep-alive 中渲染一个需要缓存的实例时：

// 判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 key 在 keys 中的位置（移除 keys 中 key ，并放入 keys 数组的最后一位）
// 如果没有缓存，则缓存该实例，若 keys 的长度大于 max （缓存长度超过上限），则移除 keys[0] 缓存

if (cache[key]) {
  vnode.componentInstance = cache[key].componentInstance;
  // make current key freshest
  remove(keys, key);
  keys.push(key);
}
// 如果没有命中缓存,就把 vnode 放进缓存
else {
  cache[key] = vnode;
  keys.push(key);
  // prune oldest entry
  // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个
  if (this.max && keys.length > parseInt(this.max)) {
    pruneCacheEntry(cache, keys[0], keys, this._vnode);
  }
}
