// src/App.jsx
import React from 'react';
import Header             from './components/Header';
import TVNoiseIntro       from './components/TVNoiseIntro';
import SphereVibration    from './components/SphereVibration';
import TransitionOverlay  from './components/TransitionOverlay';
import CursorTrail        from './components/CursorTrail';

import AboutMe            from './components/AboutMe';
import Career             from './components/Career';
import Achievements       from './components/Achievements';
import Projects           from './components/Projects';
import Skills             from './components/Skills';
import Social             from './components/Social';

const App = () => {
  return (
    <>
      {/* ヘッダー */}
      <Header />

      {/* ページ読み込み時の TV ノイズイントロ */}
      <TVNoiseIntro />

      {/* 3D 球体バイブレーション */}
      <SphereVibration />

      {/* 画面遷移用オーバーレイ & カーソルトレイル */}
      <TransitionOverlay />
      <CursorTrail />

      {/* 背景ノイズ GIF */}
      <div className="noise-overlay" />

      {/* 各セクション */}
      <main>
        <section id="aboutme"><AboutMe /></section>
        <section id="career"><Career /></section>
        <section id="achievements"><Achievements /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="social"><Social /></section>
      </main>
    </>
  );
};

export default App;

