import React from 'react';
import axios from 'axios';


class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMessage:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => {
                this.setState({errorMessage:'Error receving data'})
                console.log(error);
            })

    }

    render() {
        const { posts, errorMessage } = this.state;
        return (
            <div>
                <h1>Post List</h1>
                <div>Post List {
                        posts.length ?
                            posts.map(post =>
                                <div key={post.id}>{
                                    post.title
                                }
                                </div>
                            ) : <div>{errorMessage}</div>
                    }
                </div>
            </div>
        );
    }
}

export default PostList;
