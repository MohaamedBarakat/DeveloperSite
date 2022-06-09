import { Like } from "../types/like";

export interface LikeDao{
    createLike(like: Like): void;
}