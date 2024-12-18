import React, {createContext, useState, useContext, useEffect} from 'react';

// Tạo context cho posts
const BlogContext = createContext();

// Hàm lưu trữ bài viết vào localStorage
const saveToLocalStorage = (data) => {
    localStorage.setItem('posts', JSON.stringify(data));
};

// Hàm lấy bài viết từ localStorage
const getFromLocalStorage = () => {
    const data = localStorage.getItem('posts');
    return data ? JSON.parse(data) : [];
};

// Provider để cung cấp dữ liệu posts và các phương thức
export const BlogProvider = ({children}) => {
    const [posts, setPosts] = useState(getFromLocalStorage());

    // Lưu posts vào localStorage mỗi khi posts thay đổi
    useEffect(() => {
        saveToLocalStorage(posts);
    }, [posts]);


    // Hàm thêm bài viết
    const addPost = (title, content, image) => {
        const id = posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;
        const newPost = {
            id: id + 1,
            title,
            content,
            image,
        };
        setPosts([...posts, newPost]);
    };

    // Hàm xóa bài viết
    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    // Hàm sửa bài viết
    const editPost = (id, title, content, image) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? {...post, title, content, image} : post
        );
        setPosts(updatedPosts);
    };

    return (
        <BlogContext.Provider value={{posts, addPost, deletePost, editPost}}>
            {children}
        </BlogContext.Provider>
    );
};

// Custom Hook để sử dụng context trong các component
export const useBlogs = () => useContext(BlogContext);
