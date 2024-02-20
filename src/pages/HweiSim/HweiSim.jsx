import React, { useState } from 'react';

import './style.css';
import { SkillContainer } from './components/SkillContainer';

export default function HweiSim() {
  const [keySkill, setKeySkill] = useState('');

  return (
    <div className="content-container">
      <div className="skill-container">
        <SkillContainer keySkill={keySkill} callback={setKeySkill} />
      </div>
      <div className="skill-description">sss</div>
    </div>
  );
}
