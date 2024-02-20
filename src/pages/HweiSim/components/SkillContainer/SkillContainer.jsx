import React, { useEffect } from 'react';
import Skill from './Skill';
import { KeySkillMap } from '../../../../utils/KeySkillMap';

import './style.css';

export default function SkillContainer({ keySkill, callback }) {
  const skillList = KeySkillMap.get(keySkill);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'r') {
        callback('');
      } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        const skill = skillList.find(
          (item) => item.name === keySkill + event.key,
        );
        if (skill.hasNextKey) callback(event.key);
        else callback('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="skill-group">
      {skillList.map((item, index) => (
        <Skill key={index} item={item} index={index} callback={callback} />
      ))}
    </div>
  );
}
