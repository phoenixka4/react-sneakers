function App() {
  return (
    <div className="wrapper clear">

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src='/img/logo.avif' />
          <div className="headerInfo">
            <h3 className="text-uppercase">Reakt sneekers</h3>
            <p className="opacity-5"> Магазин лучших кросовок</p>
          </div> 
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} htight={20} src="/img/cartlogo.avif" />
            <span>123грн</span></li>
          <li>
            <img width={20} hight={20} src="/img/userIco.avif" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">
          все кросовки
        </h1>
    
<div className="d-flex">
        <div className="card">

          <img width={133} height={122} src="" alt="Sneakers"/>
          <h5>мужские кросовки</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>12000 грн</b>
            </div>
            <button className="button">
              <img  width={11} height={11} src="/img/logo.avif"/>
            </button>
          </div>
          

        </div>
        <div className="card">

<img width={133} height={122} src="" alt="Sneakers2"/>
<h5>мужские кросовки</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column ">
    <span>Цена:</span>
    <b>12000 грн</b>
  </div>
  <button className="button">
    <img  width={11} height={11} src="/img/logo.avif"/>
  </button>
</div>


</div>
<div className="card">

<img width={133} height={122} src="" alt="Sneakers3"/>
<h5>мужские кросовки</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column ">
    <span>Цена:</span>
    <b>12000 грн</b>
  </div>
  <button className="button">
    <img  width={11} height={11} src="/img/logo.avif"/>
  </button>
</div>


</div>
<div className="card">

<img width={133} height={122} src="" alt="Sneakers4"/>
<h5>мужские кросовки</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column ">
    <span>Цена:</span>
    <b>12000 грн</b>
  </div>
  <button className="button">
    <img  width={11} height={11} src="/img/logo.avif"/>
  </button>
</div>


</div>
        </div>
      </div>
    </div>
  );
}

export default App;
