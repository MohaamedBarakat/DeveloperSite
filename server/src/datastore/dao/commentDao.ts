import { Comment } from "../types/comment";

export interface CommentDao{
    createComment(comment: Comment):void;
    listComments(postId: string):Comment|undefined;
    deleteComment(id: string):void
}