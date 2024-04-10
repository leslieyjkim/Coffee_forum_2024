import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Super Coffee Forum</h1>
      </header>
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
            <h1>Replies</h1>
            <article>
              <p>REPLY MESSAGE</p>
              <p>AUTHOR NAME</p>
              <img src='https://media.istockphoto.com/id/1415655789/photo/red-eyed-tree-frog-in-costa-rica.webp?b=1&s=170667a&w=0&k=20&c=QhO7_Ktop6ZYwqNSFue1LPd_aWTs3grBHKb-pXfJ_8s=' alt='' />
            </article>
            <article>
              <p>REPLY MESSAGE</p>
              <p>AUTHOR NAME</p>
              <img src='https://t4.ftcdn.net/jpg/07/29/80/29/360_F_729802911_Wd6JtQvHtKqa3vC2DzKrUqROGlAciMzO.jpg' alt='' />
            </article>
            <article>
              <p>REPLY MESSAGE</p>
              <p>AUTHOR NAME</p>
              <img src='https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg' alt='' />
            </article>
          </main> 
          <footer>
            <form>
              <input type='text' placeholder='Enter your comment' />
              <button>Add comment</button>
            </form>
          </footer>
        </section>
      </main>
    </>
  );
}

export default App
