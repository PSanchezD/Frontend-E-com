import love from "../Asset/love.jpeg";
import { data } from "../info/info";

function Home() {
  return (
    <>
      <div className="container">
        <div className="home-c">
          <div id="img"></div>
          <div className="home-r">
            <div className="home-t">
              <h1>EXCITING NEW STICKER</h1>
              <a href="#">Shop</a>
            </div>
          </div>
        </div>
        <div className="div-2-c">
          <div className="div-2-r">
            <div className="div-2-content">
              <div>
                <h1>welcome </h1>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </div>
        <div className="div-3-c">
          {data.map((item) => {
            return (
              <div className="div-3-r">
                <a href="#">
                  <div className="div-3-content">
                    <img src={item.img} alt="stick" />
                    <p>{item.text}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
