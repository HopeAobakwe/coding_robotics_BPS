const DUMMY_POSTS = [
    {title:'  How Bullying affects us',
     image: 'post2.jpg', 
     excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
     date: '2022-02-10',
      slug: 'bullying1' 
    },

    {title:'GETTING-STARTED-WITH-NEXT-JS',
    image: 'post1.jpg', 
    excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
    date: '2022-02-10',
     slug: 'bullying2' 
   },

   {
    title:'GETTING-STARTED-WITH-NEXT-JS',
   image: 'post3.jpg', 
   excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
   date: '2022-02-10',
    slug: 'bullying3' 
},

{title:'GETTING-STARTED-WITH-NEXT-JS',
image: 'Post5.jpg', 
excerpt:'nextjas is a react framework for production- it makes building fullstack react apps and sites a breeze and builds with server side rendering ', 
date: '2022-02-10',
 slug: 'bullying4' 
},

];




function AllPostsPage(){


return <AllPosts posts={DUMMY_POSTS}/>

}

export default AllPostsPage;