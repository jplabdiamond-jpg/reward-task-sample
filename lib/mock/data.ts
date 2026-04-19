// サンプル表示用のモックデータ（Supabase非接続）

export const MOCK_USER = {
  id: 'demo-user-id',
  email: 'demo@example.com',
}

export const MOCK_PROFILE = {
  id: 'demo-user-id',
  email: 'demo@example.com',
  nickname: 'デモユーザー',
  rank: 'silver',
  level: 12,
  balance: 8420,
  total_earned: 42800,
  streak_days: 7,
  avatar_url: null,
  referral_code: 'DEMO1234',
  created_at: '2025-10-01T00:00:00Z',
  updated_at: '2026-04-19T00:00:00Z',
}

export const MOCK_CAMPAIGNS = [
  {
    id: 'c1',
    title: '楽天カード新規発行',
    description: '年会費永年無料の楽天カードを発行すると報酬獲得。審査完了で確定。',
    category: 'credit_card',
    reward_amount: 12000,
    difficulty: 2,
    estimated_time: 10,
    cv_rate: 0.68,
    is_active: true,
    tags: ['高単価', 'カード', '人気'],
    cta_label: '申し込む', cta_url: 'https://example.com/rakuten',
    video_url: 'https://example.com/video1.mp4',
  },
  {
    id: 'c2',
    title: '住信SBIネット銀行 口座開設',
    description: 'ネット銀行の定番。口座開設+初回ログインで報酬確定。',
    category: 'finance',
    reward_amount: 8500,
    difficulty: 2,
    estimated_time: 15,
    cv_rate: 0.55,
    is_active: true,
    tags: ['銀行', '口座開設'],
    cta_label: '申し込む', cta_url: 'https://example.com/sbi',
    video_url: 'https://example.com/video2.mp4',
  },
  {
    id: 'c3',
    title: 'DMM FX 新規口座開設+取引',
    description: '口座開設後、1万通貨取引で報酬獲得。初心者向けガイド付き。',
    category: 'finance',
    reward_amount: 28000,
    difficulty: 4,
    estimated_time: 30,
    cv_rate: 0.32,
    is_active: true,
    tags: ['高単価', 'FX', '投資'],
    cta_label: '申し込む', cta_url: 'https://example.com/dmm',
    video_url: 'https://example.com/video3.mp4',
  },
  {
    id: 'c4',
    title: 'TimeTreeアプリ インストール',
    description: 'カレンダー共有アプリをインストールして1週間利用。',
    category: 'app',
    reward_amount: 450,
    difficulty: 1,
    estimated_time: 3,
    cv_rate: 0.92,
    is_active: true,
    tags: ['アプリ', '簡単'],
    cta_label: '申し込む', cta_url: 'https://example.com/timetree',
    video_url: 'https://example.com/video4.mp4',
  },
  {
    id: 'c5',
    title: 'ライフネット生命 資料請求',
    description: '無料で生命保険の資料請求。請求後の電話対応不要。',
    category: 'insurance',
    reward_amount: 2800,
    difficulty: 2,
    estimated_time: 5,
    cv_rate: 0.74,
    is_active: true,
    tags: ['保険', '資料請求'],
    cta_label: '申し込む', cta_url: 'https://example.com/lifenet',
    video_url: 'https://example.com/video5.mp4',
  },
  {
    id: 'c6',
    title: 'マクロミル アンケート登録',
    description: 'アンケートモニターに無料登録。登録後のアンケート回答で追加報酬も。',
    category: 'survey',
    reward_amount: 300,
    difficulty: 1,
    estimated_time: 2,
    cv_rate: 0.96,
    is_active: true,
    tags: ['アンケート', '簡単', '初心者向け'],
    cta_label: '申し込む', cta_url: 'https://example.com/macromill',
    video_url: 'https://example.com/video6.mp4',
  },
  {
    id: 'c7',
    title: 'スタディサプリ 無料体験登録',
    description: '14日間無料体験に登録。解約はいつでも可能。',
    category: 'education',
    reward_amount: 1800,
    difficulty: 2,
    estimated_time: 5,
    cv_rate: 0.61,
    is_active: true,
    tags: ['教育', '無料体験'],
    cta_label: '申し込む', cta_url: 'https://example.com/studysapuri',
    video_url: 'https://example.com/video7.mp4',
  },
  {
    id: 'c8',
    title: 'Qoo10 メガ割購入',
    description: 'Qoo10でメガ割期間中に1,000円以上購入で報酬。',
    category: 'shopping',
    reward_amount: 500,
    difficulty: 1,
    estimated_time: 10,
    cv_rate: 0.82,
    is_active: true,
    tags: ['ショッピング', '簡単'],
    cta_label: '申し込む', cta_url: 'https://example.com/qoo10',
    video_url: 'https://example.com/video8.mp4',
  },
]

export const MOCK_REWARDS = [
  { id: 'r1', user_id: 'demo-user-id', amount: 2800, description: 'ライフネット生命 資料請求', created_at: '2026-04-18T10:30:00Z', type: 'mission' },
  { id: 'r2', user_id: 'demo-user-id', amount: 450, description: 'TimeTreeアプリ インストール', created_at: '2026-04-17T15:20:00Z', type: 'mission' },
  { id: 'r3', user_id: 'demo-user-id', amount: 100, description: 'デイリーミッション達成ボーナス', created_at: '2026-04-17T23:50:00Z', type: 'bonus' },
  { id: 'r4', user_id: 'demo-user-id', amount: 300, description: 'マクロミル アンケート登録', created_at: '2026-04-16T09:15:00Z', type: 'mission' },
  { id: 'r5', user_id: 'demo-user-id', amount: 1800, description: 'スタディサプリ 無料体験登録', created_at: '2026-04-15T12:40:00Z', type: 'mission' },
]

export const MOCK_DAILY_MISSION = {
  id: 'dm1',
  user_id: 'demo-user-id',
  date: new Date().toISOString().split('T')[0],
  missions_completed: 2,
  target: 3,
  bonus_claimed: false,
}

export const MOCK_USER_MISSIONS = [
  { id: 'um1', user_id: 'demo-user-id', campaign_id: 'c6', status: 'reward_confirmed', created_at: '2026-04-16T09:15:00Z' },
  { id: 'um2', user_id: 'demo-user-id', campaign_id: 'c7', status: 'reward_confirmed', created_at: '2026-04-15T12:40:00Z' },
  { id: 'um3', user_id: 'demo-user-id', campaign_id: 'c4', status: 'reward_confirmed', created_at: '2026-04-17T15:20:00Z' },
]

export const MOCK_QUIZ_QUESTIONS = [
  {
    id: 'q1', campaign_id: 'c1', order_num: 1,
    question: '楽天カードの年会費はいくらですか？',
    options: ['永年無料', '初年度のみ無料', '1,100円', '2,200円'],
    correct_index: 0,
  },
  {
    id: 'q2', campaign_id: 'c1', order_num: 2,
    question: 'ポイント還元率は通常何％ですか？',
    options: ['0.5%', '1.0%', '1.5%', '2.0%'],
    correct_index: 1,
  },
  {
    id: 'q3', campaign_id: 'c1', order_num: 3,
    question: '報酬が確定するタイミングは？',
    options: ['申込直後', '審査完了後', 'カード受取後', '初回利用後'],
    correct_index: 1,
  },
]

export const MOCK_REVIEWS = [
  { id: 'rev1', campaign_id: 'c1', user_id: 'u2', earn_score: 5, difficulty_score: 2, comment: 'すぐ承認された', created_at: '2026-04-10T00:00:00Z' },
  { id: 'rev2', campaign_id: 'c1', user_id: 'u3', earn_score: 4, difficulty_score: 2, comment: '簡単で高単価', created_at: '2026-04-12T00:00:00Z' },
]

export const MOCK_RANKING = [
  { id: 'u1', nickname: 'さくら', rank: 'diamond', level: 45, total_earned: 284000, avatar_url: null },
  { id: 'u2', nickname: 'たろう', rank: 'platinum', level: 38, total_earned: 215000, avatar_url: null },
  { id: 'u3', nickname: 'はなこ', rank: 'platinum', level: 32, total_earned: 182000, avatar_url: null },
  { id: 'u4', nickname: 'けんじ', rank: 'gold', level: 28, total_earned: 124000, avatar_url: null },
  { id: 'u5', nickname: 'みさき', rank: 'gold', level: 25, total_earned: 98000, avatar_url: null },
  { id: 'demo-user-id', nickname: 'デモユーザー', rank: 'silver', level: 12, total_earned: 42800, avatar_url: null },
  { id: 'u7', nickname: 'ゆうと', rank: 'silver', level: 10, total_earned: 38000, avatar_url: null },
  { id: 'u8', nickname: 'あかり', rank: 'bronze', level: 6, total_earned: 15000, avatar_url: null },
]

export const MOCK_REFERRALS = [
  { id: 'rf1', referrer_id: 'demo-user-id', referred_id: 'u9', bonus_earned: 500, created_at: '2026-03-20T00:00:00Z' },
  { id: 'rf2', referrer_id: 'demo-user-id', referred_id: 'u10', bonus_earned: 500, created_at: '2026-04-02T00:00:00Z' },
]

export const MOCK_WITHDRAWALS = [
  { id: 'w1', user_id: 'demo-user-id', amount: 5000, method: 'paypay', status: 'completed', created_at: '2026-03-15T10:00:00Z' },
  { id: 'w2', user_id: 'demo-user-id', amount: 3000, method: 'bank', status: 'completed', created_at: '2026-02-10T10:00:00Z' },
]

// クエリに応じて適切なデータを返すディスパッチャ
export function dispatchQuery(table: string): any[] {
  switch (table) {
    case 'tr_users': return [MOCK_PROFILE, ...MOCK_RANKING]
    case 'tr_campaigns': return MOCK_CAMPAIGNS
    case 'tr_rewards': return MOCK_REWARDS
    case 'tr_daily_missions': return [MOCK_DAILY_MISSION]
    case 'tr_user_missions': return MOCK_USER_MISSIONS
    case 'tr_quiz_questions': return MOCK_QUIZ_QUESTIONS
    case 'tr_campaign_reviews': return MOCK_REVIEWS
    case 'tr_referrals': return MOCK_REFERRALS
    case 'tr_withdrawals': return MOCK_WITHDRAWALS
    default: return []
  }
}
