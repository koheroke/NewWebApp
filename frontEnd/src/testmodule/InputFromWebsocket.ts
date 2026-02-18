import type { RecruitmentCardType } from '@/components/Interfaces/web/recruitmentCard'


export const testData: RecruitmentCardType[] = [
  {
    id: "rec-001",
    data: new Date("2026-02-10T07:30:00").getTime(),
    name: "朝活カフェ読書会",
    time: "02月10日 07:30〜09:00",
    people: 2,
    detail: "仕事前に好きな本を紹介し合いましょう。ジャンル不問です。",
    tag: ["読書", "朝活", "カフェ"],
  },
  {
    id: "rec-002",
    data: new Date("2026-02-12T18:30:00").getTime(),
    name: "Vue.js 3 実践ワークショップ",
    time: "02月12日 18:30〜21:00",
    people: 15,
    detail: "Composition APIを使ったコンポーネント設計を学びます。",
    tag: ["Vue.js", "Frontend", "JavaScript"],
  },
  {
    id: "rec-003",
    data: new Date("2026-02-15T10:00:00").getTime(),
    name: "【初心者OK】ゆるふわジョギング",
    time: "02月15日 10:00〜11:30",
    people: 8,
    detail: "代々木公園をゆっくり1時間ほど走ります。運動不足解消に！",
    tag: ["スポーツ", "健康", "ジョギング"],
  },
  {
    id: "rec-004",
    data: new Date("2024-03-18T19:00:00").getTime(),
    name: "平日夜のボードゲーム会",
    time: "03月18日 19:00〜22:00",
    people: 6,
    detail: "重ゲーから軽ゲーまで。ボドゲ初心者の方もレクチャーします。",
    tag: ["ボードゲーム", "趣味", "平日夜"],
  },
  {
    id: "rec-005",
    data: new Date("2024-03-20T20:00:00").getTime(),
    name: "UI/UXデザイン 相談会",
    time: "03月20日 20:00〜21:30",
    people: 3,
    detail: "ポートフォリオや制作中のUIにフィードバックし合います。",
    tag: ["デザイン", "UIUX", "オンライン"],
  },
  {
    id: "rec-006",
    data: new Date("2026-03-22T13:00:00").getTime(),
    name: "Pythonでデータ分析入門",
    time: "03月22日 13:00〜15:00",
    people: 20,
    detail: "PandasとMatplotlibを使って簡単なグラフ作成を体験します。",
    tag: ["Python", "データ分析", "勉強会"],
  },
  {
    id: "rec-007",
    data: new Date("2026-03-25T11:00:00").getTime(),
    name: "週末カメラ散歩（鎌倉）",
    time: "03月25日 11:00〜16:00",
    people: 5,
    detail: "鎌倉の街並みを撮り歩き。一眼レフからスマホまで歓迎。",
    tag: ["カメラ", "散歩", "週末"],
  },
  {
    id: "rec-008",
    data: new Date("2026-03-28T19:00:00").getTime(),
    name: "英会話フリートーク",
    time: "03月28日 19:00〜20:00",
    people: 12,
    detail: "英語だけで1時間おしゃべり。レベルは問いません。",
    tag: ["英語", "語学", "オンライン"],
  },
  {
    id: "rec-009",
    data: new Date("2026-04-01T20:00:00").getTime(),
    name: "【エンジニア限定】キャリア相談室",
    time: "04月01日 20:00〜21:00",
    people: 2,
    detail: "現役CTOにキャリアの悩みを相談できる少人数セッション。",
    tag: ["キャリア", "エンジニア", "限定"],
  },
  {
    id: "rec-010",
    data: new Date("2026-04-03T14:00:00").getTime(),
    name: "WordPress高速化セミナー",
    time: "04月03日 14:00〜16:00",
    people: 30,
    detail: "サイトの表示速度を改善するための設定とプラグイン解説。",
    tag: ["WordPress", "SEO", "Web制作"],
  },
  {
    id: "rec-011",
    data: new Date("2026-04-05T17:00:00").getTime(),
    name: "サウナ大好きオフ会",
    time: "04月05日 17:00〜19:00",
    people: 4,
    detail: "都内のサウナ施設でととのった後、サ飯を食べに行きます。",
    tag: ["サウナ", "リラックス", "オフ会"],
  },
  {
    id: "rec-012",
    data: new Date("2026-04-08T19:30:00").getTime(),
    name: "Go言語 並行処理勉強会",
    time: "04月08日 19:30〜21:00",
    people: 10,
    detail: "GoroutineとChannelの基本から応用までをコードベースで解説。",
    tag: ["Go", "Backend", "技術"],
  },
  {
    id: "rec-013",
    data: new Date("2026-04-10T12:00:00").getTime(),
    name: "お花見ピクニック（上野公園）",
    time: "04月10日 12:00〜15:00",
    people: 15,
    detail: "桜を見ながらお弁当を食べましょう。誰でも参加可！",
    tag: ["イベント", "季節", "お花見"],
  },
  {
    id: "rec-014",
    data: new Date("2026-04-12T20:00:00").getTime(),
    name: "個人開発者ミートアップ",
    time: "04月12日 20:00〜22:00",
    people: 25,
    detail: "自分でサービスを作っている人同士で進捗報告。モチベ向上に。",
    tag: ["個人開発", "エンジニア", "オンライン"],
  },
  {
    id: "rec-015",
    data: new Date("2026-04-15T11:30:00").getTime(),
    name: "ラーメン二郎を食べる会",
    time: "04月15日 11:30〜12:30",
    people: 3,
    detail: "目黒店に並びます。完食できる自信のある方募集中。",
    tag: ["グルメ", "ラーメン", "対面"],
  },
  {
    id: "rec-016",
    data: new Date("2026-04-18T10:00:00").getTime(),
    name: "AWS認定試験 対策勉強会",
    time: "04月18日 10:00〜12:00",
    people: 8,
    detail: "SAAの予想問題を解きながら、不明点を共有します。",
    tag: ["AWS", "資格", "インフラ"],
  },
  {
    id: "rec-017",
    data: new Date("2026-04-20T23:00:00").getTime(),
    name: "深夜のゲーム配信観賞会",
    time: "04月20日 23:00〜25:00",
    people: 20,
    detail: "Discordでわいわい言いながら大会を視聴します。",
    tag: ["ゲーム", "eスポーツ", "深夜"],
  },
  {
    id: "rec-018",
    data: new Date("2026-04-22T14:00:00").getTime(),
    name: "猫カフェでまったり語る会",
    time: "04月22日 14:00〜16:00",
    people: 4,
    detail: "猫に癒やされながら、最近ハマっていることを話しましょう。",
    tag: ["猫", "癒やし", "趣味"],
  },
  {
    id: "rec-019",
    data: new Date("2026-04-25T19:00:00").getTime(),
    name: "Rails 7 新機能キャッチアップ",
    time: "04月25日 19:00〜20:30",
    people: 10,
    detail: "Hotwire周りの変更点を中心に実際に触ってみます。",
    tag: ["Ruby on Rails", "Backend", "勉強会"],
  },
  {
    id: "rec-020",
    data: new Date("2026-04-29T09:00:00").getTime(),
    name: "【大掃除】公園ゴミ拾いボランティア",
    time: "04月29日 09:00〜10:30",
    people: 20,
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
