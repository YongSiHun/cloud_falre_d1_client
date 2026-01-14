# cloud_falre_d1_client

클라우드 플레어 D1 데이터베이스 쿼리 클라이언트

# Requirement

#### wrangler

```bash
npm install -g wrangler

wrangler -v
```

#### queries.json

- 실행할 쿼리 설정

```json
{
  "queries": []
}
```

#### wrangler.toml

- cloudflare DB 구성 설정

```toml
name = "" # 프로젝트 이름
compatibility_date = "2025-07-06" # 프로젝트 호환성 날짜

[[d1_databases]]
binding = "" # 데이터베이스 바인딩 이름
database_name = "" # 데이터베이스 이름
database_id = ""  # D1 대시보드에서 확인
```

# execute

```bash
yarn install

yarn start
```

# Trouble Shooting

1. 브라우저에서 cloudflare 로그인

2. 프로젝트 터미널에서 아래 명령 실행 후 브라우저에서 허용

```bash
wrangler login
```
