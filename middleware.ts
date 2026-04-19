// サンプル版: middlewareなし（全ページ公開）
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
