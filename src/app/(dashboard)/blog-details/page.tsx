import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Blog Details - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function BlogDetailsPage() {
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
                {"Blog Details"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__blog_details"}>
            <div className={"row"}>
              <div className={"col-xxl-9 col-xl-8 lg-mb-40"}>
                <div className={"geex-content__blog_details__wrap"}>
                  <div className={"geex-content__blog_details__img"}>
                    <img src={"/assets/img/blog/details.png"} alt={"geex"} />
                  </div>
                  <div className={"geex-content__blog_details__content"}>
                    <ul className={"geex-content__blog_details__quickinfo"}>
                      <li className={"geex-content__blog_details__quickinfo__item"}>
                        <a href={"#"}>
                          <i className={"uil-user"} />
                          {"Author"}
                        </a>
                      </li>
                      <li className={"geex-content__blog_details__quickinfo__item"}>
                        <a href={"#"}>
                          <i className={"uil-calender"} />
                          {"29 November, 2024"}
                        </a>
                      </li>
                      <li className={"geex-content__blog_details__quickinfo__item"}>
                        <a href={"#"}>
                          <i className={"fa-light uil-flask-potion"} />
                          {"Banking Finance "}
                        </a>
                      </li>
                    </ul>
                    <h2 className={"geex-content__blog_details__title"}>
                      {" Getting eyeballs what you write for business is tricky"}
                    </h2>
                    <p className={"geex-content__blog_details__description"}>
                      {"Scarce funding is squeezing startup budgets, leading to smaller allocations for essential marketing functions such as web analytics, SEO, and email outreach. Discover how AI can enable companies to perform these tasks at significantly lower costs."}
                    </p>
                    <p className={"geex-content__blog_details__description"}>
                      {"The blogging business is booming and the financial space is no exception. Personal finance bloggers often start by documenting their own personal financial journeys and sharing money-saving advice. For some, those journeys lead to a successful business."}
                    </p>
                    <img className={"mb-20"} src={"/assets/img/blog/details1.png"} alt={"blog"} />
                    <p className={"geex-content__blog_details__description"}>
                      {" According to Harlan Landes, founder of The Plutus Awards, “It’s been really interesting to see how the community of bloggers and podcasters has changed. Many blogs and podcasts have become a lot more sophisticated and marketable.” He adds, “People are a lot more concerned with building their businesses and brands, more so than 10 years ago.” "}
                    </p>
                    <p className={"geex-content__blog_details__description"}>
                      {" Here, twenty of the 2019 Plutus Awards finalists share what they have learned building their blogging businesses. As with any small business, their paths to success are diverse. Some of the blogs nominated are young, while others have passed the decade mark; some of these entrepreneurs make a full-time living from their blogs while others use theirs to attract clients for other types of services, such as freelance writing or financial-planning services. "}
                    </p>
                    <blockquote className={"geex-content__blog_details__quote"}>
                      {" “We help families learn how to budget their money, organize their life, and unlock the freedom to do more of the things they love!” "}
                      <span className={"geex-content__blog_details__quote__author"}>
                        {"Brittany Kline"}
                      </span>
                    </blockquote>
                    <p className={"geex-content__blog_details__description"}>
                      {"To become a successful business owner you need to have excellent time-management skills. Over the last three years, we have really put a lot of time and effort into being as efficient as possible in everything we do. Things like using the Eisenhower Matrix, utilizing a project management software, setting up systems for everything we do, outsourcing, and tracking our work hours has been instrumental to our success.\""}
                    </p>
                    <h3 className={"geex-content__blog_details__subtitle"}>
                      {"Getting eyeballs what you write for business is tricky"}
                    </h3>
                    <ul className={"geex-content__blog_details__feature"}>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Consider the end-user experience. "}
                      </li>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Create a realistic timeline. "}
                      </li>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Lifting Up the Next Generation "}
                      </li>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Lifting Up the Next Generation "}
                      </li>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Provide Higher Education Assistance "}
                      </li>
                      <li className={"geex-content__blog_details__feature__list"}>
                        <i className={"uil uil-check"} />
                        {" Ac tortor dignissim convallis aenean "}
                      </li>
                    </ul>
                    <p className={"geex-content__blog_details__description"}>
                      {"Many crypto tokens are volatile and vulnerable to scams, but even those advertised as stable and supposedly backed by assets to ensure their value have collapsed."}
                    </p>
                    <div className={"geex-content__blog_details__tags"}>
                      <h4 className={"geex-content__blog_details__tags__title"}>
                        {"Tags:"}
                      </h4>
                      <div className={"geex-content__blog_details__tags__list"}>
                        <button>
                          {"Finance"}
                        </button>
                        <button>
                          {"Economic"}
                        </button>
                        <button>
                          {"Bank"}
                        </button>
                      </div>
                    </div>
                    <div className={"geex-content__blog_details__author"}>
                      <div className={"geex-content__blog_details__author__img"}>
                        <img src={"/assets/img/avatar/author.png"} alt={"author"} />
                      </div>
                      <div className={"geex-content__blog_details__author__content"}>
                        <h4 className={"geex-content__blog_details__subtitle mb-10"}>
                          {"Alex Olimiya"}
                        </h4>
                        <p className={"geex-content__blog_details__description mb-0"}>
                          {"I am an Example Writer. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labored et dolore magna aliqua. Ut enim ad minim veniam."}
                        </p>
                      </div>
                    </div>
                    <div className={"geex-content__blog_details__news"}>
                      <h3 className={"geex-content__blog_details__subtitle"}>
                        {"You Might Also Like"}
                      </h3>
                      <div className={"geex-content__blog_details__news__inner"}>
                        <div className={"geex-content__blog_details__news__story"}>
                          <div className={"geex-content__blog_details__news__story__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/1.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__blog_details__news__story__content"}>
                            <h6 className={"geex-content__blog_details__news__story__title"}>
                              <a href={"#"} className={""}>
                                {"ChatGPT returns to Italy after ban"}
                              </a>
                            </h6>
                            <span>
                              <i className={"uil-clock"} />
                              {" 06 minute read"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__blog_details__news__story"}>
                          <div className={"geex-content__blog_details__news__story__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/2.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__blog_details__news__story__content"}>
                            <h6 className={"geex-content__blog_details__news__story__title"}>
                              <a href={"#"}>
                                {"Meta to wind down NFTs on platforms..."}
                              </a>
                            </h6>
                            <span>
                              <i className={"uil-clock"} />
                              {" 05 minute read"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__blog_details__reply"}>
                      <h3 className={"geex-content__blog_details__subtitle"}>
                        {"Comment"}
                      </h3>
                      <ul className={"geex-content__blog_details__reply__inner"}>
                        <li className={"geex-content__blog_details__reply__wrapper"}>
                          <div className={"geex-content__blog_details__reply__img"}>
                            <img src={"/assets/img/avatar/user.svg"} alt={"author"} />
                          </div>
                          <div className={"geex-content__blog_details__reply__content"}>
                            <h5 className={"geex-content__blog_details__reply__content__title"}>
                              {"Esther Howard"}
                            </h5>
                            <a href={"#"} className={"geex-content__blog_details__reply__date"}>
                              {"2 Jul 2024"}
                            </a>
                            <p className={"geex-content__blog_details__reply__desc"}>
                              {"Efficiently simplify alternative customer service rather than efficient \"outside the box\" thinking. Dramatically deploy an expanded array of manufactured."}
                            </p>
                          </div>
                          <div className={"geex-content__blog_details__reply__btn"}>
                            <button>
                              <i className={"fa-regular fa-share"} />
                              {" Reply"}
                            </button>
                          </div>
                        </li>
                        <li className={"geex-content__blog_details__reply__wrapper"}>
                          <div className={"geex-content__blog_details__reply__img"}>
                            <img src={"/assets/img/avatar/user.svg"} alt={"author"} />
                          </div>
                          <div className={"geex-content__blog_details__reply__content"}>
                            <h5 className={"geex-content__blog_details__reply__content__title"}>
                              {"Esther Howard"}
                            </h5>
                            <a href={"#"} className={"geex-content__blog_details__reply__date"}>
                              {"2 Jul 2024"}
                            </a>
                            <p className={"geex-content__blog_details__reply__desc"}>
                              {"Efficiently simplify alternative customer service rather than efficient \"outside the box\" thinking. Dramatically deploy an expanded array of manufactured."}
                            </p>
                          </div>
                          <div className={"geex-content__blog_details__reply__btn"}>
                            <button>
                              <i className={"fa-regular fa-share"} />
                              {" Reply"}
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={"geex-content__blog_details__comment"}>
                      <h3 className={"geex-content__blog_details__subtitle"}>
                        {"Leave a Reply"}
                      </h3>
                      <p className={"geex-content__blog_details__comment__subtitle"}>
                        {"Your email address will not be published. Required fields are marked *"}
                      </p>
                      <form action={"#"} className={"geex-content__blog_details__comment__form"}>
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <input type={"text"} className={"form-item"} placeholder={"Name*"} required />
                          <input type={"email"} className={"form-item"} placeholder={"Email*"} required />
                        </div>
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <textarea name={"text"} placeholder={"Comment*"} required />
                        </div>
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <button type={"submit"} className={"submit-btn"}>
                            {"Post Comments"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"col-xxl-3 col-xl-4"}>
                <div className={"geex-content__widget"}>
                  <div className={"geex-content__widget__single"}>
                    <div className={"geex-content__header__searchform"}>
                      <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                      <i className={"uil uil-search"} />
                    </div>
                  </div>
                  <div className={"geex-content__widget__single"}>
                    <h4 className={"geex-content__widget__title"}>
                      {"Top Story"}
                    </h4>
                    <div className={"geex-content__widget__content"}>
                      <div className={"geex-content__widget__article__wrapper"}>
                        <div className={"geex-content__widget__article"}>
                          <div className={"geex-content__widget__article__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/1.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__widget__article__content"}>
                            <div className={"geex-content__widget__quickinfo"}>
                              <a href={"#"}>
                                {"Amir Nisi"}
                              </a>
                              <span>
                                {"10 September, 2024"}
                              </span>
                            </div>
                            <h5 className={"geex-content__widget__article__title"}>
                              <a href={"#"}>
                                {"26% of the world lacks clean drinking water 46%"}
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className={"geex-content__widget__article"}>
                          <div className={"geex-content__widget__article__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/3.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__widget__article__content"}>
                            <div className={"geex-content__widget__quickinfo"}>
                              <a href={"#"}>
                                {"Amir Nisi"}
                              </a>
                              <span>
                                {"10 September, 2024"}
                              </span>
                            </div>
                            <h5 className={"geex-content__widget__article__title"}>
                              <a href={"#"}>
                                {"Most drivers fear MOT rules relaxation will risk lives"}
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className={"geex-content__widget__article"}>
                          <div className={"geex-content__widget__article__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/4.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__widget__article__content"}>
                            <div className={"geex-content__widget__quickinfo"}>
                              <a href={"#"}>
                                {"Amir Nisi"}
                              </a>
                              <span>
                                {"10 September, 2024"}
                              </span>
                            </div>
                            <h5 className={"geex-content__widget__article__title"}>
                              <a href={"#"}>
                                {"Getting eyeballs what you write for business is tricky"}
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className={"geex-content__widget__article"}>
                          <div className={"geex-content__widget__article__img"}>
                            <a href={"/blog-details"}>
                              <img src={"/assets/img/blog/2.png"} alt={"geex"} />
                            </a>
                          </div>
                          <div className={"geex-content__widget__article__content"}>
                            <div className={"geex-content__widget__quickinfo"}>
                              <a href={"#"}>
                                {"Amir Nisi"}
                              </a>
                              <span>
                                {"10 September, 2024"}
                              </span>
                            </div>
                            <h5 className={"geex-content__widget__article__title"}>
                              <a href={"#"}>
                                {"Student Credit Cards All You Need to Know"}
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single"}>
                    <h4 className={"geex-content__widget__title"}>
                      {"Top tags"}
                    </h4>
                    <div className={"geex-content__widget__content"}>
                      <ul className={"geex-content__widget__categories"}>
                        <li className={"geex-content__widget__categories__single"}>
                          <a href={"#"}>
                            {"Fashion & Life Style (7)"}
                          </a>
                          <i className={"uil-arrow-right"} />
                        </li>
                        <li className={"geex-content__widget__categories__single"}>
                          <a href={"#"}>
                            {"Relationship (3)"}
                          </a>
                          <i className={"uil-arrow-right"} />
                        </li>
                        <li className={"geex-content__widget__categories__single"}>
                          <a href={"#"}>
                            {"Art & Culture (9)"}
                          </a>
                          <i className={"uil-arrow-right"} />
                        </li>
                        <li className={"geex-content__widget__categories__single"}>
                          <a href={"#"}>
                            {"Self Development (5)"}
                          </a>
                          <i className={"uil-arrow-right"} />
                        </li>
                        <li className={"geex-content__widget__categories__single"}>
                          <a href={"#"}>
                            {"travel & tourism (4)"}
                          </a>
                          <i className={"uil-arrow-right"} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single"}>
                    <h4 className={"geex-content__widget__title"}>
                      {"Tags"}
                    </h4>
                    <div className={"geex-content__widget__content"}>
                      <ul className={"geex-content__widget__tags"}>
                        <li className={"geex-content__widget__tags__single"}>
                          <button>
                            {"Financial"}
                          </button>
                        </li>
                        <li className={"geex-content__widget__tags__single"}>
                          <button>
                            {"Banking"}
                          </button>
                        </li>
                        <li className={"geex-content__widget__tags__single"}>
                          <button>
                            {"News"}
                          </button>
                        </li>
                        <li className={"geex-content__widget__tags__single"}>
                          <button>
                            {"Money"}
                          </button>
                        </li>
                        <li className={"geex-content__widget__tags__single"}>
                          <button>
                            {"Corporate"}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
