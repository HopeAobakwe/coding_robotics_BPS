import classes from './all-posts.modules.css';
import PostsGrid from './posts-grid';

function AllPosts(pageProps){
    return <section className={classes.posts}>
       <h1>All posts</h1>
       <PostsGrid posts={pageProps.posts}/>
    </section>
    
    }
    
    export default AllPosts;