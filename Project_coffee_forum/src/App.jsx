import './App.css'
import Header from "./components/Header";
import ReplyForm from './components/ReplyForm';
import ReplyList from './components/ReplyList';


function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <header>
            <h1>QUESTION</h1>
            <h2>
              <span>By: AUTHOR NAME</span>
              <img src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt='' />
            </h2>
          </header>
          <main>
            <ReplyList />
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
