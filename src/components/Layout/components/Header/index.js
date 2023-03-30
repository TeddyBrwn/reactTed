import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("search")}>
          <input placeholder="Search account and video" spellCheck="false" />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} size="2xs"/>
          

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {/* {logo} */}
    </header>
  );
}
export default Header;
