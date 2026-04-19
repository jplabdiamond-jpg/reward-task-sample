// Supabase APIと互換なモッククライアント（サンプル表示用）
import {
  MOCK_USER,
  MOCK_PROFILE,
  MOCK_CAMPAIGNS,
  MOCK_REWARDS,
  MOCK_DAILY_MISSION,
  MOCK_USER_MISSIONS,
  MOCK_QUIZ_QUESTIONS,
  MOCK_REVIEWS,
  MOCK_RANKING,
  MOCK_REFERRALS,
  MOCK_WITHDRAWALS,
} from '../mock/data'

type Filter = { col: string; op: string; val: unknown }

class QueryBuilder {
  private filters: Filter[] = []
  private orderCol: string | null = null
  private orderAsc: boolean = true
  private limitNum: number | null = null
  private isSingle: boolean = false
  private isHeadCount: boolean = false

  constructor(private table: string) {}

  select(_cols?: string, opts?: { count?: string; head?: boolean }) {
    if (opts?.head) this.isHeadCount = true
    return this
  }
  eq(col: string, val: unknown) { this.filters.push({ col, op: 'eq', val }); return this }
  neq(col: string, val: unknown) { this.filters.push({ col, op: 'neq', val }); return this }
  gt(col: string, val: unknown) { this.filters.push({ col, op: 'gt', val }); return this }
  gte(col: string, val: unknown) { this.filters.push({ col, op: 'gte', val }); return this }
  lt(col: string, val: unknown) { this.filters.push({ col, op: 'lt', val }); return this }
  lte(col: string, val: unknown) { this.filters.push({ col, op: 'lte', val }); return this }
  in(col: string, vals: unknown[]) { this.filters.push({ col, op: 'in', val: vals }); return this }
  like(col: string, val: unknown) { this.filters.push({ col, op: 'like', val }); return this }
  ilike(col: string, val: unknown) { this.filters.push({ col, op: 'ilike', val }); return this }
  is(col: string, val: unknown) { this.filters.push({ col, op: 'is', val }); return this }
  order(col: string, opts?: { ascending?: boolean }) {
    this.orderCol = col
    this.orderAsc = opts?.ascending ?? true
    return this
  }
  limit(n: number) { this.limitNum = n; return this }
  single() {
    this.isSingle = true
    return this.exec()
  }
  maybeSingle() {
    this.isSingle = true
    return this.exec()
  }

  // thenable: await直接
  then<T>(onFulfilled: (value: { data: unknown; error: null }) => T): Promise<T> {
    return this.exec().then(onFulfilled)
  }

  private getTableData(): Record<string, unknown>[] {
    switch (this.table) {
      case 'tr_users': return [MOCK_PROFILE, ...MOCK_RANKING] as Record<string, unknown>[]
      case 'tr_campaigns': return MOCK_CAMPAIGNS as Record<string, unknown>[]
      case 'tr_rewards': return MOCK_REWARDS as Record<string, unknown>[]
      case 'tr_daily_missions': return [MOCK_DAILY_MISSION] as Record<string, unknown>[]
      case 'tr_user_missions': return MOCK_USER_MISSIONS as Record<string, unknown>[]
      case 'tr_quiz_questions': return MOCK_QUIZ_QUESTIONS as Record<string, unknown>[]
      case 'tr_campaign_reviews': return MOCK_REVIEWS as Record<string, unknown>[]
      case 'tr_referrals': return MOCK_REFERRALS as Record<string, unknown>[]
      case 'tr_withdrawals': return MOCK_WITHDRAWALS as Record<string, unknown>[]
      default: return []
    }
  }

  private async exec(): Promise<{ data: unknown; error: null }> {
    let rows = this.getTableData()

    for (const f of this.filters) {
      rows = rows.filter(r => {
        const v = r[f.col]
        switch (f.op) {
          case 'eq': return v === f.val
          case 'neq': return v !== f.val
          case 'gt': return (v as number) > (f.val as number)
          case 'gte': return (v as number) >= (f.val as number)
          case 'lt': return (v as number) < (f.val as number)
          case 'lte': return (v as number) <= (f.val as number)
          case 'in': return (f.val as unknown[]).includes(v)
          case 'like':
          case 'ilike': return String(v).toLowerCase().includes(String(f.val).toLowerCase().replace(/%/g, ''))
          case 'is': return v === f.val
          default: return true
        }
      })
    }

    if (this.orderCol) {
      const col = this.orderCol
      rows = [...rows].sort((a, b) => {
        const av = a[col] as number | string
        const bv = b[col] as number | string
        if (av < bv) return this.orderAsc ? -1 : 1
        if (av > bv) return this.orderAsc ? 1 : -1
        return 0
      })
    }

    if (this.limitNum !== null) rows = rows.slice(0, this.limitNum)

    if (this.isHeadCount) {
      return { data: null, error: null, count: rows.length } as never
    }
    if (this.isSingle) {
      return { data: rows[0] ?? null, error: null }
    }
    return { data: rows, error: null }
  }

  // insert/update/delete はサンプルなので常に成功を返す
  insert(_values: unknown) { return Promise.resolve({ data: null, error: null }) }
  update(_values: unknown) { return this }
  delete() { return this }
  upsert(_values: unknown) { return Promise.resolve({ data: null, error: null }) }
}

export function createMockClient() {
  return {
    auth: {
      getUser: async () => ({ data: { user: MOCK_USER }, error: null }),
      getSession: async () => ({ data: { session: { user: MOCK_USER } }, error: null }),
      signUp: async (_: unknown) => ({ data: { user: MOCK_USER }, error: null }),
      signInWithPassword: async (_: unknown) => ({ data: { user: MOCK_USER }, error: null }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: (_cb: unknown) => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: (table: string) => new QueryBuilder(table),
    rpc: async (_name: string, _params?: unknown) => ({ data: null, error: null }),
  }
}
