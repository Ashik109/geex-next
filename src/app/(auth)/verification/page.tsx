import Link from "next/link";
import DemoAuthForm from "@/components/DemoAuthForm";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Two Step Verification - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function VerificationPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <main className={"geex-content"}>
        <div className={"geex-content__authentication geex-content__authentication--forgot-password"}>
          <div className={"geex-content__authentication__content"}>
            <div className={"geex-content__authentication__content__wrapper"}>
              <div className={"geex-content__authentication__content__logo"}>
                <Link href={"/"}>
                  <img src={"/assets/img/logo.svg"} alt={""} />
                </Link>
              </div>
              <DemoAuthForm id={"signInForm"} className={"geex-content__authentication__form"} preview={"verification"}>
                <h2 className={"geex-content__authentication__title"}>
                  {"Two Step Verification 👋"}
                </h2>
                <p className={"geex-content__authentication__desc"}>
                  {"We sent a verification code to your mobile. Enter the code from the mobile in the field below. "}
                  <span className={"verification-number"}>
                    {"*******1427"}
                  </span>
                </p>
                <div className={"geex-content__authentication__form-group"}>
                  <label htmlFor={"emailSignIn"}>
                    {"Type your 6 digits security code"}
                  </label>
                  <div className={"geex-content__authentication__form-group__code"}>
                    <input type={"text"} id={"verificationCode1"} name={"verificationCode1"} required />
                    <input type={"text"} id={"verificationCode2"} name={"verificationCode2"} required />
                    <input type={"text"} id={"verificationCode3"} name={"verificationCode3"} required />
                    <input type={"text"} id={"verificationCode4"} name={"verificationCode4"} required />
                    <input type={"text"} id={"verificationCode5"} name={"verificationCode5"} required />
                    <input type={"text"} id={"verificationCode6"} name={"verificationCode6"} required />
                  </div>
                </div>
                <button type={"submit"} className={"geex-content__authentication__form-submit"}>
                  {"Verify My Account"}
                </button>
                <div className={"geex-content__authentication__form-footer"}>
                  {" Didn’t get the code? "}
                  <a href={"#"}>
                    {"Resend"}
                  </a>
                </div>
              </DemoAuthForm>
            </div>
          </div>
          <div className={"geex-content__authentication__img"}>
            <img src={"/assets/img/authentication.svg"} alt={""} />
          </div>
        </div>
      </main>




    </>
  );
}
