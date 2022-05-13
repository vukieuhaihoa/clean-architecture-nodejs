
.PHONY: postgres, restart_pq, create_db, drop_db, migrate_up, migrate_down, create_model

postgres:
	docker run --name postgres -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -d postgres:14.1-alpine
restart_pq:
	docker restart postgres	
create_db:
	docker exec -it postgres createdb --username=admin --owner=admin clean_arch
drop_db:
	docker exec -it postgres dropdb -U admin simple_bank
migrate_up:
	npx sequelize-cli db:migrate
migrate_down:
	npx sequelize-cli db:migrate:undo
create_model:
	npx sequelize-cli migration:generate --name $(name_table)