import React from 'react';
import FragmentedSection from './FragmentedSection';

const Achievements = () => {
  const items = [
    <>
      <h3>2024年度 (高3)</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>ITスーパーエンジニア・サポートプログラム “すごうで” 採択（助成金100万円獲得）</li>
        <li>Panasonic “100BANCH” 採択</li>
        <li>京都精華大学主催 SEIKA AWARD 2作品で入選（現在審査中）</li>
      </ul>
    </>,
    <>
      <h3>2023年度 (高2)</h3>
      <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
        <li>
          iGEM 世界一位 (Grand Prize) 獲得 (Japan-Unitedとして)<br />
          <a
            href="https://www.nikkei.com/article/DGXZQOUC2262I0S4A120C2000000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            取材記事（日経）
          </a>
        </li>
        <li>未来と健康のための高校生ビジネスコンテスト グランプリ獲得</li>
        <li>高校生ITアプリアイデアコンテスト 最優秀賞獲得</li>
        <li>CA Tech Lounge 採択</li>
        <li>Makers University u-18 佐俣アンリ奨学金 採択</li>
        <li>QWS Challenge #16 採択</li>
        <li>SEIKA AWARD エッセイ部門 奨励賞</li>
        <li>数理の翼伊計島セミナー 採択</li>
        <li>千葉大学GSCプログラム 修了</li>
      </ul>
    </>,
  ];

  return (
    <FragmentedSection
      title="Achievements"
      items={items}
    />
  );
};

export default Achievements;

