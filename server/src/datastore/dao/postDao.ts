import { Post } from "../types/post";

export interface PostDao{
    createPost(Post: Post): void;
    getPost(id: string): Post|undefined;
    getPosts(): Post|undefined;
    deletePost(id: string): void;
}