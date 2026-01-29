import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Card from '../components/Card/Card';
import styles from './index.module.css';
import useFadeUp from '../hooks/useFadeUp'; 

const researchAreas = [
  { title: '计算机科学', to: '/docs/research/ComputerScience/About ', description: '计算机图形学、计算机视觉、数值计算', icon: '💻' },
  { title: '物理', to: '/docs/research/Physics/About', description: '相对论、量子力学', icon: '🔬' },
  { title: '数学', to: '/docs/research/Math/About', description: '复变函数、微分方程', icon: '🧮' },
];


export default function Home() {
  const heroFade = useFadeUp();
  const researchFade = useFadeUp();

  return (
    <Layout title="Beisent Lab" description="计算机科学 · 自然科学 · 数学实验室">
      
      {/* Hero */}
      <header
        className={`hero ${styles.hero} fadeUp ${heroFade.visible ? 'fadeUpVisible' : ''}`}
        ref={heroFade.ref}
      >
        <div className="container">
          <h1 className={styles.heroTitle}>Beisent Lab</h1>
          <p className={styles.heroSubtitle}>
            探索 · 分享
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link className="button button--secondary button--lg" to="/docs/intro/About">
              关于我们
            </Link>
          </div>
        </div>
      </header>

      {/* 研究方向 */}
      <section
        className={`section ${styles.section} fadeUp ${researchFade.visible ? 'fadeUpVisible' : ''}`}
        ref={researchFade.ref}
      >
        <div className={styles.sectionTitle}>
          <h2>研究方向</h2>
          <p>Research Areas & Interdisciplinary Studies</p>
        </div>
        <div className="row">
          {researchAreas.map(area => {
            const { ref, visible } = useFadeUp();
            return (
              <div key={area.title} className="col col--4 margin-bottom--lg">
                <div ref={ref} className={`fadeUp ${visible ? 'fadeUpVisible' : ''}`}>
                  <Card {...area} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="footerNav">
          <Link to="/">首页</Link>
          <Link to="/docs/intro/About">关于我们</Link>
        </div>
        <div>
          <a href="https://github.com/Beisent" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="http://beisent.com" target="_blank" rel="noopener noreferrer">Oxygen Blog</a>
        </div>
        <small>© 2026 Beisent. All rights reserved.</small>
      </footer>
    </Layout>
  );
}
