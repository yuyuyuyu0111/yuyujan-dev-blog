import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function getAbout() {
  const page = `
# yuyujan.dev について

## 説明

ゆゆじゃんが気ままに何かしら書く場所。
たぶんプログラミング関係の話が多いと思う。


## 心がけ

正しいものを書くように努めます。
なるべく出典を書きます。
生成 AI も少々使いますが、自分自身が納得しない限りは記事にはしません。
どうにも良くわからないけど動くぞ、みたいなときは素直に「良く分からんけど～」みたいな表現をつけて、不明瞭であることを明示します。

## 使用している技術

- [さくらのVPS](https://vps.sakura.ad.jp/)
- [Cloudflare](https://www.cloudflare.com/ja-jp/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailscale](https://tailscale.com/)

## SNS とか

- [X](https://x.com/yuyujan11)
- [GitHub](https://github.com/yuyuyuyu0111)
`;
  return (
    <div className="markdown">
      <Markdown remarkPlugins={[remarkGfm]}>{page}</Markdown>
    </div>
  );
}
