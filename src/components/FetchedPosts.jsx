import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Post from "./Post";
import PreLoader from "./PreLoader";

const FetchedPosts = ({ posts, fetchPosts, isLoading }) => {

  if (isLoading) {
    return (
        <PreLoader />
    );
  }

  if (!posts.length) {
    return (
      <button onClick={fetchPosts} className="btn btn-primary">
        Загрузить
      </button>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.text + post.title} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.fetchedPosts,
    isLoading: state.app.isLoading,
  };
};

export default connect(mapStateToProps, { fetchPosts })(FetchedPosts);
