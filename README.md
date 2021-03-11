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

```scss
@import "~@jswork/react-layout-trbla/dist/style.scss";
@import "~@jswork/react-blank/dist/style.scss";
```

```js
import '@jswork/next-rc';

// inejct to nx.$rc
nx.rc(null);
```

```jsx
<nx.$rc.layout value="lr">
  <aside>
  Sidebar
  </aside>
  <div>
    <p>Main Content.</p>
    <nx.$rc.blank value={10} />
    <p>Sub content.</p>
  </div>
</nx.$rc.layout>
```

## preset
- @jswork/react-blank 
- @jswork/react-status-manager 
- @jswork/react-condition-manager 
- @jswork/react-if-else

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
