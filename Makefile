build_image:
	docker image build . -t 1801465/node-express-app


run_image:
	docker run -p 4000:4000 <node-express-app-node-express-docker/0762c8746fa944cdfaed095a997af6643c140d7d37096e79f7d3e2b0a69b3094>

push_image:
	docker push 1801465/node-express-app

up:
	docker-compose up --build

down:
	docker-compose down