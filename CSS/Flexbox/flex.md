# 摘要

`flex` [CSS简写属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

这个交互案例的源码存储在github仓库。如果你想对此案例做贡献，请克隆项目[https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) 并且给我们推送一个请求(PR)。

## [成分属性](read://https_developer.mozilla.org/?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fflex#%E6%88%90%E5%88%86%E5%B1%9E%E6%80%A7 "Permalink to 成分属性")

此属性是以下CSS属性的简写：

-   [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
-   [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
-   [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

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

可以使用一个，两个或三个值来指定 `flex`属性。

**单值语法**: 值必须为以下其中之一:

-   一个无单位**数([`<number>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/number))**: 它会被当作`flex:<number> 1 0;` `[<flex-shrink>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)`的值被假定为1，然后`[<flex-basis>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)` 的值被假定为`0`。
-   一个有效的**宽度([`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width))**值: 它会被当作 `[<flex-basis>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)的值。`
-   关键字`[none](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#none)`，`[auto](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex#auto)`或`initial`.

**双值语法**: 第一个值必须为一个无单位数，并且它会被当作 `[<flex-grow>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)` 的值。第二个值必须为以下之一：

-   一个无单位数：它会被当作 `[<flex-shrink>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)` 的值。
-   一个有效的宽度值: 它会被当作 `[<flex-basis>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)` 的值。

**三值语法:**

-   第一个值必须为一个无单位数，并且它会被当作 `[<flex-grow>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)` 的值。
-   第二个值必须为一个无单位数，并且它会被当作  `[<flex-shrink>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)` 的值。
-   第三个值必须为一个有效的宽度值， 并且它会被当作 `[<flex-basis>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)` 的值。

## 取值

`initial`

元素会根据自身宽高设置尺寸。它会缩短自身以适应 flex 容器，但不会伸长并吸收 flex 容器中的额外自由空间来适应 flex 容器 。相当于将属性设置为"`flex: 0 1 auto`"。

`auto`

元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 flex 容器中额外的自由空间，也会缩短自身来适应 flex 容器。这相当于将属性设置为 "`flex: 1 1 auto`".

`none`

元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 flex 容器。相当于将属性设置为"`flex: 0 0 auto`"。

`<'flex-grow'>`

定义 flex 项目的 [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) 。负值无效。省略时默认值为 1。 (初始值为 `0`)

`<'flex-shrink'>`

定义 flex 元素的 [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 。负值无效。省略时默认值为`1`。 (初始值为 `1`)

`<'flex-basis'>`

定义 flex 元素的 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis) 属性。若值为`0`，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 auto)

### 描述

大多数情况下，开发者需要将 `flex` 设置为以下值之一： `auto`，`initial`，`none`，或一个无单位正数。要查看这些值的效果，请尝试调整以下 flex容器的大小：

```
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #F4F7F8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1B5385;
  color: white;
  font-family: monospace;
  font-size: 13px;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的[`min-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-width) 与 [`min-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/min-height)属性。

## [正式定义](read://https_developer.mozilla.org/?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fflex#%E6%AD%A3%E5%BC%8F%E5%AE%9A%E4%B9%89 "Permalink to 正式定义")

[初始值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial_value)

as each of the properties of the shorthand:  

-   [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow): `0`
-   [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink): `1`
-   [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis): `auto`

适用元素

flex items, including in-flow pseudo-elements

[是否是继承属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)

否

[计算值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/computed_value)

as each of the properties of the shorthand:  

-   [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow): as specified
-   [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink): as specified
-   [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis): as specified, but with relative lengths converted into absolute lengths

Animation type

as each of the properties of the shorthand:  

-   [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow): a [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number#interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers.")
-   [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink): a [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number#interpolation "Values of the <number> CSS data type are interpolated as real, floating-point, numbers.")
-   [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis): a [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length#interpolation "Values of the <length> CSS data type are interpolated as real, floating-point numbers."), [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage#interpolation "Values of the <percentage> CSS data type are interpolated as real, floating-point numbers.") or calc();

显示详细信息

## [正式语法](read://https_developer.mozilla.org/?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fflex#%E6%AD%A3%E5%BC%8F%E8%AF%AD%E6%B3%95 "Permalink to 正式语法")

none [|](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax#single_bar "Single bar: exactly one of the entities must be present") [[](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax#brackets "Brackets: enclose several entities, combinators, and multipliers to transform them as a single component") [<'flex-grow'>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow "<number>") [<'flex-shrink'>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink "<number>")[?](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax#question_mark "Question mark: the entity is optional") [||](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax#double_bar "Double bar: one or several of the entities must be present, in any order") [<'flex-basis'>](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis "content | <'width'>") []](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Value_definition_syntax#brackets "Brackets: enclose several entities, combinators, and multipliers to transform them as a single component")