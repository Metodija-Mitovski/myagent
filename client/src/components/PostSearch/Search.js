import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../state/action-creators/post-actions";
import api from "../../api/api";

//components
import QueryData from "../QuerySection/QueryData";
import { Wrapper } from "./SearchElements";
import SinglePost from "../LatestPostsSection/SinglePost";
import LoaderBig from "../Loader/LoaderBig";

const Search = () => {
  let [page, setPage] = useState(1);
  let [url, setUrl] = useState(`${api.rootPost}?page=${page}&`);
  let [query, setQuery] = useState({});

  const dispatch = useDispatch();
  const { posts, isFetching, errorMsg } = useSelector(
    (state) => state.postsReducer
  );

  useEffect(() => {
    dispatch(getPostsRequest(url));
  }, [dispatch]);

  if (isFetching) {
    return (
      <Wrapper>
        <div>
          <LoaderBig />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <QueryData
        search={true}
        url={url}
        setUrl={setUrl}
        query={query}
        setQuery={setQuery}
      />
      {posts.length === 0 ? (
        <h1>Не се пронајдени активни постови</h1>
      ) : (
        <>
          {posts.map((post) => {
            return <SinglePost key={post._id} post={post} />;
          })}
          {errorMsg && <h2>{errorMsg.message}</h2>}
        </>
      )}
    </Wrapper>
  );
};

export default Search;
