# next-rc
> React components quick path for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-rc
```

## usage
```js
import '@jswork/next-rc';

// inejct to nx.$rc
nx.rc(null);
```

```jsx
<nx.$rc.rcm items={[cnd1, cnd2 ]}>
  <div> view1 </dvi>
  <div> view2 </dvi>
</nx.$rc.rcm>
```

## preset
- [@jswork/react-status-manager](https://github.com/afeiship/react-status-manager)
- [@jswork/react-condition-manager](https://github.com/afeiship/react-condition-manager)
- [@jswork/react-if-else](https://github.com/afeiship/react-if-else)

## license
Code released under [the MIT license](https://github.com/afeiship/next-rc/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-rc
[version-url]: https://npmjs.org/package/@jswork/next-rc

[license-image]: https://img.shields.io/npm/l/@jswork/next-rc
[license-url]: https://github.com/afeiship/next-rc/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-rc
[size-url]: https://github.com/afeiship/next-rc/blob/master/dist/next-rc.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-rc
[download-url]: https://www.npmjs.com/package/@jswork/next-rc
