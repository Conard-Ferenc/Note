# 摘要

`scroll-snap-type` [CSS](../CSS) 属性定义在滚动容器中的一个临时点（snap point）如何被严格的执行。

此属性不能用来指定任何精确的动画或者物理运动效果来执行临时点，而是交给用户代理来处理。

```css
 /* 关键值 */
scroll-snap-type: none;
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;
 
/* 可选 mandatory | proximity */
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;
/* etc */
/* 全局值  */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

# 语法

## 取值

`none`

- 当这个滚动容器的可视的 viewport 是滚动的，它必须忽略临时点。

`x`

- 滚动容器只捕捉其水平轴上的捕捉位置。

`y`

- 滚动容器只捕捉其垂直轴上的捕捉位置。

`block`

- 滚动容器仅捕捉到其块轴上的捕捉位置。

`inline`

- 滚动容器仅捕捉到其内联轴上的捕捉位置。

`both`

- 滚动容器会独立捕捉到其两个轴上的位置（可能会捕捉到每个轴上的不同元素）

`mandatory`

- 如果它当前没有被滚动，这个滚动容器的可视视图将静止在临时点上。意思是当滚动动作结束，如果可能，它会临时在那个点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

`proximity`

- 如果它当前没有被滚动，这个滚动容器的可视视图将基于基于用户代理滚动的参数去到临时点上。如果内容被添加、移动、删除或者重置大小，滚动偏移将被调整为保持静止在临时点上。

## 正式语法

> none  |  [ x | y | block | inline | both ]  [ mandatory | proximity ]?

# 关联

[[scroll-snap-align]]