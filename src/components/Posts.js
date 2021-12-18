import React, { useEffect, useState } from 'react';
import { useActions, useSelectors } from '@sygnalgroup/react-sg-modules';
import { postsModule } from '../modules/posts';
import Modules from '../modules';
import imgLoading from '../loading.gif';

const Posts = () => {
  const { request } = useActions();
  const { data, loading } = useSelectors(postsModule);
  const [postData, setPostData] = useState({});

  const loadData = () => {
    request({
      action: Modules.posts.actions.getPosts,
    })
  }

  const savePost = () => {
    request({
      action: postData.id ? Modules.posts.actions.editPost : Modules.posts.actions.addPost,
      data: postData,
      options: {
        onSuccess: () => {
          setPostData({});
          loadData();
        },
        onError: () => {
          alert('error')
        },
      }
    })
  }

  const remove = (id) => {
    request({
      action: Modules.posts.actions.removePost,
      data: id,
      options: {
        onSuccess: () => {
          setPostData({});
          loadData();
        },
        onError: () => {
          alert('error')
        },
      }
    })
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="container">
      <h1>react-sg-modules</h1>
      <div className="card-form">
        <input
          value={postData.title || ''}
          onChange={(e) => setPostData((prev) => ({...prev, title: e.target.value}))} />
        <button onClick={() => savePost()}>{postData.id ? 'EDIT' : 'ADD'} </button>
      </div>
      <div className="card-table">
        {loading && <div>
          <img src={imgLoading} alt='Loading...' width={50} />
        </div>}

        {data && data.map(item => (
          <div key={item.id}>
            <div>
              {item.title}&nbsp;
              <button onClick={() => setPostData(item)}>edit</button>
              <button onClick={() => remove(item.id)}>X</button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts;