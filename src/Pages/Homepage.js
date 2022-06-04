import back from "../Asset/gif.gif";

function Home() {
  return (
    <>
      <div className="container">
        <div className="home-c">
          <img src={back} alt="background" />
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
              <h1>welcome </h1>
              <p>lorem efeifje ps;kpwejor sdf</p>
            </div>
          </div>
        </div>
        <div className="div-3-c">
            <div className="div-3-r">
                <div className="div-3-content">
                    <a href="#"><img src="" alt="stick"/></a>
                    <a href="#"><img src="" alt="stick"/></a>
                    <a href="#"><img src="" alt="stick"/></a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Home;
