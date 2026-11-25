import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Calendar - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function CalendarPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/vendor/js/apexcharts.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Calendar"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__section geex-content__section--transparent geex-content__calendar"}>
                <button className={"geex-btn geex-content__calendar__toggle"}>
                  <i className={"uil-bars"} />
                  {" Event List "}
                </button>
                <div className={"geex-content__calendar__sidebar"}>
                  <div className={"geex-content__calendar__sidebar__header"}>
                    <button className={"geex-btn geex-btn--primary geex-btn__add-modal"}>
                      <i className={"uil-plus"} />
                      {" New Event "}
                    </button>
                  </div>
                  <div className={"geex-content__calendar__sidebar__meeting"}>
                    <span className={"geex-content__calendar__sidebar__meeting__label"}>
                      {"My Schedule Today"}
                    </span>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Client Weekly Meeting"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:00 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__tag__item danger"}>
                          {" Urgent "}
                        </a>
                        <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__tag__item success"}>
                          {" Face to face "}
                        </a>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__author"}>
                        <div className={"geex-content__calendar__sidebar__meeting__single__author__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__calendar__sidebar__meeting__single__author__content"}>
                          <div className={"geex-content__calendar__sidebar__meeting__single__author__text"}>
                            <span className={"geex-content__calendar__sidebar__meeting__single__author__title"}>
                              {"John Braun"}
                            </span>
                            <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__author__btn"}>
                              {"View details"}
                            </a>
                          </div>
                          <div className={"geex-content__calendar__sidebar__meeting__single__author__icon"}>
                            <a href={"#"}>
                              <i className={"uil-angle-right"} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Maintenance CenterLoad Balancer"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:30 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__tag__item primary"}>
                          {" Fixing "}
                        </a>
                        <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__tag__item warning"}>
                          {" Backend "}
                        </a>
                      </div>
                    </div>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Check Annual Report"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:30 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <a href={"#"} className={"geex-content__calendar__sidebar__meeting__single__tag__item info"}>
                          {" Report "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__calendar__sidebar__bottom"}>
                    <button className={"geex-btn geex-content__calendar__sidebar__bottom__btn"}>
                      {"View More "}
                      <i className={"uil-arrow-right"} />
                    </button>
                  </div>
                </div>
                <div className={"tab-content geex-content__calendar__content"}>
                  <div className={"geex-content__modal__form"}>
                    <div className={"geex-content__modal__form__header"}>
                      <h3 className={"geex-content__modal__form__title"}>
                        {"Add New Event"}
                      </h3>
                      <button className={"geex-content__modal__form__close"}>
                        <i className={"uil-times"} />
                      </button>
                    </div>
                    <form className={"geex-content__modal__form__wrapper"}>
                      <div className={"geex-content__modal__form__item"}>
                        <input type={"text"} name={"geex-content__modal__form__name"} className={"geex-content__modal__form__input"} placeholder={"Event Title"} />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <textarea name={"geex-content__modal__form__desc"} className={"geex-content__modal__form__input geex-content__modal__form__input--textarea"} placeholder={"Event Description"} />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <button type={"submit"} className={"geex-content__modal__form__submit"}>
                          {"Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div id={"geex-calendar"} className={"geex-calendar"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>









    </>
  );
}
