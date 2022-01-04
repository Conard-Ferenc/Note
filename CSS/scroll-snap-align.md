# 摘要

`scroll-snap-align` 该属性将框的对齐位置指定为其对齐区域（对齐标记）在其对齐容器的对齐端口（对齐容器）中的对齐方式。这两个值分别指定块轴和内联轴中的捕捉对齐方式。如果只指定了一个值，则第二个值默认为相同的值。

# 语法

```css
/* Keyword values */
scroll-snap-align: none;
scroll-snap-align: start end; /* when two values set first is block, second inline */
scroll-snap-align: center;

/* Global values */
scroll-snap-align: inherit;
scroll-snap-align: initial;
scroll-snap-align: revert;
scroll-snap-align: unset;```

## 值

`none`

- 该框不定义该轴中的对齐位置。

`start`

- 此框的滚动对齐区域的开始对齐方式（在滚动容器的对齐端口内）是此轴中的对齐位置。

`end`

- 此框的滚动对齐区域的末端对齐方式（在滚动容器的对齐端口内）是此轴中的对齐位置。

`center`

- 此框的滚动对齐区域的中心对齐方式（在滚动容器的对齐端口内）是此轴中的对齐位置

## 正式语法

> [ none | start | end | center ]{1,2}
