import { AUTH } from "../firebase";

function Home() {
  async function clickLogout() {
    try {
      await AUTH.signOut();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={clickLogout}>Log out</button>
    </div>
  );
}

export default Home;
