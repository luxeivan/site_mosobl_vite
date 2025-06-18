import React from "react";

export default function TopImage({ image, title, more = undefined, paddingTop = undefined, paddingBottom = undefined }) {
  if (image) {
    return (
      <section className="first-screen-inner">
        <picture className="first-screen-inner__bg-image">
          {/* <source srcSet={img37550ba6c53ac1236dc634e6c4f22cc1} type="image/webp" />
                  <source srcset="/upload/iblock/375/37550ba6c53ac1236dc634e6c4f22cc1.jpg" type="image/jpeg" /> */}
          <img src={image} alt="Информация о компании" />
        </picture>
        <div className="container">
          <div className="first-screen-inner__container" style={{ paddingTop, paddingBottom }}>
            <div className="first-screen-inner__wrapper">
              <div className="first-screen-inner__down">
                <h1 className="title-page">{title}</h1>
              </div>
              {more}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (<div className="dummy"></div>)
  }
}

