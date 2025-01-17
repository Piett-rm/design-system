import { FC, useCallback, useState } from "react";
import "@axa-fr/design-system-css/dist/common/reboot.scss";
import "@axa-fr/design-system-css/dist/Footer/Footer.client.scss";
import ExpandMore from "@mui/icons-material/ExpandMore";
import classNames from "classnames";
import { MenuIcons, SocialMedia } from "./MenuIcons.client";
import { Link, MenuLink } from "./MenuLink.client";

type Props = {
  links: Link[];
  socialMedias?: SocialMedia[];
  copyright: string;
  expandLinkText: string;
};

export const Footer: FC<Props> = ({
  links,
  socialMedias = [],
  copyright,
  expandLinkText,
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsAboutOpen((isOpen) => !isOpen);
  }, []);
  return (
    <footer className="af-footer">
      <div className="af-footer__footerTop">
        <nav className="af-footer__menuTop" aria-label={expandLinkText}>
          <button
            type="button"
            onClick={handleClick}
            className="af-footer__menuAboutTrigger"
          >
            <span className="af-footer__menuAboutTriggerText">
              {expandLinkText}
            </span>
            <ExpandMore
              className={classNames(
                "af-footer__icon",
                "af-footer__iconTrigger",
                isAboutOpen && "af-footer__iconTrigger--display",
              )}
            />
          </button>
          <MenuLink links={links} isAboutOpen={isAboutOpen} />
        </nav>
        <MenuIcons socialMedias={socialMedias} />
      </div>
      <div className="af-footer__footerBottom">
        <div className="af-footer__footerBottomWidth">
          <span className="af-footer__textCopyright">{copyright}</span>
        </div>
      </div>
    </footer>
  );
};
