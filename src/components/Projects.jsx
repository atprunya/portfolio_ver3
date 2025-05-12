import React from 'react';
import FragmentedSection from './FragmentedSection';

const Projects = () => {
  const items = [
    <>
      <h3>MEETME</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>株式会社ラック「すごうで」で行ったプロジェクト。</li>
        <li>プロジェクトリーダーとして、自分のデジタルツインと対話できる体験を機械学習で設計した。</li>
        <li>2024年4月にニコニコ超会議で展示を行った。</li>
      </ul>
    </>,
    <>
      <h3>iGEM Japan-United</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>合成生物学の世界大会「iGEM」に出場するためのチーム。創設時より携わった。</li>
        <li>2023年大会にてGrand Prize(世界1位)を獲得。</li>
        <li>日経などに掲載された。</li>
      </ul>
    </>,
    <>
      <h3>sizzurp dolls</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>ゲームエンジン「Decker」で開発したサイケデリックノベルゲーム。</li>
        <li>異常なストーリー展開と色彩の気持ち悪さからTwitterで話題に。</li>
        <li>
          <a
            href="https://x.com/Pi_AtPrunya/status/1883817380662624562"
            target="_blank"
            rel="noopener noreferrer"
          >
            ゲーム本編を見る
          </a>
        </li>
      </ul>
    </>,
    <>
      <h3>rurukiki</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>友人二名と開発中のノベルゲーム。プロデューサー・脚本・プログラマーを担当。</li>
        <li>トレーラーがファミ通や電ファミニコゲーマーに掲載。</li>
        <li>
          <a
            href="https://x.com/denfaminicogame/status/1834547805228314918"
            target="_blank"
            rel="noopener noreferrer"
          >
            掲載されたトレーラーを見る
          </a>
        </li>
      </ul>
    </>,
    <>
      <h3>Larva06.com</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>創設者として二年に渡りPMを担当し、一般社団法人lirfaとして法人化。</li>
        <li>代表理事に就任後、事業継承。</li>
        <li>
          <a
            href="https://docs.google.com/document/d/10fILBx5Kl4eXApB3emQucLvbfBUCjZvw090JpxlVSkI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Larva06 担当記事リスト
          </a>
        </li>
      </ul>
    </>,
    <>
      <h3>執筆活動</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>関西コミティアでエッセイ・評論を二回寄稿。</li>
      </ul>
    </>,
    <>
      <h3>sz2uのWebサイト開発</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>友人のシンガーソングライター、sz2uのWebサイト開発を担当。</li>
        <li>
          <a
            href="https://x.com/sz2u_/status/1892898704266269129"
            target="_blank"
            rel="noopener noreferrer"
          >
            開発したWebサイトを見る
          </a>
        </li>
      </ul>
    </>,
    <>
      <h3>同人でのゲーム開発プロジェクト</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>現在開発中。プログラマー・プロデューサー・一部脚本を担当。非公開。</li>
      </ul>
    </>,
  ];

  return <FragmentedSection title="Projects" items={items} />;
};

export default Projects;

