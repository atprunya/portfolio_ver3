// src/components/Career.jsx
import React from 'react';

const Career = () => (
  <section id="career" className="container mx-auto py-16 px-4">
    <h2 className="text-4xl font-bold mb-10 page-title">Career</h2>

    {/* bubble がカードの枠／背景／シャドウを担っています */}
    <div className="bubble">
      <ul className="list-disc pl-10 list-item-container space-y-4 py-6 px-6">
        <li>
          <i className="fas fa-school mr-2"></i>
          2022/3 芝中学校 卒業
        </li>
        <li>
          <i className="fas fa-school mr-2"></i>
          2025/3 芝高等学校 卒業
        </li>
        <li>
          <i className="fas fa-university mr-2"></i>
          2025/4 筑波大学情報学群知識情報・図書館学類 入学
        </li>
      </ul>
    </div>
  </section>
);

export default Career;

