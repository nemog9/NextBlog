---
title: 'YouTubeの埋め込みを作る'
date: '2023-04-10'
tags:
 - 'Nextjs'
 - 'blog'
---

## 完成形

```youtube
4wEjsUuwQzM
```

## ざっくり手順説明

1. コードブロックを作成する処理にyoutubeの場合の処理を加える
2. `react-youtube`というライブラリで埋め込みを作成する
3. スタイルの調整

## 詳細解説

### TS側のコード

現状の記事詳細ページでは、以下のような構造でMarkdownをHTMLに変換しています。`react-markdown`というライブラリでパースしています。

Markdownファイル内にコードブロックが見つかった場合、`Code`コンポーネントに処理を渡す、という流れです。

```tsx:[slug].tsx
// [slug].tsx
const Post = ({ post }: Props) => {
  return (
    <main className={styles.main}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="h6">{post.date}</Typography>
      </Box>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: Code }}>
        {post.content}
      </ReactMarkdown>
    </main>

  );
};
// 中略
export default Post;
```

そして、`Code`コンポーネントが以下のコードです。

`match`の箇所で、クラス名から正規表現を用いて言語名を取得しています。今回の場合、言語名が`youtube`の場合に`<YouTube />`コンポーネントを返します。

`<YouTube />`には`videoId`を指定します。コードブロック内の値を`children[0]`で取得しています。

```tsx:Code.tsx
// Code.tsx
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import YouTube from 'react-youtube';

export const Code: CodeComponent = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\\w+)/.exec(className || '');
  if (match && match.length > 0 && match[1] === 'youtube') {
    return (
      <div className='youtube-wrap'>
        <YouTube videoId={children[0]} />
      </div>
    );

  }
  return !inline && match ? (
    <SyntaxHighlighter
      style={okaidia}
      language={match[1]}
      PreTag="div"
      {...props}
      w={100}>
      {String(children).replace(/\\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
```

これらコードを実装することで、以下のようなコードブロックを書くことで、埋め込みを行うことができます。

![スクリーンショット](https://user-images.githubusercontent.com/39045085/230901903-a2f87aa8-24b4-48ac-aa5d-28491db86a2d.png
)

### スタイルを当てる

`global.css`に以下のコードを書き足します。

`aspect-ratio`という値に比率を書くと、widthだけで高さを決めてくれます。とても便利なので良いです。検索すると`padding: 56.25%`を設定して比率を固定することもできるみたいですが、こっちのほうが断然いいですね。

```css
.youtube-wrap iframe {
  margin: 1rem 0;
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 680px;
  height: auto;
}
```

## FYI

- [オレオレ記法の Markdown を任意の ReactElement として変換する - Qiita](https://qiita.com/bigmon/items/de62335https://github.com/tjallingt/react-youtubefbf8388192499)
- [tjallingt/react-youtube: react.js powered YouTube player component](https://github.com/tjallingt/react-youtube)
