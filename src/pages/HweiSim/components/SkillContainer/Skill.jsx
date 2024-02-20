import React from 'react';
import { getSkillKeyFromIndex } from '../../../../utils/IndexToSkillKey';

// {
//   name: 'q',
//   img: SkillImageAssets.q,
//   hasNextKey: true,
//   isSkillActive: false,
// },

export default function Skill({ item, index, callback }) {
  const handleClick = () => {
    if (item.hasNextKey) callback(item.name);
    else callback('');
  };

  return (
    <div className="skill" onClick={handleClick}>
      <img src={item.img} alt={item.name} />
      <div>{getSkillKeyFromIndex(index)}</div>
    </div>
  );
}
