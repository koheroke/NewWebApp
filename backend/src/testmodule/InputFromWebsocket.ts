import type { RecruitmentCardType } from '@/interfaces/recruitmentCard'


export const testData: RecruitmentCardType[] = [
  {
    id: "rec-001",
    data: new Date("2026-02-10T07:30:00").getTime(),
    name: "朝活カフェ読書会",
    time: "02月10日 07:30〜09:00",
    apo_people: 0, // 補完
    join_people: 2, // peopleから変更
    detail: "仕事前に好きな本を紹介し合いましょう。ジャンル不問です。",
    tag: ["読書", "朝活", "カフェ"],
  },
  {
    id: "rec-002",
    data: new Date("2026-02-12T18:30:00").getTime(),
    name: "Vue.js 3 実践ワークショップ",
    time: "02月12日 18:30〜21:00",
    apo_people: 0,
    join_people: 15,
    detail: "Composition APIを使ったコンポーネント設計を学びます。",
    tag: ["Vue.js", "Frontend", "JavaScript"],
  },
  {
    id: "rec-003",
    data: new Date("2026-02-15T10:00:00").getTime(),
    name: "【初心者OK】ゆるふわジョギング",
    time: "02月15日 10:00〜11:30",
    apo_people: 0,
    join_people: 8,
    detail: "代々木公園をゆっくり1時間ほど走ります。運動不足解消に！",
    tag: ["スポーツ", "健康", "ジョギング"],
  },
  {
    id: "rec-004",
    data: new Date("2024-03-18T19:00:00").getTime(),
    name: "平日夜のボードゲーム会",
    time: "03月18日 19:00〜22:00",
    apo_people: 0,
    join_people: 6,
    detail: "重ゲーから軽ゲーまで。ボドゲ初心者の方もレクチャーします。",
    tag: ["ボードゲーム", "趣味", "平日夜"],
  },
  {
    id: "rec-005",
    data: new Date("2024-03-20T20:00:00").getTime(),
    name: "UI/UXデザイン 相談会",
    time: "03月20日 20:00〜21:30",
    apo_people: 0,
    join_people: 3,
    detail: "ポートフォリオや制作中のUIにフィードバックし合います。",
    tag: ["デザイン", "UIUX", "オンライン"],
  },
  // ... (rec-006 以降も同様に join_people と apo_people を適用)
  {
    id: "rec-020",
    data: new Date("2026-04-29T09:00:00").getTime(),
    name: "【大掃除】公園ゴミ拾いボランティア",
    time: "04月29日 09:00〜10:30",
    apo_people: 0,
    join_people: 20,
    detail: "地域の公園を綺麗にしましょう。軍手とゴミ袋は支給します。",
    tag: ["ボランティア", "地域貢献", "朝"],
  }
];
export const tagData = ["ゲーム","eスポーツ"]
export function getTestData(){
   return testData
}

// 非同期をシミュレートする場合の修正
export async function getTestData2(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testData)
    }, 1000);
  });
}
const searchKeyword = "勉強会"; 

const searchResults = testData.filter(item => 
  item.name.includes(searchKeyword)
);
const andResults = testData.filter(item => 
  tagData.every(t => item.tag.includes(t))
);
