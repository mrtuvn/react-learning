import React, {useState, useEffect} from 'react';

// Hàm lưu trữ bài viết vào localStorage
const savePostStorage = (data) => {
    localStorage.setItem('posts', JSON.stringify(data));
};

// Hàm lấy bài viết từ localStorage
const getPostStorage = () => {
    const data = localStorage.getItem('posts');
    return data ? JSON.parse(data) : [];
};


function BlogAdmin() {
    const [posts, setPosts] = useState(getPostStorage());
    const [editingPost, setEditingPost] = useState(null);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');


    // Lưu lại mỗi khi posts thay đổi
    useEffect(() => {
        savePostStorage(posts);
    }, [posts]);
    // Hàm thêm bài viết
    const addPost = () => {
        if (title && content) {
            const id = posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;
            const newPost = {
                id: id + 1,
                title,
                image,
                content
            };
            setPosts([...posts, newPost]);
            setImage(null);
            setTitle('');
            setContent('');

        }
    };

    // Hàm xóa bài viết
    const deletePost = (id) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
    };

    // Hàm sửa bài viết
    const editPost = (post) => {
        setEditingPost(post);
        setTitle(post.title);
        setImage(post.image);
        setContent(post.content);
    };

    // Hàm lưu bài viết sau khi chỉnh sửa
    const saveEdit = () => {
        const updatedPosts = posts.map(post =>
            post.id === editingPost.id ? {...post, title, image, content} : post
        );
        setPosts(updatedPosts);
        setEditingPost(null);
        setTitle('');
        setImage(null);
        setContent('');
    };

    // Hàm xử lý thay đổi hình ảnh
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Lấy tệp ảnh người dùng chọn
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Cập nhật URL ảnh sau khi đọc file
            };
            reader.readAsDataURL(file); // Đọc file ảnh và chuyển thành URL
        }
    };

    return (
        <React.Fragment>
            <div className="container blog-admin">
                <div className="heading"> {editingPost ? 'Edit a post' : 'Create a post'}</div>
                <form>
                    <div className="bg-white">
                        <div className="input-field required">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="image">Image</label>
                            <input style={{border: 'none', padding: '5px 0', borderRadius: '0'}} type="file" id="image"
                                   name="image"
                                   onChange={handleImageChange}/>
                            {image && <img src={image} alt="Preview" style={{maxWidth: '120px', marginTop: '10px'}}/>}
                        </div>
                        <div className="input-field required">
                            <label htmlFor="content">Content</label>
                            <textarea
                                rows="4"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="button btn-red" onClick={editingPost ? saveEdit : addPost}>
                            {editingPost ? 'Save Changes' : 'Add Post'}
                        </button>
                    </div>
                </form>
            </div>

            {posts.length > 0 && (
                <div className="container blog-admin">
                    <div className="heading">Posts</div>
                    <div className="">
                        <table>
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th style={{width: '150px'}}>Image</th>
                                <th style={{width: '50%'}}>Content</th>
                                <th style={{width: '150px'}}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td style={{textAlign: 'center'}}><img src={post.image} alt=""/></td>
                                    <td>
                                        <div className="content">{post.content}</div>
                                    </td>
                                    <td className="action" style={{textAlign: 'center'}}>
                                        <button onClick={() => editPost(post)}>Edit</button>
                                        <button onClick={() => deletePost(post.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default BlogAdmin;