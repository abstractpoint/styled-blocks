# STYLED <♒️ _> BLOCKS
*Styled Component Primitives for rapid prototyping in React!*

---

Styled Blocks is a bunch of primitives you can simply import, 
add some style props to, easily use your theme, ship! 🚢

No need to learn *yet another API*, you already know it. 🕶 

`npm i styled-blocks` OR `yarn add styled-blocks`

```
import { 
    Col, 
    Grid, 
    Inline, 
    InlineBlock, 
    InlineCol, 
    InlineRow, 
    Row 
} from 'styled-blocks';

<Block
    _backgroundColor="c.primary.500"
    _boxShadow="shadow.1"
    ...
```

For anything more advanced, you can extend usual way using `styled()`

The primitives are: 

**Block, Box, Col, Grid, Inline, InlineBlock, 
InlineCol, InlineRow, Row**

All are *divs* by default: (Overridable using **as** prop)

```
Box - has no style defined
Block - display: block
Inline - display: inline
InlineBlock - display: inline-block
Col/Row - flexbox FTW!
InlineRow/Col - same except inline flexbox
Grid - CSS grid!
```

## Theme 🎠
Theming follows styled components api, by doing:
```
import { ThemeProvider } from 'styled-components'
<ThemeProvider theme={yourTheme}>
    <Block ... />
</ThemeProvider>

```

## Breakpoints / Media Queries 🥞
In your theme, define breakpoints as a property and array
as value. 
```
{
    breakpoints: ['30rem', '60rem'],
    ...
}
```

then in your components you can supply an array to any
styled prop, for example: 

`<Block _color={['blue', 'red', 'green']} ...`

(First value will become the initial value, the rest
will be wrapped in media queries with corresponding
breakpoints)

Rest of the theme follows your rules, simply create object
structure that suits you. The lookup works just like
lodash *get* method, using dot notation. `c.primary.500` or 
`shadow.1` for accessing arrays or objects in your theme:

```
{
    breakpoints: ['30rem', '60rem'],
    ...
    c: {
        primary: {
            500: '#eebbdd',
            600: '#11ee33',
            700: '#33ff00',
        }
    },
    shadow: [
        '5px 10px #888888',
        '7px 15px #999999',
    ]
}
```

## Inspired by 💖
This project was inspired by excellent other efforts:
* [Subatomic](https://github.com/gragland/subatomic)
* [jsxstyle](https://github.com/jsxstyle/jsxstyle)
* [Tachyons](https://tachyons.io/)
* [Tailwind](https://tailwindcss.com)

