import { DemoRecordForm } from "@/components/DemoRecords";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Calendar - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function CalendarPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","/assets/css/calendar.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/js/main.js"]} />
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
                Browse your schedule and add events.
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <section className="geex-calendar-layout" aria-label="Calendar and schedule">
                <aside className="geex-calendar-schedule" aria-label="Selected day schedule">
                  <button type="button" className="geex-btn geex-btn--primary geex-btn__add-modal">
                    <i className="uil-plus" aria-hidden="true" /> New Event
                  </button>
                  <h3>Day Schedule</h3>
                  <label className="geex-calendar-date-label">
                    Select date
                    <input type="date" data-calendar-schedule-date />
                  </label>
                  <p data-calendar-empty>No events on this day.</p>
                  <ul data-calendar-agenda />
                </aside>
                <div className="geex-calendar-panel">
                  <div className={"geex-content__modal__form"}>
                    <div className={"geex-content__modal__form__header"}>
                      <h3 className={"geex-content__modal__form__title"}>
                        {"Add New Event"}
                      </h3>
                      <button type="button" className="geex-content__modal__form__close" aria-label="Close new event form">
                        <i className={"uil-times"} />
                      </button>
                    </div>
                    <DemoRecordForm scope="calendar" className="geex-content__modal__form__wrapper">
                      <div className={"geex-content__modal__form__item"}>
                        <input type={"text"} name="title" className={"geex-content__modal__form__input"} placeholder="Event Title" aria-label="Event Title" required maxLength={120} />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <textarea name="description" aria-label="Description" maxLength={500} className={"geex-content__modal__form__input geex-content__modal__form__input--textarea"} placeholder="Event description" />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <label>Event date <input type="date" name="date" className="geex-content__modal__form__input" required /></label>
                      </div>
                      <div className="geex-content__modal__form__item">
                        <button type={"submit"} className={"geex-content__modal__form__submit"}>
                          Save Event
                        </button>
                      </div>
                    </DemoRecordForm>
                  </div>
                  <div id="geex-calendar" className="geex-calendar" />
                  <dialog className="geex-calendar-details" data-calendar-details aria-labelledby="calendar-event-title">
                    <h3 id="calendar-event-title" />
                    <p data-calendar-details-date />
                    <p data-calendar-details-description />
                    <form method="dialog">
                      <button type="submit" className="geex-btn geex-btn--primary">Close</button>
                    </form>
                  </dialog>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
