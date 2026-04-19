// サンプル版: Supabase非接続のモッククライアント
import { createMockClient } from './mock-client'

export async function createClient() {
  return createMockClient()
}
