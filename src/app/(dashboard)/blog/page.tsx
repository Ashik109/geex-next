import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Blog - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function BlogPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Blog"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__blog"}>
            <div className={"geex-content__blog__wrapper"}>
              <div className={"row"}>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/2.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"Getting eyeballs what you write for business tricky."}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/4.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"Which tool seems the best content writing strategy"}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/3.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"More then just buzzwords market concepts of SEO"}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/1.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"Understanding Lending The Basics and Beyond"}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-sm-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/2.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"Getting eyeballs what you write for business is tricky"}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-sm-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/3.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"Xi, Putin hail 'new era' of ties in united..."}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6 mb-sm-25"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/4.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"How to Start Cloud Kitchen 6 Proven Steps."}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-4 col-md-6"}>
                  <div className={"geex-content__blog__single"}>
                    <div className={"geex-content__blog__single__img"}>
                      <a href={"/blog-details"}>
                        <img src={"/assets/img/blog/1.png"} alt={"Single Blog"} />
                      </a>
                    </div>
                    <div className={"geex-content__blog__single__content"}>
                      <div className={"geex-content__blog__single__quickinfo"}>
                        <a href={"#"}>
                          {"Amir Nisi"}
                        </a>
                        <span>
                          {"10 September, 2024"}
                        </span>
                      </div>
                      <h5 className={"geex-content__blog__single__title"}>
                        <a href={"/blog-details"}>
                          {"What can you pay and buy with a credit card?."}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"geex-content__form__single d-flex gap-20 justify-content-between pb-0"}>
              <div className={"geex-content__form__single__left"}>
                <p className={"geex-content__form__single__text"}>
                  {"Showing 4 of 256 data"}
                </p>
              </div>
              <div className={"geex-content__form__single__right d-flex gap-20"}>
                <ul className={"geex-content__pagination flex gap-10"}>
                  <li className={"geex-content__pagination__item"}>
                    <a href={"#"} className={"geex-content__pagination__link active"}>
                      {" 1 "}
                    </a>
                  </li>
                  <li className={"geex-content__pagination__item"}>
                    <a href={"#"} className={"geex-content__pagination__link"}>
                      {" 2 "}
                    </a>
                  </li>
                  <li className={"geex-content__pagination__item"}>
                    <a href={"#"} className={"geex-content__pagination__link"}>
                      {" 3 "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
