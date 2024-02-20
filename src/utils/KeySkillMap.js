import { SkillImageAssets } from '../assets';

export const KeySkillMap = new Map([
  [
    '',
    [
      {
        name: 'q',
        img: SkillImageAssets.q,
        hasNextKey: true,
        isSkillActive: false,
      },
      {
        name: 'w',
        img: SkillImageAssets.w,
        hasNextKey: true,
        isSkillActive: false,
      },
      {
        name: 'e',
        img: SkillImageAssets.e,
        hasNextKey: true,
        isSkillActive: false,
      },
      {
        name: 'r',
        img: SkillImageAssets.r,
        hasNextKey: false,
        isSkillActive: true,
      },
    ],
  ],
  [
    'q',
    [
      {
        name: 'qq',
        img: SkillImageAssets.qq,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'qw',
        img: SkillImageAssets.qw,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'qe',
        img: SkillImageAssets.qe,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'cancel',
        img: SkillImageAssets.cancel,
        hasNextKey: false,
        isSkillActive: false,
      },
    ],
  ],
  [
    'w',
    [
      {
        name: 'wq',
        img: SkillImageAssets.wq,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'ww',
        img: SkillImageAssets.ww,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'we',
        img: SkillImageAssets.we,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'cancel',
        img: SkillImageAssets.cancel,
        hasNextKey: false,
        isSkillActive: false,
      },
    ],
  ],
  [
    'e',
    [
      {
        name: 'eq',
        img: SkillImageAssets.eq,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'ew',
        img: SkillImageAssets.ew,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'ee',
        img: SkillImageAssets.ee,
        hasNextKey: false,
        isSkillActive: true,
      },
      {
        name: 'cancel',
        img: SkillImageAssets.cancel,
        hasNextKey: false,
        isSkillActive: false,
      },
    ],
  ],
]);
