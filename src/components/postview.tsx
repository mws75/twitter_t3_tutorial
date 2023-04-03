import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { RouterOutputs } from " /utils/api";
import { relative } from "path";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        className="h-16 w-16 rounded-full"
        src={author?.profileImageUrl}
        alt={`@${author.username}'s profile pic`}
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-200">
          <Link href={`/@${author.username}`}>
            <span>{`@${author?.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{` * ${dayjs(
              post.createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};
