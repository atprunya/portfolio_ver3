import React from 'react';
import FragmentedSection from './FragmentedSection';

const Skills = () => {
  const items = [
    <>
      <h3>Programming</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li><strong>language</strong>: Python, C#, C</li>
        <li><strong>Engine</strong>: Unity, Decker</li>
        <li>JS をそこまで使わない一般的なものであれば Web 開発も可能です</li>
      </ul>
    </>,
    <>
      <h3>Communication & Collaboration</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li><strong>英語が少しできます</strong>（英検準1級）</li>
        <li><strong>イベント主催経験</strong>
          <ul>
            <li>Larva06 オフラインイベント</li>
            <li>落語研究部 公演企画</li>
          </ul>
        </li>
        <li><strong>プレゼンテーション</strong> が得意
          <ul>
            <li>抽象化して説明・応用するのが得意</li>
          </ul>
        </li>
      </ul>
    </>,
    <>
      <h3>Writing</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>Larva06 を中心に Web ライティング</li>
        <li>いくつかのゲームで脚本担当</li>
        <li>落語研究部で漫才・コント執筆、コメディ色強いものが得意</li>
      </ul>
    </>,
    <>
      <h3>Others</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>人と仲良くなって新しいことをやるのが好き</li>
        <li>漫画・ゲーム・音楽などのサブカル・カウンターカルチャー好き</li>
        <li>
          <a
            href="https://scrapbox.io/zakkityou-atprunya/sukina-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            好きなもののリスト
          </a>
        </li>
      </ul>
    </>,
  ];

  return (
    <FragmentedSection
      title="Skills"
      items={items}
    />
  );
};

export default Skills;

