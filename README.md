# emotion-minireset

Minireset.css file for [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library.

The original `minireset.css` is pulled from [jgthms/minireset.css](https://github.com/jgthms/minireset.css), and parsed into emotion ready format.

## Usage

```sh
yarn add emotion-minireset
```

### JavaScript

```js
import { Global, css } from "@emotion/core";
import emotionMinireset from 'emotion-minireset';

// ...

<Global
  styles={css`
    ${emotionMinireset}
    html,
    body {
      padding: 0;
      margin: 0;
      background: white;
      min-height: 100%;
      font-family: Helvetica, Arial, sans-serif;
    }
  `}
/>
```

## License

The [MIT License](LICENSE)

## Credits

emotion-minireset is maintained and sponsored by [Ombori](https://ombori.com/), it was inspired by [emotion-normalize](https://github.com/infinum/emotion-normalize).
