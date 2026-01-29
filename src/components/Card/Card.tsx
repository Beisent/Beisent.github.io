import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = {
  title: string;
  description: string;
  icon?: string;
  to: string;
};

export default function Card({ title, description, icon, to }: Props) {
  return (
    <div className={`card shadow--sm ${styles.card}`}>
      <div className="card__header">
        <div className={styles.cardHeader}>
          {icon && <span className={styles.cardIcon}>{icon}</span>}
          <h3>{title}</h3>
        </div>
      </div>

      <div className="card__body">
        <p>{description}</p>
      </div>

      <div className={`card__footer ${styles.cardFooter}`}>
        <Link className="button button--outline button--primary button--block" to={to}>
          进入领域 →
        </Link>
      </div>
    </div>
  );
}
