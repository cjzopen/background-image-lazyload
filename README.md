# bg-lazyload 操作說明

本專案提供一個 JS 與 CSS 解決方案，讓你可以用 data- 屬性與 class 實現背景圖片、顏色等 lazyload 效果，並支援動態載入元素。

## 使用方式

1. 引入 `bg-lazyload.js` 與 `bg-lazyload.css`：

```html
<link rel="stylesheet" href="bg-lazyload.css">
<script src="bg-lazyload.js"></script>
```

2. 在你要 lazyload 的元素加上 `class="bg-lazyload"`，並用 `data-image` 設定背景圖片網址。

3. 其它 data- 屬性（如 data-color、data-bgcolor、data-min-height、data-viewport-width）可選用。

4. 可加上 `.bg-position-*` 來控制背景位置。

5. lazyload 完成後，元素會自動加上 `bg-lazyloaded` class。

## HTML 範例

```html
<div
  class="bg-lazyload bg-position-top-right"
  data-image="https://picsum.photos/600/300?random=1"
  data-color="#fff"
  data-bgcolor="#333"
  data-min-height="19rem"
  data-viewport-width="768"
>
  這是 lazyload 背景
</div>
```

## 支援的 data- 屬性
- `data-image`：背景圖片網址（必填）
- `data-color`：文字顏色（可選）
- `data-bgcolor`：背景顏色（可選）
- `data-bgsize`：背景大小（CSS 預設 cover）
- `data-min-height`：最小高度（可選）
- `data-viewport-width`：僅當視窗寬度大於等於此值時才載入圖片（可選，單位 px，沒有偵測 resize event）

> 當 `data-viewport-width` 條件不符時，圖片不會載入，但其它 data- 設定仍會套用。

## 支援的背景位置 class
- `bg-position-top`
- `bg-position-bottom`
- `bg-position-left`
- `bg-position-right`
- `bg-position-center`
- `bg-position-top-left`
- `bg-position-top-right`
- `bg-position-bottom-left`
- `bg-position-bottom-right`
- `bg-fixed`

## 其他
- lazyload 完成後，元素會自動加上 `bg-lazyloaded` class。
- 支援動態新增的元素。
