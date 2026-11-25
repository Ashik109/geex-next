
export default function Footer() {
  return (
    <>
      <footer className={"geex-footer"}>
        <div className={"geex-footer__wrap"}>
          <div className={"geex-footer__copyright"}>
            <p>
              <span>
                {"© "}
                <span data-copyright-year={""}>
                  {"2026"}
                </span>
              </span>
              <a href={"#"}>
                {"ThemeWant"}
              </a>
            </p>
          </div>
          <ul className={"geex-footer__menu"}>
            <li className={"geex-footer__meu__item"}>
              <a href={"/terms"}>
                {"Privacy"}
              </a>
            </li>
            <li className={"geex-footer__meu__item"}>
              <a href={"/blog"}>
                {"Blog"}
              </a>
            </li>
            <li className={"geex-footer__meu__item"}>
              <a href={"/faq"}>
                {"Faq"}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
