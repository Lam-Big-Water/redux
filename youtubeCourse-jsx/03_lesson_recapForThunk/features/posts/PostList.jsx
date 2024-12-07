import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {selectAllPosts, selectAllStatus, fetchPost} from "./postSlice";

const PostList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectAllPosts);
    const status = useSelector(selectAllStatus);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPost());
        }
    }, []);

    if (status === 'loading') return <div>Loading ... </div>
    if (status === 'failed') return <div>Failed </div>

    return (
        <div>
            <ul>
                {items.map((item) => (<div key={item.id}>{item.id}: {item.title}</div>))}
            </ul>
        </div>
    )
}

export default PostList;