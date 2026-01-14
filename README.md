# cloud_falre_d1_client

클라우드 플레어 D1 데이터베이스 쿼리 클라이언트

# initialization

1. wrangler 전역 설치

```bash
npm install -g wrangler

wrangler -v
```

2. 클라우드 플레어 로그인

```bash
wrangler login

# 브라우저가 열리고 로그인
# 1회 로그인 이후 로컬에 토큰이 저장됨 (`~/.wrangler/config`)
```

# Requirement

#### queries.json

- 실행할 쿼리 설정

```json
{
  "queries": []
}
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
