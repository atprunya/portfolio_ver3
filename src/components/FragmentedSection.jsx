import React from 'react';

/**
 * アニメーションを切って、単純に２列グリッドにするだけの FragmentedSection
 */
const FragmentedSection = ({ title, items }) => {
  return (
    <section>
      {/* セクション見出し */}
      <h2>{title}</h2>

      {/* ２カラム化してバブルを並べる */}
      <div className="section-grid">
        {items.map((content, i) => (
          <div key={i} className="bubble">
            {content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FragmentedSection;

