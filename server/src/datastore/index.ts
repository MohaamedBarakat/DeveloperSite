import { CommentDao } from "./dao/commentDao";
import { LikeDao } from "./dao/likeDao";
import { UserDao } from "./dao/userDao";
import { PostDao } from "./dao/postDao";

export interface Datastore extends CommentDao,LikeDao,UserDao,PostDao{

}
