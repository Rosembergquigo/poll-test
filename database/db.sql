CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(40) NOT NULL UNIQUE,
	name VARCHAR(20) NOT NULL UNIQUE,
	phone VARCHAR(15),
	password VARCHAR(100) NOT NULL,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE poll(
	id SERIAL PRIMARY KEY,
	poll_name VARCHAR(50) NOT NULL
)

CREATE TABLE questions(
	id SERIAL PRIMARY KEY,
	question_text VARCHAR(100) NOT NULL,
	id_poll INT, 
	FOREIGN KEY (id_poll) REFERENCES poll(id)
)

CREATE TABLE item(
	id SERIAL PRIMARY KEY,
	option_text VARCHAR(50) NOT NULL,
	item VARCHAR(1) NOT NULL,
	id_question INT,
	FOREIGN KEY (id_question) REFERENCES questions(id)
)

CREATE TABLE chooses(
	id SERIAL PRIMARY KEY,
	id_user INT,
	id_poll INT,
	id_question INT,
	item_choose VARCHAR(1),
	FOREIGN KEY (id_user) REFERENCES users(id),
	FOREIGN KEY (id_poll) REFERENCES poll(id),
	FOREIGN KEY (id_question) REFERENCES questions(id)
)