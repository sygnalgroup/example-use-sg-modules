# example-react-sg-modules

> Example CRUD with packge react-sg-modules

[![NPM](https://img.shields.io/npm/v/react-sg-modules.svg)](https://www.npmjs.com/package/@sygnalgroup/react-sg-modules) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


SET API USE IN index.js

```javascript
  import { setApiBaseUrl } from '@sygnalgroup/react-sg-modules'
  setApiBaseUrl('https://crudcrud.com/api/a1cf21cf15b74a2387f6e8cf62a00502')
```

TO USE THE HOOK METHODS USE PROVIDER

```javascript
  import { Provider } from '@sygnalgroup/react-sg-modules'

  <Provider>
    <App />
  </Provider>

```

CRUD POSTS EXAMPLE

## POSTS MODULE
```javascript

import { api } from '@sygnalgroup/react-sg-modules';

export const postsModule = 'posts';

const loadingStates = {
  start: { loading: true },
  error: { loading: false },
  success: { loading: false },
};

const actions = {
  getPosts: {
    module: postsModule,
    name: 'getPosts',
    api: () => api.get('/posts'),
    params: {
      start: ['params'],
      error: ['error'],
      success: ['data'],
    },
    state: loadingStates,
  },
  addPost: {
    module: postsModule,
    name: 'addPost',
    api: (data) => api.post('/posts', data),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  editPost: {
    module: postsModule,
    name: 'editPost',
    api: (data) => api.put(`/posts/${data.id}`, data),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
  removePost: {
    module: postsModule,
    name: 'removePost',
    api: (id) => api.delete(`/posts/${id}`),
    params: {
      start: ['params'],
      error: ['error'],
      success: [''],
    },
    state: loadingStates,
  },
};

const posts = {
  actions,
  state: {
    loadingPosts: false,
    data: [],
  },
}

export default posts;


```

## POSTS VIEW
```javascript
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
```