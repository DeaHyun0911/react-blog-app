import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebaseApp";
import React, { useContext, useState } from "react";
import { CommentsInterface, PostProps } from "./PostList";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface CommentsProps {
  post: PostProps;
  getPost: (id: string) => Promise<void>;
}

export default function Comments({ post, getPost }: CommentsProps) {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  console.log(user);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (post && post?.id) {
        const postRef = doc(db, "posts", post.id);

        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };

          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updatedAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
          await getPost(post.id);
        }
      }

      toast.success("댓글을 작성하였습니다.");
      setComment("");
    } catch (e: any) {
      console.log(e);
      toast.error(e?.code);
    }
  };

  const onDelete = async (data: CommentsInterface) => {
    const confirm = window.confirm("해당 댓글을 삭제하시겠습니까?");
    if (confirm && post.id) {
      const PostRef = doc(db, "posts", post.id);

      await updateDoc(PostRef, {
        comments: arrayRemove(data),
      });
      toast.success("댓글을 삭제했습니다.");

      await getPost(post.id);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  return (
    <div className="comments">
      <form className="comments__form" onSubmit={onSubmit}>
        <div className="form__block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="comment"
            required
            value={comment}
            onChange={onChange}
          />
        </div>
        <div className="form__block form__block-reverse">
          <input type="submit" value="입력" className="form__btn-submit" />
        </div>
      </form>
      <div className="comments__list">
        {post?.comments
          ?.slice(0)
          ?.reverse()
          .map((comment) => (
            <div key={comment.createdAt} className="comment__box">
              <div className="comment__profile-box">
                <div className="comment__email">{comment?.email}</div>
                <div className="comment__date">{comment?.createdAt}</div>
                {comment?.uid === user?.uid && (
                  <div
                    role="presentation"
                    className="comment__delete"
                    onClick={() => onDelete(comment)}
                  >
                    삭제
                  </div>
                )}
              </div>
              <div className="conment__text">{comment?.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
