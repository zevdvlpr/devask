.PHONY: up

up:
	docker-compose --env-file .env.development.local up -d

.PHONY: down

down:
	docker-compose --env-file .env.development.local down

.PHONY: logs

logs:
	docker-compose --env-file .env.development.local logs -f