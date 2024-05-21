import { FC } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { SpeakersViewProps } from "./Speakers.props";

import styles from "./Speakers.module.scss";

export const SpeakersView: FC<SpeakersViewProps> = ({ className, speakers, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.view, className)} {...props}>
      <h2 className={cn(styles.heading)}>{t("speakers")}</h2>

      {speakers.length ? (
        <ul className={cn(styles.list)}>
          {speakers.map(({ id, firstName, lastName, country }, index) => (
            <li className={cn(styles.item)} key={id}>{`${index + 1}. ${firstName} ${lastName} (${country})`}</li>
          ))}
        </ul>
      ) : (
        <div>No Speakers yet</div>
      )}
    </div>
  );
};
