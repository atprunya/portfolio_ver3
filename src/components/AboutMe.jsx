// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => (
  <section
    id="aboutme"
    className="
      min-h-screen flex flex-col justify-center
      py-12 px-4 sm:px-6 lg:px-8
    "
  >
    <h2 className="text-4xl font-bold mb-10 page-title">About Me</h2>

    <div className="container mx-auto px-4">
      {/* ここを必ず残す: bubble クラスがカード枠を定義 */}
      <div className="bubble">
        <ul className="list-disc pl-10 list-item-container space-y-4">
          <li>
            <span className="inline-block text-2xl">
              <i className="fas fa-signature mr-2"></i>
            </span>
            atprunya
          </li>
          <li>
            <span className="inline-block text-2xl">
              <i className="fas fa-birthday-cake mr-2"></i>
            </span>
            年齢：18
          </li>
          <li>
            <span className="inline-block text-2xl">
              <i className="fas fa-gamepad mr-2"></i>
            </span>
            興味：ゲーム開発・カウンターカルチャー・コント
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMe;

