import {type postBox} from "@/components/Interfaces/web/post"

 const postdatas: postBox[] = [
  { content: 'こんにちは！', type: 'text', clientMessageId: 'chat_01', createdAt: 1771128000000 },
  { content: '昨日の資料、確認いただけましたか？', type: 'text', clientMessageId: 'chat_02', createdAt: 1771128060000 },
  { content: 'はい、拝見しました。修正点もなさそうです。', type: 'text', clientMessageId: 'chat_03', createdAt: 1771128120000 },
  { content: '承知いたしました。では、このまま進めますね。', type: 'text', clientMessageId: 'chat_04', createdAt: 1771128180000 },
  { content: 'よろしくお願いします！', type: 'text', clientMessageId: 'chat_05', createdAt: 1771128240000 },
  { content: 'あ、一点だけ追加で質問が。', type: 'text', clientMessageId: 'chat_06', createdAt: 1771128300000 },
  { content: '納期は来週の金曜日で間違いなかったでしょうか？', type: 'text', clientMessageId: 'chat_07', createdAt: 1771128360000 },
  { content: 'その通りです。2月27日ですね。', type: 'text', clientMessageId: 'chat_08', createdAt: 1771128420000 },
  { content: '了解です！ありがとうございます。', type: 'text', clientMessageId: 'chat_09', createdAt: 1771128480000 },
  { content: 'お疲れ様です。ランチ行きます？', type: 'text', clientMessageId: 'chat_10', createdAt: 1771128540000 },
  { content: 'いいですね、今日はどこにしますか？', type: 'text', clientMessageId: 'chat_11', createdAt: 1771128600000 },
  { content: '駅前に新しくできたイタリアンはどうでしょう？', type: 'text', clientMessageId: 'chat_12', createdAt: 1771128660000 },
  { content: 'あそこ、いつも並んでますよね。12時前ならいけるかも。', type: 'text', clientMessageId: 'chat_13', createdAt: 1771128720000 },
  { content: 'じゃあ11時45分にロビー集合で！', type: 'text', clientMessageId: 'chat_14', createdAt: 1771128780000 },
  { content: '了解です。', type: 'text', clientMessageId: 'chat_15', createdAt: 1771128840000 },
  { content: '（自動応答）会議中のため返信が遅れます。', type: 'text', clientMessageId: 'chat_16', createdAt: 1771128900000 },
  { content: '午後のミーティング用URLはこちらです：https://example.com/zoom/123', type: 'text', clientMessageId: 'chat_17', createdAt: 1771128960000 },
  { content: 'ありがとうございます。入室しました。', type: 'text', clientMessageId: 'chat_18', createdAt: 1771129020000 },
  { content: '音声聞こえてますかー？', type: 'text', clientMessageId: 'chat_19', createdAt: 1771129080000 },
  { content: 'ばっちりです！', type: 'text', clientMessageId: 'chat_20', createdAt: 1771129140000 },
  { content: '画面共有しますね。', type: 'text', clientMessageId: 'chat_21', createdAt: 1771129200000 },
  { content: 'このデザイン、もう少し明るい色にできませんか？', type: 'text', clientMessageId: 'chat_22', createdAt: 1771129260000 },
  { content: 'カラーパレットを変更して検討してみます。', type: 'text', clientMessageId: 'chat_23', createdAt: 1771129320000 },
  { content: '👍 お願いします！', type: 'text', clientMessageId: 'chat_24', createdAt: 1771129380000 },
  { content: '今日はもう上がります、お疲れ様でした。', type: 'text', clientMessageId: 'chat_25', createdAt: 1771129440000 },
  { content: 'お疲れ様でした！', type: 'text', clientMessageId: 'chat_26', createdAt: 1771129500000 },
  { content: '明日の天気、雨らしいですよ。傘を忘れずに。', type: 'text', clientMessageId: 'chat_27', createdAt: 1771129560000 },
  { content: 'マジですか、教えてくれて助かります。', type: 'text', clientMessageId: 'chat_28', createdAt: 1771129620000 },
  { content: '非常に長いテキストのテスト用データです。改行が含まれたり、横幅を突き抜けたりしないかを確認するために利用します。ここが折り返されているかチェックしてください。', type: 'text', clientMessageId: 'chat_29', createdAt: 1771129680000 },
  { content: 'これで30件目ですね。完了！', type: 'text', clientMessageId: 'chat_30', createdAt: 1771129740000 }
];

export function getAllData():postBox[]{
  return postdatas
}

