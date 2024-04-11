import './App.scss'
import Header from "./components/Header";
import ReplyForm from './components/ReplyForm';
import ReplyList from './components/ReplyList';

//Import point should be the highest in the three that is relevant
import { forumPost } from "./data/postData";
import { usersObj } from "./data/userData";



function App() {

  const replies = forumPost.replies
  const forumPostAuthor = usersObj[forumPost.authorId]; //Add the position of the forumPost/authorId onto usersObj
  return (
    <>
      <Header />
      <main>
        <section>
          <header>
            <h1>{forumPost.question}</h1>
            <h2>
              <img src={forumPostAuthor.profile_url} alt='' />
              <span>By: {forumPostAuthor.name}</span>
            </h2>
          </header>
          <main>
            <ReplyList replies={replies} users={usersObj} />
          </main> 
          <footer>
            <ReplyForm />
          </footer>
        </section> 
      </main>
    </>
  );
}

export default App
