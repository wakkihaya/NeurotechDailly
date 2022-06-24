const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="container__left">
          <div className="container__title">
            <div className="container__title__name">
              {" "}
              Neurotech <br /> Daily
            </div>
            <div className="container__title__podcast-btn">
              Listen on Podcast
            </div>
          </div>
          <div className="container__cta">CTA</div>
        </div>
        <div className="container__right">
          <div className="container__description">Description</div>
          <div className="container__image">Image</div>
          <div className="container__about-us">NeurotechJP</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
