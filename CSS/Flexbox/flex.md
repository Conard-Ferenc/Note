# 摘要

`flex`  **CSS简写属性** 设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

## 成分属性q

此属性是以下CSS属性的简写：

-   [`flex-grow`](./flex-grow)
-   [`flex-shrink`](./flex-shrink)
-   [`flex-basis`](./flex-basis)

# 语法

```css
/* 关键字值 */
flex: auto;
flex: initial;
flex: none;

/* 一个值, 无单位数字: flex-grow */
flex: 2;

/* 一个值, width/height: flex-basis */
flex: 10em;
flex: 30px;
flex: min-content;

/* 两个值: flex-grow | flex-basis */
flex: 1 30px;

/* 两个值: flex-grow | flex-shrink */
flex: 2 2;

/* 三个值: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/*全局属性值 */
flex: inherit;
flex: initial;
flex: unset;
```

可以使用一个，两个或三个值来指定 `flex` 属性。

**单值语法**: 值必须为以下其中之一:

-   一个无单位数: 它会被当作 `flex:<flex-grow> 1 0;` `<flex-shrink>`的值被假定为`1`，然后`<flex-basis>` 的值被假定为`0`。
-   一个有效的宽度([`width`](./width))值: 它会被当作 `<flex-basis>` 的值。
-   关键字 [`none`](./flex#none)，[`auto`](./flex#auto) 或 [`initial`](./flex#initial) .

**双值语法**: 第一个值必须为一个无单位数，并且它会被当作 [`<flex-grow>`](./flex-grow) 的值。第二个值必须为以下之一：

-   一个无单位数：它会被当作 [`<flex-shrink>`](./flex-shrink) 的值。
-   一个有效的宽度值: 它会被当作 [`<flex-basis>`](./flex-basis) 的值。

**三值语法:**

-   第一个值必须为一个无单位数，并且它会被当作 [`<flex-grow>`](./flex-grow) 的值。
-   第二个值必须为一个无单位数，并且它会被当作  [`<flex-shrink>`](./flex-shrink) 的值。
-   第三个值必须为一个有效的宽度值， 并且它会被当作 [`<flex-basis>`](./flex-basis) 的值。

## 取值

### `initial`

元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"`flex: 0 1 auto`"。

### `auto`

元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "`flex: 1 1 auto`".

### `none`

元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"`flex: 0 0 auto`"。

`<'flex-grow'>`

定义 flex 项目的 [`flex-grow`](./flex-grow) 。负值无效。省略时默认值为 `1` 。(初始值为 `0`)

`<'flex-shrink'>`

定义 flex 元素的 [`flex-shrink`](./flex-shrink) 。负值无效。省略时默认值为`1`。(初始值为 `1`)

`<'flex-basis'>`

定义 flex 元素的 [`flex-basis`](./flex-basis) 属性。若值为 `0` ，则必须加上单位，以免被视作伸缩性。省略时默认值为 `0`。(初始值为 auto)

## 描述

大多数情况下，开发者需要将 `flex` 设置为以下值之一： `auto` ，`initial` ，`none` ，或一个无单位正数。
默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的 [`min-width`](./min-width) 与 [`min-height`](./min-height) 属性。

## 正式语法

> none | \[ [<'flex-grow'>](./flex-grow) [<'flex-shrink'>](./flex-shrink)? || [<'flex-basis'>](./flex-basis "content | <'width'>") \]